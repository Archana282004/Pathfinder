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
    mode: "create" | "edit"
}

const UserForm = ({ open, setOpen, mode }: UserFormProps) => {

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

    const handleSubmit = async (e: React.FormEvent) => { 
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

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="flex flex-col gap-8">
                <DialogHeader>
                    <DialogTitle>{mode === "create" ? "Create an User" : "Edit an User"}</DialogTitle>
                    <p className="text-muted-foreground text-sm">Get started with Pathfinder today</p>
                </DialogHeader>

                <div className="flex flex-col gap-6">

                    <div className="flex flex-row gap-2 w-full">
                        <Label className="flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 text-color-white">
                            <Input type="radio" name="role" value="student" className="w-4 h-14" onChange={(e) => { setFormData((prev) => ({ ...prev, role: e.target.value }))}}/>
                            <GraduationCap className="h-4" />
                            Student
                        </Label>

                        <Label className="flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 text-color-white">
                            <Input type="radio" name="role" value="educator" className="w-4 h-4" onChange={(e) => { setFormData((prev) => ({ ...prev, role: e.target.value }))}}/>
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
