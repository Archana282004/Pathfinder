import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
export default function TokenPackages() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Buy Token Packages</CardTitle>
                <CardDescription>Choose a package that fits your needs</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border-2">
                        <CardContent className="p-6 text-center space-y-4">
                            <div>
                                <p className="text-3xl font-bold">50</p>
                                <p className="text-sm text-muted-foreground">tokens</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">$50</p>
                                <p className="text-xs text-muted-foreground">$1.00 per token</p>
                            </div>
                            <Button className="w-full">Purchase</Button>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-primary">
                        <CardContent className="p-6 text-center space-y-4">
                            <Badge className="mb-2">Most Popular</Badge>
                            <div>
                                <p className="text-3xl font-bold">100</p>
                                <p className="text-sm text-muted-foreground">tokens</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">$95</p>
                                <p className="text-xs text-green-500">Save $5 (5% off)</p>
                            </div>
                            <Button className="w-full">Purchase</Button>
                        </CardContent>
                    </Card>

                    <Card className="border-2">
                        <CardContent className="p-6 text-center space-y-4">
                            <Badge variant="secondary" className="mb-2">
                                Best Value
                            </Badge>
                            <div>
                                <p className="text-3xl font-bold">200</p>
                                <p className="text-sm text-muted-foreground">tokens</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">$180</p>
                                <p className="text-xs text-green-500">Save $20 (10% off)</p>
                            </div>
                            <Button className="w-full">Purchase</Button>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}