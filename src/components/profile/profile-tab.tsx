"use client"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import ProfilePic from "../ui/profile-pic"
import { getUser_Action, updateUser_Action } from "@/src/utils/graphql/auth/action";
import { useAppSelector } from "@/src/store/hooks";
import SimpleReactValidator from "simple-react-validator";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/src/hooks/use-toast";

interface Userstate {
    updateUserId: string;
    updateUserInput: {
        first_name: string;
        last_name: string;
        phone: string;
        profile: {
            specialization: string;
            session_topic: string;
            session_description: string;
        }
    };
}

interface ProfileTabProps {
    userData: Userstate;
    setUserData: React.Dispatch<React.SetStateAction<Userstate>>;
}

const EducatorProfileTab = ({ userData, setUserData }: ProfileTabProps) => {
    const user = useAppSelector((state) => state.auth.user);
    const userId = user?.id;
    const { toast } = useToast();

    const [userDetails, setUserDetails] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        avatar_path: "",
        role: "",
        profile: {
            specialization: "",
            session_topic: "",
            session_description: ""
        }
    });

    useEffect(() => {
        if (!userId) return;
        const fetchUserData = async () => {
            try {
                const res = await getUser_Action({ userId });
                const u = res?.user;
                const p = res?.user?.profile

                if (!u) return;

                setUserDetails({
                    email: u.email || "",
                    first_name: u.first_name || "",
                    last_name: u.last_name || "",
                    phone: u.phone || "",
                    avatar_path: u.avatar_path || "",
                    role: u.role || "",
                    profile: {
                        specialization: p.specialization || "",
                        session_topic: p.session_topic,
                        session_description: p.session_description
                    }
                });

                setUserData({
                    updateUserId: userId,
                    updateUserInput: {
                        first_name: u.first_name || "",
                        last_name: u.last_name || "",
                        phone: u.phone || "",
                        profile: {
                            specialization: u.specialization || "",
                            session_topic: u.session_topic || "",
                            session_description: u.session_description || ""
                        }
                    }
                });

            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        };

        fetchUserData();
    }, [userId, setUserData]);

    const validator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setUserData(prev => ({
            ...prev,
            updateUserId: userId,
            updateUserInput: {
                ...prev.updateUserInput,
                [name]: value
            }
        }));

        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));

        validator.current.showMessageFor(name);
        forceUpdate(s => !s);
    };
    const handleNestedChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        parent: "profile"
    ) => {
        const { name, value } = e.target;

        setUserDetails((prev) => ({
            ...prev,
            [parent]: {
                ...prev[parent],
                [name]: (value),
            },
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (validator.current.allValid()) {
            const res = await updateUser_Action(userData);
            if (res?.updateUser?.success) {
                toast({ title: `${res?.updateUser?.message}`, variant: "default" })
            }
            else {
                toast({ title: `${res?.updateUser?.message}`, variant: "destructive" })
            }
        } else {
            validator.current.showMessages();
            forceUpdate(s => !s);
        }
    };

    return (
        <div>
            <Card>
                <CardContent className="flex flex-col gap-4">
                    <ProfilePic link={userDetails.avatar_path} />
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>First Name</Label>
                                <Input name="first_name" type="text" placeholder="Enter your first name" value={userDetails.first_name}
                                    onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Last Name</Label>
                                <Input name="last_name" type="text" placeholder="Enter your last name" value={userDetails.last_name} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Email</Label>
                                <Input name="email" type="email" placeholder="Enter your Email" value={userDetails.email} disabled />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Phone</Label>
                                <Input name="phone" type="phone" placeholder="Enter your Phone Number" value={userDetails.phone}
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Role</Label>
                                <Input name="role" type="text" placeholder="Enter your Role" value={userDetails.role} disabled />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Description</Label>
                                <Input name="session_description" type="text" placeholder="Enter your Description" value={userDetails.profile.session_description}
                                    onChange={(e) => handleNestedChange(e, "profile")} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-full">
                                <Label>Specialization</Label>
                                <Input name="specialization" type="text" placeholder="Enter your Specizilation" value={userDetails.profile.specialization}
                                    onChange={(e) => handleNestedChange(e, "profile")} />
                            </div>

                            <div className="flex flex-col gap-4 w-full">
                                <Label>Topic</Label>
                                <Input name="session_topic" type="phone" placeholder="Enter your Topic" value={userDetails.profile.session_topic}
                                    onChange={(e) => handleNestedChange(e, "profile")} />
                            </div>
                        </div>

                        <div>
                            <Button type="submit">Save & Update</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default EducatorProfileTab