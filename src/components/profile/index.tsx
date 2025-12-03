import { updateUser_Action } from "@/src/utils/graphql/auth/action"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import ProfilePic from "../ui/profile-pic"
import { useAppSelector } from "@/src/store/hooks"

interface Userstate {
    updateUserId: string,
    updateUserInput: {
        first_name: string,
        last_name: string,
        phone: string,
    }
}

interface ProfileTabProps {
    userData: Userstate;
    setUserData: React.Dispatch<React.SetStateAction<Userstate>>;
}
const ProfileTab = ({ userData, setUserData }: ProfileTabProps) => {
const user = useAppSelector((state)=> state.auth.user)
const id = user?.id
    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setUserData(prev => ({
            ...prev,
            updateUserId:id,
            updateUserInput: {
                ...prev.updateUserInput,
                [name]: value
            }
        }));
    };

    const handleSubmit = async () => { 
        

        const res = await updateUser_Action(userData);

        console.log(res);
    };

    return (
        <div>
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <ProfilePic />
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>First Name</Label>
                                <Input type="text" name="first_name" value={userData?.updateUserInput?.first_name} onChange={handleChange} placeholder="Enter your first name" />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Last Name</Label>
                                <Input type="text" name="last_name" value={userData?.updateUserInput?.last_name} onChange={handleChange} placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Email</Label>
                                <Input type="email" placeholder="Enter your Email" />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Phone</Label>
                                <Input type="phone" name="phone" value={userData?.updateUserInput?.phone} onChange={handleChange} placeholder="Enter your Phone Number" />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-4 w-1/2">
                                <Label>Role</Label>
                                <Input type="text" placeholder="Enter your Role" />
                            </div>
                        </div>
                        <div>
                            <Button>Save & Update</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default ProfileTab