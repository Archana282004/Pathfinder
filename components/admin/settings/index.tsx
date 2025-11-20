"use client"

import AdminNav from "@/components/navigation/admin-nav"
import { Card } from "@/components/ui/card"
import Header from "@/components/ui/header"
import SignUpTokensCard from "./signup-tokens- card"
import SessionDurationCard from "./session-duration-card"
import CancellationAndRescheduling from "./cancellation-and-rescheduling"

const AdminSettings = () => {
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
          <SignUpTokensCard />
          <SessionDurationCard />
          <CancellationAndRescheduling />
        </div>
        </div>


      </div>
    </div>
  )
}

export default AdminSettings;