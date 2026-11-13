
import { useState } from 'react'
import { Mail, GitFork, Link2, Send } from 'lucide-react'

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
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    )

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )

    const mailtoLink =
      `mailto:janmejaysahoo100@gmail.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <span className="section-label fade-up">Contact</span>

        <h2 className="section-title fade-up fade-up-delay-1" id="contact-title">
          Let's Connect
        </h2>

        <div className="contact-inner">
          <div className="contact-info fade-up fade-up-delay-2">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 8 }}>
              I'm always open to interesting conversations, collaboration
              opportunities, internships, or just a good tech chat.
              Feel free to reach out through any of the channels below.
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

          <div className="glass-card contact-form-card fade-up fade-up-delay-3">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
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
                  rows={5}
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
          </div>
        </div>
      </div>
    </section>
  )
}
