"use client"

import { useState } from "react"
import  StudentNav from "@/src/components/navigation/student-nav"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { mockApplications } from "@/src/lib/mock-data"
import { CheckCircle, Circle, Clock, AlertCircle, Plus } from "lucide-react"
import Stats from "./stats"
import ApplicationDetails from "./application-details"
import Notes from "./notes"
import CheckList from "./requirements-checklist"
import ApplicationCard from "./application-card"

const ApplicationsComponent = () => {
    const [expandedApp, setExpandedApp] = useState<string | null>("app-1")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Submitted":
                return "bg-blue-500"
            case "In Progress":
                return "bg-yellow-500"
            case "Accepted":
                return "bg-green-500"
            case "Rejected":
                return "bg-red-500"
            case "Waitlisted":
                return "bg-orange-500"
            default:
                return "bg-gray-500"
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Submitted":
                return <CheckCircle className="w-4 h-4" />
            case "In Progress":
                return <Clock className="w-4 h-4" />
            case "Accepted":
                return <CheckCircle className="w-4 h-4" />
            case "Rejected":
                return <AlertCircle className="w-4 h-4" />
            default:
                return <Circle className="w-4 h-4" />
        }
    }

    const calculateProgress = (requirements: any[]) => {
        const completed = requirements.filter((req) => req.completed).length
        return (completed / requirements.length) * 100
    }

    const getDaysUntilDeadline = (deadline: string) => {
        const today = new Date()
        const deadlineDate = new Date(deadline)
        const diffTime = deadlineDate.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    return (
        <div className="min-h-screen bg-background">
            <StudentNav />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Application Tracker</h1>
                        <p className="text-muted-foreground">Track deadlines, requirements, and application status</p>
                    </div>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Application
                    </Button>
                </div>

                {/* Summary Stats */}
                <Stats
                    mockApplications={mockApplications}
                />

                {/* Applications List */}
                <div className="space-y-6">
                    {mockApplications.map((application) => {
                        const progress = calculateProgress(application.requirements)
                        const daysUntil = getDaysUntilDeadline(application.deadline)
                        const isExpanded = expandedApp === application.id

                        return (
                            <Card key={application.id} className="overflow-hidden">
                                <div className="p-6">
                                    <ApplicationCard
                                        application={application}
                                        daysUntil={daysUntil}
                                        getStatusColor={getStatusColor}
                                        getStatusIcon={getStatusIcon}
                                        progress={progress}
                                        setExpandedApp={setExpandedApp}
                                        isExpanded={isExpanded}
                                    />
                                    {isExpanded && (
                                        <div className="mt-6 pt-6 border-t space-y-6">
                                            {/* Requirements Checklist */}
                                            <CheckList application={application} />

                                            {/* Notes */}
                                            <Notes application={application} />

                                            {/* Application Details */}
                                            <ApplicationDetails
                                                application={application}
                                            />
                                        </div>
                                    )}
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ApplicationsComponent;