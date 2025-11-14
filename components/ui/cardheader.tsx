import { CardDescription, CardHeader, CardTitle } from "./card"
interface CardHeaderType{
    title:string,
    description: string
}
const CardsHeader= ({title, description}:CardHeaderType)=>{
    return(
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
    )
}

export default CardsHeader;