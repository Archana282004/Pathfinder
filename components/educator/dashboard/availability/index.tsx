import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AvailabilityTab from "./availability"
import CardsHeader from "@/components/ui/cardheader"
const Availability = () => {
    return (
        <Card>
            <CardsHeader title="Your Availability" description="Manage your schedule and time slots" />
            <CardContent className="space-y-4">
                <AvailabilityTab day="Monday - Friday" time="9:00 AM - 5:00 PM" />
                <AvailabilityTab day="Saturday" time="10.00AM - 2.00PM" />
                <Button className="w-full" asChild>
                    <Link href="/educator/availability">Manage Availability</Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default Availability;