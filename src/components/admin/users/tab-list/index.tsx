"use client"
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import TablistCard from "./tab-list-card";
import { useAppSelector } from "@/src/store/hooks";
import { useEffect, useState } from "react";
import { getUsers_Action } from "@/src/utils/graphql/users/action";
import { DEFAULT_PAGINATION } from "@/src/utils/constant";


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
  }
}
interface AllUsers {
  totalEducators: number;
  totalStudents: number;
  totalUsers: number;
  items: Items[];
}

const AdminTabslist = () => {

  const user = useAppSelector((state) => state.auth.user);
  const UserId = user?.id;

  const AllUsersInitialData = {
    totalEducators: 0,
    totalStudents: 0,
    totalUsers: 0,
    items: []
  }

  const [Users, setUsers] = useState<AllUsers>(AllUsersInitialData);
  const [students, setStudents] = useState<AllUsers>(AllUsersInitialData);
  const [educators, setEducators] = useState<AllUsers>(AllUsersInitialData);

  const [allUsersPagination, setAllUsersPagination] = useState<{ page: number, limit: number }>({
    page: DEFAULT_PAGINATION.PAGE,
    limit: DEFAULT_PAGINATION.LIMIT
  });

  const [educatorsPagination, setEducatorsPagination] = useState<{ page: number, limit: number , role:string}>({
    page: DEFAULT_PAGINATION.PAGE,
    limit: DEFAULT_PAGINATION.LIMIT,
    role:"EDUCATOR"
  });
  const [studentsPagination, setStudentsPagination] = useState<{ page: number, limit: number , role:string}>({
    page: DEFAULT_PAGINATION.PAGE,
    limit: DEFAULT_PAGINATION.LIMIT,
    role:"STUDENT"
  });

  useEffect(() => {
    if (!UserId) return;

    const fetchAllUsers = async () => {
      const response = await getUsers_Action({ UserId });
      setUsers(response?.users);
    };

    const fetchAllEducators = async () => {
      const response = await getUsers_Action({filter: { "role": "EDUCATOR" } } );
      setEducators(response?.users);
    };

    const fetchAllStudents = async () => {
      const response = await getUsers_Action({filter: { "role": "STUDENT" } } );
      setStudents(response?.users);
    };

    fetchAllUsers();
    fetchAllEducators();
    fetchAllStudents();
  }, [UserId]);

  const Userslist = [
    {
      value: "all",
      title: "All Users",
      description: "Complete list of platform users",
      data: Users?.items
    },
    {
      value: "students",
      title: "Students",
      description: "All registered students",
      data: students?.items
    },
    {
      value: "educators",
      title: "Educators",
      description: "All registered educators",
      data: educators?.items
    }
  ]
  return (
    <Tabs defaultValue="all" className="space-y-6">
      <TabsList>
        <TabsTrigger value="all">All Users ({Users?.totalUsers})</TabsTrigger>
        <TabsTrigger value="students">Students ({Users?.totalStudents})</TabsTrigger>
        <TabsTrigger value="educators">Educators ({Users?.totalEducators})</TabsTrigger>
      </TabsList>

      {Userslist.map((card, index) => (
        <TablistCard
          key={index}
          title={card.title}
          value={card.value}
          description={card.description}
          data={card.data}
        />
      ))}
    </Tabs>
  );
}

export default AdminTabslist