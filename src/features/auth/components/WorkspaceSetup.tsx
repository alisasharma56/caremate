import { type FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { InputField } from '@/components/InputField'
import { completeOnboarding, getCurrentUser } from '../authStorage'
import * as styles from './WorkspaceSetup.css'

function Chevron() {
  return <svg className={styles.chevron} viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SelectField({ id, label }: { id: string; label: string }) {
  return <div className={styles.selectGroup}><label className={styles.label} htmlFor={id}>{label} <span className={styles.required}>*</span></label><div className={styles.selectWrap}><select className={styles.select} id={id} name={id} defaultValue="" required><option value="" disabled>name@email.com</option><option value="option-1">Option 1</option><option value="option-2">Option 2</option></select><Chevron /></div></div>
}

export function WorkspaceSetup() {
  const navigate = useNavigate()

  function finishOnboarding() {
    const currentUser = getCurrentUser()
    if (currentUser) completeOnboarding(currentUser)
    void navigate({ to: '/', replace: true })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    finishOnboarding()
  }

  return (
    <main className={`${styles.workspacePage} ${styles.mobile}`}>
      <nav className={styles.topBar} aria-label="Setup progress">
        <a className={styles.logo} href="/">CARE<span className={styles.logoAccent}>MATE</span></a>
        <div className={styles.progress}><span>Step 1 of 3</span><span className={styles.progressBars} aria-hidden="true"><span className={`${styles.progressBar} ${styles.activeProgressBar}`} /><span className={styles.progressBar} /><span className={styles.progressBar} /></span></div>
        <button className={styles.skip} onClick={finishOnboarding} type="button">Skip</button>
      </nav>

      <section className={styles.content} aria-labelledby="workspace-title">
        <h1 className={styles.heading} id="workspace-title">Set up your workspace</h1>
        <p className={styles.intro}>Tell us about your business so we can configure your workspace correctly.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.uploadGroup}>
            <span className={styles.label}>Business logo</span>
            <div className={styles.uploadRow}>
              <label className={styles.uploadBox} htmlFor="business-logo"><svg className={styles.uploadIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M4 11.5V16h12v-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></label>
              <input className={styles.uploadInput} id="business-logo" name="businessLogo" type="file" accept=".png,.jpg,.jpeg,.svg" />
              <div><p className={styles.uploadTitle}>Upload logo</p><p className={styles.uploadHint}>PNG, JPG or SVG · Max 2MB</p></div>
            </div>
          </div>

          <InputField id="business-name" label="Business/Practice Name" name="businessName" placeholder="name@email.com" required variant="compact" />
          <div className={styles.twoColumns}><SelectField id="businessType" label="Business Type" /><SelectField id="state" label="State /Territory" /></div>
          <InputField id="abn" label="ABN" name="abn" placeholder="12 345 2335456" variant="compact" />

          <fieldset className={styles.teamGroup} style={{ border: 0, margin: 0, padding: 0 }}><legend className={styles.label}>Team Size <span className={styles.required}>*</span></legend><div className={styles.teamOptions}>
            {['just me', '2-5', '6-20', '21-50', '51-100'].map((size) => <span key={size}><input className={styles.teamInput} defaultChecked={size === '6-20'} id={`team-${size}`} name="teamSize" type="radio" value={size} /><label className={styles.teamOption} htmlFor={`team-${size}`}>{size}</label></span>)}
          </div></fieldset>
          <button className={styles.submit} type="submit">Complete setup</button>
        </form>
      </section>
    </main>
  )
}
