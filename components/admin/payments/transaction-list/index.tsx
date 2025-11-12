import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TransactionListCard from "./transaction-list-card";

type mockAdminPayments = {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  type: string;
  status: string;
  date: string;
  time: string;
}
interface TransactionProps {
  mockAdminPayments: mockAdminPayments[]
}
export default function TransactionList({ mockAdminPayments }: TransactionProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>All payment activity on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockAdminPayments.map((payment, index) => (
              <TransactionListCard 
              key={index}
              payment={payment}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}