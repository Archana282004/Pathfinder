"use client"

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { ElementType } from "react";

interface ActionTabProps {
    link: string,
    icon: ElementType,
    data: string
}
const QuickActionTab = ({ link, icon: Icon, data }: ActionTabProps) => {
    return (
        <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
            <Link href={link}>
                <Icon className="w-6 h-6" />
                {data}
            </Link>
        </Button>
    )
}

export default QuickActionTab;