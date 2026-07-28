import * as styles from "./PricingCard.css.ts";
import Tick from "@/components/icons/Tick";
import Cross from "@/components/icons/Cross";

export interface PricingFeature {
    label: string;
    included: boolean;
}

interface PricingCardProps {
    tier: string;
    price: string;
    period: string;
    description: string;
    features: PricingFeature[];
    ctaLabel: string;
    popular?: boolean;
    selected: boolean;
    onSelect: () => void;
}

export function PricingCard({
                                tier,
                                price,
                                period,
                                description,
                                features,
                                ctaLabel,
                                popular = false,
                                selected,
                                onSelect,
                            }: PricingCardProps) {
    return (
        <div className={styles.cardWrap}>
            {popular && <span className={styles.badge}>Most popular</span>}

            <div
                role="button"
                tabIndex={0}
                className={`${styles.card} ${selected ? styles.cardSelected : ""}`}
                onClick={onSelect}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelect();
                    }
                }}
            >
                <span className={styles.tier}>{tier}</span>

                <div className={styles.priceRow}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.period}>/{period}</span>
                </div>

                <p className={styles.description}>{description}</p>

                <ul className={styles.featureList}>
                    {features.map((feature) => (
                        <li key={feature.label} className={styles.featureRow}>
              <span
                  className={`${styles.featureIcon} ${
                      feature.included ? styles.featureIconTone.included : styles.featureIconTone.excluded
                  }`}
              >
                {feature.included ?  <Tick/> : <Cross/>}
              </span>
                            <span className={feature.included ? styles.featureLabel : styles.featureLabelExcluded}>
                {feature.label}
              </span>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className={`${styles.ctaButton} ${selected ? styles.ctaButtonSelected : ""}`}
                >
                    {ctaLabel}
                </button>
            </div>
        </div>
    );
}