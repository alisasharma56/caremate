import { brand, brandAccent, signUpBrand } from './Login.css'

type AuthLogoProps = {
  compact?: boolean
}

export const AuthLogo = ({ compact = false }: AuthLogoProps) => {
  return (
    <a
      aria-label="CareMate home"
      className={compact ? signUpBrand : brand}
      href="/"
    >
      CARE<span className={brandAccent}>MATE</span>
    </a>
  )
}
