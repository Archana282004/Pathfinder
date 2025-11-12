import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ElementType } from "react";

interface QuickActionType{
    name:string,
    link:string,
    icon:ElementType
}
export default function QuickActionCard({name, icon:Icon, link}:QuickActionType) {
    return (
        <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
            <Link href={link}>
                <Icon className="w-6 h-6" />
                {name}
            </Link>
        </Button>
    )
}