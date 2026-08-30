import { createContext, useContext, useState, type ReactNode } from "react";

interface InboxSelectionContextValue {
    selectedId: string;
    setSelectedId: (id: string) => void;
}

const InboxSelectionContext = createContext<InboxSelectionContextValue | null>(null);

export function InboxSelectionProvider({ children }: { children: ReactNode }) {
    const [selectedId, setSelectedId] = useState<string>("1");

    return (
        <InboxSelectionContext.Provider value={{ selectedId, setSelectedId }}>
            {children}
        </InboxSelectionContext.Provider>
    );
}

export function useInboxSelection() {
    const ctx = useContext(InboxSelectionContext);
    if (!ctx) {
        throw new Error("useInboxSelection must be used within an InboxSelectionProvider");
    }
    return ctx;
}