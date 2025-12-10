"use client";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import CardsHeader from "./card-header";
import { Input } from "./input";
import { Label } from "./label";
import { ChangePassword_Action } from "@/src/utils/graphql/auth/action";

import SimpleReactValidator from "simple-react-validator";
import { useRef, useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/src/store/hooks";
import { useToast } from "@/src/hooks/use-toast";

interface PasswordState {
  currentPassword: string;
  newPassword: string;
}

interface UpdatePasswordProps {
  password: PasswordState;
  setPassword: React.Dispatch<React.SetStateAction<PasswordState>>;
}

const UpdatePassword = ({ password, setPassword }: UpdatePasswordProps) => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(false);

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRetype, setShowRetype] = useState(false);

  const [retype, setRetype] = useState("");
  const router = useRouter();
  const role = useAppSelector((state)=>state.auth.user?.role)

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "retype") {
      setRetype(value);
      validator.current.showMessageFor("retype");
      forceUpdate((s) => !s);
      return;
    }

    setPassword((prev: any) => ({
      ...prev,
      [name]: value,
    }));

    validator.current.showMessageFor(name);
    forceUpdate((s) => !s);
  };

  const { toast } = useToast();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password.newPassword !== retype) {
      validator.current.showMessageFor("retype");
      forceUpdate((s) => !s);
      return;
    }

    if (validator.current.allValid()) {
      const res = await ChangePassword_Action(password);
      if(res?.ChangePassword?.success){
        router.push(`/${role}/dashboard`);
        toast({title:`${res?.ChangePassword?.message}`, variant:"default"})
      }
      else{
        toast({title:`${res?.ChangePassword?.message}`, variant:"destructive"})
      }
    } else {
      validator.current.showMessages();
      forceUpdate((s) => !s);
    }
  };

  return (
    <div>
      <Card>
        <CardContent className="flex flex-col gap-6">
          <CardsHeader
            title="Change Password"
            description="Set a new password to keep your account secure"
          />

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Label>Current Password</Label>
            <div className="relative">
              <Input
                type={showCurrent ? "text" : "password"}
                name="currentPassword"
                value={password.currentPassword}
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ?  <Eye size={18} /> :<EyeOff size={18} /> }
              </span>
            </div>
            <span className="text-red-500 text-xs">
              {validator.current.message(
                "currentPassword",
                password.currentPassword,
                "required|min:6"
              )}
            </span>

            <Label>New Password</Label>
            <div className="relative">
              <Input
                type={showNew ? "text" : "password"}
                name="newPassword"
                value={password.newPassword}
                onChange={handleChange}
                placeholder="minimum 8 characters"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ?  <Eye size={18} /> :<EyeOff size={18} />}
              </span>
            </div>
            <span className="text-red-500 text-xs">
              {validator.current.message(
                "newPassword",
                password.newPassword,
                "required|min:8"
              )}
            </span>

            <Label>Retype New Password</Label>
            <div className="relative">
              <Input
                type={showRetype ? "text" : "password"}
                name="retype"
                value={retype}
                onChange={handleChange}
                placeholder="minimum 8 characters"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowRetype(!showRetype)}
              >
                {showRetype ?  <Eye size={18} /> :<EyeOff size={18} />}
              </span>
            </div>
            <span className="text-red-500 text-xs">
              {password.newPassword !== retype
                ? "Passwords do not match"
                : validator.current.message("retype", retype, "required|min:8")}
            </span>

            {/* BUTTONS */}
            <div className="flex flex-row gap-4">
              <Button
                type="button"
                className="bg-transparent border text-white-500 border-orange-400 hover:bg-transparent hover:text-white-500 hover:border-orange-400"
              >
                Cancel
              </Button>

              <Button type="submit">Update Password</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdatePassword;
