import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            {mockAdminPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{payment.userName}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{payment.type}</span>
                    <span>•</span>
                    <span>
                      {payment.date} at {payment.time}
                    </span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">${payment.amount}</p>
                    <Badge variant={payment.status === "completed" ? "default" : "secondary"}>
                      {payment.status}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}