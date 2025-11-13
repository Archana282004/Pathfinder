import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
interface TokenCardType {
    badge: string,
    tokencount: string,
    value: string,
    offer: string,
    action: string
}
const TokenPackagesCard = ({ badge, tokencount, value, offer, action }: TokenCardType) => {
    return(
        <Card className="border-2 border-primary">
        <CardContent className="p-6 text-center space-y-4">
            <Badge className="mb-2">{badge}</Badge>
            <div>
                <p className="text-3xl font-bold">{tokencount}</p>
                <p className="text-sm text-muted-foreground">tokens</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-green-500">{offer}</p>
            </div>
            <Button className="w-full">{action}</Button>
        </CardContent>
    </Card>
    )
}

export default TokenPackagesCard;