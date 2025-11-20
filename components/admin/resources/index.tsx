"use client"

import AdminNav from "@/components/navigation/admin-nav"
import { mockResources } from "@/lib/mock-data"
import SearchBar from "./search"
import CategoryTab from "./category-tab"
import ResourceGrid from "./resources-grid"
import Header from "@/components/ui/header"
import { Button } from "@/components/ui/button"

const AdminResources = () => {
  const categories = ["All", "Essay Writing", "Test Prep", "Financial Aid", "Admissions"]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="Resource Library" description="Educational materials and guides to help your college journey" />

              <Button size="sm">
                Add Resource
              </Button>

          </div>
          {/* Search and Filter */}
          <SearchBar />

          {/* Category Tabs */}
          <CategoryTab categories={categories} />

          {/* Resources Grid */}
          <ResourceGrid mockResources={mockResources} />
        </div>
      </div>
    </div>
  )
}

export default AdminResources;