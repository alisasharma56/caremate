import type { ReactNode } from "react";
import * as styles from "./OnboardingLayout.css.ts";
import { OnboardingStep, ONBOARDING_STEP_COUNT } from "./OnboardingStep.ts";
import {AuthLogo} from "@/features/auth/components/AuthLogo.tsx";

interface OnboardingLayoutProps {
    step: OnboardingStep;
    onSkip?: () => void;
    children: ReactNode;
}

export function OnboardingLayout({ step, onSkip, children }: OnboardingLayoutProps) {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
        <span className={styles.logo}>
          <AuthLogo/>
        </span>

                <div className={styles.progress}>
          <span className={styles.progressLabel}>
            Step {step} of {ONBOARDING_STEP_COUNT}
          </span>
                    <div className={styles.progressTrack}>
                        {Array.from({ length: ONBOARDING_STEP_COUNT }, (_, index) => (
                            <span
                                key={index}
                                className={`${styles.progressDot} ${
                                    index < step ? styles.progressDotTone.filled : styles.progressDotTone.empty
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <button type="button" className={styles.skip} onClick={onSkip}>
                    Skip
                </button>
            </header>

            <div className={styles.content}>{children}</div>
        </div>
    );
}
