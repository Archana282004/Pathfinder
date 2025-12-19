"use client"

import EducatorNav from "@/src/components/navigation/educator-nav"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import CardsHeader from "@/src/components/ui/card-header"
import { Checkbox } from "@/src/components/ui/checkbox"
import Header from "@/src/components/ui/header"
import { Label } from "@/src/components/ui/label"
import { Clock } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/src/components/ui/popover"
import { Button } from "@/src/components/ui/button"
import { useAppSelector } from "@/src/store/hooks"
import { getEducatorAvalability_Action } from "@/src/utils/graphql/availability/action"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"))

type DayAvailability = {
  enabled: boolean
  from: { hour: string; minute: string }
  to: { hour: string; minute: string }
}

const EducatorAvailability = () => {
  const [availability, setAvailability] = useState<Record<string, DayAvailability>>(
    days.reduce((acc, day) => {
      acc[day] = {
        enabled: false,
        from: { hour: "HH", minute: "MM" },
        to: { hour: "HH", minute: "MM" }
      }
      return acc
    }, {} as Record<string, DayAvailability>)
  )

  const toggleDay = (day: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled
      }
    }))
  }

  const updateTime = (
    day: string,
    type: "from" | "to",
    field: "hour" | "minute",
    value: string
  ) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: {
          ...prev[day][type],
          [field]: value
        }
      }
    }))
  }

  const user = useAppSelector((state)=> state.auth.user);
  const userId = user?.id;

  useEffect(()=>{
    const fetchEducatorAvailability = async () =>{
      const response = await getEducatorAvalability_Action();
      const data = response?.GetEducatorAvailability;
    }

    fetchEducatorAvailability();

  },[userId])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-9">

        <Header
          heading="Availability Management"
          description="Manage your educator availability and schedule"
        />

        <Card>
          <CardsHeader
            title="Set your Availability"
            description="Define your working hours for each day"
          />

          <CardContent className="flex flex-col gap-4">

            {days.map(day => {
              const dayData = availability[day]

              return (
                <div key={day} className="flex items-center gap-3">

                  <Checkbox
                    checked={dayData.enabled}
                    onCheckedChange={() => toggleDay(day)}
                  />

                  <Label className="w-24">{day}</Label>

                  {/* FROM TIME */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        disabled={!dayData.enabled}
                        className="flex items-center justify-between w-32 rounded-md border px-3 py-2 disabled:opacity-50"
                      >
                        {`${dayData.from.hour}:${dayData.from.minute}`}
                        <Clock className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-60">
                      <div className="grid grid-cols-2 gap-4">

                        <div className="h-40 overflow-y-auto border rounded-md p-1">
                          {hours.map(h => (
                            <p
                              key={h}
                              onClick={() => updateTime(day, "from", "hour", h)}
                              className={`p-1 cursor-pointer rounded hover:bg-accent ${
                                dayData.from.hour === h ? "bg-accent font-semibold" : ""
                              }`}
                            >
                              {h}
                            </p>
                          ))}
                        </div>

                        <div className="h-40 overflow-y-auto border rounded-md p-1">
                          {minutes.map(m => (
                            <p
                              key={m}
                              onClick={() => updateTime(day, "from", "minute", m)}
                              className={`p-1 cursor-pointer rounded hover:bg-accent ${
                                dayData.from.minute === m ? "bg-accent font-semibold" : ""
                              }`}
                            >
                              {m}
                            </p>
                          ))}
                        </div>

                      </div>
                    </PopoverContent>
                  </Popover>

                  <Label>To</Label>

                  {/* TO TIME */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        disabled={!dayData.enabled}
                        className="flex items-center justify-between w-32 rounded-md border px-3 py-2 disabled:opacity-50"
                      >
                        {`${dayData.to.hour}:${dayData.to.minute}`}
                        <Clock className="w-4 h-4" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-60">
                      <div className="grid grid-cols-2 gap-4">

                        <div className="h-40 overflow-y-auto border rounded-md p-1">
                          {hours.map(h => (
                            <p
                              key={h}
                              onClick={() => updateTime(day, "to", "hour", h)}
                              className={`p-1 cursor-pointer rounded hover:bg-accent ${
                                dayData.to.hour === h ? "bg-accent font-semibold" : ""
                              }`}
                            >
                              {h}
                            </p>
                          ))}
                        </div>

                        <div className="h-40 overflow-y-auto border rounded-md p-1">
                          {minutes.map(m => (
                            <p
                              key={m}
                              onClick={() => updateTime(day, "to", "minute", m)}
                              className={`p-1 cursor-pointer rounded hover:bg-accent ${
                                dayData.to.minute === m ? "bg-accent font-semibold" : ""
                              }`}
                            >
                              {m}
                            </p>
                          ))}
                        </div>

                      </div>
                    </PopoverContent>
                  </Popover>

                </div>
              )
            })}

          </CardContent>

          <CardFooter>
            <Button onClick={() => console.log(availability)}>
              Save & Update
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default EducatorAvailability
