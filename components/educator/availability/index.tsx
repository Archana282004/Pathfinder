"use client"

import EducatorNav from "@/components/navigation/educator-nav"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CardsHeader from "@/components/ui/card-header"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/ui/header"
import { Label } from "@/components/ui/label"
import { Clock } from "lucide-react"
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));


const EducatorAvailability = () => {
  const [fromHour, setFromHour] = useState("HH");
  const [fromMinute, setFromMinute] = useState("MM");

  const [toHour, setToHour] = useState("HH");
  const [toMinute, setToMinute] = useState("MM");

  return (
    <div className="min-h-screen bg-background">
      <EducatorNav />
      <div className="container mx-auto px-4 py-8 flex flex-col gap-9">
        <Header
          heading="Availability Management"
          description="Manage your educator availability and schedule"
        />
        <div className="flex flex-row gap-8 ">
          <Card>
             <CardsHeader
                title="Set your Availability"
                description="Define your working hours for each day"
              />
            <CardContent className=" w-195 flex flex-col gap-4">
             
              <CardHeader>
                <p className="flex flex-row gap-2 text-sm">
                  <Clock className="size-5" /> Session Duration
                </p>
              </CardHeader>

              <div className="flex flex-row gap-2">
                <Card className="h-20 w-100">
                  <CardContent>
                    <CardTitle>
                      30 mins
                      <p className="text-sm text-muted-foreground">100 tokens</p>
                    </CardTitle>
                  </CardContent>
                </Card>

                <Card className="h-20 w-100">
                  <CardContent>
                    <CardTitle>
                      60 mins
                      <p className="text-sm text-muted-foreground">200 tokens</p>
                    </CardTitle>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col  gap-3 ">
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
                  (day) => (
                    <div key={day} className="flex flex-row items-center gap-3 whitespace-nowrap">
                      <Checkbox />
                      <Label>{day}</Label>

                      {/* FROM TIME */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="flex items-center justify-between w-32 rounded-md border px-3 py-2 text-left">
                            {`${fromHour}:${fromMinute}`}
                            <Clock className="w-4 h-4" />
                          </button>
                        </PopoverTrigger>

                        <PopoverContent className="w-60">
                          <div className="grid grid-cols-2 gap-4">
                            {/* Hours */}
                            <div className="h-40 overflow-y-auto border rounded-md p-1 
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                              {hours.map((h) => (
                                <p
                                  key={h}
                                  onClick={() => setFromHour(h)}
                                  className={`p-1 rounded cursor-pointer hover:bg-accent 
                ${fromHour === h ? "bg-accent font-semibold" : ""}`}
                                >
                                  {h}
                                </p>
                              ))}
                            </div>

                            {/* Minutes */}
                            <div className="h-40 overflow-y-auto border rounded-md p-1 
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                              {minutes.map((m) => (
                                <p
                                  key={m}
                                  onClick={() => setFromMinute(m)}
                                  className={`p-1 rounded cursor-pointer hover:bg-accent 
                ${fromMinute === m ? "bg-accent font-semibold" : ""}`}
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
                          <button className="flex items-center justify-between w-32 rounded-md border px-3 py-2 text-left">
                            {`${toHour}:${toMinute}`}
                            <Clock className="w-4 h-4" />
                          </button>
                        </PopoverTrigger>

                        <PopoverContent className="w-60">
                          <div className="grid grid-cols-2 gap-4">
                            {/* Hours */}
                            <div className="h-40 overflow-y-auto border rounded-md p-1 
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                              {hours.map((h) => (
                                <p
                                  key={h}
                                  onClick={() => setToHour(h)}
                                  className={`p-1 rounded cursor-pointer hover:bg-accent 
                ${toHour === h ? "bg-accent font-semibold" : ""}`}
                                >
                                  {h}
                                </p>
                              ))}
                            </div>

                            {/* Minutes */}
                            <div className="h-40 overflow-y-auto border rounded-md p-1 
              [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                              {minutes.map((m) => (
                                <p
                                  key={m}
                                  onClick={() => setToMinute(m)}
                                  className={`p-1 rounded cursor-pointer hover:bg-accent 
                ${toMinute === m ? "bg-accent font-semibold" : ""}`}
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
                )}

              </div>




            </CardContent>
            <CardFooter>
              <Button >Save & Update</Button>
            </CardFooter>
          </Card>

          <Card className=" w-175 ">
            <CardsHeader
                title="Mark your Unavailability"
                description="Block dates and add breaks"
              />
            <CardContent className="flex flex-col gap-6">
              <div className="flex flox-row justify-between">
                <div className="flex flex-col gap-6">
                  <Label className="text-base">Set your Unavailability</Label>
                  <Card>
                    <CardContent>
                      <Calendar />
                    </CardContent>
                  </Card>
                </div>

                 <div className="flex flex-col gap-6">
                  <Label  className="text-base">Set your Unavailability</Label>
                  <Card >
                    <CardContent className="w-85 flex flex-row gap-4">
                      <Label className="text-base">Blocks selected dates entirely</Label>
                      <Switch />
                    </CardContent>
                  </Card>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default EducatorAvailability;
