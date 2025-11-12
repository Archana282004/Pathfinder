import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminQuickActionsCard } from "@/lib/mock-data";
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import QuickActionCard from "./quick-actions-card";

export default function AdminQuickActions() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {AdminQuickActionsCard.map((card,index)=>(
              <QuickActionCard
              key={index}
              name={card.name}
              link={card.link}
              icon={card.icon}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}