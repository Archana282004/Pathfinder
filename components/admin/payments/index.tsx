"use client"

import { AdminNav } from "@/components/navigation/admin-nav"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { mockAdminPayments } from "@/lib/mock-data"
import AdminPaymentStats from "./stats-grid"
import SearchFilter from "./search-filter"
import TransactionList from "./transaction-list"
import Header from "../../ui/header"

const AdminPayments = () => {

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Header heading="Payment Management" description="View and manage all transactions" />
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          {/* Stats Grid */}
          <AdminPaymentStats />

          {/* Search and Filter */}
          <SearchFilter />

          {/* Transactions List */}
          <TransactionList
            mockAdminPayments={mockAdminPayments}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminPayments;