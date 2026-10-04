import {
  sidebar,
  label as labelStyle,
  item,
  itemTone,
  circle,
  circleTone,
  itemLabel,
  itemLabelTone,
} from "./StepSidebar.css.ts";
import { SETUP_STEPS, type SetupStep } from "@/features/Orgpagesetup/SetupStep.ts";
import Checkbox from "@/components/icons/Checkbox";

interface StepSidebarProps {
    currentStep: SetupStep;
}

export function StepSidebar({ currentStep }: StepSidebarProps) {
    return (
        <nav className={sidebar}>
            <span className={labelStyle}>Setup Steps</span>

            {SETUP_STEPS.map(({ step, label }) => {
                const tone = step < currentStep ? "completed" : step === currentStep ? "current" : "upcoming";

                return (
                    <div key={step} className={`${item} ${itemTone[tone]}`}>
                        <span className={`${circle} ${circleTone[tone]}`}>
                            {tone === "completed" ? <Checkbox /> : step}
                        </span>
                        <span className={`${itemLabel} ${itemLabelTone[tone]}`}>{label}</span>
                    </div>
                );
            })}
        </nav>
    );
}