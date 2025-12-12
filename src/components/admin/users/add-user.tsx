"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { GraduationCap, Users } from "lucide-react"
import { useToast } from "@/src/hooks/use-toast"
import { useState, useRef, useEffect } from "react"
import SimpleReactValidator from "simple-react-validator"
import { signUp } from "@/src/store/actions/authaction"
import { getUser_Action } from "@/src/utils/graphql/auth/action"
import { useParams } from "next/navigation"
import { useAppSelector } from "@/src/store/hooks"

interface UserFormProps {
    open: any;
    setOpen: any;
    mode: "create" | "edit";
    id?: string;
}

const UserForm = ({ open, setOpen, mode, id }: UserFormProps) => {

    const initialForm = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: ""
    };

    const [formData, setFormData] = useState(initialForm);
    const [, forceUpdate] = useState(0);
    const { toast } = useToast();

    const validator = useRef(new SimpleReactValidator({
        autoForceUpdate: { forceUpdate: () => forceUpdate(n => n + 1) },
        messages: {
            required: "This field is required",
            email: "Please enter a valid email",
        }
    })).current;

    const handleSubmit = async (e: React.FormEvent) => { debugger
        e.preventDefault();

        if (!validator.allValid()) {
            validator.showMessages();
            forceUpdate(n => n + 1);
            return;
        }

        const response = await signUp({
            ...formData,
            role: formData.role.toUpperCase()
        });

        if (response?.signUp?.success) {
            toast({ title: "User Created Successfully", variant: "default" })
            setFormData(initialForm);
            setOpen(false);
        } else {
            toast({ title: response?.message, variant: "destructive" })
        }
    };

    useEffect(() => {
        if (!open) {
            validator.hideMessages();
            setFormData(initialForm);
            forceUpdate(n => n + 1);
        }
    }, [open]);

    useEffect(() => {
        if (mode === "edit" && id) {
            const fetchUserData = async () => {
                const response = await getUser_Action({ userId: id });
                if (response?.user) {
                    const user = response.user;
                    setFormData({
                        email: user.email || "",
                        password: user.password || "",
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
        <Dialog open={open} data-modal-open={open ? "true" : "false"} onOpenChange={setOpen}>
            <DialogContent className="flex flex-col gap-8">
                <DialogHeader>
                    <DialogTitle>{mode === "create" ? "Create an User" : "Edit an User"}</DialogTitle>
                    <p className="text-muted-foreground text-sm">Get started with Pathfinder today</p>
                </DialogHeader>

                <div className="flex flex-col gap-6">

                    <div className="flex flex-row gap-2 w-full">
                        <Label className="flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 text-color-white">
                            <Input
                                type="radio"
                                name="role"
                                value="student"
                                className="h-4 w-4"
                                checked={formData.role === "student"}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                                }
                            />

                            <GraduationCap className="h-4" />
                            Student
                        </Label>

                        <Label className="flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 text-color-white">
                            <Input
                                type="radio"
                                name="role"
                                value="educator"
                                className="h-4 w-4"
                                checked={formData.role === "educator"}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                                }
                            />
                            <Users className="h-4" />
                            Educator
                        </Label>
                    </div>
                    <span className="text-red-500 text-xs">
                        {validator.message("role", formData.role, "required")}
                    </span>

                    <div className="flex flex-col gap-2">
                        <Label>First Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        />

                        <span className="text-red-500 text-xs">
                            {validator.message("first name", formData.firstName, "required")}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Last Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        />
                        <span className="text-red-500 text-xs">
                            {validator.message("last name", formData.lastName, "required")}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <span className="text-red-500 text-xs">
                            {validator.message("email", formData.email, "required|email")}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Password</Label>
                        <Input
                            type="text"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <span className="text-red-500 text-xs">
                            {validator.message("password", formData.password, "required")}
                        </span>
                    </div>

                </div>

                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit} className="w-full">
                        {mode === "create" ? "Create account" : "Edit account"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UserForm;
