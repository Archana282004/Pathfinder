import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, DollarSign, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

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
            <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
              <Link href="/admin/users">
                <Users className="w-6 h-6" />
                Manage Users
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
              <Link href="/admin/payments">
                <DollarSign className="w-6 h-6" />
                View Payments
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
              <Link href="/admin/analytics">
                <TrendingUp className="w-6 h-6" />
                Analytics
              </Link>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent" asChild>
              <Link href="/admin/settings">
                <Calendar className="w-6 h-6" />
                Settings
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}