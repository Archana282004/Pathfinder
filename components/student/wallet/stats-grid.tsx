import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StudentWalletData } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react"
import OverviewCards from "../cards/overviewcards";

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
            {StudentWalletData.map((card,index)=>(
              <OverviewCards
              key={index}
              title={card.title}
              icon={card.icon}
              data={card.data}
              cardcontent={card.cardcontent}
              />
            ))}
          </div>
    )
}