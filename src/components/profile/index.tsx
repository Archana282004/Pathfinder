"use client";

import { getUser_Action, updateUser_Action } from "@/src/utils/graphql/auth/action";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ProfilePic from "../ui/profile-pic";
import { useAppSelector } from "@/src/store/hooks";
import SimpleReactValidator from "simple-react-validator";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/src/hooks/use-toast";

interface Userstate {
  updateUserId: string;
  updateUserInput: {
    first_name: string;
    last_name: string;
    phone: string;
  };
}

interface ProfileTabProps {
  userData: Userstate;
  setUserData: React.Dispatch<React.SetStateAction<Userstate>>;
}

const ProfileTab = ({ userData, setUserData }: ProfileTabProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;
  const {toast} = useToast();

  const [userDetails, setUserDetails] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    avatar_path: ""
  });

  useEffect(() => {
    if (!userId) return;
    const fetchUserData = async () => {
      try {
        const res = await getUser_Action({ userId });
        const u = res?.user;

        if (!u) return;

        setUserDetails({
          email: u.email || "",
          first_name: u.first_name || "",
          last_name: u.last_name || "",
          phone: u.phone || "",
          avatar_path: u.avatar_path || "",
        });

        setUserData({
          updateUserId: userId,
          updateUserInput: {
            first_name: u.first_name || "",
            last_name: u.last_name || "",
            phone: u.phone || "",
          }
        });

      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUserData();
  }, [userId, setUserData]);

  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUserData(prev => ({
      ...prev,
      updateUserId: userId,
      updateUserInput: {
        ...prev.updateUserInput,
        [name]: value
      }
    }));

    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));

    validator.current.showMessageFor(name);
    forceUpdate(s => !s);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      
      const res = await updateUser_Action(userData);
      if(res?.updateUser?.success){
        toast({title:`${res?.updateUser?.message}`, variant:"default"})
      }
      else{
        toast({title:`${res?.updateUser?.message}`, variant:"destructive"})
      }
    } else {
      validator.current.showMessages();
      forceUpdate(s => !s);
    }
  };

  return (
    <div>
      <Card>
        <CardContent className="flex flex-col gap-4">
          <ProfilePic link={userDetails.avatar_path} />

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  value={userDetails.first_name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                <span className="text-red-500 text-xs">
                  {validator.current.message(
                    "first_name",
                    userData.updateUserInput.first_name,
                    "required|alpha_space"
                  )}
                </span>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  value={userDetails.last_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                <span className="text-red-500 text-xs">
                  {validator.current.message(
                    "last_name",
                    userData.updateUserInput.last_name,
                    "required|alpha_space"
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 w-full">
                <Label>Email</Label>
                <Input type="email" value={userDetails.email} disabled />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Label>Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                />
                <span className="text-red-500 text-xs">
                  {validator.current.message(
                    "phone",
                    userData.updateUserInput.phone,
                    "required|phone"
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <Label>Role</Label>
              <Input type="text" value={user?.role} disabled />
            </div>

            <div>
              <Button type="submit">Save & Update</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileTab;
