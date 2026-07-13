import * as styles from "./FeedCard.css.ts";
import Flame from "@/components/icons/Flame";
import Share from "@/components/icons/Share";
import Dropdown from "@/components/icons/Dropdown";
import UnLike from "@/components/icons/UnLike";
import MessageCircle from "@/components/icons/MessageCircle";
import ExternalLink from "@/components/icons/ExternalLink";


export function FeedCard() {
    return (
        <article className={styles.card}>
            {/* header */}
            <div className={styles.header}>
                <span className={styles.avatar} style={{ background: "#17A8B0" }} />
                <div className={styles.headerText}>
                    <span className={styles.authorName}>NDIS Commission</span>
                    <span className={styles.metaRow}>
            <span>All States</span>
            <span className={styles.dot} />
            <span>2h ago</span>
            <span className={styles.dot} />
            <span>3 min read</span>
            <span className={styles.hotBadge}>
              <span className={styles.dot} />
              <Flame/>
              Hot
            </span>
          </span>
                </div>
            </div>

            {/* tags */}
            <div className={styles.tagRow}>
                <span className={`${styles.tagBase} ${styles.tagTone.blue}`}>Funding</span>
                <span className={`${styles.tagBase} ${styles.tagTone.gray}`}>Provider</span>
                <span className={`${styles.tagBase} ${styles.tagTone.gray}`}>Participant</span>
                <span className={`${styles.tagBase} ${styles.tagTone.red}`}>Action by 30 Jun</span>
                <span className={`${styles.tagBase} ${styles.tagTone.orange}`}>Impact 9/10</span>
            </div>

            {/* filter chips */}
            <div className={styles.filterRow}>
                <button type="button" className={styles.filterChip}>
                    Price Guide History
                    <Dropdown/>
                </button>
                <button type="button" className={styles.filterChip}>
                    OT Billing Updates
                    <Dropdown/>
                </button>
                <button type="button" className={styles.filterChip}>
                    Allied Health Performance
                    <Dropdown/>
                </button>
            </div>

            {/* media */}
            <div className={styles.media}>
                <img
                    src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80"
                    alt="Community consultation session"
                    className={styles.mediaImg}
                />
            </div>

            {/* headline + description */}
            <h3 className={styles.headline}>
                New Accountability Framework for Providers: What the Latest Review Reveals
            </h3>
            <p className={styles.description}>
                The federal government has unveiled a comprehensive suite of reforms aimed at
                increasing transparency across the scheme. Early analysis suggests a pivot towards
                outcomes-based funding models, potentially reshaping how over 20,000 providers operate
                across Australia.
            </p>

            {/* rate change */}
            <div className={styles.rateBox}>
                <div className={styles.rateHeader}>
                    <span className={styles.rateDot} />
                    <span className={styles.rateTitle}>Rate Change</span>
                    <span className={styles.rateEffective}>Effective 1 July 2025</span>
                </div>

                <div className={styles.rateRow}>
                    <span className={styles.rateLabel}>OT standard</span>
                    <span className={styles.rateOld}>$193.99/hr</span>
                    <span className={styles.rateArrow}>›</span>
                    <span className={styles.rateNew}>$202.14/hr</span>
                    <span className={styles.rateDelta}>+4.2%</span>
                </div>

                <div className={styles.rateRow}>
                    <span className={styles.rateLabel}>Physio std</span>
                    <span className={styles.rateOld}>$189.50/hr</span>
                    <span className={styles.rateArrow}>›</span>
                    <span className={styles.rateNew}>$197.45/hr</span>
                    <span className={styles.rateDelta}>+4.2%</span>
                </div>
            </div>

            {/* sentiment */}
            <div className={styles.sentimentWrap}>
                <div className={styles.sentimentTop}>
                    <span className={styles.sentimentLabel}>Sentiment</span>
                    <div className={styles.sentimentBar}>
            <span
                className={styles.sentimentSegment}
                style={{ width: "74%", background: styles.colorTokens.sentimentGreen }}
            />
                        <span
                            className={styles.sentimentSegment}
                            style={{ width: "18%", background: styles.colorTokens.sentimentBlue }}
                        />
                        <span
                            className={styles.sentimentSegment}
                            style={{ width: "8%", background: styles.colorTokens.sentimentRed }}
                        />
                    </div>
                    <span className={styles.sentimentPct} style={{ color: styles.colorTokens.sentimentGreen }}>
            74%
          </span>
                    <span className={styles.sentimentPct} style={{ color: styles.colorTokens.sentimentBlue }}>
            18%
          </span>
                    <span className={styles.sentimentPct} style={{ color: styles.colorTokens.sentimentRed }}>
            8%
          </span>
                </div>
            </div>

            {/* footer */}
            <div className={styles.footer}>
                <div className={styles.footerActions}>
                    <button type="button" className={styles.footerItem}>
                        <UnLike/>
                        128 likes
                    </button>
                    <button type="button" className={styles.footerItem}>
                        <MessageCircle/>
                        34 Comment
                    </button>
                    <button type="button" className={styles.footerItem}>
                        <Share/>
                        10 Share
                    </button>
                </div>
                <div className={styles.footerSpacer} />
                <button type="button" className={styles.fullArticle}>
                    <ExternalLink/>
                    Full article
                </button>
            </div>
        </article>
    );
}