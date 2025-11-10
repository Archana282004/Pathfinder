"use client"

import { EducatorNav } from "@/components/navigation/educator-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, Calendar, Download } from "lucide-react"
import { mockEducatorEarnings } from "@/lib/mock-data"
import PaymentInformation from "./payment-info"
import PaymentHistory from "./history"
import PaymentOverview from "./overview-stats"

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
            <div>
              <h1 className="text-3xl font-bold">Earnings Dashboard</h1>
              <p className="text-muted-foreground">Track your earnings and payouts</p>
            </div>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Earnings Overview */}
          <PaymentOverview
            totalEarnings={totalEarnings}
            paidEarnings={paidEarnings}
            pendingEarnings={pendingEarnings}
            mockEducatorEarnings={mockEducatorEarnings}
          />

          {/* Earnings History */}
          <PaymentHistory mockEducatorEarnings={mockEducatorEarnings} />

          {/* Payout Information */}
          <PaymentInformation pendingEarnings={pendingEarnings} />
        </div>
      </div>
    </div>
  )
}
