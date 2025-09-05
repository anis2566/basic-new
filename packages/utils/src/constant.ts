export enum CLASSES {
    Two = "Two",
    Three = "Three",
    Four = "Four",
    Five = "Five",
    Six = "Six",
    Seven = "Seven",
    Eight = "Eight",
    Nine = "Nine",
    Ten = "Ten",
    HSC1St = "HSC 1st Year",
    HSC2Nd = "HSC 2nd Year",
}

export enum LEVELS {
    Primary = "Primary",
    Secondary = "Secondary",
    HigherSecondary = "Higher Secondary",
}

export enum GROUPS {
    Science = "Science",
    Business_Studies = "Business Studies",
    Humanities = "Humanities"
}

export enum QUESTION_TYPE {
    Single = "Single",
    Multiple = "Multiple",
    Contextual = "Contextual"
}

export enum EXAM_QUESTION_TYPE {
    Single = "Single",
    Multiple = "Multiple",
    Contextual = "Contextual",
    Mix = "Mix"
}

export enum EXAM_STATUS {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed"
}


export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 5;
export const DEFAULT_PAGE_SIZE = 5;
export const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 20, 30, 40, 50, 100, 200, 500];
export const DEFAULT_SORT_OPTIONS = [
    {
        label: "Newest",
        value: "desc",
    },
    {
        label: "Oldest",
        value: "asc",
    },
];

export const CHAPTER_SORT_OPTIONS = [
    {
        label: "Newest",
        value: "desc",
    },
    {
        label: "Oldest",
        value: "asc",
    },
    {
        label: "Position Low to High",
        value: "position-asc",
    },
    {
        label: "Position High to Low",
        value: "position-desc",
    },
];

export enum CREDIT_STATUS {
    Active = "Active",
    Inactive = "Inactive"
}

export enum TRANSACTION_STATUS {
    Pending = "Pending",
    Success = "Success",
    Failed = "Failed"
}

export const examPlanFeatures = [
    "Access to practice exams",
    "Access to standard question bank questions",
    "Advanced AI Exam Feedback",
    "Downloadable Exam Feedback Report",
]

export const aiFeedbackFeatures = [
    "Overall score and correct/wrong count",
    "In-depth identification of strengths and weaknesses by chapter",
    "Contextualized recommendations for improvement",
    "Detailed AI analysis of ALL wrong answers",
]


export enum EXAM_PACK_TIER {
    Basic = "Basic",
    Pro = "Pro",
    Master = "Master"
}

export enum EXAM_PLAN_STATUS {
    Active = "Active",
    InProgress = "In Progress",
    Inactive = "Inactive",
    Expired = "Expired",
    Completed = "Completed"
}

export enum MCQ_SOURCE {
    Guide = "Guide",
    TestPaper = "Test Paper"
}


export const timeSlots = [
    "9:00 AM - 9:30 AM",
    "9:30 AM - 10:00 AM",
    "10:00 AM - 10:30 AM",
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM",
    "1:30 PM - 2:00 PM",
    "2:00 PM - 2:30 PM",
    "2:30 PM - 3:00 PM",
    "3:00 PM - 3:30 PM",
    "3:30 PM - 4:00 PM",
    "4:00 PM - 4:30 PM",
    "4:30 PM - 5:00 PM",
    "5:00 PM - 5:30 PM",
    "5:30 PM - 6:00 PM",
    "6:00 PM - 6:30 PM",
    "6:30 PM - 7:00 PM",
    "7:00 PM - 7:30 PM",
    "7:30 PM - 8:00 PM",
    "8:00 PM - 8:30 PM",
    "8:30 PM - 9:00 PM",
];

export enum GENDER {
    Male = "Male",
    Female = "Female",
}

export enum NATIONALITY {
    Bangladeshi = "Bangladeshi",
    Foreigner = "Foreigner",
}

export enum RELIGION {
    Islam = "Islam",
    Hinduism = "Hinduism",
    Christianity = "Christianity",
    Buddhism = "Buddhism",
}

export enum SHIFT {
    Morning = "Morning",
    Day = "Day",
    Evening = "Evening",
}

export enum GROUP {
    Science = "Science",
    Commerce = "Commerce",
    Arts = "Arts",
}