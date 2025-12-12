"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { getAllResources_Action } from "@/src/utils/graphql/resources/action";
import { Search } from "lucide-react";

export interface PaginationProps {
    limit: number;
    page: number;
    resource_type: string;
    search: string;
}

interface SearchBarProps {
    pagination: PaginationProps;
    setPagination: React.Dispatch<React.SetStateAction<PaginationProps>>;
}

const SearchBar = ({ pagination, setPagination }: SearchBarProps) => {
    const handleSearch = (e: any) => {
        setPagination((prev) => ({
            ...prev,
            search: e.target.value,
            page: 1,
        }));
    };

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search..."
                            className="pl-10"
                            value={pagination.search}
                            onChange={handleSearch}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SearchBar;
