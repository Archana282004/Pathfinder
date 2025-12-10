"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"
import CardsHeader from "@/src/components/ui/card-header"

interface TransationHistoryProps{
    transaction:{
        transaction_type: string,
        session: {
            scheduled_at_start_time: string
        },
        amount: number
    }[]
}

const TransactionHistory = ({transaction}:TransationHistoryProps) => {
   
    return (
        <Card>
            <CardsHeader title="Transaction History" description="Your recent token activity" />
            <CardContent>
                <div className="space-y-3">
                    {transaction.map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.transaction_type === "PURCHASE"
                                        ? "bg-green-500/10"
                                        : transaction.transaction_type === "REFUND"
                                            ? "bg-blue-500/10"
                                            : "bg-red-500/10"
                                        }`}
                                >
                                    {transaction?.transaction_type === "PURCHASE" ? (
                                        <ArrowDownRight className="w-5 h-5 text-green-500" />
                                    ) : transaction?.transaction_type === "REFUND" ? (
                                        <RefreshCw className="w-5 h-5 text-blue-500" />
                                    ) : (
                                        <ArrowUpRight className="w-5 h-5 text-red-500" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium">{transaction?.transaction_type == "REFUND" ? "Token Refunded" :"Token Spent for Session"}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(transaction?.session?.scheduled_at_start_time).toLocaleDateString()} at {new Date(transaction?.session?.scheduled_at_start_time).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit",hour12: true,}).replace(":", ".")}

                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p
                                    className={`text-lg font-semibold ${transaction?.transaction_type =="REFUND"? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    {transaction?.transaction_type =="REFUND" ? "+" : "-"}
                                    {transaction.amount} tokens
                                </p>
                                <Badge variant="secondary">completed</Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default TransactionHistory;