import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"

interface  mockWalletTransaction {
    id: string;
    type: string;
    amount: number;
    tokens: number;
    description: string;
    date: string;
    time: string;
    status: string;
}
interface StatsGridProps {
    mockWalletTransactions:mockWalletTransaction[]
    totalPurchased:number;
    totalSpent:number;
}


export default function StatsGrid({mockWalletTransactions, totalPurchased, totalSpent}:StatsGridProps){
    return(
        <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Purchased</CardTitle>
                <ArrowDownRight className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalPurchased}</div>
                <p className="text-xs text-muted-foreground">
                  {mockWalletTransactions.filter((t) => t.type === "purchase").length} transactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalSpent}</div>
                <p className="text-xs text-muted-foreground">
                  {mockWalletTransactions.filter((t) => t.type === "spent").length} sessions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Refunds</CardTitle>
                <RefreshCw className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${mockWalletTransactions.filter((t) => t.type === "refund").reduce((sum, txn) => sum + txn.amount, 0)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {mockWalletTransactions.filter((t) => t.type === "refund").length} refunds
                </p>
              </CardContent>
            </Card>
          </div>
    )
}