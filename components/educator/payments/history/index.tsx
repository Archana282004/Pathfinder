import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HistoryCard from "./history-card";
import CardsHeader from "@/components/ui/cardheader";

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
      <CardsHeader title="Earnings History" description="Your session earnings and payouts" />
      <CardContent>
        <div className="space-y-3">
          {mockEducatorEarnings.map((earning, index) => (
            <HistoryCard
              key={index}
              earning={earning}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}