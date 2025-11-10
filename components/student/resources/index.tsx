"use client"

import { StudentNav } from "@/components/navigation/student-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Video, Download, Search, Filter } from "lucide-react"
import { mockResources } from "@/lib/mock-data"
import SearchFilter from "./search-filter"
import CategoryTab from "./category-tab"
import ResourceGrid from "./resources-grid"

export default function StudentResources() {
  const categories = ["All", "Essay Writing", "Test Prep", "Financial Aid", "Admissions"]

  return (
    <div className="min-h-screen bg-background">
      <StudentNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Resource Library</h1>
            <p className="text-muted-foreground">Educational materials and guides to help your college journey</p>
          </div>

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
