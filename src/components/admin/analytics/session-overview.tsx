"use client"

import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
interface SessionOverviewProps {
    sessionData: {
        cancelled: number,
        completed: number,
        upcoming: number,
        expired: number
    }
}
const SessionOverview = ({ sessionData }: SessionOverviewProps) => {
    const data = [
        { name: "Upcoming", value: sessionData?.upcoming, color: "orange" },
        { name: "Completed", value: sessionData?.completed, color: "green" },
        { name: "Expired", value: sessionData?.expired, color: "red" },
        { name: "Cancelled", value: sessionData?.cancelled, color: "yellow" },
    ]
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-bold">Session Overview</CardTitle>
            </CardHeader>
            <div className="w-full h-84">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            label={{ value: "Value", position: "insideBottom", offset: -5 }}
                        />

                        <YAxis ticks={[0, 50, 100, 150, 200]} />
                        <Tooltip />
                        <Bar dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

export default SessionOverview;