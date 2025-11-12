import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HistoryCard from "./history-card";

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
            <HistoryCard 
            earning={earning}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}