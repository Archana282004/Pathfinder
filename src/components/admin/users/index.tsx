"use client"

import  AdminNav  from "@/src/components/navigation/admin-nav"
import { Button } from "@/src/components/ui/button"
import SearchFilter from "./search-filter"
import AdminTabslist from "./tab-list"
import Header from "../../ui/header"
import { useState } from "react"
import UserForm from "./add-user"

const AdminUsers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleAddUser = () =>{
    setIsOpen(true);
  }
  
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Header heading="User Management" description="Manage all platform users" />
            <Button onClick={HandleAddUser} >Add New User</Button>
          </div>

          {/* Search and Filter */}
          <SearchFilter />

         <AdminTabslist />
         
         <UserForm open={isOpen} setOpen={setIsOpen} mode="create" />
        </div>
      </div>
    </div>
  )
}

export default AdminUsers;