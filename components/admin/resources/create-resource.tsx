import AdminNav from "@/components/navigation/admin-nav";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { ArrowLeftSquare } from "lucide-react";

const CreateResourceComponent = () =>{
    return(
       <div className="min-h-screen bg-background">
      <AdminNav />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Header heading="Add Resource" description="Create a new educational resource" />

              <Button size="sm">
                <ArrowLeftSquare />
                Back
              </Button>

          </div>
        </div>
      </div>
    </div>
    )
}

export default CreateResourceComponent;