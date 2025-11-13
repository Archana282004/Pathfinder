import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ElementType } from "react";

interface CardType {
    icon: ElementType;
    data: any;
    title: string;
    cardcontent: string;
}

const OverviewCards = ({
    icon: Icon,
    data,
    title,
    cardcontent,
}: CardType) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{data}</div>
                <p className="text-xs text-muted-foreground">{cardcontent}</p>
            </CardContent>
        </Card>
    );
}

export default OverviewCards;
