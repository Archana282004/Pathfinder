"use client"
interface availabiltyProps{
    day:string,
    startTime:string,
    endTime:string
}
const AvailabilityTab = ({day, startTime, endTime}:availabiltyProps) => {
    return (
        <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
                <p className="font-medium">{day}</p>
                <p className="text-sm text-muted-foreground">{startTime}-{endTime}</p>
            </div>
        </div>
    )
}

export default AvailabilityTab;