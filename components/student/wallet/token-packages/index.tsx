import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TokenPackagesData } from "@/lib/mock-data"
import TokenPackagesCard from "./token-packages"
import CardsHeader from "@/components/ui/card-header"
export default function TokenPackages() {
    return (
        <Card>
            <CardsHeader title="Buy Token Packages" description="Choose a package that fits your needs" />
            <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                    {TokenPackagesData.map((Card, index) => (
                        <TokenPackagesCard
                            key={index}
                            tokencount={Card.tokencount}
                            value={Card.value}
                            offer={Card.offer}
                            badge={Card.badge}
                            action={Card.action}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}