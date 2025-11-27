"use client"
interface availabiltyProps{
    day:string,
    time:string
}
const AvailabilityTab = ({day, time}:availabiltyProps) => {
    return (
        <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
                <p className="font-medium">{day}</p>
                <p className="text-sm text-muted-foreground">{time}</p>
            </div>
        </div>
    )
}

export default AvailabilityTab;