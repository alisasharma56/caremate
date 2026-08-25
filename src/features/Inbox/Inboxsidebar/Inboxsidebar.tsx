import { useState } from "react";

import * as styles from "./Inboxsidebar.css.ts";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";
import Search from "@/components/icons/Search";
import { CONVERSATIONS, type Platform } from "../conversation.ts";
import { useInboxSelection } from "../Inboxselectioncontext.tsx";

type StatusFilter = "all" | "needsYou" | "aiActive";
type PlatformFilter = "all" | "facebook" | "instagram";

const PLATFORM_ICON: Record<Platform, React.ReactNode> = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon/>,
    linkedin: <LinkedinIcon />,
    email: <Mail />,
};

export function InboxSidebar() {
    const [autopilotOn, setAutopilotOn] = useState(true);
    const [platformFilter, setPlatformFilter] = useState<PlatformFilter>("all");
    const [statusTab, setStatusTab] = useState<StatusFilter>("all");
    const { selectedId, setSelectedId } = useInboxSelection();

    const facebookCount = CONVERSATIONS.filter((c) => c.platform === "facebook").length;
    const instagramCount = CONVERSATIONS.filter((c) => c.platform === "instagram").length;
    const needsYouCount = CONVERSATIONS.filter((c) => c.status === "needsYou").length;
    const aiActiveCount = CONVERSATIONS.filter((c) => c.status === "aiActive").length;

    const visible = CONVERSATIONS.filter((c) => {
        if (platformFilter !== "all" && c.platform !== platformFilter) return false;
        if (statusTab === "needsYou" && c.status !== "needsYou") return false;
        if (statusTab === "aiActive" && c.status !== "aiActive") return false;
        return true;
    });

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <span className={styles.title}>Inbox</span>
                <div className={styles.autopilot}>
                    <span className={styles.autopilotLabel}>AI Autopilot</span>
                    <button
                        type="button"
                        className={`${styles.toggle} ${autopilotOn ? styles.toggleTone.on : styles.toggleTone.off}`}
                        onClick={() => setAutopilotOn((v) => !v)}
                    >
                        <span className={styles.toggleKnob} style={{ left: autopilotOn ? 16 : 2 }} />
                    </button>
                    <span className={styles.activeBadge}>
            <span className={styles.activeDot} />
            12 active
          </span>
                </div>
            </div>

            <div className={styles.filterRow}>
                <button
                    type="button"
                    className={`${styles.filterPill} ${platformFilter === "all" ? styles.filterPillActive : ""}`}
                    onClick={() => setPlatformFilter("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`${styles.filterPill} ${platformFilter === "facebook" ? styles.filterPillActive : ""}`}
                    onClick={() => setPlatformFilter("facebook")}
                >
                    <FacebookIcon /> Facebook <span className={styles.filterPillCount}>{facebookCount}</span>
                </button>
                <button
                    type="button"
                    className={`${styles.filterPill} ${platformFilter === "instagram" ? styles.filterPillActive : ""}`}
                    onClick={() => setPlatformFilter("instagram")}
                >
                    <InstagramIcon /> Instagram <span className={styles.filterPillCount}>{instagramCount}</span>
                </button>
            </div>

            <div className={styles.tabRow}>
                <button
                    type="button"
                    className={`${styles.tab} ${statusTab === "all" ? styles.tabActive : ""}`}
                    onClick={() => setStatusTab("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`${styles.tab} ${statusTab === "needsYou" ? styles.tabActive : ""}`}
                    onClick={() => setStatusTab("needsYou")}
                >
                    Needs You <span className={styles.tabCount}>{needsYouCount}</span>
                </button>
                <button
                    type="button"
                    className={`${styles.tab} ${statusTab === "aiActive" ? styles.tabActive : ""}`}
                    onClick={() => setStatusTab("aiActive")}
                >
                    AI Active <span className={styles.tabCount}>{aiActiveCount}</span>
                </button>
            </div>

            <div className={styles.searchWrap}>
        <span className={styles.searchIcon}>
          <Search/>
        </span>
                <input type="text" className={styles.searchInput} placeholder="Search..." />
            </div>

            <div className={styles.list}>
                {visible.map((conversation) => (
                    <button
                        key={conversation.id}
                        type="button"
                        className={`${styles.item} ${
                            selectedId === conversation.id ? styles.itemSelected : ""
                        }`}
                        onClick={() => setSelectedId(conversation.id)}
                    >
            <span className={styles.avatar} style={{ background: conversation.avatarColor }}>
              {conversation.initials}
            </span>

                        <span className={styles.itemBody}>
              <span className={styles.itemTopRow}>
                <span className={styles.itemNameRow}>
                  <span className={styles.itemName}>{conversation.name}</span>
                  <span className={styles.platformIcon}>{PLATFORM_ICON[conversation.platform]}</span>
                  <span className={styles.itemStatus}>Needs You</span>
                </span>
                <span className={styles.itemTime}>{conversation.time}</span>
              </span>
              <span className={styles.itemPreview}>{conversation.preview}</span>
            </span>
                    </button>
                ))}
            </div>
        </div>
    );
}