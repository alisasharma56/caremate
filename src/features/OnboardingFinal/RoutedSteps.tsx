import { useNavigate } from '@tanstack/react-router'
import { LocationStep } from './LocationStep/LocationStep'
import { OnboardingLayout } from './OnboardingLayout/OnboardingLayout'
import { OnboardingStep } from './OnboardingLayout/OnboardingStep'
import { RoleStep } from './RoleStep/RoleStep'
import { TopicsStep } from './TopicStep/TopicStep'

export function RoleOnboardingPage() {
  const navigate = useNavigate()

  return (
    <OnboardingLayout
      step={OnboardingStep.Role}
      onSkip={() => void navigate({ to: '/payment' })}
    >
      <RoleStep
        onContinue={() => void navigate({ to: '/onboarding/topics' })}
      />
    </OnboardingLayout>
  )
}

export function TopicsOnboardingPage() {
  const navigate = useNavigate()

  return (
    <OnboardingLayout
      step={OnboardingStep.Topics}
      onSkip={() => void navigate({ to: '/payment' })}
    >
      <TopicsStep
        onBack={() => void navigate({ to: '/onboarding/role' })}
        onContinue={() => void navigate({ to: '/onboarding/location' })}
      />
    </OnboardingLayout>
  )
}

export function LocationOnboardingPage() {
  const navigate = useNavigate()

  return (
    <OnboardingLayout
      step={OnboardingStep.Location}
      onSkip={() => void navigate({ to: '/payment' })}
    >
      <LocationStep
        onBack={() => void navigate({ to: '/onboarding/topics' })}
        onContinue={() => void navigate({ to: '/payment' })}
      />
    </OnboardingLayout>
  )
}

