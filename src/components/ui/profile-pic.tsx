"use client"
import { Dispatch, SetStateAction, useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

interface ProfilePicProps {
    link: string;
    setLink: Dispatch<SetStateAction<string>>
}
const ProfilePic = ({ link, setLink }: ProfilePicProps) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        const file = e.target.files?.[0];
        if (file) {
            const imgURL = URL.createObjectURL(file);
            setImagePreview(imgURL);
            debugger
            setLink(e.target.files?.[0] ? imgURL : "");
        }
    }
    return (

        <div className="flex flex-row gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border">
                <img
                    src={imagePreview || link || "/educator-woman.jpg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />

            </div>
            <div>
                <h2 className="font-bold">Profile Pic</h2>
                <label className="cursor-pointer">
                    <Button
                        asChild
                    >
                        <span>
                            <Camera className="h-4 w-4" />
                            Change Profile Photo
                        </span>
                    </Button>

                    <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                </label>



            </div>
        </div>


    )
}

export default ProfilePic;