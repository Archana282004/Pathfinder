"use client"

import AdminNav from "@/src/components/navigation/admin-nav"
import { mockResources } from "@/src/lib/mock-data"
import SearchBar from "./search"
import CategoryTab from "./category-tab"
import ResourceGrid from "./resources-grid"
import Header from "@/src/components/ui/header"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"

const AdminResources = () => {
  const categories = ["All", "Essay Writing", "Test Prep", "Financial Aid", "Admissions"]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="Resource Library" description="Educational materials and guides to help your college journey" />

              <Link href="/admin/resources/create-resource" >
              <Button size="sm">
                Add Resource
              </Button>
              </Link>

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