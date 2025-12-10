"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import AvailabilityTab from "./availability"
import CardsHeader from "@/src/components/ui/card-header"

interface AvailabilityProps {
    dayOfWeek: string,
    startTime: string,
    endTime: string
}
interface AvailabilitiesProps {
    availability: AvailabilityProps[]
}
const Availability = ({ availability }: AvailabilitiesProps) => {
    
    return (
        <Card>
            <CardsHeader title="Your Availability" description="Manage your schedule and time slots" />
            <CardContent className="space-y-4">
                {availability.map((a, index) =>
                    <AvailabilityTab key={index} day={a.dayOfWeek} startTime={a.startTime} endTime={a.endTime} />
                )
                }
                <Button className="w-full" asChild>
                    <Link href="/educator/availability">Manage Availability</Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export default Availability;
