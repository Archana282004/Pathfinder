"use client";
import { useState } from "react";
import UpdatePassword from "../../ui/upadate-password";
import Header from "../../ui/header";
import EducatorNav from "../../navigation/educator-nav";
import EducatorProfileTab from "../../profile/profile-tab";

const EducatorProfileComponent = () => {
  const [active, setActive] = useState("profile");

  const tabClasses = (tab: string) =>
    `px-4 py-2 border-b-2 ${active === tab
      ? "border-transparent text-white-400 font-semibold"
      : "border-transparent text-gray-500"
    }`;

  const initialPasswordData = {
    currentPassword: "",
    newPassword: ""
  }
  const [password, setPassword] = useState(initialPasswordData)
  return (
    <div className="min-h-screen bg-background">
      <EducatorNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="My Profile" description="Update your personal information" />
          </div>
          <div className="flex gap-4 ">
            <button className={tabClasses("profile")} onClick={() => setActive("profile")}>
              Profile
            </button>

            <button className={tabClasses("password")} onClick={() => setActive("password")}>
              Change Password
            </button>
          </div>
          <div className="mt-4">
            {active === "profile" && <EducatorProfileTab />}
            {active === "password" && <UpdatePassword password={password} setPassword={setPassword} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorProfileComponent;
