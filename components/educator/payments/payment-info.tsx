import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CardsHeader from "@/components/ui/card-header"

interface PaymentInfo {
  pendingEarnings: number
}

export default function PaymentInformation({ pendingEarnings }: PaymentInfo) {
  return (
    <Card>
      <CardsHeader title="Payout Information" description="How and when you get paid" />
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted rounded-lg space-y-2">
          <p className="font-medium">Next Payout</p>
          <p className="text-2xl font-bold">${pendingEarnings}</p>
          <p className="text-sm text-muted-foreground">Scheduled for end of month</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-muted-foreground">
            <strong>Payment Method:</strong> Bank Transfer
          </p>
          <p className="text-muted-foreground">
            <strong>Account:</strong> ****1234
          </p>
          <Button variant="outline" size="sm">
            Update Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}