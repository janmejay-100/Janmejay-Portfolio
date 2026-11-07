import { Code2, Coffee, Cpu, Lightbulb } from 'lucide-react'
import profileImage from '../assets/profile.png'

const TRAITS = [
  { icon: <Code2 size={15} />,     label: 'Clean Code Advocate' },
  { icon: <Lightbulb size={15} />, label: 'Creative Problem Solver' },
  { icon: <Cpu size={15} />,       label: 'CS Fundamentals Enthusiast' },
  { icon: <Coffee size={15} />,    label: 'Perpetually Caffeinated' },
]

export default function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">

          {/* Avatar */}
         <div className="about-avatar-wrap fade-up">
  <div className="about-avatar-glow" aria-hidden="true" />

  <div className="about-avatar">
    <img
      src={profileImage}
      alt="Janmejay Sahoo"
      className="about-profile-image"
    />
  </div>
</div>

          {/* Content */}
          <div className="about-info">
            <span className="section-label fade-up">About Me</span>
            <h2 className="section-title fade-up fade-up-delay-1" id="about-title">
              Passionate about<br />Code &amp; Craft
            </h2>

            <p className="about-text fade-up fade-up-delay-2">
              I'm <strong style={{ color: 'var(--text-primary)' }}>Janmejay Sahoo</strong>, a
              Computer Science &amp; Engineering student with a deep curiosity for how
              software shapes the world. I enjoy building things that are not only functional
              but also delightful to use.
            </p>

            <p className="about-text fade-up fade-up-delay-2">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source, solving algorithmic challenges, or designing side projects
              that blend creativity with engineering.
            </p>

            {/* Quick traits */}
            <div
              className="fade-up fade-up-delay-3"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8, marginBottom: 32 }}
            >
              {TRAITS.map((t) => (
                <span key={t.label} className="trait-badge">
                  {t.icon} {t.label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="about-stats fade-up fade-up-delay-4">
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">∞</span>
                <span className="stat-label">Curiosity</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
