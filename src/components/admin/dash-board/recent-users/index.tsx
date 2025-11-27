import { Button } from "@/src/components/ui/button";
import { Card, CardContent} from "@/src/components/ui/card";
import Link from "next/link";
import RecentUsersCard from "./recent-users-card";
import CardsHeader from "@/src/components/ui/card-header";

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

const AdminRecentUsers = ({ recentUsers }: RecentUsersTableProps) => {
  return (
    <div>
      <Card>
        <CardsHeader
          title="Recent Users" description="Newly registered users" />
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

export default AdminRecentUsers;