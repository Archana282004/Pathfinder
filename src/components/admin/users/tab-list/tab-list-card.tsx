import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { TabsContent } from "@/src/components/ui/tabs";
import { MoreVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import KebabMenu from "../kebab-menu-modal";

interface User {
  id: string;
  name: string;
  role: string;
  status: string;
  joinDate: string;
  avatar?: string;
  title?: string;
}

interface tablistcardprops {
  value: string;
  title: string;
  description: string;
  data: User[];
}

const TablistCard = ({ value, data }: tablistcardprops) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMenu = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id)); // toggle menu
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenMenuId(null); // close any open menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <TabsContent value={value} className="space-y-4" ref={containerRef}>
      <Card>
        <CardContent>
          <div className="space-y-3">
            {data.map((user) => (
              <div
                key={user.id}
                className="relative flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Joined {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant={user.status === "active" ? "default" : "secondary"}
                  >
                    {user.status}
                  </Badge>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleMenu(user.id)}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>

                {/* Dropdown menu only for the clicked user */}
                {openMenuId === user.id && (
                  <KebabMenu id={user.id}/>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default TablistCard;
