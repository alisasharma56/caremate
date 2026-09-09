import { createContext, useContext, useState, type ReactNode } from "react";

interface ParticipantSelectionContextValue {
    selectedId: string;
    setSelectedId: (id: string) => void;
}

const ParticipantSelectionContext = createContext<ParticipantSelectionContextValue | null>(null);

export function ParticipantSelectionProvider({ children }: { children: ReactNode }) {
    const [selectedId, setSelectedId] = useState<string>("1");

    return (
        <ParticipantSelectionContext.Provider value={{ selectedId, setSelectedId }}>
            {children}
        </ParticipantSelectionContext.Provider>
    );
}

export function useParticipantSelection() {
    const ctx = useContext(ParticipantSelectionContext);
    if (!ctx) {
        throw new Error("useParticipantSelection must be used within a ParticipantSelectionProvider");
    }
    return ctx;
}