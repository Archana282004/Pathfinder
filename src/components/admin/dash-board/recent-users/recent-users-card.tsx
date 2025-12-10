"use client"

import { Badge } from "@/src/components/ui/badge";

  interface User {
    id:string
    first_name: string,
    last_name: string
    role: string
    created_at: string
  }

interface RecentUsersTableProps {
  user: User;
}
const RecentUsersCard = ({user}:RecentUsersTableProps) =>{
    return(
        <div>
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <p className="font-medium">{user?.first_name + " " + user?.last_name}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                 {user?.role=="EDUCATOR" ? 
                  <Badge variant="secondary" className="capitalize">
                    {user?.role}
                  </Badge>
                  :
                   <Badge variant="default" className="capitalize">
                    {user?.role}
                  </Badge>
                  }
                  <span>•</span>
                  <span>{new Date(user?.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
        </div>
    )
}

export default RecentUsersCard;