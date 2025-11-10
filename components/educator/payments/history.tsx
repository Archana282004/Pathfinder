import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface HistoryInfo {
  mockEducatorEarnings: {
    id: string;
    sessionId: string;
    studentName: string;
    amount: number;
    date: string;
    status: string;
  }[];

}
export default function PaymentHistory({ mockEducatorEarnings }: HistoryInfo) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings History</CardTitle>
        <CardDescription>Your session earnings and payouts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockEducatorEarnings.map((earning) => (
            <div key={earning.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">Session with {earning.studentName}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(earning.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="text-right flex items-center gap-4">
                <div>
                  <p className="text-lg font-semibold">${earning.amount}</p>
                  <Badge variant={earning.status === "paid" ? "default" : "secondary"}>{earning.status}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}