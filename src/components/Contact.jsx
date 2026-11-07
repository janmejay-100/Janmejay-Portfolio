import { useState } from 'react'
import { Mail, GitFork, Link2, Send, CheckCircle } from 'lucide-react'

const CONTACT_LINKS = [
  {
    id: 'email',
    icon: <Mail size={18} />,
    iconClass: 'email',
    label: 'Email',
    value: 'janmejaysahoo100@gmail.com',
    href: 'mailto:janmejaysahoo100@gmail.com',
    aria: 'Send an email to Janmejay',
  },
  {
    id: 'github',
    icon: <GitFork size={18} />,
    iconClass: 'github',
    label: 'GitHub',
    value: 'github.com/janmejay-100',
    href: 'https://github.com/janmejay-100',
    aria: 'Visit GitHub profile (opens in new tab)',
  },
  {
    id: 'linkedin',
    icon: <Link2 size={18} />,
    iconClass: 'li',
    label: 'LinkedIn',
    value: 'linkedin.com/in/janmejay-sahoo100',
    href: 'https://www.linkedin.com/in/janmejay-sahoo100/',
    aria: 'Visit LinkedIn profile (opens in new tab)',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // This is a front-end-only demo. Wire up a real email service
    // (e.g. EmailJS, Formspree, or your own API) to send messages.
    console.log('Form submitted (demo):', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <span className="section-label fade-up">Contact</span>
        <h2 className="section-title fade-up fade-up-delay-1" id="contact-title">
          Let's Connect
        </h2>

        <div className="contact-inner">
          {/* Left: info */}
          <div className="contact-info fade-up fade-up-delay-2">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 8 }}>
              I'm always open to interesting conversations, collaboration
              opportunities, internships, or just a good tech chat.
              Feel free to reach out through any of the channels below.
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 30 }}>
            </p>

            <div className="contact-links" role="list">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  className="contact-link-card"
                  aria-label={link.aria}
                  role="listitem"
                >
                  <div className={`contact-link-icon ${link.iconClass}`} aria-hidden="true">
                    {link.icon}
                  </div>
                  <div>
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card contact-form-card fade-up fade-up-delay-3">
            {sent ? (
              <div
                className="contact-success"
                role="status"
                aria-live="polite"
              >
                <CheckCircle size={48} strokeWidth={1.5} />
                <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Message noted!
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  (This is a demo form. Connect a real email service to send messages.)
                </p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: 4 }}>
                  Send a Message
                </h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="hello@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="What's on your mind?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
