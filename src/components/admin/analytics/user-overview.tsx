import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Useroverviewlist } from "@/src/lib/mock-data";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const UserOverview = () => {
    const data = Useroverviewlist
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