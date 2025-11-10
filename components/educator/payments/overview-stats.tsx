
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Calendar } from "lucide-react"

interface EducatorEarning {
  id: string
  sessionId: string
  studentName: string
  amount: number
  date: string
  status: string
}

interface EarningsGridProps {
  totalEarnings: number
  paidEarnings: number
  pendingEarnings: number
  mockEducatorEarnings: EducatorEarning[]
}

export default function PaymentOverview({ totalEarnings, paidEarnings, pendingEarnings, mockEducatorEarnings }: EarningsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalEarnings}</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Paid Out</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${paidEarnings}</div>
          <p className="text-xs text-muted-foreground">
            {mockEducatorEarnings.filter((e) => e.status === "paid").length} sessions
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending</CardTitle>
          <Calendar className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${pendingEarnings}</div>
          <p className="text-xs text-muted-foreground">
            {mockEducatorEarnings.filter((e) => e.status === "pending").length} sessions
          </p>
        </CardContent>
      </Card>
    </div>
  )
}