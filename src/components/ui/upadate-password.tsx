"use client"
import { Button } from "./button";
import { Card, CardContent } from "./card";
import CardsHeader from "./card-header";
import { Input } from "./input";
import { Label } from "./label";
import { ChangePassword_Action } from "@/src/utils/graphql/auth/action";

interface PasswordState {
    currentPassword: string,
    newPassword: string
}
interface UpdatePasswordProps {
    password: PasswordState
    setPassword: React.Dispatch<React.SetStateAction<PasswordState>>;
}
const UpdatePassword = ({ password, setPassword }: UpdatePasswordProps) => {

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setPassword((prev: any) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        
        const res = await ChangePassword_Action(password);

        console.log(res);
    };


    return (
        <div>
            <Card>
                <CardContent className="flex flex-col gap-6">
                    <CardsHeader title="Change Password" description="Set a new password to keep your account secure" />
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <Label>Current Password</Label>
                        <Input type="password" name="currentPassword" value={password?.currentPassword} onChange={handleChange} />
                        <Label>New Password</Label>
                        <Input type="password" name="newPassword" value={password?.newPassword} onChange={handleChange} placeholder="minimum 8 characters" />
                        <Label>Retype New Password</Label>
                        <Input type="password" placeholder="minimum 8 characters" />
                        <div className="flex flex-row gap-4" >
                            <Button className="bg-transparent border text-white-500 border-orange-400 hover:bg-transparent border hover:text-white-500 hover:border-orange-400">Cancel</Button>
                            <Button type="submit">Update Password</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UpdatePassword;