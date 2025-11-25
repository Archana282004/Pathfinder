"use client"
import StudentNav from "@/components/navigation/student-nav"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentFAQslist } from "@/lib/mock-data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const StudentFAQComponent = () => {
    // Store which index is open (null = none)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleAnswer = (index: number) => {
        setOpenIndex(index);
    };

    const handleHideAnswer = () => {
        setOpenIndex(null);
    };

    return (
        <div className="min-h-screen bg-background">
            <StudentNav />
            <div className="flex justify-center container mx-auto px-4 py-8">
                <Card className="w-200">
                    <CardTitle className="flex justify-center text-3xl text-orange-400">
                        Frequently Asked Questions
                    </CardTitle>

                    <CardContent className="flex flex-col gap-2">
                        {StudentFAQslist.map((faq, index) => {
                            const isAnswer = openIndex === index; // <- only this question opens

                            return (
                                <Card key={index} className={isAnswer ? "h-40" : "h-20"}>
                                    <CardHeader>
                                        <div className="flex flex-row justify-between">
                                            <CardTitle className="text-xl">{faq.question}</CardTitle>

                                            {!isAnswer && (
                                                <Button
                                                    className="!m-0 !p-0 !text-inherit !bg-transparent"
                                                    onClick={() => handleAnswer(index)}
                                                >
                                                    <ChevronDown />
                                                </Button>
                                            )}

                                            {isAnswer && (
                                                <Button
                                                    className="!m-0 !p-0 !text-inherit !bg-transparent"
                                                    onClick={handleHideAnswer}
                                                >
                                                    <ChevronUp />
                                                </Button>
                                            )}
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        {isAnswer &&
                                            <p className="text-m text-muted-foreground">{faq.answer}</p>}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default StudentFAQComponent;
