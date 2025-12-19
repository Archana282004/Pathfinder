import BookNewSession from "@/src/components/student/sessions/book-session"
import { STORAGE_KEYS } from "@/src/utils/constant";
import { cookies } from "next/headers";

const BookNewSessionPage = async() =>{

   const cookieStore = await cookies();
    const user = cookieStore.get(STORAGE_KEYS.USER)?.value;
    console.log("USER", user)
    return(
        <BookNewSession />
    )
}

export default BookNewSessionPage;