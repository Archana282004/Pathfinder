import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RecentTransactionCard from "./recent-transaction-card";

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
          {recentTransactions.map((transaction,index) => (
            <RecentTransactionCard
            key={index}
            transaction={transaction}
            />
          ))}
          <Button className="w-full" asChild>
            <Link href="/admin/payments">View All Transactions</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}