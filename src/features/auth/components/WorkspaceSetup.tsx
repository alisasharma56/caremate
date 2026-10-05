import { useState, type FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { InputField } from '@/components/InputField'
import { completeOnboarding, getCurrentUser } from '../authStorage'
import {
  chevron,
  selectGroup,
  label as labelStyle,
  required,
  selectWrap,
  select,
  workspacePage,
  mobile,
  topBar,
  logo,
  logoAccent,
  progress,
  progressBars,
  progressBar,
  activeProgressBar,
  skip,
  content,
  heading,
  intro,
  form as formStyle,
  uploadGroup,
  uploadRow,
  uploadBox,
  uploadIcon,
  uploadInput,
  uploadTitle,
  uploadHint,
  twoColumns,
  teamGroup,
  teamOptions,
  teamInput,
  teamOption,
  submit,
  inviteContent,
  inviteForm,
  inviteEmailGroup,
  inviteInput,
  inviteRoleGroup,
  inviteSelect,
  addButton,
  invitationList,
  emptyInvitations,
  invitation as invitationStyle,
  invitationEmail,
  invitationRole,
  removeInvitation,
  inboxButton,
} from './WorkspaceSetup.css'

const Chevron = () => {
  return <svg className={chevron} viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

const SelectField = ({ id, label }: { id: string; label: string }) => {
  return <div className={selectGroup}><label className={labelStyle} htmlFor={id}>{label} <span className={required}>*</span></label><div className={selectWrap}><select className={select} id={id} name={id} defaultValue="" required><option value="" disabled>name@email.com</option><option value="option-1">Option 1</option><option value="option-2">Option 2</option></select><Chevron /></div></div>
}

export const WorkspaceSetup = () => {
  const navigate = useNavigate()

  const finishOnboarding = () => {
    const currentUser = getCurrentUser()
    if (currentUser) completeOnboarding(currentUser)
    void navigate({ to: '/', replace: true })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void navigate({ to: '/onboarding/invite-team' })
  }

  return (
    <main className={`${workspacePage} ${mobile}`}>
      <nav className={topBar} aria-label="Setup progress">
        <a className={logo} href="/">CARE<span className={logoAccent}>MATE</span></a>
        <div className={progress}><span>Step 1 of 3</span><span className={progressBars} aria-hidden="true"><span className={`${progressBar} ${activeProgressBar}`} /><span className={progressBar} /><span className={progressBar} /></span></div>
        <button className={skip} onClick={finishOnboarding} type="button">Skip</button>
      </nav>

      <section className={content} aria-labelledby="workspace-title">
        <h1 className={heading} id="workspace-title">Set up your workspace</h1>
        <p className={intro}>Tell us about your business so we can configure your workspace correctly.</p>
        <form className={formStyle} noValidate onSubmit={handleSubmit}>
          <div className={uploadGroup}>
            <span className={labelStyle}>Business logo</span>
            <div className={uploadRow}>
              <label className={uploadBox} htmlFor="business-logo"><svg className={uploadIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5M4 11.5V16h12v-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></label>
              <input className={uploadInput} id="business-logo" name="businessLogo" type="file" accept=".png,.jpg,.jpeg,.svg" />
              <div><p className={uploadTitle}>Upload logo</p><p className={uploadHint}>PNG, JPG or SVG · Max 2MB</p></div>
            </div>
          </div>

          <InputField id="business-name" label="Business/Practice Name" name="businessName" placeholder="name@email.com" required variant="compact" />
          <div className={twoColumns}><SelectField id="businessType" label="Business Type" /><SelectField id="state" label="State /Territory" /></div>
          <InputField id="abn" label="ABN" name="abn" placeholder="12 345 2335456" variant="compact" />

          <fieldset className={teamGroup} style={{ border: 0, margin: 0, padding: 0 }}><legend className={labelStyle}>Team Size <span className={required}>*</span></legend><div className={teamOptions}>
            {['just me', '2-5', '6-20', '21-50', '51-100'].map((size) => <span key={size}><input className={teamInput} defaultChecked={size === '6-20'} id={`team-${size}`} name="teamSize" type="radio" value={size} /><label className={teamOption} htmlFor={`team-${size}`}>{size}</label></span>)}
          </div></fieldset>
          <button className={submit} type="submit">Complete setup</button>
        </form>
      </section>
    </main>
  )
}

export const InviteTeam = () => {
  const navigate = useNavigate()
  const [invitations, setInvitations] = useState<Array<{ email: string; role: string }>>([])

  const finishOnboarding = () => {
    const currentUser = getCurrentUser()
    if (currentUser) completeOnboarding(currentUser)
    void navigate({ to: '/', replace: true })
  }

  const addInvitation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('inviteEmail') ?? '').trim()
    const role = String(data.get('inviteRole') ?? 'Admin')

    if (!email || invitations.some((invitation) => invitation.email.toLowerCase() === email.toLowerCase())) return
    setInvitations((current) => [...current, { email, role }])
    form.reset()
  }

  return (
    <main className={`${workspacePage} ${mobile}`}>
      <nav className={topBar} aria-label="Setup progress">
        <a className={logo} href="/">CARE<span className={logoAccent}>MATE</span></a>
        <div className={progress}><span>Step 2 of 3</span><span className={progressBars} aria-hidden="true"><span className={`${progressBar} ${activeProgressBar}`} /><span className={`${progressBar} ${activeProgressBar}`} /><span className={progressBar} /></span></div>
        <button className={skip} onClick={finishOnboarding} type="button">Skip</button>
      </nav>
      <section className={`${content} ${inviteContent}`} aria-labelledby="invite-title">
        <h1 className={heading} id="invite-title">Invite Your Team</h1>
        <p className={intro}>Add team members to your workspace. They'll receive an email invitation.</p>
        <form className={inviteForm} onSubmit={addInvitation}>
          <div className={inviteEmailGroup}><label className={labelStyle} htmlFor="invite-email">Email Address <span className={required}>*</span></label><input className={inviteInput} id="invite-email" name="inviteEmail" placeholder="name@email.com" required type="email" /></div>
          <div className={inviteRoleGroup}><label className={labelStyle} htmlFor="invite-role">Role <span className={required}>*</span></label><div className={selectWrap}><select className={inviteSelect} defaultValue="Admin" id="invite-role" name="inviteRole"><option>Admin</option><option>Manager</option><option>Member</option></select><Chevron /></div></div>
          <button className={addButton} type="submit"><span aria-hidden="true">＋</span> Add</button>
        </form>
        <div className={invitationList} aria-live="polite">
          {invitations.length === 0 ? <p className={emptyInvitations}>No invitations yet. Add team members above.</p> : invitations.map((invitation) => <div className={invitationStyle} key={invitation.email}><div><p className={invitationEmail}>{invitation.email}</p><p className={invitationRole}>{invitation.role}</p></div><button aria-label={`Remove ${invitation.email}`} className={removeInvitation} onClick={() => setInvitations((current) => current.filter((item) => item.email !== invitation.email))} type="button">×</button></div>)}
        </div>
        <button className={inboxButton} onClick={() => void navigate({ to: '/onboarding/social' })} type="button">Set Up My Inbox</button>
      </section>
    </main>
  )
}
