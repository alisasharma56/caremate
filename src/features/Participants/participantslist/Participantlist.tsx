import { Search, Plus } from "lucide-react";
import * as styles from "./Participantslist.css.ts";
import { PARTICIPANTS } from "../Participants.ts";
import { useParticipantSelection } from "../Participantselectioncontext.tsx";

interface ParticipantsListProps {
    onAdd: () => void;
}

export function ParticipantsList({ onAdd }: ParticipantsListProps) {
    const { selectedId, setSelectedId } = useParticipantSelection();

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <span className={styles.title}>Participants ({PARTICIPANTS.length})</span>
                <button type="button" className={styles.addButton} onClick={onAdd}>
                    <Plus size={13} /> Add
                </button>
            </div>

            <div className={styles.searchWrap}>
                <span className={styles.searchIcon}>
                    <Search size={14} />
                </span>
                <input type="text" className={styles.searchInput} placeholder="Search participants..." />
            </div>

            <div className={styles.list}>
                {PARTICIPANTS.map((participant) => (
                    <button
                        key={participant.id}
                        type="button"
                        className={`${styles.item} ${selectedId === participant.id ? styles.itemSelected : ""}`}
                        onClick={() => setSelectedId(participant.id)}
                    >
                        <span className={styles.avatar} style={{ background: participant.avatarColor }}>
                            {participant.initials}
                        </span>
                        <span className={styles.itemBody}>
                            <span className={styles.itemTopRow}>
                                <span className={styles.itemName}>{participant.name}</span>
                            </span>
                            <span className={styles.itemCategory}>{participant.category}</span>
                            <span className={styles.itemBottomRow}>
                                <span
                                    className={`${styles.statusBadge} ${
                                        participant.status === "active"
                                            ? styles.statusBadgeTone.active
                                            : styles.statusBadgeTone.reviewDue
                                    }`}
                                >
                                    {participant.status === "active" ? "Active" : "Review due"}
                                </span>
                                <span className={styles.itemSince}>{participant.since}</span>
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}