"use client"

import Header from "@/src/components/ui/header"
import SignUpTokensCard from "./signup-tokens- card"
import SessionDurationCard from "./session-duration-card"
import CancellationAndRescheduling from "./cancellation-and-rescheduling"
import { useState } from "react"
import { Settingstype } from "@/src/types/Admintypes"

interface AdminSettingsProps{
  settings: Settingstype
}

const AdminSettings = ({settings}:AdminSettingsProps) => {


  const [setting, setSettings] = useState<Settingstype>(settings);

   const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setSettings((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleNestedChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  parent: "cancellation_time" | "reschedule_time"
) => {
  const { name, value } = e.target;

  setSettings((prev) => ({
    ...prev,
    [parent]: {
      ...prev[parent],
      [name]: Number(value),
    },
  }));
};

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header
            heading="Settings"
            description="Configure platform settings"
          />
          <div className="flex flex-col gap-6">
            <SignUpTokensCard settings={setting} handleChange={handleChange}/>
            <SessionDurationCard />
            <CancellationAndRescheduling settings={setting} handleNestedChange={handleNestedChange}/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AdminSettings;