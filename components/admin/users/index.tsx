"use client"

import { AdminNav } from "@/components/navigation/admin-nav"
import { Button } from "@/components/ui/button"
import { mockAdminUsers } from "@/lib/mock-data"
import SearchFilter from "./search-filter"
import AdminTabslist from "./tab-list"
import Header from "../../ui/header"

const AdminUsers = () => {
  const students = mockAdminUsers.filter((u) => u.role === "student")
  const educators = mockAdminUsers.filter((u) => u.role === "educator")
  const allUsers = mockAdminUsers

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Header heading="User Management" description="Manage all platform users" />
            <Button>Add New User</Button>
          </div>

          {/* Search and Filter */}
          <SearchFilter />

         <AdminTabslist 
         students={students}
         educators={educators}
         allUsers={allUsers}
         />
        </div>
      </div>
    </div>
  )
}

export default AdminUsers;