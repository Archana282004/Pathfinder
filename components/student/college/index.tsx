"use client"

import { useState } from "react"
import { StudentNav } from "@/components/navigation/student-nav"
import { mockColleges } from "@/lib/mock-data"
import SearchFilter from "./search-filter"
import SavedColleges from "./saved-colleges"
import { College } from "@/lib/types"
import SearchResults from "./search-results"
import CollegeCardComponent from "./college-card"

const CollegesComponent = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [typeFilter, setTypeFilter] = useState<string>("all")
    const [sizeFilter, setSizeFilter] = useState<string>("all")
    const [savedColleges, setSavedColleges] = useState<string[]>(["col-1", "col-2"])

    const filteredColleges = mockColleges.filter((college) => {
        const matchesSearch =
            college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            college.majors.some((major) => major.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesType = typeFilter === "all" || college.type === typeFilter
        const matchesSize = sizeFilter === "all" || college.size === sizeFilter

        return matchesSearch && matchesType && matchesSize
    })

    const toggleSave = (collegeId: string) => {
        setSavedColleges((prev) =>
            prev.includes(collegeId) ? prev.filter((id) => id !== collegeId) : [...prev, collegeId],
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <StudentNav />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">College Search</h1>
                    <p className="text-muted-foreground">Discover and compare colleges that match your profile and goals</p>
                </div>

                {/* Search and Filters */}
                <SearchFilter searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    typeFilter={typeFilter}
                    setTypeFilter={setTypeFilter}
                    sizeFilter={sizeFilter}
                    setSizeFilter={setSizeFilter} />

                {/* Saved Colleges */}
                <SavedColleges
                    savedColleges={savedColleges}
                    mockColleges={mockColleges}
                    CollegeCard={CollegeCard}
                    toggleSave={toggleSave}
                />

                {/* Search Results */}
                <SearchResults
                    searchQuery={searchQuery}
                    filteredColleges={filteredColleges}
                    CollegeCard={CollegeCard}
                    savedColleges={savedColleges}
                    toggleSave={toggleSave} />
            </div>
        </div>
    )
}

function CollegeCard({
    college,
    isSaved,
    onToggleSave,
}: {
    college: College
    isSaved: boolean
    onToggleSave: (id: string) => void
}) {
    return (
        <CollegeCardComponent 
        isSaved={isSaved}
        college={college}
        onToggleSave={onToggleSave}
        />
    )
}

export default CollegesComponent;