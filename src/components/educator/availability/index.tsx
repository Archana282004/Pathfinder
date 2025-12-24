"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import CardsHeader from "@/src/components/ui/card-header";
import { Checkbox } from "@/src/components/ui/checkbox";
import Header from "@/src/components/ui/header";
import { Label } from "@/src/components/ui/label";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/src/components/ui/popover";
import { Button } from "@/src/components/ui/button";
import {
  getEducatorAvalability_Action,
  setAvailability as setAvailabilityAPI,
} from "@/src/utils/graphql/availability/action";
import { useToast } from "@/src/hooks/use-toast";
import { Switch } from "../../ui/switch";
import { Calendar } from "../../ui/calendar";

const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));

type DayAvailabilityUI = {
  enabled: boolean;
  from: { hour: string; minute: string };
  to: { hour: string; minute: string };
};

interface AvailabilityDay {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  fullDay: boolean;
}

interface FormData {
  availabilityDays: AvailabilityDay[];
  slot_duration: any[];
  lunchBreak: {
    startTime: string;
    endTime: string;
    lunchBreak: boolean;
  };
  break: {
    break_between_interval: number;
    interval_status: boolean;
  };
  overrides?: any[];
  unavailabilityDays?: any[];
}

const initialFormData: FormData = {
  availabilityDays: [],
  slot_duration: [],
  lunchBreak: { startTime: "", endTime: "", lunchBreak: false },
  break: { break_between_interval: 0, interval_status: false },
  overrides: [],
  unavailabilityDays: [],
};

const parseTime = (time?: string) => {
  if (!time) return { hour: "00", minute: "00" };
  const cleaned = time.replace(".", ":"); 
  const [hour = "00", minute = "00"] = cleaned.split(":");
  return { hour: hour.padStart(2, "0"), minute: minute.padStart(2, "0") };
};

const toHHMM = (h: string, m: string) =>
  `${h.padStart(2, "0")}:${m.padStart(2, "0")}`;

const EducatorAvailability = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [availabilityUI, setAvailabilityUI] = useState<Record<string, DayAvailabilityUI>>({});
  const { toast } = useToast();

  useEffect(() => {
    const fetchAvailability = async () => {
      const res = await getEducatorAvalability_Action();
      const data = res?.GetEducatorAvailability;
      if (!data) return;

      setFormData(data);

      const uiState: Record<string, DayAvailabilityUI> = {};
      data.availabilityDays.forEach((day: AvailabilityDay) => {
        uiState[day.dayOfWeek] = {
          enabled: day.fullDay,
          from: parseTime(day.startTime),
          to: parseTime(day.endTime),
        };
      });

      setAvailabilityUI(uiState);
    };

    fetchAvailability();
  }, []);

  const toggleDay = (day: string) => {
    setAvailabilityUI(prev => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled },
    }));

    setFormData(prev => ({
      ...prev,
      availabilityDays: prev.availabilityDays.map(d =>
        d.dayOfWeek === day ? { ...d, fullDay: !d.fullDay } : d
      ),
    }));
  };

  const updateTime = (
    day: string,
    type: "from" | "to",
    field: "hour" | "minute",
    value: string
  ) => {
    setAvailabilityUI(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: { ...prev[day][type], [field]: value },
      },
    }));

    setFormData(prev => ({
      ...prev,
      availabilityDays: prev.availabilityDays.map(d => {
        if (d.dayOfWeek !== day) return d;

        const current = parseTime(type === "from" ? d.startTime : d.endTime);
        const newTime =
          field === "hour"
            ? toHHMM(value, current.minute)
            : toHHMM(current.hour, value);

        return {
          ...d,
          startTime: type === "from" ? newTime : d.startTime,
          endTime: type === "to" ? newTime : d.endTime,
        };
      }),
    }));
  };

  const handleSave = async () => {
    const res = await setAvailabilityAPI(formData);
    if (res?.SetEducatorAvailability?.success) {
      toast({ title: "Availability Updated Successfully" });
    }
  };

  const days = formData.availabilityDays.map(d => d.dayOfWeek);

  return (
    <div className="min-h-screen bg-background flex flex-row gap-5">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-9">
        <Header heading="Availability Management" description="Manage your educator availability and schedule" />

        <div className="flex flex-row gap-8">
          <Card className="w-175">
            <CardsHeader title="Set your Availability" description="Define your working hours for each day" />

            <CardContent className="flex flex-col gap-4">
              <CardHeader>
                <p className="flex flex-row gap-2 text-sm">
                  <Clock className="size-5" /> Session Duration
                </p>
              </CardHeader>

              <div className="flex flex-row gap-2">
                <Card className="h-20 w-100"><CardContent><CardTitle>30 mins<p className="text-sm text-muted-foreground">100 tokens</p></CardTitle></CardContent></Card>
                <Card className="h-20 w-100"><CardContent><CardTitle>60 mins<p className="text-sm text-muted-foreground">200 tokens</p></CardTitle></CardContent></Card>
              </div>

              {days.map(day => {
                const dayData = availabilityUI[day];
                if (!dayData) return null;

                return (
                  <div key={day} className="flex items-center gap-3">
                    <Checkbox checked={dayData.enabled} onCheckedChange={() => toggleDay(day)} />
                    <Label className="w-24">{day}</Label>

                    {dayData.enabled ? (
                      <>
                        <TimePicker
                          value={dayData.from}
                          onHour={h => updateTime(day, "from", "hour", h)}
                          onMinute={m => updateTime(day, "from", "minute", m)}
                        />
                        <Label>To</Label>
                        <TimePicker
                          value={dayData.to}
                          onHour={h => updateTime(day, "to", "hour", h)}
                          onMinute={m => updateTime(day, "to", "minute", m)}
                        />
                      </>
                    ) : (
                      <div className="flex items-center justify-center w-[300px] rounded-md border px-3 py-2 bg-muted text-muted-foreground">
                        Unavailable
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>

            <CardFooter>
              <Button onClick={handleSave}>Save & Update</Button>
            </CardFooter>
          </Card>

          <Card className="w-175">
            <CardsHeader title="Mark your Unavailability" description="Block dates and add breaks" />
            <CardContent className="flex flex-col gap-6">
              <div className="flex flox-row justify-between">
                <div className="flex flex-col gap-6">
                  <Label className="text-base">Set your Unavailability</Label>
                  <Card><CardContent><Calendar /></CardContent></Card>
                </div>

                <div className="flex flex-col gap-6">
                  <Label className="text-base">Set your Unavailability</Label>
                  <Card>
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
  );
};

const TimePicker = ({
  value,
  onHour,
  onMinute,
}: {
  value: { hour: string; minute: string };
  onHour: (h: string) => void;
  onMinute: (m: string) => void;
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <button className="flex items-center justify-between w-32 rounded-md border px-3 py-2">
        {value.hour}:{value.minute}
        <Clock className="w-4 h-4" />
      </button>
    </PopoverTrigger>

    <PopoverContent className="w-60">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-40 overflow-y-auto border rounded-md p-1">
          {hours.map(h => (
            <p
              key={h}
              onClick={() => onHour(h)}
              className={`p-1 cursor-pointer rounded hover:bg-accent ${value.hour === h ? "bg-accent font-semibold" : ""}`}
            >
              {h}
            </p>
          ))}
        </div>

        <div className="h-40 overflow-y-auto border rounded-md p-1">
          {minutes.map(m => (
            <p
              key={m}
              onClick={() => onMinute(m)}
              className={`p-1 cursor-pointer rounded hover:bg-accent ${value.minute === m ? "bg-accent font-semibold" : ""}`}
            >
              {m}
            </p>
          ))}
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export default EducatorAvailability;
