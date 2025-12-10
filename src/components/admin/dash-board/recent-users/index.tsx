"use client"

import { Button } from "@/src/components/ui/button";
import { Card, CardContent} from "@/src/components/ui/card";
import Link from "next/link";
import RecentUsersCard from "./recent-users-card";
import CardsHeader from "@/src/components/ui/card-header";


  interface User {
    id:string,
    first_name: string,
    last_name: string
    role: string
    created_at: string
  }

interface RecentUsersTableProps {
  recentUsers: User[];
}

const AdminRecentUsers = ({ recentUsers }: RecentUsersTableProps) => {
  return (
    <div>
      <Card>
        <CardsHeader
          title="Recent Users" description="Newly registered users" />
        <CardContent className="space-y-4">
          {recentUsers.slice(0,3).map((user, index) => (
            <RecentUsersCard
              key={index}
              user={user}
            />
          ))}
          <Button className="w-full" asChild>
            <Link href="/admin/users">View All Users</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )

}

export default AdminRecentUsers;