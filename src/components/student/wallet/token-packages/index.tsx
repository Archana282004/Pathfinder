"use client"

import { Card, CardContent} from "@/src/components/ui/card"
import { TokenPackagesData } from "@/src/lib/mock-data"
import TokenPackagesCard from "./token-packages"
import CardsHeader from "@/src/components/ui/card-header"
const TokenPackages = () => {
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

export default TokenPackages;