"use client"

import AdminNav from "@/src/components/navigation/admin-nav"
import SearchBar from "./search"
import CategoryTab from "./category-tab"
import ResourceGrid from "./resources-grid"
import Header from "@/src/components/ui/header"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/src/store/hooks"
import { getAllResources_Action } from "@/src/utils/graphql/resources/action"
interface ResourcesProps {
  total: number,
  items: {
    id:string;
    attachment: {
      file_type: string,
      file_url: string
    },
    description: string,
    resource_type: string,
    title: string
  }[]
}
const AdminResources = () => {
  const categories = ["All", "Essay Writing", "Test Prep", "Financial Aid", "Admissions"];


    const user = useAppSelector((state) => state.auth.user);
    const userId = user?.id;
  
    const resourcesInitialData: ResourcesProps = {
      total: 0,
      items: []
    };
  
    const [resources, setResources] = useState<ResourcesProps>(resourcesInitialData)
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    useEffect(() => {
      if (!userId) return;
  
      const fetchAllResources = async () => {
        const response = await getAllResources_Action({})
        setResources(response?.GetAllResources || resourcesInitialData)
      };
  
      fetchAllResources();
    }, [userId]);
  
    const categoryMap: Record<string, string> = {
      "Essay Writing": "ESSAY_WRITING",
      "Test Prep": "TEST_PREP",
      "Financial Aid": "FINANCIAL_AID",
      "Admissions": "ADMISSIONS",
    };
  
    const filteredResources =
      selectedCategory === "All"
        ? resources.items
        : resources.items.filter(
          (item) => item.resource_type === categoryMap[selectedCategory]
        );
  

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
          <CategoryTab
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* Resources Grid */}
          <ResourceGrid resources={filteredResources} />
        </div>
      </div>
    </div>
  )
}

export default AdminResources;