import {
  cardWrap,
  badge,
  card,
  cardSelected,
  tier as tierStyle,
  priceRow,
  price as priceStyle,
  period as periodStyle,
  description as descriptionStyle,
  featureList,
  featureRow,
  featureIcon,
  featureIconTone,
  featureLabel,
  featureLabelExcluded,
  ctaButton,
  ctaButtonSelected,
} from "./PricingCard.css.ts";
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
    onContinue: () => void;
}

export const PricingCard = ({
                                tier,
                                price,
                                period,
                                description,
                                features,
                                ctaLabel,
                                popular = false,
                                selected,
                                onSelect,
                                onContinue,
                            }: PricingCardProps) => {
    return (
        <div className={cardWrap}>
            {popular && <span className={badge}>Most popular</span>}

            <div
                role="button"
                tabIndex={0}
                className={`${card} ${selected ? cardSelected : ""}`}
                onClick={onSelect}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelect();
                    }
                }}
            >
                <span className={tierStyle}>{tier}</span>

                <div className={priceRow}>
                    <span className={priceStyle}>{price}</span>
                    <span className={periodStyle}>/{period}</span>
                </div>

                <p className={descriptionStyle}>{description}</p>

                <ul className={featureList}>
                    {features.map((feature) => (
                        <li key={feature.label} className={featureRow}>
              <span
                  className={`${featureIcon} ${
                      feature.included ? featureIconTone.included : featureIconTone.excluded
                  }`}
              >
                {feature.included ?  <Tick/> : <Cross/>}
              </span>
                            <span className={feature.included ? featureLabel : featureLabelExcluded}>
                {feature.label}
              </span>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className={`${ctaButton} ${selected ? ctaButtonSelected : ""}`}
                    onClick={(event) => {
                        event.stopPropagation();
                        onSelect();
                        onContinue();
                    }}
                >
                    {ctaLabel}
                </button>
            </div>
        </div>
    );
};
