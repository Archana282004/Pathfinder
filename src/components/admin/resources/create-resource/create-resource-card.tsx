"use client"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import CardsHeader from "@/src/components/ui/card-header"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Upload } from "lucide-react"
import Link from "next/link"


const CreateResourceCard = () => {
    return (
        <Card>
            <CardsHeader
                title="Resource Details"
                description="Fill in the information to create a new resource"
            />
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label >Title*</Label>
                            <Input placeholder="Enter resource title" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Resource Type*</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select resource type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="one">Essay Writing</SelectItem>
                                    <SelectItem value="two">Test Prep</SelectItem>
                                    <SelectItem value="three">Financial Aid</SelectItem>
                                    <SelectItem value="four">Admissions</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Description*</Label>
                            <Input className="h-20" placeholder="Enter resource description" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>File Attachment*</Label>
                            <Label className="border p-2 rounded-md cursor-pointer text-sm text-muted-foreground justify-center font-bold text-color-white">
                                <Upload />
                                Upload File
                                <Input type="file" className="hidden" />
                            </Label>
                            <p className="text-muted-foreground text-sm">Supported formats: PDF, DOC, DOCX (Max size: 10MB)</p>
                        </div>
                        <div className=" flex flex-row gap-2 justify-center">
                            <Link href="/admin/resources">
                                <Button className="bg-transparent border text-white hover:bg-transparent">
                                    Cancel
                                </Button>
                            </Link>
                            <Button>Create Resource</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default CreateResourceCard