import { Badge } from "@/src/components/ui/badge";

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
  user: User;
}
const RecentUsersCard = ({user}:RecentUsersTableProps) =>{
    return(
        <div>
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{user.name}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="capitalize">
                    {user.role}
                  </Badge>
                  <span>•</span>
                  <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
        </div>
    )
}

export default RecentUsersCard;