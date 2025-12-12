"use client";

import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import CardsHeader from "@/src/components/ui/card-header";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
import { Upload } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/src/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createResourceAction } from "@/src/utils/graphql/resources/action";

export interface ResourceFormData {
    title: string;
    description: string;
    resourceType: string;
    file: File | null;
    fileUrl: string;
    fileType: string;
}

const CreateResourceCard = () => {
    const initialFormData = {
        title: "",
        description: "",
        resourceType: "",
        file: null,
        fileUrl: "",
        fileType: "",
    }
    const [formData, setFormData] = useState<ResourceFormData>(initialFormData);

    const [, forceUpdate] = useState(0);
    const { toast } = useToast();
    const router = useRouter();

    const validator = useRef(
        new SimpleReactValidator({
            autoForceUpdate: { forceUpdate: () => forceUpdate((n) => n + 1) },
            className: "text-red-500 text-sm mt-1",
        })
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validator.current.allValid()) {
            try {
                debugger
                const result = await createResourceAction({
                    title: formData.title,
                    description: formData.description,
                    resource_type: formData.resourceType,
                    file_url: formData.fileUrl,
                    file_type: formData.fileType,
                    active_status: true,
                });
                debugger

                if (result?.CreateResource) {
                    toast({
                        title: "Resource created",
                        description: "The resource has been added successfully.",
                    });
                    setFormData(initialFormData);
                    router.push("/admin/resources");
                } else {
                    toast({
                        title: "Error",
                        description: "Failed to create resource. Please try again.",
                        variant: "destructive",
                    });
                }
            } catch (error: unknown) {
                const err = error as { message?: string };
                toast({
                    title: "Error",
                    description: err?.message || "Failed to create resource. Please try again.",
                    variant: "destructive",
                });
            }
        } else {
            validator.current.showMessages();
            forceUpdate((n) => n + 1);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (!file) {
            setFormData((prev) => ({
                ...prev,
                file: null,
                fileUrl: "",
                fileType: "",
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            file,
            fileUrl: file.name,
            fileType: file.type,
        }));
    };

    return (
        <Card>
            <CardsHeader
                title="Resource Details"
                description="Fill in the information to create a new resource"
            />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <Label>Title*</Label>
                            <Input
                                placeholder="Enter resource title"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                            />
                            {validator.current.message("title", formData.title, "required")}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Resource Type*</Label>
                            <Select
                                onValueChange={(value) =>
                                    setFormData({ ...formData, resourceType: value })
                                }
                                value={formData.resourceType}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select resource type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ESSAY_WRITING">Essay Writing</SelectItem>
                                    <SelectItem value="TEST_PREP">Test Prep</SelectItem>
                                    <SelectItem value="FINANCIAL_AID">Financial Aid</SelectItem>
                                    <SelectItem value="ADMISSIONS">Admissions</SelectItem>
                                </SelectContent>
                            </Select>
                            {validator.current.message(
                                "resource type",
                                formData.resourceType,
                                "required"
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Description*</Label>
                            <Input
                                className="h-20"
                                placeholder="Enter resource description"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({ ...formData, description: e.target.value })
                                }
                            />
                            {validator.current.message(
                                "description",
                                formData.description,
                                "required"
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>File Attachment*</Label>
                            <Label className="border p-2 rounded-md cursor-pointer text-sm text-muted-foreground justify-center font-bold text-color-white flex items-center gap-2">
                                <Upload />
                                Upload File
                                <Input type="file" className="hidden" onChange={handleFileChange} />
                            </Label>
                            {validator.current.message("file", formData.file, "required")}
                            <p className="text-muted-foreground text-sm">
                                Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                            </p>
                        </div>

                        <div className="flex flex-row gap-2 justify-center">
                            <Link href="/admin/resources">
                                <Button className="bg-transparent border text-white hover:bg-transparent">
                                    Cancel
                                </Button>
                            </Link>
                            <Button type="submit">Create Resource</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default CreateResourceCard;
