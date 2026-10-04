import { FileText } from "lucide-react";
import {
  panel,
  header,
  headerLeft,
  avatar,
  name,
  tags,
  headerActions,
  actionButton,
  primaryActionButton,
  infoGrid,
  infoBox,
  infoLabel,
  infoValue,
  infoNote,
  section,
  sectionTitle,
  fundingRow,
  fundingTopRow,
  fundingLabel,
  fundingAmount,
  fundingTrack,
  fundingFill,
  documentRow,
  documentIcon,
  documentBody,
  documentTitle,
  documentMeta,
  documentActions,
  uploadRow,
} from "./Participantdetail.css.ts";
import { PARTICIPANTS } from "../Participants.ts";
import { useParticipantSelection } from "../Participantselectioncontext.tsx";

function formatMoney(value: number) {
    return `$${value.toLocaleString("en-AU")}`;
}

export function ParticipantDetail() {
    const { selectedId } = useParticipantSelection();
    const participant = PARTICIPANTS.find((p) => p.id === selectedId) ?? PARTICIPANTS[0];

    return (
        <div className={panel}>
            <div className={header}>
                <div className={headerLeft}>
                    <span className={avatar} style={{ background: participant.avatarColor }}>
                        {participant.initials}
                    </span>
                    <div>
                        <h1 className={name}>{participant.name}</h1>
                        <p className={tags}>{participant.tags}</p>
                    </div>
                </div>
                <div className={headerActions}>
                    <button type="button" className={actionButton}>
                        Edit profile
                    </button>
                    <button type="button" className={actionButton}>
                        View roster
                    </button>
                    <button type="button" className={primaryActionButton}>
                        + Add document
                    </button>
                </div>
            </div>

            <div className={infoGrid}>
                <div className={infoBox}>
                    <span className={infoLabel}>NDIS Number</span>
                    <span className={infoValue}>{participant.ndisNumber}</span>
                </div>
                <div className={infoBox}>
                    <span className={infoLabel}>Plan Period</span>
                    <span className={infoValue}>{participant.planPeriod}</span>
                    <span className={infoNote}>{participant.planReviewNote}</span>
                </div>
                <div className={infoBox}>
                    <span className={infoLabel}>Support Category</span>
                    <span className={infoValue}>{participant.supportCategory}</span>
                </div>
                <div className={infoBox}>
                    <span className={infoLabel}>Plan Manager</span>
                    <span className={infoValue}>{participant.planManager}</span>
                </div>
            </div>

            <div className={section}>
                <h2 className={sectionTitle}>Funding Tracker</h2>
                {participant.funding.map((line) => {
                    const pct = Math.min(100, (line.spent / line.total) * 100);
                    return (
                        <div key={line.label} className={fundingRow}>
                            <div className={fundingTopRow}>
                                <span className={fundingLabel}>{line.label}</span>
                                <span className={fundingAmount}>
                                    {formatMoney(line.spent)} / {formatMoney(line.total)}
                                </span>
                            </div>
                            <div className={fundingTrack}>
                                <div
                                    className={fundingFill}
                                    style={{ width: `${pct}%`, background: line.color }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={section}>
                <h2 className={sectionTitle}>Documents &amp; Agreements</h2>
                {participant.documents.map((doc) => (
                    <div key={doc.id} className={documentRow}>
                        <span className={documentIcon}>
                            <FileText size={16} />
                        </span>
                        <span className={documentBody}>
                            <span className={documentTitle}>{doc.title}</span>
                            <span className={documentMeta}>{doc.meta}</span>
                        </span>
                        <span className={documentActions}>
                            <button type="button" className={actionButton}>
                                View
                            </button>
                            {doc.hasDownload && (
                                <button type="button" className={actionButton}>
                                    Download
                                </button>
                            )}
                        </span>
                    </div>
                ))}

                <button type="button" className={uploadRow}>
                    + Upload document
                </button>
            </div>
        </div>
    );
}