// import * as styles from "./paymentwall.css.ts";
// import { PricingCard, type PricingFeature } from "@/components/PricingCard/PricingCard.tsx";
//
// const freeFeatures: PricingFeature[] = [
//     { label: "Personalised news feed", included: true },
//     { label: "Topic & region filtering", included: true },
//     { label: "Save articles", included: true },
//     { label: "Weekly newsletter", included: true },
//     { label: "Comments & discussion", included: false },
//     { label: "AI chat assistant", included: false },
//     { label: "CRM & client management", included: false },
//     { label: "Roster & scheduling", included: false },
// ];
//
// const communityFeatures: PricingFeature[] = [
//     { label: "Everything in free", included: true },
//     { label: "Topic & region filtering", included: true },
//     { label: "Save articles", included: true },
//     { label: "Weekly newsletter", included: true },
//     { label: "Comments & discussion", included: false },
//     { label: "AI chat assistant", included: false },
//     { label: "CRM & client management", included: false },
//     { label: "Roster & scheduling", included: false },
// ];
//
// const professionalFeatures: PricingFeature[] = [
//     { label: "Everything in community", included: true },
//     { label: "Comments & discussion", included: true },
//     { label: "AI chat assistant", included: true },
//     { label: "CRM & client management", included: true },
//     { label: "Roster & scheduling", included: true },
// ];
//
// export function Paymentwall() {
//     return (
//         <div className={styles.page}>
//       <span className={styles.logo}>
//         CARE<span className={styles.logoAccent}>MATE</span>
//       </span>
//
//             <div className={styles.heading}>
//                 <h1 className={styles.title}>Choose Your Plan</h1>
//                 <p className={styles.subtitle}>Cancel anytime. No lock-in contracts.</p>
//             </div>
//
//             <div className={styles.grid}>
//                 <PricingCard
//                     tier="Free"
//                     price="$0"
//                     period="forever"
//                     description="Get started with the essentials."
//                     features={freeFeatures}
//                     ctaLabel="Continue With Free"
//                 />
//
//                 <PricingCard
//                     tier="Community"
//                     price="$3"
//                     period="forever"
//                     description="Get started with the essentials."
//                     features={communityFeatures}
//                     ctaLabel="Start 7 Day Free Trial"
//                     popular
//                 />
//
//                 <PricingCard
//                     tier="Professional"
//                     price="$49"
//                     period="forever"
//                     description="Get started with the essentials."
//                     features={professionalFeatures}
//                     ctaLabel="Start 7 Day Free Trial"
//                 />
//             </div>
//         </div>
//     );
// }

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import * as styles from "./paymentwall.css.ts";
import { PricingCard, type PricingFeature } from "@/components/PricingCard/PricingCard.tsx";
import {AuthLogo} from "@/features/auth/components/AuthLogo.tsx";

interface PricingPlan {
    id: string;
    tier: string;
    price: string;
    period: string;
    description: string;
    features: PricingFeature[];
    ctaLabel: string;
    popular?: boolean;
}

const PLANS: PricingPlan[] = [
    {
        id: "free",
        tier: "Free",
        price: "$0",
        period: "forever",
        description: "Get started with the essentials.",
        ctaLabel: "Continue With Free",
        features: [
            { label: "Personalised news feed", included: true },
            { label: "Topic & region filtering", included: true },
            { label: "Save articles", included: true },
            { label: "Weekly newsletter", included: true },
            { label: "Comments & discussion", included: false },
            { label: "AI chat assistant", included: false },
            { label: "CRM & client management", included: false },
            { label: "Roster & scheduling", included: false },
        ],
    },
    {
        id: "community",
        tier: "Community",
        price: "$3",
        period: "forever",
        description: "Get started with the essentials.",
        ctaLabel: "Start 7 Day Free Trial",
        popular: true,
        features: [
            { label: "Everything in free", included: true },
            { label: "Topic & region filtering", included: true },
            { label: "Save articles", included: true },
            { label: "Weekly newsletter", included: true },
            { label: "Comments & discussion", included: false },
            { label: "AI chat assistant", included: false },
            { label: "CRM & client management", included: false },
            { label: "Roster & scheduling", included: false },
        ],
    },
    {
        id: "professional",
        tier: "Professional",
        price: "$49",
        period: "forever",
        description: "Get started with the essentials.",
        ctaLabel: "Start 7 Day Free Trial",
        features: [
            { label: "Everything in community", included: true },
            { label: "Comments & discussion", included: true },
            { label: "AI chat assistant", included: true },
            { label: "CRM & client management", included: true },
            { label: "Roster & scheduling", included: true },
        ],
    },
];

export function Paymentwall() {
    const [selectedId, setSelectedId] = useState<string>("community");
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
      <span className={styles.logo}>
        <AuthLogo/>
      </span>

            <div className={styles.heading}>
                <h1 className={styles.title}>Choose Your Plan</h1>
                <p className={styles.subtitle}>Cancel anytime. No lock-in contracts.</p>
            </div>

            <div className={styles.grid}>
                {PLANS.map((plan) => (
                    <PricingCard
                        key={plan.id}
                        tier={plan.tier}
                        price={plan.price}
                        period={plan.period}
                        description={plan.description}
                        features={plan.features}
                        ctaLabel={plan.ctaLabel}
                        popular={plan.popular}
                        selected={selectedId === plan.id}
                        onSelect={() => setSelectedId(plan.id)}
                        onContinue={() => void navigate({ to: "/onboarding/workspace" })}
                    />
                ))}
            </div>
        </div>
    );
}

