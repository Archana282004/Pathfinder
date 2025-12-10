"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { FileText, Video, Download } from "lucide-react"

interface ResourcesProps {
    resources: {
        id: string;
        attachment: {
            file_type: string,
            file_url: string
        },
        description: string,
        resource_type: string,
        title: string
    }[]
}

const handleOpen = (file_url: string) => {
    if (file_url) {
        window.open(file_url, "_blank");
    }
};

const ResourceGrid = ({ resources }: ResourcesProps) => {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {resources?.map((resource, index) => (
                <Card key={index}>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    {resource?.attachment?.file_type === "Video" ? (
                                        <Video className="w-6 h-6 text-primary" />
                                    ) : (
                                        <FileText className="w-6 h-6 text-primary" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                                    <CardDescription className="mt-1">{resource.description}</CardDescription>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">

                        <div className="flex items-center justify-between pt-2 ">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="secondary">{resource?.resource_type}</Badge>
                                <span>•</span>
                                <span>{(resource?.attachment?.file_type).replace(/^\./, "").toUpperCase()}</span>

                            </div>
                            <Button size="sm" onClick={() => handleOpen(resource?.attachment?.file_url)}>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default ResourceGrid;