import { useState } from "react";
import { X } from "lucide-react";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";
import {
  overlay,
  modal,
  header,
  title,
  subtitle,
  closeButton,
  warningBanner,
  sectionLabel,
  messageBox,
  editButton,
  sendVia,
  sendViaRow,
  channelButton,
} from "./Followupmodal.css.ts";

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
        <div className={overlay} onClick={onClose}>
            <div className={modal} onClick={(e) => e.stopPropagation()}>
                <div className={header}>
                    <div>
                        <h2 className={title}>Follow Up with {contactName}</h2>
                        <p className={subtitle}>
                            {daysWithoutResponse} days without response · Last active on {lastActivePlatform}
                        </p>
                    </div>
                    <button type="button" className={closeButton} onClick={onClose} aria-label="Close">
                        <X size={18} />
                    </button>
                </div>

                <div className={warningBanner}>
                    This client hasn't responded in {daysWithoutResponse} days. Here's an AI-suggested
                    follow-up message.
                </div>

                <div>
                    <div className={sectionLabel}>AI Suggested Message</div>
                    <textarea
                        className={messageBox}
                        rows={4}
                        readOnly={!editing}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="button" className={editButton} onClick={() => setEditing((v) => !v)}>
                        {editing ? "Done Editing" : "Edit Message"}
                    </button>
                </div>

                <div className={sendVia}>
                    <div className={sectionLabel} style={{ marginBottom: 0 }}>
                        Send via
                    </div>
                    <div className={sendViaRow}>
                        <button type="button" className={channelButton}>
                            <FacebookIcon /> Facebook
                        </button>
                        <button type="button" className={channelButton}>
                            <InstagramIcon /> Instagram
                        </button>
                        <button type="button" className={channelButton}>
                            <LinkedinIcon /> LinkedIn
                        </button>
                        <button type="button" className={channelButton}>
                            <Mail /> Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}