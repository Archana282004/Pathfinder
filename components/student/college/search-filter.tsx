"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  typeFilter: string;
  setTypeFilter: React.Dispatch<React.SetStateAction<string>>;

  sizeFilter: string;
  setSizeFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilter = ({searchQuery, setSearchQuery, typeFilter, setTypeFilter, sizeFilter, setSizeFilter}:FilterProps) => {
    return (
        <Card className="p-6 mb-8">
            <div className="space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                        placeholder="Search by college name, location, or major..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Filters:</span>
                    </div>

                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="Public">Public</SelectItem>
                            <SelectItem value="Private">Private</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={sizeFilter} onValueChange={setSizeFilter}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Sizes</SelectItem>
                            <SelectItem value="Small">Small</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Large">Large</SelectItem>
                        </SelectContent>
                    </Select>

                    {(searchQuery || typeFilter !== "all" || sizeFilter !== "all") && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                setSearchQuery("")
                                setTypeFilter("all")
                                setSizeFilter("all")
                            }}
                        >
                            Clear Filters
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default SearchFilter