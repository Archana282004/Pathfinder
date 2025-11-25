import { ArrowDownRight, ArrowUpRight, BookOpen, Calendar, CheckCircle2, Clock, DollarSign, MessageSquare, RefreshCw, TrendingUp, Users, Wallet } from "lucide-react"
import type { College, Application, StudentProfile, TestScore, Essay, Document, Milestone, FinancialAid } from "./types"
import { CardContent } from "@/components/ui/card"

export const mockEducators = [
  {
    id: "edu-1",
    name: "Dr. Sarah Johnson",
    title: "College Admissions Specialist",
    specialty: "Ivy League Applications",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 50,
    avatar: "/professional-woman-educator.jpg",
    bio: "Former admissions officer at Harvard with 15 years of experience helping students achieve their college dreams.",
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  {
    id: "edu-2",
    name: "Prof. Michael Chen",
    title: "SAT/ACT Test Prep Expert",
    specialty: "Standardized Testing",
    rating: 4.8,
    reviews: 203,
    hourlyRate: 45,
    avatar: "/professional-man-educator.jpg",
    bio: "Specialized in test preparation with proven strategies to boost scores by 200+ points.",
    availability: ["Monday", "Wednesday", "Friday", "Saturday"],
  },
  {
    id: "edu-3",
    name: "Dr. Emily Rodriguez",
    title: "Essay Writing Coach",
    specialty: "Personal Statements",
    rating: 5.0,
    reviews: 89,
    hourlyRate: 55,
    avatar: "/professional-woman-writer.png",
    bio: "Published author and writing coach specializing in compelling college essays.",
    availability: ["Tuesday", "Thursday", "Saturday", "Sunday"],
  },
  {
    id: "edu-4",
    name: "James Williams",
    title: "Financial Aid Advisor",
    specialty: "Scholarships & Aid",
    rating: 4.7,
    reviews: 124,
    hourlyRate: 40,
    avatar: "/professional-man-advisor.jpg",
    bio: "Helped students secure over $5M in scholarships and financial aid.",
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  },
]


export const mockStudents = [
  {
    id: "stu-1",
    name: "Emma Wilson",
    grade: "12th Grade",
    gpa: 3.9,
    targetSchools: ["Stanford", "MIT", "UC Berkeley"],
    avatar: "/diverse-student-girl.png",
  },
  {
    id: "stu-2",
    name: "James Smith",
    grade: "11th Grade",
    gpa: 3.7,
    targetSchools: ["Harvard", "Yale", "Princeton"],
    avatar: "/student-boy.png",
  },
  {
    id: "stu-3",
    name: "Sophia Lee",
    grade: "12th Grade",
    gpa: 4.0,
    targetSchools: ["Columbia", "NYU", "Cornell"],
    avatar: "/student-asian-girl.jpg",
  },
  {
    id: "stu-4",
    name: "Marcus Johnson",
    grade: "11th Grade",
    gpa: 3.8,
    targetSchools: ["Duke", "UNC", "Vanderbilt"],
    avatar: "/student-black-boy.jpg",
  },
]


export const mockSessions = [
  {
    id: "ses-1",
    title: "College Essay Review",
    educatorId: "edu-1",
    educatorName: "Dr. Sarah Johnson",
    studentId: "stu-1",
    studentName: "Emma Wilson",
    date: "2025-10-24",
    time: "14:00",
    duration: 60,
    status: "upcoming",
    type: "Essay Review",
    meetingLink: "https://meet.pathfinder.com/ses-1",
    notes: "Review personal statement draft and provide feedback",
  },
  {
    id: "ses-2",
    title: "SAT Prep Session",
    educatorId: "edu-2",
    educatorName: "Prof. Michael Chen",
    studentId: "stu-2",
    studentName: "James Smith",
    date: "2025-10-25",
    time: "10:00",
    duration: 90,
    status: "upcoming",
    type: "Test Prep",
    meetingLink: "https://meet.pathfinder.com/ses-2",
    notes: "Focus on math section strategies",
  },
  {
    id: "ses-3",
    title: "College List Strategy",
    educatorId: "edu-1",
    educatorName: "Dr. Sarah Johnson",
    studentId: "stu-1",
    studentName: "Sophia Lee",
    date: "2025-10-23",
    time: "16:00",
    duration: 60,
    status: "completed",
    type: "Strategy Session",
    notes: "Discussed reach, target, and safety schools",
  },
  {
    id: "ses-4",
    title: "Financial Aid Planning",
    educatorId: "edu-4",
    educatorName: "James Williams",
    studentId: "stu-4",
    studentName: "Marcus Johnson",
    date: "2025-10-22",
    time: "13:00",
    duration: 60,
    status: "completed",
    type: "Financial Planning",
    notes: "Reviewed FAFSA and scholarship opportunities",
  },
  {
    id: "ses-5",
    title: "Essay Brainstorming",
    educatorId: "edu-1",
    educatorName: "Dr. Emily Rodriguez",
    studentId: "stu-1",
    studentName: "Emma Wilson",
    date: "2025-10-26",
    time: "11:00",
    duration: 60,
    status: "expired",
    type: "Essay Writing",
    meetingLink: "https://meet.pathfinder.com/ses-5",
    notes: "Generate ideas for supplemental essays",
  },
  {
    id: "ses-6",
    title: "ACT Practice Review",
    educatorId: "edu-1",
    educatorName: "Prof. Michael Chen",
    studentId: "stu-1",
    studentName: "Emma Wilson",
    date: "2025-10-20",
    time: "15:00",
    duration: 90,
    status: "cancelled",
    type: "Test Prep",
    notes: "Reviewed practice test results",
  },
]

export const mockChatConversations = [
  {
    id: "conv-1",
    participantId: "edu-1",
    participantName: "Dr. Sarah Johnson",
    participantRole: "educator",
    lastMessage: "Looking forward to our session tomorrow!",
    lastMessageTime: "2h ago",
    unread: 2,
    avatar: "/professional-woman-educator.jpg",
  },
  {
    id: "conv-2",
    participantId: "edu-2",
    participantName: "Prof. Michael Chen",
    participantRole: "educator",
    lastMessage: "I've uploaded new practice materials for you",
    lastMessageTime: "5h ago",
    unread: 1,
    avatar: "/professional-man-educator.jpg",
  },
  {
    id: "conv-3",
    participantId: "edu-3",
    participantName: "Dr. Emily Rodriguez",
    participantRole: "educator",
    lastMessage: "Great progress on your essay!",
    lastMessageTime: "1d ago",
    unread: 0,
    avatar: "/professional-woman-writer.png",
  },
]

export const mockMessages = [
  {
    id: "msg-1",
    conversationId: "conv-1",
    senderId: "edu-1",
    senderName: "Dr. Sarah Johnson",
    content: "Hi Emma! I've reviewed your essay draft. Overall, it's a strong start!",
    timestamp: "2025-10-23T10:30:00",
    isOwn: false,
  },
  {
    id: "msg-2",
    conversationId: "conv-1",
    senderId: "stu-1",
    senderName: "Emma Wilson",
    content: "Thank you! What areas should I focus on improving?",
    timestamp: "2025-10-23T10:35:00",
    isOwn: true,
  },
  {
    id: "msg-3",
    conversationId: "conv-1",
    senderId: "edu-1",
    senderName: "Dr. Sarah Johnson",
    content:
      "I'd suggest adding more specific examples in the second paragraph. Let's discuss this in detail during our session tomorrow.",
    timestamp: "2025-10-23T10:40:00",
    isOwn: false,
  },
  {
    id: "msg-4",
    conversationId: "conv-1",
    senderId: "edu-1",
    senderName: "Dr. Sarah Johnson",
    content: "Looking forward to our session tomorrow!",
    timestamp: "2025-10-23T10:42:00",
    isOwn: false,
  },
]

export const mockWalletTransactions = [
  {
    id: "txn-1",
    type: "purchase",
    amount: 100,
    tokens: 100,
    description: "Token Purchase",
    date: "2025-10-20",
    time: "14:30",
    status: "completed",
  },
  {
    id: "txn-2",
    type: "spent",
    amount: -50,
    tokens: -50,
    description: "Session with Dr. Sarah Johnson",
    date: "2025-10-22",
    time: "16:00",
    status: "completed",
  },
  {
    id: "txn-3",
    type: "spent",
    amount: -45,
    tokens: -45,
    description: "Session with Prof. Michael Chen",
    date: "2025-10-20",
    time: "15:00",
    status: "completed",
  },
  {
    id: "txn-4",
    type: "purchase",
    amount: 200,
    tokens: 200,
    description: "Token Purchase",
    date: "2025-10-15",
    time: "10:00",
    status: "completed",
  },
  {
    id: "txn-5",
    type: "refund",
    amount: 50,
    tokens: 50,
    description: "Refund - Cancelled Session",
    date: "2025-10-18",
    time: "09:00",
    status: "completed",
  },
]

export const mockResources = [
  {
    id: "res-1",
    title: "Complete Guide to College Essays",
    category: "Essay Writing",
    type: "PDF",
    size: "2.5 MB",
    uploadedBy: "Dr. Emily Rodriguez",
    uploadDate: "2025-10-15",
    downloads: 234,
    description: "Comprehensive guide covering all aspects of college essay writing",
  },
  {
    id: "res-2",
    title: "SAT Math Practice Problems",
    category: "Test Prep",
    type: "PDF",
    size: "5.1 MB",
    uploadedBy: "Prof. Michael Chen",
    uploadDate: "2025-10-18",
    downloads: 456,
    description: "500+ practice problems with detailed solutions",
  },
  {
    id: "res-3",
    title: "Financial Aid Application Checklist",
    category: "Financial Aid",
    type: "PDF",
    size: "1.2 MB",
    uploadedBy: "James Williams",
    uploadDate: "2025-10-10",
    downloads: 189,
    description: "Step-by-step checklist for FAFSA and CSS Profile",
  },
  {
    id: "res-4",
    title: "College Interview Tips Video",
    category: "Admissions",
    type: "Video",
    size: "45 MB",
    uploadedBy: "Dr. Sarah Johnson",
    uploadDate: "2025-10-12",
    downloads: 312,
    description: "Expert tips for acing your college interviews",
  },
  {
    id: "res-5",
    title: "ACT Science Section Strategies",
    category: "Test Prep",
    type: "PDF",
    size: "3.8 MB",
    uploadedBy: "Prof. Michael Chen",
    uploadDate: "2025-10-20",
    downloads: 167,
    description: "Proven strategies to improve your ACT Science score",
  },
]

export const mockNotifications = [
  {
    id: "notif-1",
    type: "session",
    title: "Upcoming Session Reminder",
    message: "Your session with Dr. Sarah Johnson starts in 24 hours",
    time: "2h ago",
    read: false,
  },
  {
    id: "notif-2",
    type: "message",
    title: "New Message",
    message: "Prof. Michael Chen sent you a message",
    time: "5h ago",
    read: false,
  },
  {
    id: "notif-3",
    type: "resource",
    title: "New Resource Available",
    message: "Dr. Emily Rodriguez uploaded 'Complete Guide to College Essays'",
    time: "1d ago",
    read: true,
  },
  {
    id: "notif-4",
    type: "payment",
    title: "Payment Successful",
    message: "100 tokens added to your wallet",
    time: "3d ago",
    read: true,
  },
]

export const mockAdminUsers = [
  ...mockStudents.map((s) => ({ ...s, role: "student", status: "active", joinDate: "2025-09-15" })),
  ...mockEducators.map((e) => ({ ...e, role: "educator", status: "active", joinDate: "2025-08-01" })),
  {
    id: "user-new-1",
    name: "Alex Thompson",
    role: "student",
    status: "active",
    joinDate: "2025-10-23",
    avatar: "/diverse-students-studying.png",
  },
  {
    id: "user-new-2",
    name: "Dr. Lisa Park",
    role: "educator",
    status: "pending",
    joinDate: "2025-10-23",
    avatar: "/educator-woman.jpg",
  },
]

export const mockAdminPayments = [
  {
    id: "pay-1",
    userId: "stu-1",
    userName: "Emma Wilson",
    amount: 100,
    type: "Token Purchase",
    status: "completed",
    date: "2025-10-23",
    time: "14:30",
  },
  {
    id: "pay-2",
    userId: "stu-2",
    userName: "James Smith",
    amount: 200,
    type: "Token Purchase",
    status: "completed",
    date: "2025-10-23",
    time: "10:15",
  },
  {
    id: "pay-3",
    userId: "stu-3",
    userName: "Sophia Lee",
    amount: 50,
    type: "Session Payment",
    status: "completed",
    date: "2025-10-22",
    time: "16:00",
  },
  {
    id: "pay-4",
    userId: "stu-4",
    userName: "Marcus Johnson",
    amount: 150,
    type: "Token Purchase",
    status: "pending",
    date: "2025-10-23",
    time: "09:00",
  },
]

export const mockAnalytics = {
  totalUsers: 1284,
  totalRevenue: 45231,
  activeSessions: 573,
  growthRate: 12.5,
  userGrowth: [
    { month: "May", students: 120, educators: 15 },
    { month: "Jun", students: 180, educators: 22 },
    { month: "Jul", students: 250, educators: 28 },
    { month: "Aug", students: 340, educators: 35 },
    { month: "Sep", students: 480, educators: 42 },
    { month: "Oct", students: 620, educators: 48 },
  ],
  revenueData: [
    { month: "May", revenue: 12500 },
    { month: "Jun", revenue: 18200 },
    { month: "Jul", revenue: 24800 },
    { month: "Aug", revenue: 31500 },
    { month: "Sep", revenue: 38900 },
    { month: "Oct", revenue: 45231 },
  ],
  sessionsByType: [
    { type: "Essay Review", count: 145 },
    { type: "Test Prep", count: 198 },
    { type: "Strategy Session", count: 112 },
    { type: "Financial Planning", count: 78 },
    { type: "Essay Writing", count: 40 },
  ],
}

export const mockEducatorEarnings = [
  {
    id: "earn-1",
    sessionId: "ses-3",
    studentName: "Sophia Lee",
    amount: 50,
    date: "2025-10-23",
    status: "paid",
  },
  {
    id: "earn-2",
    sessionId: "ses-6",
    studentName: "Emma Wilson",
    amount: 45,
    date: "2025-10-20",
    status: "paid",
  },
  {
    id: "earn-3",
    sessionId: "ses-1",
    studentName: "Emma Wilson",
    amount: 50,
    date: "2025-10-24",
    status: "pending",
  },
  {
    id: "earn-4",
    sessionId: "ses-2",
    studentName: "James Smith",
    amount: 45,
    date: "2025-10-25",
    status: "pending",
  },
]

export const mockAvailability = [
  {
    day: "Monday",
    slots: [
      { time: "09:00 AM", available: true },
      { time: "10:00 AM", available: true },
      { time: "11:00 AM", available: false },
      { time: "02:00 PM", available: true },
      { time: "03:00 PM", available: true },
      { time: "04:00 PM", available: false },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "09:00 AM", available: true },
      { time: "10:00 AM", available: false },
      { time: "11:00 AM", available: true },
      { time: "02:00 PM", available: true },
      { time: "03:00 PM", available: true },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "09:00 AM", available: true },
      { time: "10:00 AM", available: true },
      { time: "02:00 PM", available: false },
      { time: "03:00 PM", available: true },
      { time: "04:00 PM", available: true },
    ],
  },
]

export const mockColleges: College[] = [
  {
    id: "col-1",
    name: "Stanford University",
    location: "Stanford, CA",
    state: "California",
    type: "Private",
    size: "Medium",
    acceptanceRate: 3.9,
    avgGPA: 3.96,
    avgSAT: 1505,
    avgACT: 34,
    tuition: 56169,
    ranking: 3,
    majors: ["Computer Science", "Engineering", "Business", "Biology", "Psychology"],
    description: "A leading research university known for its entrepreneurial spirit and proximity to Silicon Valley.",
    image: "/stanford-campus.jpg",
    website: "https://www.stanford.edu",
    matchScore: 92,
  },
  {
    id: "col-2",
    name: "MIT",
    location: "Cambridge, MA",
    state: "Massachusetts",
    type: "Private",
    size: "Medium",
    acceptanceRate: 4.1,
    avgGPA: 3.95,
    avgSAT: 1535,
    avgACT: 35,
    tuition: 55510,
    ranking: 2,
    majors: ["Engineering", "Computer Science", "Physics", "Mathematics", "Economics"],
    description: "World-renowned for science, technology, and innovation with cutting-edge research facilities.",
    image: "/mit-campus.jpg",
    website: "https://www.mit.edu",
    matchScore: 88,
  },
  {
    id: "col-3",
    name: "UC Berkeley",
    location: "Berkeley, CA",
    state: "California",
    type: "Public",
    size: "Large",
    acceptanceRate: 14.5,
    avgGPA: 3.89,
    avgSAT: 1430,
    avgACT: 33,
    tuition: 14312,
    ranking: 22,
    majors: ["Engineering", "Computer Science", "Business", "Political Science", "Biology"],
    description: "Top public university with strong programs across all disciplines and vibrant campus culture.",
    image: "/berkeley-campus.jpg",
    website: "https://www.berkeley.edu",
    matchScore: 85,
  },
  {
    id: "col-4",
    name: "Harvard University",
    location: "Cambridge, MA",
    state: "Massachusetts",
    type: "Private",
    size: "Medium",
    acceptanceRate: 3.4,
    avgGPA: 4.0,
    avgSAT: 1520,
    avgACT: 34,
    tuition: 54269,
    ranking: 1,
    majors: ["Economics", "Government", "Computer Science", "Biology", "Psychology"],
    description: "Oldest institution of higher learning in the US with unparalleled resources and prestige.",
    image: "/harvard-campus.jpg",
    website: "https://www.harvard.edu",
    matchScore: 78,
  },
  {
    id: "col-5",
    name: "Yale University",
    location: "New Haven, CT",
    state: "Connecticut",
    type: "Private",
    size: "Medium",
    acceptanceRate: 4.6,
    avgGPA: 3.95,
    avgSAT: 1515,
    avgACT: 34,
    tuition: 62250,
    ranking: 5,
    majors: ["Political Science", "Economics", "History", "Biology", "English"],
    description: "Prestigious Ivy League university known for its residential college system and strong liberal arts.",
    image: "/yale-campus.jpg",
    website: "https://www.yale.edu",
    matchScore: 81,
  },
  {
    id: "col-6",
    name: "Princeton University",
    location: "Princeton, NJ",
    state: "New Jersey",
    type: "Private",
    size: "Small",
    acceptanceRate: 4.4,
    avgGPA: 3.95,
    avgSAT: 1510,
    avgACT: 34,
    tuition: 57410,
    ranking: 1,
    majors: ["Economics", "Computer Science", "Public Policy", "Engineering", "Mathematics"],
    description: "Elite undergraduate-focused university with beautiful Gothic campus and strong academic programs.",
    image: "/princeton-campus.jpg",
    website: "https://www.princeton.edu",
    matchScore: 79,
  },
]

export const mockApplications: Application[] = [
  {
    id: "app-1",
    studentId: "stu-1",
    collegeId: "col-1",
    collegeName: "Stanford University",
    collegeImage: "/stanford-campus.jpg",
    status: "In Progress",
    deadline: "2026-01-05",
    applicationFee: 90,
    requirements: [
      { id: "req-1", name: "Common App Essay", type: "Essay", completed: true },
      { id: "req-2", name: "Supplemental Essays (3)", type: "Essay", completed: false, dueDate: "2025-12-15" },
      { id: "req-3", name: "Official Transcript", type: "Transcript", completed: true },
      { id: "req-4", name: "SAT Scores", type: "Test Score", completed: true },
      {
        id: "req-5",
        name: "Teacher Recommendations (2)",
        type: "Recommendation",
        completed: false,
        dueDate: "2025-12-20",
      },
      { id: "req-6", name: "Counselor Recommendation", type: "Recommendation", completed: true },
    ],
    notes: "Focus on entrepreneurship and innovation in essays. Highlight robotics club leadership.",
  },
  {
    id: "app-2",
    studentId: "stu-1",
    collegeId: "col-2",
    collegeName: "MIT",
    collegeImage: "/mit-campus.jpg",
    status: "In Progress",
    deadline: "2026-01-01",
    applicationFee: 75,
    requirements: [
      { id: "req-7", name: "Common App Essay", type: "Essay", completed: true },
      { id: "req-8", name: "MIT-specific Essays (5)", type: "Essay", completed: false, dueDate: "2025-12-10" },
      { id: "req-9", name: "Official Transcript", type: "Transcript", completed: true },
      { id: "req-10", name: "SAT Scores", type: "Test Score", completed: true },
      { id: "req-11", name: "Teacher Recommendations (2)", type: "Recommendation", completed: true },
    ],
    notes: "Emphasize STEM achievements and maker projects. Include research experience.",
  },
  {
    id: "app-3",
    studentId: "stu-1",
    collegeId: "col-3",
    collegeName: "UC Berkeley",
    collegeImage: "/berkeley-campus.jpg",
    status: "Not Started",
    deadline: "2025-11-30",
    applicationFee: 70,
    requirements: [
      { id: "req-12", name: "UC Application Essays (4)", type: "Essay", completed: false, dueDate: "2025-11-20" },
      { id: "req-13", name: "Self-reported Transcript", type: "Transcript", completed: false },
      { id: "req-14", name: "SAT Scores (Optional)", type: "Test Score", completed: false },
    ],
    notes: "UC system doesn't require recommendations. Focus on personal insight questions.",
  },
  {
    id: "app-4",
    studentId: "stu-1",
    collegeId: "col-4",
    collegeName: "Harvard University",
    collegeImage: "/harvard-campus.jpg",
    status: "Submitted",
    deadline: "2026-01-01",
    applicationFee: 85,
    submittedDate: "2025-10-20",
    requirements: [
      { id: "req-15", name: "Common App Essay", type: "Essay", completed: true },
      { id: "req-16", name: "Supplemental Essays (2)", type: "Essay", completed: true },
      { id: "req-17", name: "Official Transcript", type: "Transcript", completed: true },
      { id: "req-18", name: "SAT Scores", type: "Test Score", completed: true },
      { id: "req-19", name: "Teacher Recommendations (2)", type: "Recommendation", completed: true },
      { id: "req-20", name: "Counselor Recommendation", type: "Recommendation", completed: true },
    ],
    notes: "Application submitted early. Awaiting interview invitation.",
  },
]

export const mockStudentProfile: StudentProfile = {
  id: "profile-1",
  studentId: "stu-1",
  gpa: 3.92,
  satScore: 1480,
  actScore: 33,
  apCourses: ["AP Calculus BC", "AP Physics C", "AP Computer Science A", "AP English Literature", "AP US History"],
  honors: ["National Honor Society", "AP Scholar with Distinction", "Dean's List"],
  extracurriculars: [
    {
      id: "act-1",
      name: "Robotics Club",
      role: "Team Captain",
      yearsInvolved: 4,
      hoursPerWeek: 10,
      description: "Led team to regional championships, managed budget and mentored new members",
    },
    {
      id: "act-2",
      name: "Math Olympiad",
      role: "Competitor",
      yearsInvolved: 3,
      hoursPerWeek: 5,
      description: "Competed at state level, placed top 10 in regional competitions",
    },
    {
      id: "act-3",
      name: "Debate Team",
      role: "Vice President",
      yearsInvolved: 3,
      hoursPerWeek: 6,
      description: "Organized tournaments, coached novice debaters, competed in varsity division",
    },
  ],
  awards: [
    "National Merit Semifinalist",
    "First Place - Regional Science Fair",
    "Presidential Volunteer Service Award",
    "AP Scholar with Distinction",
  ],
  volunteerHours: 250,
  workExperience: [
    {
      id: "work-1",
      company: "Local Library",
      position: "STEM Tutor",
      duration: "Summer 2024",
      description: "Tutored middle school students in math and science, developed curriculum materials",
    },
  ],
  intendedMajor: "Computer Science",
  careerGoals: "Software Engineer at a tech company, eventually starting my own startup",
}

export const mockTestScores: TestScore[] = [
  {
    id: "test-1",
    studentId: "stu-1",
    testType: "SAT",
    score: 1480,
    maxScore: 1600,
    date: "2025-06-15",
    percentile: 98,
  },
  {
    id: "test-2",
    studentId: "stu-1",
    testType: "ACT",
    score: 33,
    maxScore: 36,
    date: "2025-09-10",
    percentile: 97,
  },
  {
    id: "test-3",
    studentId: "stu-1",
    testType: "AP",
    subject: "Calculus BC",
    score: 5,
    maxScore: 5,
    date: "2025-05-08",
  },
  {
    id: "test-4",
    studentId: "stu-1",
    testType: "AP",
    subject: "Physics C",
    score: 5,
    maxScore: 5,
    date: "2025-05-12",
  },
  {
    id: "test-5",
    studentId: "stu-1",
    testType: "AP",
    subject: "Computer Science A",
    score: 5,
    maxScore: 5,
    date: "2025-05-05",
  },
]

export const mockEssays: Essay[] = [
  {
    id: "essay-1",
    studentId: "stu-1",
    applicationId: "app-1",
    title: "Common Application Personal Statement",
    prompt:
      "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
    content: "The whir of servo motors and the smell of solder have become as familiar to me as...",
    wordCount: 648,
    maxWords: 650,
    status: "In Review",
    feedback: [
      {
        id: "fb-1",
        educatorId: "edu-3",
        educatorName: "Dr. Emily Rodriguez",
        comment:
          "Strong opening! Consider adding more specific examples in the second paragraph to illustrate your growth.",
        timestamp: "2025-10-22T14:30:00",
        rating: 4,
      },
    ],
    lastEdited: "2025-10-23T10:15:00",
    version: 3,
  },
  {
    id: "essay-2",
    studentId: "stu-1",
    applicationId: "app-1",
    title: "Stanford Supplemental - What matters to you and why?",
    prompt:
      "The Stanford community is deeply curious and driven to learn in and out of the classroom. Reflect on an idea or experience that makes you genuinely excited about learning.",
    content: "When I first encountered the concept of artificial intelligence...",
    wordCount: 245,
    maxWords: 250,
    status: "Draft",
    lastEdited: "2025-10-20T16:45:00",
    version: 1,
  },
  {
    id: "essay-3",
    studentId: "stu-1",
    title: "MIT Essay - Community Service",
    prompt:
      "Describe the world you come from and how you, as a product of it, might add to the diversity of the MIT community.",
    content: "Growing up in a small town where the nearest tech hub was hours away...",
    wordCount: 198,
    maxWords: 250,
    status: "Draft",
    lastEdited: "2025-10-18T09:20:00",
    version: 1,
  },
]

export const mockDocuments: Document[] = [
  {
    id: "doc-1",
    studentId: "stu-1",
    name: "Official Transcript - Fall 2025",
    type: "Transcript",
    fileUrl: "/documents/transcript-fall-2025.pdf",
    uploadDate: "2025-10-15",
    size: "2.3 MB",
    sharedWith: ["edu-1", "edu-3"],
  },
  {
    id: "doc-2",
    studentId: "stu-1",
    name: "Resume - College Applications",
    type: "Resume",
    fileUrl: "/documents/resume-2025.pdf",
    uploadDate: "2025-10-10",
    size: "156 KB",
    sharedWith: ["edu-1"],
  },
  {
    id: "doc-3",
    studentId: "stu-1",
    name: "Common App Essay - Final Draft",
    type: "Essay",
    fileUrl: "/documents/common-app-essay.pdf",
    uploadDate: "2025-10-22",
    size: "89 KB",
    sharedWith: ["edu-3"],
  },
  {
    id: "doc-4",
    studentId: "stu-1",
    name: "Teacher Recommendation - Mr. Johnson",
    type: "Recommendation",
    fileUrl: "/documents/rec-johnson.pdf",
    uploadDate: "2025-10-18",
    size: "124 KB",
    sharedWith: [],
  },
]

export const mockMilestones: Milestone[] = [
  {
    id: "mile-1",
    title: "Complete SAT Registration",
    description: "Register for December SAT test date",
    dueDate: "2025-11-05",
    category: "Testing",
    completed: true,
    priority: "High",
  },
  {
    id: "mile-2",
    title: "Finalize College List",
    description: "Narrow down to 8-10 schools (reach, target, safety)",
    dueDate: "2025-11-10",
    category: "Applications",
    completed: true,
    priority: "High",
  },
  {
    id: "mile-3",
    title: "Request Teacher Recommendations",
    description: "Ask 2 teachers for letters of recommendation",
    dueDate: "2025-11-15",
    category: "Applications",
    completed: false,
    priority: "High",
  },
  {
    id: "mile-4",
    title: "Complete Common App Essay",
    description: "Write and revise personal statement (650 words)",
    dueDate: "2025-11-20",
    category: "Essays",
    completed: false,
    priority: "High",
  },
  {
    id: "mile-5",
    title: "Submit FAFSA",
    description: "Complete and submit Free Application for Federal Student Aid",
    dueDate: "2025-12-01",
    category: "Financial Aid",
    completed: false,
    priority: "High",
  },
  {
    id: "mile-6",
    title: "Write Supplemental Essays",
    description: "Complete all school-specific supplemental essays",
    dueDate: "2025-12-15",
    category: "Essays",
    completed: false,
    priority: "High",
  },
  {
    id: "mile-7",
    title: "Submit Early Action Applications",
    description: "Submit applications to schools with Nov 1 deadline",
    dueDate: "2025-11-01",
    category: "Applications",
    completed: true,
    priority: "High",
  },
  {
    id: "mile-8",
    title: "Apply for Scholarships",
    description: "Submit applications for 5 external scholarships",
    dueDate: "2025-12-31",
    category: "Financial Aid",
    completed: false,
    priority: "Medium",
  },
]

export const mockFinancialAid: FinancialAid[] = [
  {
    collegeId: "col-1",
    collegeName: "Stanford University",
    tuition: 56169,
    roomAndBoard: 17255,
    booksAndSupplies: 1245,
    otherExpenses: 2130,
    totalCost: 76799,
    estimatedAid: 45000,
    netCost: 31799,
    scholarships: [
      {
        id: "sch-1",
        name: "Stanford Merit Scholarship",
        amount: 25000,
        deadline: "2026-01-05",
        requirements: "Automatic consideration with application",
        status: "Available",
      },
      {
        id: "sch-2",
        name: "STEM Excellence Award",
        amount: 10000,
        deadline: "2025-12-15",
        requirements: "3.8+ GPA, STEM major, separate application",
        status: "Applied",
      },
    ],
  },
  {
    collegeId: "col-2",
    collegeName: "MIT",
    tuition: 55510,
    roomAndBoard: 16390,
    booksAndSupplies: 1000,
    otherExpenses: 2100,
    totalCost: 75000,
    estimatedAid: 48000,
    netCost: 27000,
    scholarships: [
      {
        id: "sch-3",
        name: "MIT Need-Based Grant",
        amount: 35000,
        deadline: "2026-01-01",
        requirements: "Based on FAFSA/CSS Profile",
        status: "Available",
      },
    ],
  },
  {
    collegeId: "col-3",
    collegeName: "UC Berkeley",
    tuition: 14312,
    roomAndBoard: 18632,
    booksAndSupplies: 1168,
    otherExpenses: 2742,
    totalCost: 36854,
    estimatedAid: 15000,
    netCost: 21854,
    scholarships: [
      {
        id: "sch-4",
        name: "Regents' and Chancellor's Scholarship",
        amount: 10000,
        deadline: "2025-11-30",
        requirements: "Top applicants, separate application",
        status: "Available",
      },
      {
        id: "sch-5",
        name: "Cal Alumni Association Scholarship",
        amount: 5000,
        deadline: "2025-12-31",
        requirements: "Essay and interview required",
        status: "Available",
      },
    ],
  },
]

export const AdminOverviewCards = [
  {
    title: "Total Users",
    mockAnalyticsdata: mockAnalytics.totalUsers,
    cardcontent: "+18% from last month",
    icon: Users
  },
  {
    title: "Revenue",
    mockAnalyticsdata: mockAnalytics.totalRevenue.toLocaleString(),
    cardcontent: "+20% from last month",
    icon: DollarSign
  },
  {
    title: "Active Sessions",
    mockAnalyticsdata: mockAnalytics.activeSessions,
    cardcontent: "This Month",
    icon: Calendar
  },
  {
    title: "Growth Rate",
    mockAnalyticsdata: mockAnalytics.growthRate,
    cardcontent: "User Growth",
    icon: TrendingUp
  }
]

export const AdminPaymentCards = [
  {
    title: "Total Revenue",
    data: mockAdminPayments.reduce((sum, p) => sum + p.amount, 0),
    cardcontent: "All transactions",
    icon: DollarSign
  },
  {
    title: "Completed",
    data: mockAdminPayments.filter((p) => p.status === "completed").length,
    cardcontent: "Successful payments",
    icon: TrendingUp
  },
  {
    title: "Pending",
    data: mockAdminPayments.filter((p) => p.status === "pending").length,
    cardcontent: "Awaiting processing",
    icon: Users
  }
]

export const EducatorOverviewCards = [
  {
    title: "Total Earnings",
    data: mockEducatorEarnings.filter((e) => e.status === "paid").reduce((sum, e) => sum + e.amount, 0),
    cardcontent: "+12% from last month",
    icon: DollarSign
  },
  {
    title: "Active Students",
    data: new Set(mockSessions.filter((s) => s.educatorId === "edu-1").map((s) => s.studentId)).size,
    cardcontent: "Current students ",
    icon: Users
  },
  {
    title: "Sessions This Week",
    data: mockSessions.filter((s) => s.educatorId === "edu-1" && s.status === "upcoming").length,
    cardcontent: "2 today",
    icon: Calendar
  }
]

export const EducatorPaymentCards = [
  {
    title: "Total Earnings",
    data: mockEducatorEarnings.reduce((sum, e) => sum + e.amount, 0),
    icon: DollarSign,
    cardcontent: " All time"
  },
  {
    title: "Pending",
    data: mockEducatorEarnings
      .filter((e) => e.status === "pending")
      .reduce((sum, e) => sum + e.amount, 0),
    icon: Calendar,
    cardcontent: mockEducatorEarnings.filter((e) => e.status === "paid").length + " sessions"
  },
  {
    title: "Paid Out",
    data: mockEducatorEarnings.filter((e) => e.status === "paid").reduce((sum, e) => sum + e.amount, 0),
    icon: TrendingUp,
    cardcontent: mockEducatorEarnings.filter((e) => e.status === "pending").length + "sessions"
  }
]

export const StudentOverviewCards = [
  {
    title: "Token Balance",
    data: mockWalletTransactions.reduce((sum, txn) => sum + txn.tokens, 0),
    icon: Wallet,
    cardcontent: "Available tokens"
  },
  {
    title: "Upcoming Sessions",
    data: mockSessions.filter((s) => s.status === "upcoming" && s.studentId === "stu-1").slice(0, 2).length,
    icon: Calendar,
    cardcontent: "This Week"
  },
  {
    title: "Completed Sessions",
    data: mockSessions.filter((s) => s.status === "completed" && s.studentId === "stu-1").length,
    icon: CheckCircle2,
    cardcontent: "Total Sessions"
  },
  {
    title: "Unread Messages",
    data: mockChatConversations.reduce((sum, conv) => sum + conv.unread, 0),
    icon: MessageSquare,
    cardcontent: "New messages"
  }
]

export const StudentWalletData = [
  {
    title: "Total Purchased",
    data: mockWalletTransactions.filter((t) => t.type === "purchase").reduce((sum, txn) => sum + txn.amount, 0),
    icon: ArrowDownRight,
    cardcontent: mockWalletTransactions.filter((t) => t.type === "purchase").length + " transactions"
  },
  {
    title: "Total Spent",
    data: mockWalletTransactions.filter((t) => t.type === "spent").reduce((sum, txn) => sum + Math.abs(txn.amount), 0),
    icon: ArrowUpRight,
    cardcontent: mockWalletTransactions.filter((t) => t.type === "spent").length + " sessions"
  },
  {
    title: "Refunds",
    data: "$" + mockWalletTransactions.filter((t) => t.type === "refund").reduce((sum, txn) => sum + txn.amount, 0),
    icon: RefreshCw,
    cardcontent: mockWalletTransactions.filter((t) => t.type === "refund").length + "refunds"
  }
]

export const AdminQuickActionsCard = [
  {
    name: " Manage Users",
    link: "/admin/users",
    icon: Users
  },
  {
    name: " View Resources",
    link: "/admin/resources",
    icon: BookOpen
  },
  {
    name: "Analytics",
    link: "/admin/analytics",
    icon: TrendingUp
  },
  {
    name: "Settings",
    link: "/admin/settings",
    icon: Calendar
  }
]

export const UserTablist = [
  {
    value: "all",
    title: "All Users",
    description: "Complete list of platform users",
    data: mockAdminUsers
  },
  {
    value: "students",
    title: "Students",
    description: "All registered students",
    data: mockAdminUsers.filter((u) => u.role === "student")
  },
  {
    value: "educators",
    title: "Educators",
    description: "All registered educators",
    data: mockAdminUsers.filter((u) => u.role === "educator")
  }
]

export const EducatorQuickActionsData = [
  {
    data: "View Schedule",
    icon: Calendar,
    link: "/educator/sessions"
  },
  {
    data: "Message Students",
    icon: MessageSquare,
    link: "/educator/chat"
  },
  {
    data: " Set Availability",
    icon: Clock,
    link: "/educator/availability"
  }
]

export const StudentQuickActionsData = [
  {
    data: "Book Session",
    icon: Calendar,
    link: "/student/sessions"
  },
  {
    data: "Send Message",
    icon: MessageSquare,
    link: "/student/chat"
  },
  {
    data: "Add Tokens",
    icon: Wallet,
    link: "/student/wallet"
  },
  {
    data: "Browse Resources",
    icon: BookOpen,
    link: "/student/resources"
  }
]

export const TokenPackagesData = [
  {
    badge: "Regular",
    tokencount: "50",
    value: "$50",
    offer: "$1.00 per token",
    action: "Purchase"
  },
  {
    badge: "Most Popular",
    tokencount: "100",
    value: "$95",
    offer: "Save $5 (5% off)",
    action: "Purchase"
  },
  {
    badge: "Best Value",
    tokencount: "200",
    value: "$180",
    offer: "Save $20 (10% off)",
    action: "Purchase"
  }

]

export const Useroverviewlist = [
  {name:"Students", value:90, color:"orange"},
  {name:"Educators", value:28, color:"green"},
  {name:"Total", value:118, color:"yellow"}
]

export const Sessionoverviewlist = [
  { name: "Completed", value: 32, color:"orange" },
  { name: "Upcoming", value: 12, color:"green" },
  { name: "Cancelled", value: 3, color:"red" },
  { name: "Expired", value: 14, color:"yellow" }
]

export const EducatorFAQslist = [
  {
    question:"How do I login as an Educator ?",
    answer:"Educators cannot self-register. The admin will create the profile, and you’ll receive login credentials to access your account."
  },
  {
    question:"How can I set my availability for sessions ?",
    answer:"After logging in, you can set your available time slots under the Availability section. These slots will be visible to all registered students for booking."
  },
  {
    question:"Can I modify or cancel a session once it's booked ?",
    answer:"No, educators cannot reschedule or cancel sessions once they are booked by a student."
  },
  {
    question:"What happens when a student books one of my session ?",
    answer:"Once a student books a slot, that time slot will be disabled for other students, ensuring one-on-one sessions."
  },
  {
    question:"Can I view my past and upcoming Sessions ?",
    answer:"Yes, you can view both your upcoming and completed sessions from your educator dashboard."
  },
  {
    question:"How are sessions prices or tokens value decided?",
    answer:"Session pricing (in tokens) is determined by the admin."
  }
]

export const StudentFAQslist = [
  {
    question:"How can I sign up as a student?",
    answer:"You can register directly on the portal using your details. Once registered, you’ll receive bonus tokens in your wallet to book sessions."
  },
  {
    question:"How do I book a session with an Educator ?",
    answer:"After logging in, view the available time slots under the 'Availability' section set by the educators and book a session that suits you."
  },
  {
    question:"What happens if another student books the same slot ?",
    answer:"Each time slot can only be booked by one student. Once booked, that slot will no longer be available to others."
  },
  {
    question:"Can I reschedule my sesssion ?",
    answer:"Yes, you can reschedule your session up to 24 hours before the scheduled start time without any additional token charge."
  },
  {
    question:"Can I cancel my session ?",
    answer:"Yes, you can cancel your session before 24 hours of the start time to get a full token refund. Cancellations made within 24 hours won’t be refunded."
  },
  {
    question:"What if I don't join the session ?",
    answer:"If you don’t join within 10 minutes of the scheduled time, the session will be marked as expired, and tokens won’t be refunded."
  },
  {
    question:"Can I chat with Educators ?",
    answer:"Yes, students can chat with any educator anytime through the chat feature."
  },
  {
    question:"What are the session duration available ?",
    answer:"Admin provides two session durations — 30 minutes and 60 minutes. You can choose as per your need, and tokens will be deducted accordingly."
  },
]