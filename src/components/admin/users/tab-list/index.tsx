"use client";

import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import TablistCard from "./tab-list-card";
import { Button } from "@/src/components/ui/button";

interface Items {
  id: string;
  active_status: boolean;
  created_at: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  platform: string;
  role: string;
  avatar_path: string;
  profile: {
    specizilization: string;
  };
}

interface AllUsers {
  totalEducators: number;
  totalStudents: number;
  totalUsers: number;
  items: Items[];
}

interface Props {
  activeTab: "all" | "students" | "educators";
  setActiveTab: (val: "all" | "students" | "educators") => void;
  users: AllUsers;
  students: AllUsers;
  educators: AllUsers;
  handleLoadMore: (type: "all" | "students" | "educators") => void;
}

const AdminTabslist = ({
  activeTab,
  setActiveTab,
  users,
  students,
  educators,
  handleLoadMore,
}: Props) => {
  const Userslist = [
    { value: "all", data: users.items },
    { value: "students", data: students.items },
    { value: "educators", data: educators.items },
  ];
  const totalUsers = users?.totalUsers;
  const totalEducators = users?.totalEducators;
  const totalStudents = users?.totalStudents;

  return (
    <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
      <TabsList>
        <TabsTrigger value="all">All Users ({totalUsers})</TabsTrigger>
        <TabsTrigger value="students">Students ({totalStudents})</TabsTrigger>
        <TabsTrigger value="educators">Educators ({totalEducators})</TabsTrigger>
      </TabsList>
      
      {Userslist.map((card) => (
        <TablistCard key={card.value} value={card.value} data={card.data || []} handleLoadMore={handleLoadMore} activeTab={activeTab} />

      ))}
    </Tabs>
  );
};

export default AdminTabslist;
