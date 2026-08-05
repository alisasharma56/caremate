import type { ReactNode } from "react";
import * as styles from "./SetupLayout.css.ts";
import { StepSidebar } from "@/components/StepSidebar/StepSidebar.tsx";
import type { SetupStep } from "@/features/Orgpagesetup/SetupStep.ts";
import {AuthLogo} from "@/features/auth/components/AuthLogo.tsx";

interface SetupLayoutProps {
    step: SetupStep;
    onSkip?: () => void;
    children: ReactNode;
}

export function SetupLayout({ step, onSkip, children }: SetupLayoutProps) {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
        <span className={styles.logo}>
          <AuthLogo/>
        </span>
                <button type="button" className={styles.skip} onClick={onSkip}>
                    Skip
                </button>
            </header>

            <div className={styles.body}>
                <StepSidebar currentStep={step} />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}