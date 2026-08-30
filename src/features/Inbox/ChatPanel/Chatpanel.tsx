import { useEffect, useState } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import FacebookIcon from "@/components/icons/Facebook";
import * as styles from "./Chatpanel.css.ts";
import { FollowUpModal } from "../Folloupmodal/Followupmodal.tsx";
import { CONVERSATIONS } from "../Conversation.ts";
import { useInboxSelection } from "../Inboxselectioncontext.tsx";

export function ChatPanel() {
    const { selectedId } = useInboxSelection();
    const conversation = CONVERSATIONS.find((c) => c.id === selectedId) ?? CONVERSATIONS[0];

    const isAiActive = conversation.status === "aiActive";
    const [showSuggestedReplies, setShowSuggestedReplies] = useState(false);
    const [showFollowUp, setShowFollowUp] = useState(false);

    useEffect(() => {
        setShowSuggestedReplies(false);
        setShowFollowUp(false);
    }, [selectedId]);

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span className={styles.headerAvatar} style={{ background: conversation.avatarColor }}>
                        {conversation.initials}
                    </span>
                    <div>
                        <div className={styles.headerNameRow}>
                            <span className={styles.headerName}>{conversation.name}</span>
                            <FacebookIcon />
                            {!isAiActive && <span className={styles.headerStatus}>Needs You</span>}
                        </div>
                        <span className={styles.headerVia}>{conversation.via}</span>
                    </div>
                </div>

                <div className={styles.headerActions}>
                    <button
                        type="button"
                        className={styles.actionButton}
                        onClick={() => setShowSuggestedReplies((v) => !v)}
                    >
                        <Sparkles size={13} /> Summarize
                    </button>
                    <button type="button" className={styles.actionButton}>
                        View Profile
                    </button>
                    <button type="button" className={styles.actionButton} onClick={() => setShowFollowUp(true)}>
                        Follow Up
                    </button>
                    <button type="button" className={styles.primaryActionButton}>
                        Move to leads
                    </button>
                </div>
            </div>

            {isAiActive ? (
                <div className={styles.aiManagingBanner}>
                    <span className={styles.aiManagingText}>
                        <Sparkles size={12} />
                        AI is managing this conversation · Last replied {conversation.lastRepliedAgo}
                    </span>
                    <button type="button" className={styles.aiManagingTakeOver}>
                        Take Over
                    </button>
                </div>
            ) : showSuggestedReplies && conversation.aiSummary ? (
                <div className={styles.suggestedBanner}>
                    <div className={styles.suggestedBannerTop}>
                        <span className={styles.suggestedBannerTitle}>
                            <Sparkles size={13} color="#F3AA23" /> Suggested Replies
                        </span>
                        <button
                            type="button"
                            className={styles.suggestedBannerClose}
                            onClick={() => setShowSuggestedReplies(false)}
                        >
                            <X size={14} />
                        </button>
                    </div>
                    <p className={styles.suggestedBannerText}>{conversation.aiSummary}</p>
                </div>
            ) : null}

            <div className={styles.messageList}>
                <div className={styles.dateDivider}>Thursday, 19 June</div>

                {conversation.messages.map((message) => {
                    const tone = message.from === "contact" ? "contact" : "outgoing";
                    return (
                        <div key={message.id} className={`${styles.bubbleRow} ${styles.bubbleRowTone[tone]}`}>
                            <div className={`${styles.bubble} ${styles.bubbleTone[tone]}`}>{message.text}</div>
                            <span className={styles.bubbleMeta}>
                                {message.senderLabel} · {message.time}
                            </span>
                        </div>
                    );
                })}

                {!isAiActive && (
                    <div className={styles.statusDivider}>
                        <span className={styles.statusDividerDot} />
                        Needs You · AI has paused and is waiting for your response
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <span className={styles.footerChannel}>
                    <FacebookIcon /> Replying via WhatsApp
                </span>

                <div className={styles.replyRow}>
                    <div className={styles.replyInputWrap}>
                        <input
                            type="text"
                            className={styles.replyInput}
                            placeholder={`Reply to ${conversation.name.split(" ")[0]}...`}
                        />
                        <span className={styles.letAiReply}>Let AI reply</span>
                    </div>

                    {isAiActive ? (
                        <button type="button" className={styles.takeOverButton}>
                            Take Over
                        </button>
                    ) : (
                        <button type="button" className={styles.sendButton} aria-label="Send">
                            <ArrowRight size={16} />
                        </button>
                    )}
                </div>

                {isAiActive && (
                    <span className={styles.footerHint}>
                        <span className={styles.footerHintDot} />
                        AI is managing this — tap Take Over to respond manually
                    </span>
                )}
            </div>

            {showFollowUp && (
                <FollowUpModal
                    contactName={conversation.name}
                    daysWithoutResponse={conversation.daysWithoutResponse ?? 5}
                    lastActivePlatform="Facebook"
                    suggestedMessage={conversation.followUpMessage ?? ""}
                    onClose={() => setShowFollowUp(false)}
                />
            )}
        </div>
    );
}