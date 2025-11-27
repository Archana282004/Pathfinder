import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Sessionoverviewlist } from "@/src/lib/mock-data";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SessionOverview = () => {
    const data = Sessionoverviewlist
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

                        <YAxis  ticks={[0, 10, 20, 30, 40]} />
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