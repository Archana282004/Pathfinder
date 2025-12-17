"use client";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { TabsContent } from "@/src/components/ui/tabs";
import { MoreVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import KebabMenu from "../kebab-menu-modal";
import { updateUser_Action } from "@/src/utils/graphql/auth/action";
import { signUp } from "@/src/store/actions/authaction";
import SimpleReactValidator from "simple-react-validator";
import { useToast } from "@/src/hooks/use-toast";

interface User {
  id: string;
  active_status: boolean;
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  platform: string;
  role: string;
  avatar_path: string;
  profile: {
    specizilization: string;
  };
}

interface TablistCardProps {
  value: string;
  data: User[];
}

const TablistCard = ({ value, data }: TablistCardProps) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleMenu = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
  //       setOpenMenuId(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is inside a dialog/modal (rendered in portal, outside containerRef)
      const isInsideDialog = (target as Element).closest('[data-slot="dialog-content"]') ||
        (target as Element).closest('[data-slot="dialog-overlay"]') ||
        (target as Element).closest('[data-modal-open="true"]');
      // Don't close menu if clicking inside a dialog/modal
      if (isInsideDialog) {
        return;
      }
      // Close menu only if clicking outside the container
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initialForm = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
    phone: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [, forceUpdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => forceUpdate((n) => n + 1) },
      messages: {
        required: "This field is required",
        email: "Please enter a valid email",
      },
    })
  ).current;


  const handleSubmit = async (e: React.FormEvent, mode: "create" | "edit", setIsOpen: (open: boolean) => void, userId?: string) => {
    e.preventDefault();

    if (!validator.allValid()) {
      validator.showMessages();
      forceUpdate((n) => n + 1);
      return;
    }

    let response;
    if (mode === "edit" && userId) {
      response = await updateUser_Action({
        updateUserId: userId, updateUserInput: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
        }
      });
      if (response?.updateUser?.success) {
        toast({
          title: "User Updated Successfully",
          variant: "default",
        });
        setFormData(initialForm)
        setIsOpen(false);
      }
      else {
        toast({ title: response?.message || "Something went wrong", variant: "destructive" });
        setFormData(initialForm)
        setIsOpen(false);
      }
    }
  }

  const handleStatusToggle = async (id: string, active_status: boolean) => {
    try {
      await updateUser_Action({
        updateUserId: id,
        updateUserInput: { active_status: !active_status },
      });
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };


  return (
    <div>
      <TabsContent value={value} className="space-y-4" ref={containerRef}>
        <Card>
          <CardContent>
            <div className="space-y-3">
              {data.map((user, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={user?.avatar_path || "/educator-woman.jpg"}
                      alt={user?.first_name + " " + user?.last_name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user?.first_name + " " + user?.last_name}</p>

                      <div className="flex items-center gap-2">
                        <Badge variant={user?.role === "EDUCATOR" ? "secondary" : "default"}>{user?.role}</Badge>
                        <p className="text-sm text-muted-foreground">
                          Joined {new Date(user?.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={user?.active_status ? "secondary" : "default"}>
                      {user.active_status ? "Active" : "InActive"}
                    </Badge>

                    <Button size="sm" variant="ghost" onClick={() => handleMenu(user?.id)}>
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  {openMenuId === user.id && (
                    <KebabMenu
                      id={user.id}
                      active_status={user?.active_status}
                      handleStatusToggle={handleStatusToggle}
                      formData={formData}
                      setFormData={setFormData}
                      validator={validator}
                      handleSubmit={handleSubmit}
                    />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
};

export default TablistCard;
