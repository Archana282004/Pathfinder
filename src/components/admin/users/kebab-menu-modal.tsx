"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import UserForm from "./add-user"
import ConfirmationModal from "./confirmation-modal"
import { updateUser_Action } from "@/src/utils/graphql/auth/action"

interface KebabMenuProps {
    id: string
    active_status: boolean;
}

const KebabMenu = ({ id, active_status }: KebabMenuProps) => {
    const router = useRouter();
    const handleView = () => {
        router.push(`/admin/users/${id}`)
    }
    const [isOpen, setIsOpen] = useState(false);
    
    const HandleEditUser = () => { debugger
        setIsOpen(true);
    }

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const HandleInactivateUser = () => {
        setIsConfirmationOpen(true);
    }

    const handleStatusToggle = async () => {
        debugger
        try {
            debugger
            const response = await updateUser_Action({
                updateUserId: id,
                updateUserInput: {
                    active_status: !active_status,
                },
            })
            debugger

        } catch (error) {
            console.error("Status update failed:", error);
        }
    };

    return (
        <>
            <div className="absolute right-10 top-14 bg-black shadow-md border rounded-md p-2 w-32 z-50" >
                <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleView}>View</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={HandleEditUser}>Edit</p>
                <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={HandleInactivateUser}>
                    {active_status ? "InActive" : "Active"}
                </p>

            </div>

            {isOpen && (
                <UserForm
                    open={isOpen}
                    setOpen={setIsOpen}
                    mode="edit"
                    id={id}
                />
            )}
            {isConfirmationOpen && (
                <ConfirmationModal
                    open={isConfirmationOpen}
                    setOpen={setIsConfirmationOpen}
                    active_status={active_status}
                    handleStatusToggle={handleStatusToggle}
                />
            )}
        </>
    );

}

export default KebabMenu;
