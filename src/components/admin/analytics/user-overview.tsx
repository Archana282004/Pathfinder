"use client"

import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface UserOverviewProps {
    userOverviewData: {
        educators: number,
        students: number,
        total: number
    }
}
const UserOverview = ({ userOverviewData }: UserOverviewProps) => {
    const data = [
        { name: "Educators", value: userOverviewData.educators, color:"orange"},
        { name: "Students", value: userOverviewData.students, color:"green" },
        { name: "Total", value: userOverviewData.total, color:"yellow" },
    ]
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-bold">User Overview</CardTitle>
            </CardHeader>
            <div className="w-full h-84">
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Tooltip />
                        <Legend />
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}

export default UserOverview;