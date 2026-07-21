import { AuthLogo } from './AuthLogo'
import { LoginForm } from './LoginForm'
import {
  content,
  header,
  page,
  subtitle,
  title,
} from './Login.css'

export function Login() {
  return (
    <main className={page}>
      <AuthLogo />
      <section className={content} aria-labelledby="login-title">
        <header className={header}>
          <h1 className={title} id="login-title">
            Welcome back.
          </h1>
          <p className={subtitle}>Sign in to your account.</p>
        </header>
        <LoginForm />
      </section>
    </main>
  )
}
