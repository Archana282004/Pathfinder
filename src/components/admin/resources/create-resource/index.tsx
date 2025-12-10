"use client"

import AdminNav from "@/src/components/navigation/admin-nav";
import { Button } from "@/src/components/ui/button";
import Header from "@/src/components/ui/header";
import { ArrowLeftIcon, ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import CreateResourceCard from "./create-resource-card";

const CreateResourceComponent = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="Add Resource" description="Create a new educational resource" />

            <Link href="/admin/resources">
              <Button size="sm">
                <ArrowLeftIcon />
                Back
              </Button>
            </Link>
          </div>
          <CreateResourceCard />
        </div>
      </div>
    </div>
  )
}

export default CreateResourceComponent;