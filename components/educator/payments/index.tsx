"use client"

import  EducatorNav from "@/components/navigation/educator-nav"
import { Button } from "@/components/ui/button"
import {Download } from "lucide-react"
import { mockEducatorEarnings } from "@/lib/mock-data"
import PaymentInformation from "./payment-info"
import PaymentHistory from "./history"
import PaymentOverview from "./overview-stats"
import Header from "@/components/ui/header"

export default function EducatorEarnings() {
  const totalEarnings = mockEducatorEarnings.reduce((sum, e) => sum + e.amount, 0)
  const paidEarnings = mockEducatorEarnings.filter((e) => e.status === "paid").reduce((sum, e) => sum + e.amount, 0)
  const pendingEarnings = mockEducatorEarnings
    .filter((e) => e.status === "pending")
    .reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="min-h-screen bg-background">
      <EducatorNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Header heading="Earnings Dashboard" description="Track your earnings and payouts" />
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Earnings Overview */}
          <PaymentOverview />

          {/* Earnings History */}
          <PaymentHistory mockEducatorEarnings={mockEducatorEarnings} />

          {/* Payout Information */}
          <PaymentInformation pendingEarnings={pendingEarnings} />
        </div>
      </div>
    </div>
  )
}
