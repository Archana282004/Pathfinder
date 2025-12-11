"use client"

import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { getUser_Action } from "@/src/utils/graphql/auth/action";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserDetailsCard = () => {

    const userId =useParams().id;

     const [userDetails, setUserDetails] = useState({
            email: "",
            first_name: "",
            last_name: "",
            phone: "",
            avatar_path: "",
            role: "",
            platform:"",
            active_status:false ,
            profile: {
                specialization: "",
                session_topic: "",
                session_description: ""
            }
        });

    useEffect(()=>{
        if(!userId) return;

        const fetchUserDetails = async() =>{
            const response = await getUser_Action({userId})
            setUserDetails(response?.user)
        }

        fetchUserDetails();
    },[userId])
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
                                <Input type="text" name="first_name"value={userDetails?.first_name ?? ""} readOnly/>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Last Name</Label>
                                <Input type="text" name="last_name" value={userDetails?.last_name ?? ""} readOnly/>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>Email</Label>
                                <Input type="email" name="email" value={userDetails?.email ?? ""} readOnly/>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Phone</Label>
                                <Input type="phone" name="phone" value={userDetails?.phone ?? ""}  readOnly/>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>Role</Label>
                                <Input type="text" name="role" value={userDetails?.role ?? ""} readOnly/>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Specialization</Label>
                                <Input type="text" name="specialization" value={userDetails?.profile?.specialization ?? ""}  readOnly/>
                            </div>
                        </div>
                        
                        <div className="flex flex-row gap-3 w-full ">
                            <div className="flex flex-col gap-2 flex-1">
                                <Label>Status</Label>
                                <Input type="text" name="status" value={userDetails?.active_status === true ? "Active" : "Inactive"}   readOnly/>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                 <Label>Platform</Label>
                                <Input type="text" name="platform" value={userDetails?.platform ?? ""}  readOnly/>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserDetailsCard;