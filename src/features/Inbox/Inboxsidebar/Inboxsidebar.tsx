import { useState } from "react";

import {
  panel,
  header,
  title,
  autopilot,
  autopilotLabel,
  toggle,
  toggleTone,
  toggleKnob,
  activeBadge,
  activeDot,
  filterRow,
  filterPill,
  filterPillActive,
  filterPillCount,
  tabRow,
  tab,
  tabActive,
  tabCount,
  searchWrap,
  searchIcon,
  searchInput,
  list,
  item,
  itemSelected,
  avatar,
  itemBody,
  itemTopRow,
  itemNameRow,
  itemName,
  platformIcon,
  itemStatus,
  itemTime,
  itemPreview,
} from "./Inboxsidebar.css.ts";
import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";
import Search from "@/components/icons/Search";
import { CONVERSATIONS, type Platform } from "@/data/conversation";
import { useInboxSelection } from "../Inboxselectioncontext.tsx";

type StatusFilter = "all" | "needsYou" | "aiActive";
type PlatformFilter = "all" | "facebook" | "instagram";

const PLATFORM_ICON: Record<Platform, React.ReactNode> = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon/>,
    linkedin: <LinkedinIcon />,
    email: <Mail />,
};

export const InboxSidebar = () => {
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
        return !(statusTab === "aiActive" && c.status !== "aiActive");

    });

    return (
        <div className={panel}>
            <div className={header}>
                <span className={title}>Inbox</span>
                <div className={autopilot}>
                    <span className={autopilotLabel}>AI Autopilot</span>
                    <button
                        type="button"
                        className={`${toggle} ${autopilotOn ? toggleTone.on : toggleTone.off}`}
                        onClick={() => setAutopilotOn((v) => !v)}
                    >
                        <span className={toggleKnob} style={{ left: autopilotOn ? 16 : 2 }} />
                    </button>
                    <span className={activeBadge}>
            <span className={activeDot} />
            12 active
          </span>
                </div>
            </div>

            <div className={filterRow}>
                <button
                    type="button"
                    className={`${filterPill} ${platformFilter === "all" ? filterPillActive : ""}`}
                    onClick={() => setPlatformFilter("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`${filterPill} ${platformFilter === "facebook" ? filterPillActive : ""}`}
                    onClick={() => setPlatformFilter("facebook")}
                >
                    <FacebookIcon /> Facebook <span className={filterPillCount}>{facebookCount}</span>
                </button>
                <button
                    type="button"
                    className={`${filterPill} ${platformFilter === "instagram" ? filterPillActive : ""}`}
                    onClick={() => setPlatformFilter("instagram")}
                >
                    <InstagramIcon /> Instagram <span className={filterPillCount}>{instagramCount}</span>
                </button>
            </div>

            <div className={tabRow}>
                <button
                    type="button"
                    className={`${tab} ${statusTab === "all" ? tabActive : ""}`}
                    onClick={() => setStatusTab("all")}
                >
                    All
                </button>
                <button
                    type="button"
                    className={`${tab} ${statusTab === "needsYou" ? tabActive : ""}`}
                    onClick={() => setStatusTab("needsYou")}
                >
                    Needs You <span className={tabCount}>{needsYouCount}</span>
                </button>
                <button
                    type="button"
                    className={`${tab} ${statusTab === "aiActive" ? tabActive : ""}`}
                    onClick={() => setStatusTab("aiActive")}
                >
                    AI Active <span className={tabCount}>{aiActiveCount}</span>
                </button>
            </div>

            <div className={searchWrap}>
        <span className={searchIcon}>
          <Search/>
        </span>
                <input type="text" className={searchInput} placeholder="Search..." />
            </div>

            <div className={list}>
                {visible.map((conversation) => (
                    <button
                        key={conversation.id}
                        type="button"
                        className={`${item} ${
                            selectedId === conversation.id ? itemSelected : ""
                        }`}
                        onClick={() => setSelectedId(conversation.id)}
                    >
            <span className={avatar} style={{ background: conversation.avatarColor }}>
              {conversation.initials}
            </span>

                        <span className={itemBody}>
              <span className={itemTopRow}>
                <span className={itemNameRow}>
                  <span className={itemName}>{conversation.name}</span>
                  <span className={platformIcon}>{PLATFORM_ICON[conversation.platform]}</span>
                  <span className={itemStatus}>Needs You</span>
                </span>
                <span className={itemTime}>{conversation.time}</span>
              </span>
              <span className={itemPreview}>{conversation.preview}</span>
            </span>
                    </button>
                ))}
            </div>
        </div>
    );
};