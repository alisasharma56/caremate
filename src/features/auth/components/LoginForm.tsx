import { useState, type FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { InputField } from '@/components/InputField'
import { accountExists, hasCompletedOnboarding, signIn } from '../authStorage'
import { EyeIcon, EyeOffIcon, GoogleIcon } from './AuthIcons'
import {
  divider,
  dividerLine,
  dividerText,
  eyeIcon,
  forgotLink,
  form,
  googleButton,
  googleIcon,
  passwordButton,
  signInButton,
  signUpPrompt,
  textLink,
} from './Login.css'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')

    if (!accountExists(email)) {
      void navigate({ to: '/signup' })
      return
    }

    signIn(email)
    void navigate({
      to: hasCompletedOnboarding(email) ? '/' : '/onboarding',
      replace: true,
    })
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <InputField
        autoComplete="email"
        id="email"
        label="Email"
        name="email"
        placeholder="name@email.com"
        required
        type="email"
      />

      <InputField
        autoComplete="current-password"
        footer={
          <a className={forgotLink} href="/forgot-password">
            Forgot password?
          </a>
        }
        id="password"
        label="Password"
        name="password"
        placeholder="your password"
        required
        trailingElement={
          <button
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className={passwordButton}
            onClick={() => setShowPassword((visible) => !visible)}
            type="button"
          >
            {showPassword ? <EyeIcon className={eyeIcon} /> : <EyeOffIcon className={eyeIcon} />}
          </button>
        }
        type={showPassword ? 'text' : 'password'}
      />

      <button className={signInButton} type="submit">
        Sign In
      </button>

      <p className={signUpPrompt}>
        Don&apos;t have an account ?{' '}
        <a className={textLink} href="/signup">
          Sign up
        </a>
      </p>

      <div className={divider} aria-hidden="true">
        <span className={dividerLine} />
        <span className={dividerText}>Or</span>
        <span className={dividerLine} />
      </div>

      <button className={googleButton} type="button">
        <GoogleIcon className={googleIcon} />
        Continue with Google
      </button>
    </form>
  )
}
