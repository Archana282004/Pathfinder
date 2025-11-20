import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

const SearchFilter = ()=>{
    return(
        <div>
            <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search users..." className="pl-10" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    )
}

export default SearchFilter;