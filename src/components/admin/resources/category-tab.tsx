import { Button } from "@/src/components/ui/button";

interface categories {
    categories: string[]
}
const CategoryTab = ({ categories }: categories) => {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} className="hover:bg-transparent hover:text-orange-400" size="sm">
                    {category}
                </Button>
            ))}
        </div>
    )
}

export default CategoryTab;