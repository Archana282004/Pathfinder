"use client"
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useAuth } from "@/src/contexts/auth-context";
import Image from "next/image";

const UserDetailsCard = () => {
    const { user } = useAuth()
    return (
        <div>
            <Card>
                <CardContent className="flex flex-col gap-6">
                    <div className="flex flex-row gap-3">
                        <div className="w-20 h-20 overflow-hidden rounded-full">
                            <Image src="/placeholder-user.jpg" alt="User" width={150} height={100} />
                        </div>
                        <Label className="text-base font-medium">Profile</Label>
                    </div>
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>First Name</Label>
                                <Input type="text" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Last Name</Label>
                                <Input type="text" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>Email</Label>
                                <Input type="email" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Phone</Label>
                                <Input type="phone" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>Role</Label>
                                <Input type="text" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Specilization</Label>
                                <Input type="text" />
                            </div>
                        </div>
                        
                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>Status</Label>
                                <Input type="text" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Platform</Label>
                                <Input type="text" />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserDetailsCard;