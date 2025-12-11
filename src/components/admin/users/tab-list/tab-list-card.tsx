"use client"

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { TabsContent } from "@/src/components/ui/tabs";
import { MoreVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import KebabMenu from "../kebab-menu-modal";

interface User {
  id: string
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
  }
}

interface tablistcardprops {
  value: string;
  title: string;
  description: string;
  data: User[];
}

const TablistCard = ({ value, data }: tablistcardprops) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMenu = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id)); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenMenuId(null); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
                    <Badge
                    variant={user?.role== "EDUCATOR" ? "secondary" : "default"}
                  >
                    {user?.role}
                  </Badge>
                    <p className="text-sm text-muted-foreground">
                      Joined {new Date(user?.created_at).toLocaleDateString()}
                    </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant={user?.active_status ? "secondary" : "default"}
                  >
                    {user.active_status ? "Active" : "InActive"}
                  </Badge>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleMenu(user?.id)}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                {openMenuId === user.id && (
                  <KebabMenu id={user.id} active_status={user?.active_status} />
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
