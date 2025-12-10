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
import Link from "next/link";

interface logintype {
  email: string;
  password: string;
}

type LoginFormProps = {
  signInData: logintype;
  setSignInData: React.Dispatch<React.SetStateAction<logintype>>;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const SignInForm = ({
  handleSubmit,
  signInData,
  setSignInData,
  isLoading,
}: LoginFormProps) => {
  const [, forceUpdate] = useState(0); // required for validator re-render
  const [showPassword, setShowPassword] = useState(false);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate },
      messages: {
        required: "This field is required",
        email: "Enter a valid email address",
      },
    })
  );

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription>Sign in to your Pathfinder account</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <form
          onSubmit={(e) => {
            if (!validator.current.allValid()) {
              validator.current.showMessages();
              forceUpdate((n) => n + 1);
              e.preventDefault();
              return;
            }
            handleSubmit(e);
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={signInData.email}
              onChange={(e) => {
                setSignInData((prev) => ({ ...prev, email: e.target.value }));
                validator.current.showMessageFor("email");
                forceUpdate((n) => n + 1);
              }}
            />
            <span className="text-red-500 text-xs">
              {validator.current.message("email", signInData.email, "required|email")}
            </span>
          </div>

          <div className="space-y-2 relative">
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={signInData.password}
                onChange={(e) => {
                  setSignInData((prev) => ({ ...prev, password: e.target.value }));
                  validator.current.showMessageFor("password");
                  forceUpdate((n) => n + 1);
                }}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            <span className="text-red-500 text-xs">
              {validator.current.message("password", signInData.password, "required")}
            </span>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        <div className="text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
