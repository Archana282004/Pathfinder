import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Transaction = {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  type: string;
  status: string;
  date: string;
  time: string;
};
interface RecentTransactionsProps {
  recentTransactions: Transaction[];
}

export default function AdminRecentTransactions({ recentTransactions }: RecentTransactionsProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest payment activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{transaction.userName}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{transaction.type}</span>
                  <span>•</span>
                  <span>
                    {transaction.date} at {transaction.time}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${transaction.amount}</p>
                <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
          <Button className="w-full" asChild>
            <Link href="/admin/payments">View All Transactions</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}