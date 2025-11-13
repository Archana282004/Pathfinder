import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TablistCard from "./tab-list-card";
import { UserTablist } from "@/lib/mock-data";

interface User {
  id: string;
  name: string;
  role: string;
  status: string;
  joinDate: string;
  avatar?: string;
  title?: string;
}

interface TabsListProps {
  students: User[];
  educators: User[];
  allUsers: User[];
}

const AdminTabslist=({ students, educators, allUsers }: TabsListProps) => {
  return (
    <Tabs defaultValue="all" className="space-y-6">
      <TabsList>
        <TabsTrigger value="all">All Users ({allUsers.length})</TabsTrigger>
        <TabsTrigger value="students">Students ({students.length})</TabsTrigger>
        <TabsTrigger value="educators">Educators ({educators.length})</TabsTrigger>
      </TabsList>

      {UserTablist.map((card, index)=>(
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