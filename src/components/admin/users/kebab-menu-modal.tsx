"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserForm from "./add-user";
import ConfirmationModal from "./confirmation-modal";
import { getUser_Action } from "@/src/utils/graphql/auth/action";
import { set } from "date-fns";

interface KebabMenuProps {
  id: string;
  active_status: boolean;
  handleStatusToggle: (id: string, active_status: boolean) => Promise<void>;
  formData: any;
  setFormData: (data: any) => void;
  validator: any;
  handleSubmit: (e: React.FormEvent, mode: "create" | "edit", setIsOpen: (open: boolean) => void,  userId?: string) => void;
}

const KebabMenu = ({
  id,
  active_status,
  handleStatusToggle,
  formData,
  setFormData,
  validator,
  handleSubmit,
}: KebabMenuProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleView = () => {
    router.push(`/admin/users/${id}`);
  };

  const HandleEditUser = () => {
    setMode("edit");
    setIsOpen(true);
  };

  const HandleInactivateUser = () => {
    setIsConfirmationOpen(true);
  };
  useEffect(() => {
        if (mode === "edit" && id) {
            const fetchUserData = async () => {
                const response = await getUser_Action({ userId: id });
                if (response?.user) {
                    const user = response.user;
                    setFormData({
                        email: user.email || "",
                        phone: user.phone || "",
                        firstName: user.first_name || "",
                        lastName: user.last_name || "",
                        role: user.role.toLowerCase() || ""
                    });
                }
            };
            fetchUserData();
        }
    }, [mode, id]);

  return (
    <>
      <div className="absolute right-10 top-14 bg-black shadow-md border rounded-md p-2 w-32 z-50">
        <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleView}>
          View
        </p>
        <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={HandleEditUser}>
          Edit
        </p>
        <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={HandleInactivateUser}>
          {active_status ? "InActive" : "Active"}
        </p>
      </div>

      {isOpen && (
        <UserForm
          open={isOpen}
          setOpen={setIsOpen}
          mode={mode}
          formData={formData}
          setFormData={setFormData}
          validator={validator}
          handleSubmit={(e) => handleSubmit(e, mode, setIsOpen, id)}
        />
      )}

      {isConfirmationOpen && (
        <ConfirmationModal
          id={id}
          open={isConfirmationOpen}
          setOpen={setIsConfirmationOpen}
          active_status={active_status}
          handleStatusToggle={handleStatusToggle}
        />
      )}
    </>
  );
};

export default KebabMenu;
