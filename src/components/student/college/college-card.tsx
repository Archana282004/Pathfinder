import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { MapPin, Heart, ExternalLink, Star } from "lucide-react"
import { College } from "@/src/lib/types"

interface CollegeCardProps {
    college: College,
    isSaved: boolean,
    onToggleSave: (id: string) => void
}
const CollegeCardComponent = ({ college, isSaved, onToggleSave }: CollegeCardProps) => {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                    {college.matchScore && (
                        <Badge className="bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            {college.matchScore ?? 0}% Match
                        </Badge>
                    )}
                    <Button
                        size="icon"
                        variant={isSaved ? "default" : "secondary"}
                        onClick={() => onToggleSave(college.id)}
                        className="rounded-full"
                    >
                        <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                    </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">{college.type}</Badge>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div>
                    <h3 className="text-xl font-semibold mb-1">{college.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {college.location}
                    </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{college.description}</p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y">
                    <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Acceptance Rate</div>
                        <div className="font-semibold">{college.acceptanceRate}%</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Avg GPA</div>
                        <div className="font-semibold">{college.avgGPA}</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Avg SAT</div>
                        <div className="font-semibold">{college.avgSAT}</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Tuition</div>
                        <div className="font-semibold">${(college.tuition / 1000).toFixed(0)}k</div>
                    </div>
                </div>

                <div>
                    <div className="text-xs text-muted-foreground mb-2">Popular Majors</div>
                    <div className="flex flex-wrap gap-2">
                        {college.majors.slice(0, 3).map((major) => (
                            <Badge key={major} variant="outline" className="text-xs">
                                {major}
                            </Badge>
                        ))}
                        {college.majors.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{college.majors.length - 3} more
                            </Badge>
                        )}
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline" asChild>
                        <a href={college.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </Button>
                    <Button className="flex-1">View Details</Button>
                </div>
            </div>
        </Card>
    )
}

export default CollegeCardComponent;