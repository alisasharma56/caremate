import { AuthLogo } from './AuthLogo'
import { SignUpForm } from './SignUpForm'
import { header, page, signUpContent, subtitle, title } from './Login.css'

export function SignUp() {
  return (
    <main className={page}>
      <AuthLogo compact />
      <section className={signUpContent} aria-labelledby="signup-title">
        <header className={header}>
          <h1 className={title} id="signup-title">
            Welcome back.
          </h1>
          <p className={subtitle}>Sign in to your account.</p>
        </header>
        <SignUpForm />
      </section>
    </main>
  )
}
