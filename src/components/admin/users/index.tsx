"use client";

import AdminNav from "@/src/components/navigation/admin-nav";
import { Button } from "@/src/components/ui/button";
import SearchFilter from "./search-filter";
import AdminTabslist from "./tab-list";
import Header from "../../ui/header";
import { useEffect, useRef, useState } from "react";
import UserForm from "./add-user";
import { signUp } from "@/src/store/actions/authaction";
import { updateUser_Action } from "@/src/utils/graphql/auth/action";
import SimpleReactValidator from "simple-react-validator";
import { useToast } from "@/src/hooks/use-toast";
import { useAppSelector } from "@/src/store/hooks";
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
  };
}

interface AllUsers {
  totalEducators: number;
  totalStudents: number;
  totalUsers: number;
  items: Items[];
}

interface PaginationProps {
  page: number;
  limit: number;
  role?: string;
  search:string;
}

const AdminUsers = () => {
  const user = useAppSelector((state) => state.auth.user);
  const UserId = user?.id;
  const { toast } = useToast();

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");

  const initialUsers: AllUsers = {
    totalEducators: 0,
    totalStudents: 0,
    totalUsers: 0,
    items: [],
  };

  const [users, setUsers] = useState<AllUsers>(initialUsers);
  const [students, setStudents] = useState<AllUsers>(initialUsers);
  const [educators, setEducators] = useState<AllUsers>(initialUsers);

  const [allUsersPagination, setAllUsersPagination] = useState<PaginationProps>({
    page: DEFAULT_PAGINATION.PAGE,
    limit: DEFAULT_PAGINATION.LIMIT,
    search: "",
  });

  const [studentsPagination, setStudentsPagination] = useState<PaginationProps>({
    page: DEFAULT_PAGINATION.PAGE,
    limit: DEFAULT_PAGINATION.LIMIT,
    role: "STUDENT",
    search: "",
  });

  const [educatorsPagination, setEducatorsPagination] = useState<PaginationProps>({
    page: DEFAULT_PAGINATION.PAGE,
    limit: DEFAULT_PAGINATION.LIMIT,
    role: "EDUCATOR",
    search: "",
  });

  const [activeTab, setActiveTab] = useState<"all" | "students" | "educators">("all");

  const fetchUsers = async (
    pagination: PaginationProps,
    setState: React.Dispatch<React.SetStateAction<AllUsers>>
  ) => {
    if (!UserId) return;

    const response = await getUsers_Action({
      filter: pagination,
    });

    setState((prev) => ({
      ...response.users,
      items:
        pagination.page === 1
          ? response.users.items
          : [...prev.items, ...response.users.items],
    }));
  };

  useEffect(() => {
    fetchUsers(allUsersPagination, setUsers);
  }, [allUsersPagination, UserId]);

  useEffect(() => {
    fetchUsers(studentsPagination, setStudents);
  }, [studentsPagination, UserId]);

  useEffect(() => {
    fetchUsers(educatorsPagination, setEducators);
  }, [educatorsPagination, UserId]);

  const handleLoadMore = (type: "all" | "students" | "educators") => {
    if (type === "all") {
      setAllUsersPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    } else if (type === "students") {
      setStudentsPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    } else {
      setEducatorsPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const handleSearch = (type: "all" | "students" | "educators", search: string) => {
    if (type === "all") {
      setAllUsersPagination({ ...allUsersPagination, page: 1, search: search });
    } else if (type === "students") {
      setStudentsPagination({ ...studentsPagination, page: 1, search: search });
    } else {
      setEducatorsPagination({ ...educatorsPagination, page: 1, search: search });
    }
  }

  const initialForm = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [, forceUpdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => forceUpdate((n) => n + 1) },
    })
  ).current;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validator.allValid()) {
      validator.showMessages();
      forceUpdate((n) => n + 1);
      return;
    }
    if (mode === "create") {
        const response = await signUp({ ...formData, role: formData.role.toUpperCase() });
        if (response?.signUp?.success) {
          toast({
            title: "User Created Successfully",
            variant: "default",
          });
          setFormData(initialForm)
          setIsOpen(false);
        }
        else {
          toast({ title: response?.message || "Something went wrong", variant: "destructive" });
          setFormData(initialForm)
          setIsOpen(false);
        }
      }
  } 

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="flex justify-between">
          <Header heading="User Management" description="Manage all platform users" />
          <Button onClick={() => setIsOpen(true)}>Add New User</Button>
        </div>

        <SearchFilter
          activeTab={activeTab}
          handleSearch={handleSearch}
        />

        <AdminTabslist
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          users={users}
          students={students}
          educators={educators}
          handleLoadMore={handleLoadMore}
        />

        <UserForm
          open={isOpen}
          setOpen={setIsOpen}
          mode={mode}
          formData={formData}
          setFormData={setFormData}
          validator={validator}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AdminUsers;
