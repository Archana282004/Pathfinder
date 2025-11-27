import { Card, CardContent} from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"
import CardsHeader from "@/src/components/ui/card-header";

interface mockWalletTransaction {
    mockWalletTransactions: {
        id: string;
        type: string;
        amount: number;
        tokens: number;
        description: string;
        date: string;
        time: string;
        status: string;
    }[]
}

const TransactionHistory = ({ mockWalletTransactions }: mockWalletTransaction) => {
    return (
        <Card>
            <CardsHeader title="Transaction History" description="Your recent token activity" />
            <CardContent>
                <div className="space-y-3">
                    {mockWalletTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === "purchase"
                                        ? "bg-green-500/10"
                                        : transaction.type === "refund"
                                            ? "bg-blue-500/10"
                                            : "bg-red-500/10"
                                        }`}
                                >
                                    {transaction.type === "purchase" ? (
                                        <ArrowDownRight className="w-5 h-5 text-green-500" />
                                    ) : transaction.type === "refund" ? (
                                        <RefreshCw className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <ArrowUpRight className="w-5 h-5 text-red-500" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium">{transaction.description}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(transaction.date).toLocaleDateString()} at {transaction.time}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p
                                    className={`text-lg font-semibold ${transaction.tokens > 0 ? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    {transaction.tokens > 0 ? "+" : ""}
                                    {transaction.tokens} tokens
                                </p>
                                <Badge variant="secondary">{transaction.status}</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default TransactionHistory;