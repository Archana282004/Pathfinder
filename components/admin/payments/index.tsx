"use client"

import { AdminNav } from "@/components/navigation/admin-nav"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { mockAdminPayments } from "@/lib/mock-data"
import AdminPaymentStats from "./stats-grid"
import SearchFilter from "./search-filter"
import TransactionList from "./transactions-list"

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
            <div>
              <h1 className="text-3xl font-bold">Payment Management</h1>
              <p className="text-muted-foreground">View and manage all transactions</p>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          {/* Stats Grid */}
          <AdminPaymentStats
            totalRevenue={totalRevenue}
            completedPayments={completedPayments}
            pendingPayments={pendingPayments}
          />

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
