import { Button } from "@/src/components/ui/button";
import { Card, CardContent} from "@/src/components/ui/card";
import Link from "next/link";
import RecentTransactionCard from "./recent-transaction-card";
import CardsHeader from "@/src/components/ui/card-header";

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

const AdminRecentTransactions = ({ recentTransactions }: RecentTransactionsProps) => {
  return (
    <div>
      <Card>
        <CardsHeader title="Recent Transactions"
          description="Latest payment activity" />
        <CardContent className="space-y-4">
          {recentTransactions.map((transaction, index) => (
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

export default AdminRecentTransactions;