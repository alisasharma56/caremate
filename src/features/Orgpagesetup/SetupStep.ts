export const SetupStep = {
    OrgDetails: 1,
    FirstWorker: 2,
    FirstParticipant: 3,
    FirstShift: 4,
} as const;

export type SetupStep = (typeof SetupStep)[keyof typeof SetupStep];

export const SETUP_STEPS: { step: SetupStep; label: string }[] = [
    { step: SetupStep.OrgDetails, label: "Organization Details" },
    { step: SetupStep.FirstWorker, label: "Add First Worker" },
    { step: SetupStep.FirstParticipant, label: "Add First Participant" },
    { step: SetupStep.FirstShift, label: "Create First Shift" },
];