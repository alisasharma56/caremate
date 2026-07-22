import { useState, type FormEvent } from 'react'
import { EyeIcon, EyeOffIcon, GoogleIcon } from './AuthIcons'
import {
  divider,
  dividerLine,
  dividerText,
  eyeIcon,
  field,
  fieldControl,
  fieldInput,
  fieldLabel,
  forgotLink,
  form,
  googleButton,
  googleIcon,
  passwordButton,
  required,
  signInButton,
  signUpPrompt,
  textLink,
} from './Login.css'

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div className={field}>
        <label className={fieldLabel} htmlFor="full-name">
          Full Name <span className={required}>*</span>
        </label>
        <div className={fieldControl}>
          <input
            autoComplete="name"
            className={fieldInput}
            id="full-name"
            name="fullName"
            placeholder="name@email.com"
            required
            type="text"
          />
        </div>
      </div>

      <div className={field}>
        <label className={fieldLabel} htmlFor="signup-email">
          Email <span className={required}>*</span>
        </label>
        <div className={fieldControl}>
          <input
            autoComplete="email"
            className={fieldInput}
            id="signup-email"
            name="email"
            placeholder="name@email.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className={field}>
        <label className={fieldLabel} htmlFor="signup-password">
          Password <span className={required}>*</span>
        </label>
        <div className={fieldControl}>
          <input
            autoComplete="new-password"
            className={fieldInput}
            id="signup-password"
            minLength={8}
            name="password"
            placeholder="your password"
            required
            type={showPassword ? 'text' : 'password'}
          />
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
        </div>
        <a className={forgotLink} href="/forgot-password">
          Forgot password?
        </a>
      </div>

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
