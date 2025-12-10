"use client";

import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

interface FormDataType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
}

interface SignupFormProps {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const SignUpForm = ({
  formData,
  setFormData,
  isLoading,
  handleSubmit,
}: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [, forceUpdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate },
      messages: {
        email: "Enter a valid email",
        min: "Password must be at least 8 characters",
      },
    })
  );

  const handleValidationSubmit = (e: any) => {
    if (!validator.current.allValid()) {
      e.preventDefault();
      validator.current.showMessages();
      forceUpdate((x) => x + 1);
    } else {
      handleSubmit(e);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
        <CardDescription>Get started with Pathfinder today</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleValidationSubmit} className="space-y-4">
          {/* ROLE */}
          <div className="space-y-3">
            <Label>I am a...</Label>
            <RadioGroup
              value={formData.role}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  role: value,
                }))
              }
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 cursor-pointer">
                <RadioGroupItem value="student" id="student" />
                <Label
                  htmlFor="student"
                  className="flex items-center gap-2 cursor-pointer flex-1"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Student</span>
                </Label>
              </div>
            </RadioGroup>

            <span className="text-red-500 text-xs">
              {validator.current.message("role", formData.role, "required")}
            </span>
          </div>

          <div className="space-y-2">
            <Label>First Name</Label>
            <Input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, firstName: e.target.value }));
                validator.current.showMessageFor("firstName");
              }}
            />
            <span className="text-red-500 text-xs">
              {validator.current.message(
                "firstName",
                formData.firstName,
                "required"
              )}
            </span>
          </div>

          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, lastName: e.target.value }));
                validator.current.showMessageFor("lastName");
              }}
            />
            <span className="text-red-500 text-xs">
              {validator.current.message(
                "lastName",
                formData.lastName,
                "required"
              )}
            </span>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                validator.current.showMessageFor("email");
              }}
            />
            <span className="text-red-500 text-xs">
              {validator.current.message("email", formData.email, "required|email")}
            </span>
          </div>

          <div className="space-y-2 relative">
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  validator.current.showMessageFor("password");
                }}
                minLength={8}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} /> }
              </button>
            </div>

            <span className="text-red-500 text-xs">
              {validator.current.message(
                "password",
                formData.password,
                "required|min:8"
              )}
            </span>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
