"use client"

import AdminNav from "@/src/components/navigation/admin-nav";
import Header from "@/src/components/ui/header";
import UserDetailsCard from "./user-detils-card";

const UserDetailsComponent = () =>{
    return(
        <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="User Details" description="View all information for this user." />

          </div>
          <UserDetailsCard />
          
        </div>
      </div>
    </div>
    )
}

export default UserDetailsComponent;