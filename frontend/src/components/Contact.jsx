import { useState } from 'react'
import emailjs from 'emailjs-com'
import { profile } from '../data/content'
import Artwork from './Artwork'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap contact__inner">
        <div className="contact__info">
          <p className="eyebrow">Let&apos;s work together</p>
          <h2>Have a project in mind?</h2>
          <p className="contact__note">— I&apos;m currently available for freelance work.</p>

          <ul className="contact__list">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>

          <div className="contact__art">
            <Artwork variant="contact" color="yellow" label="Hi!" />
          </div>
        </div>

        <form className="contact__form" onSubmit={submit}>
          <div className="field-row">
            <label className="field">
              <span>Your Name</span>
              <input required value={form.name} onChange={update('name')} placeholder="Jordan Lee" />
            </label>
            <label className="field">
              <span>Your Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="jordan@studio.com"
              />
            </label>
          </div>

          <label className="field">
            <span>Subject</span>
            <input
              required
              value={form.subject}
              onChange={update('subject')}
              placeholder="New brand identity project"
            />
          </label>

          <label className="field">
            <span>Your Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell me a bit about your project..."
            />
          </label>

          <button className="btn btn-block" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="form-note form-note--ok">Thanks — your message is in! I&apos;ll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="form-note form-note--err">
              Something went wrong. Please try again or email {profile.email} directly.
            </p>
          )}
        </form>
      </div>

      <style>{`
        .contact { padding: 96px 0; }
        .contact__inner {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
        }
        .contact h2 { font-size: clamp(28px, 4vw, 36px); margin-top: 10px; }
        .contact__note { margin-top: 16px; color: var(--ink-soft); font-size: 14.5px; }
        .contact__list {
          list-style: none;
          padding: 0;
          margin: 26px 0 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-weight: 600;
          font-size: 14.5px;
        }
        .contact__art { max-width: 220px; margin-top: 34px; }
        .contact__form {
          background: var(--card);
          border: 1.5px solid var(--line);
          border-radius: var(--radius);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .field { display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 600; color: var(--ink-soft); }
        .field input, .field textarea {
          font-family: inherit;
          font-size: 14.5px;
          padding: 13px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--line);
          background: var(--bg);
          color: var(--ink);
          resize: vertical;
        }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: var(--violet);
          background: #fff;
        }
        .form-note { margin: 0; font-size: 13.5px; font-weight: 600; }
        .form-note--ok { color: var(--teal); }
        .form-note--err { color: var(--coral); }
        @media (max-width: 900px) {
          .contact__inner { grid-template-columns: 1fr; gap: 44px; }
          .field-row { grid-template-columns: 1fr; }
          .contact__art { display: none; }
        }
      `}</style>
    </section>
  )
}
