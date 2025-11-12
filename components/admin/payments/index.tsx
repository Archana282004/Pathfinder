"use client"

import { AdminNav } from "@/components/navigation/admin-nav"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { mockAdminPayments } from "@/lib/mock-data"
import AdminPaymentStats from "./stats-grid"
import SearchFilter from "./search-filter"
import TransactionList from "./transactions-list"
import Title from "../title"

export default function AdminPayments() {
  const totalRevenue = mockAdminPayments.reduce((sum, p) => sum + p.amount, 0)
  const completedPayments = mockAdminPayments.filter((p) => p.status === "completed")
  const pendingPayments = mockAdminPayments.filter((p) => p.status === "pending")

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Title heading="Payment Management" description="View and manage all transactions" />
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
