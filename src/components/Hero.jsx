
import { ChevronDown, FolderOpen, Mail } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import CodeWindow from './CodeWindow'

export default function Hero() {
  const role = useTypewriter()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-inner">

          <div className="hero-content">

            {/* Availability badge */}
            <div
              className="hero-badge hero-animate hero-animate-1"
              aria-label="Open to internship opportunities"
            >
              <span className="dot" aria-hidden="true" />
              Open to Internships
            </div>

            {/* Name */}
            <h1 className="hero-name hero-animate hero-animate-2">
              Hi, I'm <br />
              <span>Janmejay&nbsp;Sahoo</span>
            </h1>

            {/* Animated role */}
            <p
              className="hero-roles hero-animate hero-animate-3"
              aria-live="polite"
              aria-label={`Role: ${role}`}
            >
              {role}
              <span className="typed-cursor" aria-hidden="true" />
            </p>

            {/* Professional introduction */}
            <p className="hero-desc hero-animate hero-animate-4">
              I'm a Computer Science and Engineering student at ITER,
              SOA University, with a strong foundation in Java,
              Data Structures and Algorithms. I build responsive
              web applications and explore full-stack development,
              turning ideas into practical digital solutions.
            </p>

            {/* Buttons */}
            <div className="hero-actions hero-animate hero-animate-5">
              <button
                id="hero-cta-projects"
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                <FolderOpen size={17} />
                View Projects
              </button>

              <button
                id="hero-cta-contact"
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={17} />
                Get in Touch
              </button>
            </div>

          </div>

          <CodeWindow />

        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}
