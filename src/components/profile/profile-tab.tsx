import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import ProfilePic from "../ui/profile-pic"

const EducatorProfileTab = () => {
    return (
        <div>
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <ProfilePic />
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>First Name</Label>
                                <Input type="text" placeholder="Enter your first name" />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Last Name</Label>
                                <Input type="text" placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Email</Label>
                                <Input type="email" placeholder="Enter your Email" />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Phone</Label>
                                <Input type="phone" placeholder="Enter your Phone Number" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Role</Label>
                                <Input type="text" placeholder="Enter your Role" />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Description</Label>
                                <Input type="text" placeholder="Enter your Description" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Specialization</Label>
                                <Input type="text" placeholder="Enter your Specizilation" />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Topic</Label>
                                <Input type="phone" placeholder="Enter your Topic" />
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
export default EducatorProfileTab