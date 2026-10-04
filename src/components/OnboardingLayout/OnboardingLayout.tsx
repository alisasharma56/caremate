import type { ReactNode } from "react";
import {
  page,
  header,
  logo,
  progress,
  progressLabel,
  progressTrack,
  progressDot,
  progressDotTone,
  skip,
  content,
} from "./OnboardingLayout.css.ts";
import { OnboardingStep, ONBOARDING_STEP_COUNT } from "./OnboardingStep.ts";
import {AuthLogo} from "@/features/auth/components/AuthLogo.tsx";

interface OnboardingLayoutProps {
    step: OnboardingStep;
    onSkip?: () => void;
    children: ReactNode;
}

export function OnboardingLayout({ step, onSkip, children }: OnboardingLayoutProps) {
    return (
        <div className={page}>
            <header className={header}>
        <span className={logo}>
          <AuthLogo/>
        </span>

                <div className={progress}>
          <span className={progressLabel}>
            Step {step} of {ONBOARDING_STEP_COUNT}
          </span>
                    <div className={progressTrack}>
                        {Array.from({ length: ONBOARDING_STEP_COUNT }, (_, index) => (
                            <span
                                key={index}
                                className={`${progressDot} ${
                                    index < step ? progressDotTone.filled : progressDotTone.empty
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <button type="button" className={skip} onClick={onSkip}>
                    Skip
                </button>
            </header>

            <div className={content}>{children}</div>
        </div>
    );
}
