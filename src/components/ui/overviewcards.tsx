import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { ElementType } from "react";

interface CardType {
    icon: ElementType;
    data: any;
    title: string;
}

const OverviewCards = ({
    icon: Icon,
    data,
    title,
}: CardType) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{data}</div>
            </CardContent>
        </Card>
    );
}

export default OverviewCards;
