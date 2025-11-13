import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, Download } from "lucide-react"

interface mockResourcesProps {
    mockResources: {
        id: string;
        title: string;
        category: string;
        type: string;
        size: string;
        uploadedBy: string;
        uploadDate: string;
        downloads: number;
        description: string;
    }[]
}

const ResourceGrid = ({ mockResources }: mockResourcesProps) => {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {mockResources.map((resource) => (
                <Card key={resource.id}>
                    <CardHeader>
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    {resource.type === "Video" ? (
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
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="secondary">{resource.category}</Badge>
                            <span>•</span>
                            <span>{resource.type}</span>
                            <span>•</span>
                            <span>{resource.size}</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t">
                            <div className="text-sm text-muted-foreground">
                                <p>By {resource.uploadedBy}</p>
                                <p>{resource.downloads} downloads</p>
                            </div>
                            <Button size="sm">
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