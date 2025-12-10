"use client"

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import CardsHeader from "@/src/components/ui/card-header";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Settings_Action } from "@/src/utils/graphql/settings/action";
import { useToast } from "@/src/hooks/use-toast";

 interface Settingstype {
    default_admin_token: number,
    cancellation_time: {
        hours: number,
        minutes: number
    },
    reschedule_time: {
        hours: number,
        minutes: number
    },
    session_amount: string
}
 interface SettingsProps {
    settings: Settingstype,
     handleNestedChange: (e: React.ChangeEvent<HTMLInputElement>, parent: "cancellation_time" | "reschedule_time") => void
    
}

const CancellationAndRescheduling = ({ settings, handleNestedChange }: SettingsProps) => {
    const {toast} = useToast();
    const handleSubmit = async () => {
        
        const response = await Settings_Action({
            variables: {
                input: {
                    default_admin_token: Number(settings?.default_admin_token),
                    cancellation_time: {hours:settings?.cancellation_time?.hours, minutes:settings?.cancellation_time?.minutes},
                    reschedule_time: {hours:settings?.reschedule_time?.hours, minutes:settings?.reschedule_time?.minutes},
                    session_amount: settings.session_amount
                }
            }
        })
        
        if(response?.adminUpdateSettings?.success){ 
            toast({title:`${response?.adminUpdateSettings?.message}`, variant:"default"})
        }else{ 
             toast({title:`${response?.adminUpdateSettings?.message}`, variant:"destructive"})
        }
    }

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
                                <Input name="hours" type="number" className="w-full" value={settings?.cancellation_time?.hours} onChange={(e) => handleNestedChange(e, "cancellation_time")} />
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-muted-foreground">Minutes</p>
                                <Input name="minutes" type="number" className="w-full" value={settings?.cancellation_time?.minutes} onChange={(e) => handleNestedChange(e, "cancellation_time")} />
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
                                <Input name="hours" type="number" className="w-full" value={settings?.reschedule_time?.hours} onChange={(e) => handleNestedChange(e, "reschedule_time")} />
                            </div>

                            <div className="flex flex-col flex-1">
                                <p className="text-muted-foreground">Minutes</p>
                                <Input name="minutes" type="number" className="w-full" value={settings?.reschedule_time?.minutes} onChange={(e) => handleNestedChange(e, "reschedule_time")} />
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm">
                            Rescheduling is applicable if session is rescheduled 24 hours and 30 minutes before start.
                        </p>
                    </div>


                </div>
                <div className="flex justify-end">
                    <Button type="submit" onClick={handleSubmit} >
                        Save
                    </Button>
                </div>
            </CardContent>

        </Card>
    )
}

export default CancellationAndRescheduling;