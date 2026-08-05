import * as styles from "./StepSidebar.css.ts";
import { SETUP_STEPS, type SetupStep } from "@/features/Orgpagesetup/SetupStep.ts";
import Checkbox from "@/components/icons/Checkbox";

interface StepSidebarProps {
    currentStep: SetupStep;
}

export function StepSidebar({ currentStep }: StepSidebarProps) {
    return (
        <nav className={styles.sidebar}>
            <span className={styles.label}>Setup Steps</span>

            {SETUP_STEPS.map(({ step, label }) => {
                const tone = step < currentStep ? "completed" : step === currentStep ? "current" : "upcoming";

                return (
                    <div key={step} className={`${styles.item} ${styles.itemTone[tone]}`}>
                        <span className={`${styles.circle} ${styles.circleTone[tone]}`}>
                            {tone === "completed" ? <Checkbox /> : step}
                        </span>
                        <span className={`${styles.itemLabel} ${styles.itemLabelTone[tone]}`}>{label}</span>
                    </div>
                );
            })}
        </nav>
    );
}