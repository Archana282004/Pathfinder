import { useRouter } from "next/navigation";
interface KebabMenuProps{
    id:string
}

const KebabMenu = ({id}:KebabMenuProps) => {
    const router = useRouter();
    const handleView = () =>{
        router.push(`/admin/users/${id}`)
    }
    return (
        <div className="absolute right-10 top-14 bg-black shadow-md border rounded-md p-2 w-32 z-50">
            <p className="p-2 hover:bg-gray-100 cursor-pointer" onClick={handleView}>View</p>
            <p className="p-2 hover:bg-gray-100 cursor-pointer">Edit</p>
            <p className="p-2 hover:bg-gray-100 cursor-pointer">Inactive</p>
        </div>
    )
}

export default KebabMenu;
