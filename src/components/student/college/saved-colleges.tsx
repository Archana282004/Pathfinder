import { College } from "@/src/lib/types";
import { Heart } from "lucide-react";

export type CollegeCardProps = {
  college: College
  isSaved: boolean
  onToggleSave: (id: string) => void
}
interface SavedCollegeProps{
   mockColleges:College[],
   savedColleges:string[],
   CollegeCard: React.ComponentType<CollegeCardProps>,
   toggleSave:  (id: string) => void
}
const SavedColleges = ({ savedColleges, mockColleges, CollegeCard, toggleSave }:SavedCollegeProps) => {
    return (
        <div>
            {savedColleges.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <Heart className="w-6 h-6 text-primary fill-primary" />
                        My Saved Colleges ({savedColleges.length})
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {mockColleges
                            .filter((college) => savedColleges.includes(college.id))
                            .map((college) => (
                                <CollegeCard key={college.id} college={college} isSaved={true} onToggleSave={toggleSave} />
                            ))}
                    </div>
                </div>
            )
            }
        </div>

    )
}

export default SavedColleges;