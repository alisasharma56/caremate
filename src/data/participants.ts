export type ParticipantStatus = "active" | "reviewDue";

export interface FundingLine {
    label: string;
    spent: number;
    total: number;
    color: string;
}

export interface DocumentRecord {
    id: string;
    title: string;
    meta: string;
    hasDownload?: boolean;
}

export interface Participant {
    id: string;
    name: string;
    initials: string;
    avatarColor: string;
    category: string;
    status: ParticipantStatus;
    since: string;
    ndisNumber: string;
    planPeriod: string;
    planReviewNote: string;
    supportCategory: string;
    planManager: string;
    location: string;
    tags: string;
    funding: FundingLine[];
    documents: DocumentRecord[];
}

export const PARTICIPANTS: Participant[] = [
    {
        id: "1",
        name: "Oliver Bennett",
        initials: "OB",
        avatarColor: "#2E6BE6",
        category: "SIL, Capacity Building",
        status: "active",
        since: "Since Jan 2026",
        ndisNumber: "430 281 947",
        planPeriod: "Jan 2025 – Jan 2026",
        planReviewNote: "Review in 9 months",
        supportCategory: "SIL – Daily Activities",
        planManager: "NDIS Plan Partners",
        location: "Melbourne VIC",
        tags: "NDIS Participant · SIL · Daily Activities · Melbourne VIC",
        funding: [
            { label: "Core supports — Daily activities", spent: 18485, total: 32000, color: "#1FA774" },
            { label: "SIL — Supported independent living", spent: 41280, total: 78000, color: "#F0A83D" },
        ],
        documents: [
            { id: "d1", title: "Service Agreement — Oliver Bennett", meta: "Signed 15 Jan 2025 · PDF", hasDownload: true },
            { id: "d2", title: "Invoice — April 2025", meta: "Paid · $3,240.00" },
        ],
    },
    {
        id: "2",
        name: "Grace Phillips",
        initials: "GP",
        avatarColor: "#1BA855",
        category: "Plan Review",
        status: "active",
        since: "Since Mar 2026",
        ndisNumber: "512 903 664",
        planPeriod: "Mar 2025 – Mar 2026",
        planReviewNote: "Review in 11 months",
        supportCategory: "Core – Community Access",
        planManager: "Independent",
        location: "Geelong VIC",
        tags: "NDIS Participant · Core Supports · Geelong VIC",
        funding: [
            { label: "Core supports — Community access", spent: 9200, total: 24000, color: "#1FA774" },
        ],
        documents: [
            { id: "d1", title: "Service Agreement — Grace Phillips", meta: "Signed 2 Mar 2025 · PDF", hasDownload: true },
        ],
    },
    {
        id: "3",
        name: "Ethan Brooks",
        initials: "EB",
        avatarColor: "#E8792D",
        category: "Plan Review",
        status: "reviewDue",
        since: "Since Nov 2024",
        ndisNumber: "287 445 210",
        planPeriod: "Nov 2023 – Nov 2024",
        planReviewNote: "Review overdue",
        supportCategory: "Capacity Building - Support Coord.",
        planManager: "NDIS Plan Partners",
        location: "Ballarat VIC",
        tags: "NDIS Participant · Support Coordination · Ballarat VIC",
        funding: [
            { label: "Capacity building — Support coordination", spent: 5400, total: 6000, color: "#F0A83D" },
        ],
        documents: [
            { id: "d1", title: "Service Agreement — Ethan Brooks", meta: "Signed 20 Nov 2023 · PDF", hasDownload: true },
        ],
    },
    {
        id: "4",
        name: "Isle Carter",
        initials: "IC",
        avatarColor: "#8B3FE8",
        category: "Behavioural Support",
        status: "active",
        since: "Since Feb 2026",
        ndisNumber: "659 112 038",
        planPeriod: "Feb 2025 – Feb 2026",
        planReviewNote: "Review in 10 months",
        supportCategory: "Capital - Assistive Tech",
        planManager: "NDIS Plan Partners",
        location: "Bendigo VIC",
        tags: "NDIS Participant · Behavioural Support · Bendigo VIC",
        funding: [
            { label: "Capital — Assistive technology", spent: 2100, total: 15000, color: "#1FA774" },
        ],
        documents: [
            { id: "d1", title: "Service Agreement — Isle Carter", meta: "Signed 8 Feb 2025 · PDF", hasDownload: true },
        ],
    },
];