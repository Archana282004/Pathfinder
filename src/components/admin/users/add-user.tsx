"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { GraduationCap, Users } from "lucide-react";

interface UserFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  mode: "create" | "edit";
  formData: any;
  setFormData: (data: any) => void;
  validator: any;
  handleSubmit: (e: React.FormEvent) => void;
}

const UserForm = ({ open, setOpen, mode, formData, setFormData, validator, handleSubmit }: UserFormProps) => {
  const isEdit = mode === "edit";

  return (
    <Dialog open={open} data-modal-open={open ? "true" : "false"} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col gap-8">
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "Create an User" : "Edit an User"}</DialogTitle>
          <p className="text-muted-foreground text-sm">Get started with Pathfinder today</p>
        </DialogHeader>

        <div className="flex flex-col gap-6">
          {/* Role */}
          <div className="flex flex-row gap-2 w-full">
            <Label
              className={`flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 ${isEdit ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <Input
                type="radio"
                name="role"
                value="student"
                className="h-4 w-4"
                checked={formData.role === "student"}
                disabled={isEdit}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
              <GraduationCap className="h-4" />
              Student
            </Label>

            <Label
              className={`flex items-center gap-2 border p-2 rounded-md cursor-pointer text-sm text-muted-foreground flex-1 ${isEdit ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              <Input
                type="radio"
                name="role"
                value="educator"
                className="h-4 w-4"
                checked={formData.role === "educator"}
                disabled={isEdit}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
              <Users className="h-4" />
              Educator
            </Label>
          </div>

          <span className="text-red-500 text-xs">
            {validator.message("role", formData.role, "required")}
          </span>

          {/* First Name */}
          <div className="flex flex-col gap-2">
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <span className="text-red-500 text-xs">
              {validator.message("first name", formData.firstName, "required")}
            </span>
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <span className="text-red-500 text-xs">
              {validator.message("last name", formData.lastName, "required")}
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              readOnly={isEdit}
              className={isEdit ? "opacity-50 cursor-not-allowed" : ""}
              onChange={(e) =>
                !isEdit &&
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <span className="text-red-500 text-xs">
              {validator.message("email", formData.email, "required|email")}
            </span>
          </div>

          {/* Password */}
          {!isEdit && (
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span className="text-red-500 text-xs">
                {validator.message("password", formData.password, "required|min:6")}
              </span>
            </div>
          )}
          {isEdit && (<div className="flex flex-col gap-2">
            <Label>phone</Label>
            <Input
              type="text"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <span className="text-red-500 text-xs">
              {validator.message("phone", formData.phone, "required")}
            </span>
          </div>
          )}
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
