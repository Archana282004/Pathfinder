import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RecentUsersCard from "./recent-users-card";

type StudentUser = {
  id: string;
  name: string;
  role: string;
  status: string;
  joinDate: string;
  grade?: string;
  gpa?: number;
  targetSchools?: string[];
  avatar: string;
};

type EducatorUser = {
  id: string;
  name: string;
  role: string;
  status: string;
  joinDate: string;
  department?: string;
  availability?: string[];
  avatar: string;
};

type AdminUser = {
  id: string;
  name: string;
  role: string;
  status: string;
  joinDate: string;
  avatar: string;
};

type User = StudentUser | EducatorUser | AdminUser;

interface RecentUsersTableProps {
  recentUsers: User[];
}

export default function AdminRecentUsers({ recentUsers }: RecentUsersTableProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Users</CardTitle>
          <CardDescription>Newly registered users</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentUsers.map((user) => (
            <RecentUsersCard
            key={user.id}
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