import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TransactionListCard from "./transaction-list-card";
import CardsHeader from "@/components/ui/cardheader";

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
const TransactionList = ({ mockAdminPayments }: TransactionProps)=> {
  return (
    <div>
      <Card>
        <CardsHeader title="Recent Transactions" description="All payment activity on the platform"/>
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

export default TransactionList;