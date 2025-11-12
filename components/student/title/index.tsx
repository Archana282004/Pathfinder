interface titletype {
    heading:string,
    description:string
}
export default function Title({heading, description}:titletype){
    return(
        <div>
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
    )
}