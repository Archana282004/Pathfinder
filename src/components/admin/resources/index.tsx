"use client";

import AdminNav from "@/src/components/navigation/admin-nav";
import SearchBar from "./search";
import CategoryTab from "./category-tab";
import ResourceGrid from "./resources-grid";
import Header from "@/src/components/ui/header";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/src/store/hooks";
import { getAllResources_Action } from "@/src/utils/graphql/resources/action";

interface PaginationProps {
  limit: number;
  page: number;
  search: string;
  resource_type: string | null;
}

const AdminResources = () => {
  const categories = [
    "All",
    "Essay Writing",
    "Test Prep",
    "Financial Aid",
    "Admissions",
  ];

  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.id;

  const [resources, setResources] = useState({ total: 0, items: [] });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [pagination, setPagination] = useState<PaginationProps>({
    limit: 10,
    page: 1,
    search: "",
    resource_type: null,
  });

  const categoryMap: Record<string, string> = {
    "Essay Writing": "ESSAY_WRITING",
    "Test Prep": "TEST_PREP",
    "Financial Aid": "FINANCIAL_AID",
    "Admissions": "ADMISSIONS",
  };

  const handleSearch = (value: string) => {
    setPagination((prev) => ({
      ...prev,
      search: value,
      page: 1,
    }));
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

    setPagination((prev) => ({
      ...prev,
      page: 1,
      resource_type: category === "All" ? null : categoryMap[category],
    }));
  };



  useEffect(() => {
    if (!userId) return;

      const fetchAllResources = async () => {
        const response = await getAllResources_Action({
          variables: {
            searchFilter: {
              limit: pagination.limit, page: pagination.page, search: pagination.search, resource_type: pagination.resource_type
            }
          }
        });
        
        setResources(response?.GetAllResources || { total: 0, items: [] });
      };

      fetchAllResources();
  }, [userId, pagination]);


  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex justify-between">
          <Header
            heading="Resource Library"
            description="Educational materials and guides to help your college journey"
          />

          <Link href="/admin/resources/create-resource">
            <Button size="sm">Add Resource</Button>
          </Link>
        </div>

        <SearchBar handleSearch={handleSearch} />

        <CategoryTab
          categories={categories}
          selected={selectedCategory}
          handleSelect={handleCategorySelect}
        />

        <ResourceGrid resources={resources.items} />

      </div>
    </div>
  );
};

export default AdminResources;
