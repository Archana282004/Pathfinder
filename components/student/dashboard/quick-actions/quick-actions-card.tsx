import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ElementType } from "react";

interface QuickActionsCard {
    data: string,
    icon: ElementType,
    link: string
}
export default function QuickActionCard({ data, icon: Icon, link }: QuickActionsCard) {
    return (
        <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
            <Link href={link}>
                <Icon className="w-6 h-6" />
                {data}
            </Link>
        </Button>
    )
}