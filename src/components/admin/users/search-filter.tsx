"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Search } from "lucide-react";

interface Props {
  activeTab: "all" | "students" | "educators";
  handleSearch: (type: "all" | "students" | "educators", search: string) => void;
}

const SearchFilter = ({ activeTab, handleSearch }: Props) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-10"
              onChange={(e) => handleSearch(activeTab, e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilter;
