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

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div className={field}>
        <label className={fieldLabel} htmlFor="email">
          Email <span className={required}>*</span>
        </label>
        <div className={fieldControl}>
          <input
            autoComplete="email"
            className={fieldInput}
            id="email"
            name="email"
            placeholder="name@email.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className={field}>
        <label className={fieldLabel} htmlFor="password">
          Password <span className={required}>*</span>
        </label>
        <div className={fieldControl}>
          <input
            autoComplete="current-password"
            className={fieldInput}
            id="password"
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
            {showPassword ? <EyeIcon className={eyeIcon} /> : <EyeOffIcon className={eyeIcon} />}
          </button>
        </div>
        <a className={forgotLink} href="/forgot-password">
          Forgot password?
        </a>
      </div>

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
