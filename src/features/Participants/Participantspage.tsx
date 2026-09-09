import { useState } from "react";
import { ParticipantsList } from "../Participants/participantslist/Participantlist.tsx";
import { ParticipantDetail } from "../Participants/Participantdetail/participantdetaiil.tsx";
import { ParticipantSelectionProvider } from "../Participants/Participantselectioncontext.tsx";
import { AddParticipantPage } from "../Participants/Addparticipantpage/Addparticipantpage.tsx";

export function ParticipantsPage() {
    const [showAdd, setShowAdd] = useState(false);

    if (showAdd) {
        return <AddParticipantPage onCancel={() => setShowAdd(false)} onSave={() => setShowAdd(false)} />;
    }

    return (
        <ParticipantSelectionProvider>
            <div style={{ display: "flex", height: "100%" }}>
                <ParticipantsList onAdd={() => setShowAdd(true)} />
                <ParticipantDetail />
            </div>
        </ParticipantSelectionProvider>
    );
}