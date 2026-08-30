export type Platform = "facebook" | "instagram" | "linkedin" | "email";
export type ConversationStatus = "needsYou" | "aiActive";

export interface ChatMessage {
    id: string;
    from: "contact" | "ai";
    senderLabel: string;
    text: string;
    time: string;
}

export interface Conversation {
    id: string;
    name: string;
    initials: string;
    avatarColor: string;
    platform: Platform;
    via: string;
    status: ConversationStatus;
    preview: string;
    time: string;
    aiSummary?: string;
    lastRepliedAgo?: string;
    daysWithoutResponse?: number;
    followUpMessage?: string;
    messages: ChatMessage[];
}

export const CONVERSATIONS: Conversation[] = [
    {
        id: "1",
        name: "Prabin Gurung",
        initials: "PG",
        avatarColor: "#1B998B",
        platform: "facebook",
        via: "Via Facebook",
        status: "needsYou",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        aiSummary:
            "Prabin has been inquiring about her upcoming plan review, requesting confirmation of the meeting date and support coordinator details. She expressed concern about not receiving a calendar invite for 2+ days and mentioned her transport is already booked. Urgency: Medium - prompt response recommended.",
        daysWithoutResponse: 5,
        followUpMessage:
            "Hi Prabin! I noticed we haven't connected in a few days. I wanted to check in and see if you had any questions about your upcoming plan review. We're here to help — feel free to reach out anytime! 😊",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Sarah", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
            { id: "m2", from: "ai", senderLabel: "AI", text: "Hi Sarah! Your plan review is confirmed for Thursday June 26th at 2 PM. Dr Emma Wilson will attend as your support coordinator. Is there anything you'd like to prepare?", time: "10:14 AM" },
            { id: "m3", from: "contact", senderLabel: "Sarah", text: "I haven't received a calendar invite yet. It's been 2 days - this is getting urgent.", time: "10:22 AM" },
            { id: "m4", from: "ai", senderLabel: "AI", text: "Understood, Sarah. I'm flagging this with the team to ensure you receive the invite today. I'll keep you posted.", time: "10:14 AM" },
            { id: "m5", from: "contact", senderLabel: "Sarah", text: "Still no calendar invite. I need this confirmed urgently - my transport is already booked.", time: "10:22 AM" },
        ],
    },
    {
        id: "2",
        name: "Sanjay Pahari",
        initials: "SP",
        avatarColor: "#3FA34D",
        platform: "instagram",
        via: "Via Instagram",
        status: "aiActive",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        lastRepliedAgo: "3 min ago",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Sanjay", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
            { id: "m2", from: "ai", senderLabel: "AI", text: "Hi Sanjay! Your plan review is confirmed for Thursday June 26th at 2 PM. Dr Emma Wilson will attend as your support coordinator. Is there anything you'd like to prepare?", time: "10:14 AM" },
            { id: "m3", from: "contact", senderLabel: "Sanjay", text: "I haven't received a calendar invite yet. It's been 2 days - this is getting urgent.", time: "10:22 AM" },
            { id: "m4", from: "ai", senderLabel: "AI", text: "Understood, Sanjay. I'm flagging this with the team to ensure you receive the invite today. I'll keep you posted.", time: "10:14 AM" },
        ],
    },
    {
        id: "3",
        name: "Subash Poudel",
        initials: "SP",
        avatarColor: "#E8A33D",
        platform: "linkedin",
        via: "Via LinkedIn",
        status: "needsYou",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        aiSummary: "Subash is following up on his plan review confirmation and has not yet received scheduling details. Urgency: Medium - prompt response recommended.",
        daysWithoutResponse: 3,
        followUpMessage: "Hi Subash! Just checking in on your plan review — let us know if you have any questions.",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Subash", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
            { id: "m2", from: "ai", senderLabel: "AI", text: "Hi Subash! Your plan review is confirmed for Thursday June 26th at 2 PM. Dr Emma Wilson will attend as your support coordinator.", time: "10:14 AM" },
        ],
    },
    {
        id: "4",
        name: "Nisha Godar",
        initials: "NG",
        avatarColor: "#8B5CF6",
        platform: "email",
        via: "Via Email",
        status: "needsYou",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        aiSummary: "Nisha's plan review is not yet confirmed. Urgency: Medium - prompt response recommended.",
        daysWithoutResponse: 2,
        followUpMessage: "Hi Nisha! Just checking in on your plan review — let us know if you have any questions.",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Nisha", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
        ],
    },
    {
        id: "5",
        name: "Abhinash Basnet",
        initials: "AB",
        avatarColor: "#9AA0A8",
        platform: "facebook",
        via: "Via Facebook",
        status: "needsYou",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        aiSummary: "Abhinash's plan review is not yet confirmed. Urgency: Medium - prompt response recommended.",
        daysWithoutResponse: 4,
        followUpMessage: "Hi Abhinash! Just checking in on your plan review — let us know if you have any questions.",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Abhinash", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
        ],
    },
    {
        id: "6",
        name: "Jayan Adhikari",
        initials: "JA",
        avatarColor: "#E5484D",
        platform: "instagram",
        via: "Via Instagram",
        status: "aiActive",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        lastRepliedAgo: "8 min ago",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Jayan", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
            { id: "m2", from: "ai", senderLabel: "AI", text: "Hi Jayan! Your plan review is confirmed for Thursday June 26th at 2 PM.", time: "10:14 AM" },
        ],
    },
    {
        id: "7",
        name: "Aassupa Baral",
        initials: "AB",
        avatarColor: "#D6409F",
        platform: "instagram",
        via: "Via Instagram",
        status: "needsYou",
        preview: "Plan review not confirmed - urgent...",
        time: "2m",
        aiSummary: "Aassupa's plan review is not yet confirmed. Urgency: Medium - prompt response recommended.",
        daysWithoutResponse: 6,
        followUpMessage: "Hi Aassupa! Just checking in on your plan review — let us know if you have any questions.",
        messages: [
            { id: "m1", from: "contact", senderLabel: "Aassupa", text: "Hi, I need to discuss my upcoming plan review urgently. When is it and who will attend?", time: "10:14 AM" },
        ],
    },
];