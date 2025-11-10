import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Wallet } from "lucide-react";

interface BalanceCardProps {
    tokenBalance:number
}
export default function BalanceCard({tokenBalance}:BalanceCardProps){
    return(
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Current Balance</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-bold">{tokenBalance}</p>
                    <p className="text-xl text-muted-foreground">tokens</p>
                  </div>
                  <p className="text-sm text-muted-foreground">≈ ${tokenBalance} USD (1 token = $1)</p>
                </div>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Button size="lg" className="flex-1">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Tokens
                </Button>
                <Button size="lg" variant="outline">
                  Transfer
                </Button>
              </div>
            </CardContent>
          </Card>
    )
}