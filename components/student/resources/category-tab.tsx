import { Button } from "@/components/ui/button";

interface categories {
    categories: string[]
}
export default function CategoryTab({ categories }: categories) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                    {category}
                </Button>
            ))}
        </div>
    )
}