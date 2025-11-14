import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CardsHeader from "@/components/ui/cardheader";
import { TabsContent } from "@/components/ui/tabs";
import { MoreVertical } from "lucide-react";

interface User {
    id: string;
    name: string;
    role: string;
    status: string;
    joinDate: string;
    avatar?: string;
    title?: string;
}
interface tablistcardprops {
    value: string,
    title: string,
    description: string,
    data: User[]
}
const TablistCard = ({ value, title, description, data }: tablistcardprops) => {
    return (
        <div>
            <TabsContent value={value} className="space-y-4">
                <Card>
                    <CardsHeader title={title} description={description} />
                    <CardContent>
                        <div className="space-y-3">
                            {data.map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={user.avatar || "/placeholder.svg"}
                                            alt={user.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium">{user.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Joined {new Date(user.joinDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                                        <Button size="sm" variant="ghost">
                                            <MoreVertical className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </div >
    )
}

export default TablistCard;