import { FileText } from "lucide-react";
import * as styles from "./Participantdetail.css.ts";
import { PARTICIPANTS } from "../Participants.ts";
import { useParticipantSelection } from "../Participantselectioncontext.tsx";

function formatMoney(value: number) {
    return `$${value.toLocaleString("en-AU")}`;
}

export function ParticipantDetail() {
    const { selectedId } = useParticipantSelection();
    const participant = PARTICIPANTS.find((p) => p.id === selectedId) ?? PARTICIPANTS[0];

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.avatar} style={{ background: participant.avatarColor }}>
                        {participant.initials}
                    </span>
                    <div>
                        <h1 className={styles.name}>{participant.name}</h1>
                        <p className={styles.tags}>{participant.tags}</p>
                    </div>
                </div>
                <div className={styles.headerActions}>
                    <button type="button" className={styles.actionButton}>
                        Edit profile
                    </button>
                    <button type="button" className={styles.actionButton}>
                        View roster
                    </button>
                    <button type="button" className={styles.primaryActionButton}>
                        + Add document
                    </button>
                </div>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoBox}>
                    <span className={styles.infoLabel}>NDIS Number</span>
                    <span className={styles.infoValue}>{participant.ndisNumber}</span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.infoLabel}>Plan Period</span>
                    <span className={styles.infoValue}>{participant.planPeriod}</span>
                    <span className={styles.infoNote}>{participant.planReviewNote}</span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.infoLabel}>Support Category</span>
                    <span className={styles.infoValue}>{participant.supportCategory}</span>
                </div>
                <div className={styles.infoBox}>
                    <span className={styles.infoLabel}>Plan Manager</span>
                    <span className={styles.infoValue}>{participant.planManager}</span>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Funding Tracker</h2>
                {participant.funding.map((line) => {
                    const pct = Math.min(100, (line.spent / line.total) * 100);
                    return (
                        <div key={line.label} className={styles.fundingRow}>
                            <div className={styles.fundingTopRow}>
                                <span className={styles.fundingLabel}>{line.label}</span>
                                <span className={styles.fundingAmount}>
                                    {formatMoney(line.spent)} / {formatMoney(line.total)}
                                </span>
                            </div>
                            <div className={styles.fundingTrack}>
                                <div
                                    className={styles.fundingFill}
                                    style={{ width: `${pct}%`, background: line.color }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Documents &amp; Agreements</h2>
                {participant.documents.map((doc) => (
                    <div key={doc.id} className={styles.documentRow}>
                        <span className={styles.documentIcon}>
                            <FileText size={16} />
                        </span>
                        <span className={styles.documentBody}>
                            <span className={styles.documentTitle}>{doc.title}</span>
                            <span className={styles.documentMeta}>{doc.meta}</span>
                        </span>
                        <span className={styles.documentActions}>
                            <button type="button" className={styles.actionButton}>
                                View
                            </button>
                            {doc.hasDownload && (
                                <button type="button" className={styles.actionButton}>
                                    Download
                                </button>
                            )}
                        </span>
                    </div>
                ))}

                <button type="button" className={styles.uploadRow}>
                    + Upload document
                </button>
            </div>
        </div>
    );
}