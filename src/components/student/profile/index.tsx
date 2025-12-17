"use client"

import { useState } from "react"
import UpdatePassword from "@/src/components/ui/upadate-password"
import Header from "@/src/components/ui/header"
import ProfileTab from "../../profile"
import StudentNav from "@/src/components/navigation/student-nav"

const StudentProfileComponent = () => {
  const [active, setActive] = useState("profile");

  const tabClasses = (tab: string) =>
    `px-4 py-2 border-b-2 ${active === tab
      ? "border-transparent text-white-400 font-semibold"
      : "border-transparent text-gray-500"
    }`;

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [userData, setUserData] = useState({
    updateUserId: "",
    updateUserInput: {
      first_name: "",
      last_name: "",
      phone: "",
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="My Profile" description="Update your personal information" />
          </div>

          <div className="flex gap-4">
            <button className={tabClasses("profile")} onClick={() => setActive("profile")}>
              Profile
            </button>
            <button className={tabClasses("password")} onClick={() => setActive("password")}>
              Change Password
            </button>
          </div>

          <div className="mt-4">
            {active === "profile" && (
              <ProfileTab userData={userData} setUserData={setUserData} />
            )}
            {active === "password" && (
              <UpdatePassword password={password} setPassword={setPassword} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileComponent;
