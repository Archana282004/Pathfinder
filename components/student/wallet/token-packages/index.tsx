import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TokenPackagesData } from "@/lib/mock-data"
import TokenPackagesCard from "./token-packages"
export default function TokenPackages() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Buy Token Packages</CardTitle>
                <CardDescription>Choose a package that fits your needs</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                   {TokenPackagesData.map((Card, index)=>(
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