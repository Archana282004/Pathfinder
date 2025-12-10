"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import UserForm from "./add-user"
import ConfirmationModal from "./confirmation-modal"

interface KebabMenuProps {
    id: string
}

const KebabMenu = ({ id }: KebabMenuProps) => {
    const router = useRouter();
    const handleView = () => {
        router.push(`/admin/users/${id}`)
    }
    const [isOpen, setIsOpen] = useState(false)
    const HandleEditUser = () => {
        setIsOpen(true);
    }

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const HandleInactivateUser = () => {
        setIsConfirmationOpen(true);
    }
    return (
        <div className="absolute right-10 top-14 bg-black shadow-md border rounded-md p-2 w-32 z-50">
            <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleView}>View</p>
            <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={HandleEditUser}>Edit</p>
            <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={HandleInactivateUser}>Inactive</p>
            <UserForm open={isOpen} setOpen={setIsOpen} mode="edit" />
            <ConfirmationModal open={isConfirmationOpen} setOpen={setIsConfirmationOpen} />
        </div>

    )
}

export default KebabMenu;
