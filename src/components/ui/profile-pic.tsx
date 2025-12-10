"use client"
import { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "./button";

interface ProfilePicProps {
    link: string;
}
const ProfilePic = ({ link }: ProfilePicProps) => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imgURL = URL.createObjectURL(file);
            setImagePreview(imgURL);
        }
    }
    return (

        <div className="flex flex-row gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border">
                <img
                    src={link ? link : "/educator-woman.jpg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h2 className="font-bold">Profile Pic</h2>
                <label className="cursor-pointer">
                    <Button
                        className="bg-transparent border text-white-400 border-orange-400 
               hover:bg-transparent hover:text-white-400 hover:border-orange-400 
               flex items-center gap-2"
                    >
                        <Camera className="h-4 w-4" />
                        Change Profile Photo
                    </Button>

                    <input
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