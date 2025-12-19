"use client"

import StudentNav from "@/src/components/navigation/student-nav";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import Header from "@/src/components/ui/header"
import { Input } from "@/src/components/ui/input";
import { mockEducators } from "@/src/lib/mock-data";
import { Search } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { useAuth } from "@/src/contexts/auth-context";

const BookNewSession = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const { user } = useAuth()
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <Header heading="Book New Session" description="View and manage your sessions" />
                    </div>
                    {/*Search*/}
                    <Card className="p-6 mb-8 h-30 flex justify-center">
                        <div className="space-y-4">
                            <div className="relative ">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    placeholder="Search by educator, topic, specazilation"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                    </Card>

                    {/* EducatorsList */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {mockEducators.map((i) => (
                            <Card key={i.name} className="h-60 w-full">
                                <CardContent className="flex flex-col gap-8">
                                    <div className="flex flex-row gap-2">
                                        <Avatar>
                                            <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                                            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-bold text-white">{i.name}</p>
                                            <Badge className="bg-lime-800">{i.specialty}</Badge>
                                        </div>
                                    </div>


                                    <p className="text-muted-foreground">{i.bio}</p>

                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-white">100 tokens / 30 mins</p>
                                            <p className="text-white">200 tokens / 60 mins</p>
                                        </div>
                                        <Button>Book Session</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookNewSession;