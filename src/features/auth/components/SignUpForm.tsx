import { useState, type FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { InputField } from '@/components/InputField'
import { registerAccount, signIn } from '../authStorage'
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

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')

    registerAccount(email)
    signIn(email)
    void navigate({ to: '/onboarding', replace: true })
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <InputField
        autoComplete="name"
        id="full-name"
        label="Full Name"
        name="fullName"
        placeholder="name@email.com"
        required
        type="text"
      />

      <InputField
        autoComplete="email"
        id="signup-email"
        label="Email"
        name="email"
        placeholder="name@email.com"
        required
        type="email"
      />

      <InputField
        autoComplete="new-password"
        footer={
          <a className={forgotLink} href="/forgot-password">
            Forgot password?
          </a>
        }
        id="signup-password"
        label="Password"
        minLength={8}
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
            {showPassword ? (
              <EyeIcon className={eyeIcon} />
            ) : (
              <EyeOffIcon className={eyeIcon} />
            )}
          </button>
        }
        type={showPassword ? 'text' : 'password'}
      />

      <button className={signInButton} type="submit">
        Sign Up
      </button>

      <p className={signUpPrompt}>
        Already have an account{' '}
        <a className={textLink} href="/login">
          Sign In
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
