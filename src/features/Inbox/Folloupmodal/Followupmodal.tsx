import { useState } from "react";
import { X } from "lucide-react";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";
import * as styles from "./Followupmodal.css.ts";

interface FollowUpModalProps {
    contactName: string;
    daysWithoutResponse: number;
    lastActivePlatform: string;
    suggestedMessage: string;
    onClose: () => void;
}

export function FollowUpModal({
                                  contactName,
                                  daysWithoutResponse,
                                  lastActivePlatform,
                                  suggestedMessage,
                                  onClose,
                              }: FollowUpModalProps) {
    const [message, setMessage] = useState(suggestedMessage);
    const [editing, setEditing] = useState(false);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Follow Up with {contactName}</h2>
                        <p className={styles.subtitle}>
                            {daysWithoutResponse} days without response · Last active on {lastActivePlatform}
                        </p>
                    </div>
                    <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
                        <X size={18} />
                    </button>
                </div>

                <div className={styles.warningBanner}>
                    This client hasn't responded in {daysWithoutResponse} days. Here's an AI-suggested
                    follow-up message.
                </div>

                <div>
                    <div className={styles.sectionLabel}>AI Suggested Message</div>
                    <textarea
                        className={styles.messageBox}
                        rows={4}
                        readOnly={!editing}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="button" className={styles.editButton} onClick={() => setEditing((v) => !v)}>
                        {editing ? "Done Editing" : "Edit Message"}
                    </button>
                </div>

                <div className={styles.sendVia}>
                    <div className={styles.sectionLabel} style={{ marginBottom: 0 }}>
                        Send via
                    </div>
                    <div className={styles.sendViaRow}>
                        <button type="button" className={styles.channelButton}>
                            <FacebookIcon /> Facebook
                        </button>
                        <button type="button" className={styles.channelButton}>
                            <InstagramIcon /> Instagram
                        </button>
                        <button type="button" className={styles.channelButton}>
                            <LinkedinIcon /> LinkedIn
                        </button>
                        <button type="button" className={styles.channelButton}>
                            <Mail /> Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}