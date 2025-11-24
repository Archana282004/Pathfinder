import StudentNav from "@/components/navigation/student-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EducatorFAQslist } from "@/lib/mock-data";
import { ChevronDown } from "lucide-react";

const EducatorFAQComponent = () => {

    return (
        <div className="min-h-screen bg-background">
            <StudentNav />
            <div className="container mx-auto px-4 py-8">
                <Card className=" h-500 w-200">
                    <CardTitle className="flex justify-center text-3xl text-orange-400">Frequently Asked Questions</CardTitle>
                    <CardContent className="flex flex-col gap-2">
                        {EducatorFAQslist.map((faq, index)=> 
                        <Card key={index}>
                               <CardHeader>
                                <div className="flex flex-row justify-between">
                                 <CardTitle className="text-xl">{faq.question}</CardTitle>
                                <ChevronDown/> 
                               </div>
                               </CardHeader>
                        </Card>
                    )
                        }
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default EducatorFAQComponent;


