"use client"

import AdminNav from "@/src/components/navigation/admin-nav"
import Header from "@/src/components/ui/header"
import SignUpTokensCard from "./signup-tokens- card"
import SessionDurationCard from "./session-duration-card"
import CancellationAndRescheduling from "./cancellation-and-rescheduling"
import { useAppSelector } from "@/src/store/hooks"
import { useEffect, useState } from "react"
import { getAdminSettings_Action } from "@/src/utils/graphql/settings/action"

type Settingstype = {
  default_admin_token: number,
    cancellation_time: {
      hours: number,
      minutes: number
    },
    reschedule_time: {
      hours: number,
      minutes: number
    },
    session_amount: string
}
const AdminSettings = () => {

  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;

  const SettingsInitialData = {
    default_admin_token: 0,
    cancellation_time: {
      hours: 0,
      minutes: 0
    },
    reschedule_time: {
      hours: 0,
      minutes: 0
    },
    session_amount: ""
  }

  const [settings, setSettings] = useState<Settingstype>(SettingsInitialData);

  useEffect(() => {
    if (!userId) return;

    const fetchAdminSettings = async () => {
      const response = await getAdminSettings_Action({ userId });
      setSettings( response?.getSettings?.settings);
    }
    fetchAdminSettings();
  }, [userId])

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

      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header
            heading="Settings"
            description="Configure platform settings"
          />
          <div className="flex flex-col gap-6">
            <SignUpTokensCard settings={settings} handleChange={handleChange}/>
            <SessionDurationCard />
            <CancellationAndRescheduling settings={settings} handleNestedChange={handleNestedChange}/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AdminSettings;