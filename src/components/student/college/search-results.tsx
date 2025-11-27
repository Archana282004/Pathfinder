import { Card } from "@/src/components/ui/card"
import { College } from "@/src/lib/types"
import { GraduationCap } from "lucide-react"
import { CollegeCardProps } from "./saved-colleges"

interface SearchResultsProps {
    searchQuery: string,
    filteredColleges: College[],
    savedColleges: string[],
    CollegeCard: React.ComponentType<CollegeCardProps>,
    toggleSave: (id: string) => void
}
const SearchResults = ({ searchQuery, filteredColleges, CollegeCard, savedColleges, toggleSave }: SearchResultsProps) => {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                    {searchQuery ? `Search Results (${filteredColleges.length})` : "Recommended Colleges"}
                </h2>
                <div className="text-sm text-muted-foreground">{filteredColleges.length} colleges found</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filteredColleges.map((college) => (
                    <CollegeCard
                        key={college.id}
                        college={college}
                        isSaved={savedColleges.includes(college.id)}
                        onToggleSave={toggleSave}
                    />
                ))}
            </div>

            {filteredColleges.length === 0 && (
                <Card className="p-12 text-center">
                    <GraduationCap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
                    <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
                </Card>
            )}
        </div>
    )
}

export default SearchResults;