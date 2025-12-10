"use client"

import { Badge } from "@/src/components/ui/badge";

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
  transaction: Transaction;
}
const RecentTransactionCard = ({transaction}:RecentTransactionsProps) => {
    return(
        <div>
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
        </div>
    )
}

export default RecentTransactionCard;