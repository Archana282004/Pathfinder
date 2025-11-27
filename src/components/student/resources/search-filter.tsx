import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Search } from "lucide-react";

const SearchFilter = () => {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search resources..." className="pl-10" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default SearchFilter;