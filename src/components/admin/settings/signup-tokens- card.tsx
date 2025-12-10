"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

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
    settings: Settingstype
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    
}
const SignUpTokensCard = ({ settings, handleChange }: SettingsProps) => {


    return (
        <Card>
            <CardHeader>
                <CardTitle>Signup Tokens</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <Label>Set default tokens</Label>
                    <Input type="number" name="default_admin_token" value={settings?.default_admin_token} onChange={handleChange}/>
                    <p className="text-muted-foreground">These bonus tokens will be credited to the student's wallet when a new user is registered.</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUpTokensCard;