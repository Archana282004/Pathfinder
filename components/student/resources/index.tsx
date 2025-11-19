"use client"

import  StudentNav  from "@/components/navigation/student-nav"
import { mockResources } from "@/lib/mock-data"
import SearchFilter from "./search-filter"
import CategoryTab from "./category-tab"
import ResourceGrid from "./resources-grid"
import Header from "@/components/ui/header"

const StudentResources = () => {
  const categories = ["All", "Essay Writing", "Test Prep", "Financial Aid", "Admissions"]

  return (
    <div className="min-h-screen bg-background">
      <StudentNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <Header heading="Resource Library" description="Educational materials and guides to help your college journey" />

          {/* Search and Filter */}
          <SearchFilter />

          {/* Category Tabs */}
          <CategoryTab categories={categories} />

          {/* Resources Grid */}
         <ResourceGrid mockResources={mockResources}/>
        </div>
      </div>
    </div>
  )
}

export default StudentResources;