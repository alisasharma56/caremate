import type { ReactNode } from "react";
import {
  page,
  header,
  logo,
  skip,
  body,
  content,
} from "./SetupLayout.css.ts";
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
        <div className={page}>
            <header className={header}>
        <span className={logo}>
          <AuthLogo/>
        </span>
                <button type="button" className={skip} onClick={onSkip}>
                    Skip
                </button>
            </header>

            <div className={body}>
                <StepSidebar currentStep={step} />
                <div className={content}>{children}</div>
            </div>
        </div>
    );
}