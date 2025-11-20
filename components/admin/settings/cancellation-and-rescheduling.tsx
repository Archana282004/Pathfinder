import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CardsHeader from "@/components/ui/card-header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const CancellationAndRescheduling = () => {
    return (
        <Card>
            <CardsHeader
                title="Cancelllation & Rescheduling"
                description="Configure time windows. Refunds apply if action happens before the specified time."
            />
            <CardContent>
                <div className="flex gap-6 w-full">
                    <div className="flex flex-col gap-3 flex-1">
                        <Label>Cancellation window (before start)</Label>
                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col flex-1">
                                <p className="text-muted-foreground">Hours</p>
                                <Input type="number" className="w-full" />
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-muted-foreground">Minutes</p>
                                <Input type="number" className="w-full" />
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm">
                            Refund applicable if session is cancelled 24 hours and 30 minutes before start.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                        <Label>Rescheduling window (before start)</Label>
                        <div className="flex gap-4 w-full">
                            <div className="flex flex-col flex-1">
                                <p className="text-muted-foreground">Hours</p>
                                <Input type="number" className="w-full" />
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-muted-foreground">Minutes</p>
                                <Input type="number" className="w-full" />
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm">
                            Rescheduling is applicable if session is rescheduled 24 hours and 30 minutes before start.
                        </p>
                    </div>


                </div>
                <div className="flex justify-end">
                    <Button size="sm">
                        Save
                    </Button>
                </div>
            </CardContent>

        </Card>
    )
}

export default CancellationAndRescheduling;