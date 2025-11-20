import { Card, CardContent } from "@/components/ui/card";
import CardsHeader from "@/components/ui/card-header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SessionDurationCard = () => {
    return (
        <Card>
            <CardsHeader
                title="Session Duration & Tokens"
                description="Select a session duration and set tokens for it."
            />
            <CardContent>
                <div className="flex gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <Label>Session duration</Label>
                    <Select defaultValue="one">
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="one">30 Minutes - 100 tokens</SelectItem>
                            <SelectItem value="two">60 Minutes - 200 tokens</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Tokens for Selected Duration</Label>
                    <Input type="number" />
                </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SessionDurationCard;