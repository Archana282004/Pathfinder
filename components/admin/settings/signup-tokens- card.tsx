import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUpTokensCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Signup Tokens</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2">
                    <Label>Set default tokens</Label>
                    <Input type="number" />
                    <p className="text-muted-foreground">These bonus tokens will be credited to the student's wallet when a new user is registered.</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignUpTokensCard;