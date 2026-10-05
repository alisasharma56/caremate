import { Search, Plus } from "lucide-react";
import {
  panel,
  header,
  title,
  addButton,
  searchWrap,
  searchIcon,
  searchInput,
  list,
  item,
  itemSelected,
  avatar,
  itemBody,
  itemTopRow,
  itemName,
  itemCategory,
  itemBottomRow,
  statusBadge,
  statusBadgeTone,
  itemSince,
} from "./Participantslist.css.ts";
import { PARTICIPANTS } from "@/data/participants";
import { useParticipantSelection } from "../Participantselectioncontext.tsx";

interface ParticipantsListProps {
    onAdd: () => void;
}

export const ParticipantsList = ({ onAdd }: ParticipantsListProps) => {
    const { selectedId, setSelectedId } = useParticipantSelection();

    return (
        <div className={panel}>
            <div className={header}>
                <span className={title}>Participants ({PARTICIPANTS.length})</span>
                <button type="button" className={addButton} onClick={onAdd}>
                    <Plus size={13} /> Add
                </button>
            </div>

            <div className={searchWrap}>
                <span className={searchIcon}>
                    <Search size={14} />
                </span>
                <input type="text" className={searchInput} placeholder="Search participants..." />
            </div>

            <div className={list}>
                {PARTICIPANTS.map((participant) => (
                    <button
                        key={participant.id}
                        type="button"
                        className={`${item} ${selectedId === participant.id ? itemSelected : ""}`}
                        onClick={() => setSelectedId(participant.id)}
                    >
                        <span className={avatar} style={{ background: participant.avatarColor }}>
                            {participant.initials}
                        </span>
                        <span className={itemBody}>
                            <span className={itemTopRow}>
                                <span className={itemName}>{participant.name}</span>
                            </span>
                            <span className={itemCategory}>{participant.category}</span>
                            <span className={itemBottomRow}>
                                <span
                                    className={`${statusBadge} ${
                                        participant.status === "active"
                                            ? statusBadgeTone.active
                                            : statusBadgeTone.reviewDue
                                    }`}
                                >
                                    {participant.status === "active" ? "Active" : "Review due"}
                                </span>
                                <span className={itemSince}>{participant.since}</span>
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};