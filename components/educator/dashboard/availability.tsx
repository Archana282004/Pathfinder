import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Availability(){
    return(
        <Card>
                <CardHeader>
                    <CardTitle>Your Availability</CardTitle>
                    <CardDescription>Manage your schedule and time slots</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                                <p className="font-medium">Monday - Friday</p>
                                <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                            </div>
                            <Button size="sm" variant="ghost">
                                Edit
                            </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                                <p className="font-medium">Saturday</p>
                                <p className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</p>
                            </div>
                            <Button size="sm" variant="ghost">
                                Edit
                            </Button>
                        </div>
                    </div>
                    <Button className="w-full" asChild>
                        <Link href="/educator/availability">Manage Availability</Link>
                    </Button>
                </CardContent>
            </Card>
    )
}