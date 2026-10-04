import { useEffect, useState } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import FacebookIcon from "@/components/icons/Facebook";
import {
  panel,
  header,
  headerLeft,
  headerAvatar,
  headerNameRow,
  headerName,
  headerStatus,
  headerVia,
  headerActions,
  actionButton,
  primaryActionButton,
  aiManagingBanner,
  aiManagingText,
  aiManagingTakeOver,
  suggestedBanner,
  suggestedBannerTop,
  suggestedBannerTitle,
  suggestedBannerClose,
  suggestedBannerText,
  messageList,
  dateDivider,
  bubbleRow,
  bubbleRowTone,
  bubble,
  bubbleTone,
  bubbleMeta,
  statusDivider,
  statusDividerDot,
  footer,
  footerChannel,
  replyRow,
  replyInputWrap,
  replyInput,
  letAiReply,
  takeOverButton,
  sendButton,
  footerHint,
  footerHintDot,
} from "./Chatpanel.css.ts";
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
        <div className={panel}>
            <div className={header}>
                <div className={headerLeft}>
                    <span className={headerAvatar} style={{ background: conversation.avatarColor }}>
                        {conversation.initials}
                    </span>
                    <div>
                        <div className={headerNameRow}>
                            <span className={headerName}>{conversation.name}</span>
                            <FacebookIcon />
                            {!isAiActive && <span className={headerStatus}>Needs You</span>}
                        </div>
                        <span className={headerVia}>{conversation.via}</span>
                    </div>
                </div>

                <div className={headerActions}>
                    <button
                        type="button"
                        className={actionButton}
                        onClick={() => setShowSuggestedReplies((v) => !v)}
                    >
                        <Sparkles size={13} /> Summarize
                    </button>
                    <button type="button" className={actionButton}>
                        View Profile
                    </button>
                    <button type="button" className={actionButton} onClick={() => setShowFollowUp(true)}>
                        Follow Up
                    </button>
                    <button type="button" className={primaryActionButton}>
                        Move to leads
                    </button>
                </div>
            </div>

            {isAiActive ? (
                <div className={aiManagingBanner}>
                    <span className={aiManagingText}>
                        <Sparkles size={12} />
                        AI is managing this conversation · Last replied {conversation.lastRepliedAgo}
                    </span>
                    <button type="button" className={aiManagingTakeOver}>
                        Take Over
                    </button>
                </div>
            ) : showSuggestedReplies && conversation.aiSummary ? (
                <div className={suggestedBanner}>
                    <div className={suggestedBannerTop}>
                        <span className={suggestedBannerTitle}>
                            <Sparkles size={13} color="#F3AA23" /> Suggested Replies
                        </span>
                        <button
                            type="button"
                            className={suggestedBannerClose}
                            onClick={() => setShowSuggestedReplies(false)}
                        >
                            <X size={14} />
                        </button>
                    </div>
                    <p className={suggestedBannerText}>{conversation.aiSummary}</p>
                </div>
            ) : null}

            <div className={messageList}>
                <div className={dateDivider}>Thursday, 19 June</div>

                {conversation.messages.map((message) => {
                    const tone = message.from === "contact" ? "contact" : "outgoing";
                    return (
                        <div key={message.id} className={`${bubbleRow} ${bubbleRowTone[tone]}`}>
                            <div className={`${bubble} ${bubbleTone[tone]}`}>{message.text}</div>
                            <span className={bubbleMeta}>
                                {message.senderLabel} · {message.time}
                            </span>
                        </div>
                    );
                })}

                {!isAiActive && (
                    <div className={statusDivider}>
                        <span className={statusDividerDot} />
                        Needs You · AI has paused and is waiting for your response
                    </div>
                )}
            </div>

            <div className={footer}>
                <span className={footerChannel}>
                    <FacebookIcon /> Replying via WhatsApp
                </span>

                <div className={replyRow}>
                    <div className={replyInputWrap}>
                        <input
                            type="text"
                            className={replyInput}
                            placeholder={`Reply to ${conversation.name.split(" ")[0]}...`}
                        />
                        <span className={letAiReply}>Let AI reply</span>
                    </div>

                    {isAiActive ? (
                        <button type="button" className={takeOverButton}>
                            Take Over
                        </button>
                    ) : (
                        <button type="button" className={sendButton} aria-label="Send">
                            <ArrowRight size={16} />
                        </button>
                    )}
                </div>

                {isAiActive && (
                    <span className={footerHint}>
                        <span className={footerHintDot} />
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