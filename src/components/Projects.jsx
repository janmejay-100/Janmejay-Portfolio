import { GitFork, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: "Calculator App",
    description:
      "A simple calculator application to perform basic arithmetic operations with a clean and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
  },
  {
    title: "To-Do List App",
    description:
      "A task management application that allows users to add, delete, and manage their daily tasks.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
  },
  {
    title: "Hotel Management App",
    description:
      "A hotel management application designed to manage hotel operations and organize essential information.",
    tech: ["Java", "OOP"],
    category: "Application Development",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, experience, and achievements.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
  },
  {
    title: "Shopping App",
    description:
      "An online shopping interface featuring product listings and basic shopping cart functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
  },
  {
    title: "MediMind",
    description:
      "An AI-powered medicine reminder application concept designed to help users manage their medication schedules.",
    tech: ["React", "JavaScript"],
    category: "AI & Web Development",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div style={{ marginBottom: 8 }}>
          <span className="section-label fade-up">Projects</span>
          <h2 className="section-title fade-up fade-up-delay-1" id="projects-title">
            Things I've Built
          </h2>
          <p className="section-subtitle fade-up fade-up-delay-2">
            A selection of personal, academic, and open-source projects.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((proj, i) => (
            <article
              key={proj.id}
              className={`glass-card project-card fade-up fade-up-delay-${Math.min((i % 3) + 1, 4)}`}
              aria-label={`Project: ${proj.title}`}
            >
              <span className="project-number" aria-hidden="true">{proj.id}</span>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              <div className="project-tech" aria-label="Technologies used">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-links">
                {/* <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${proj.title} on GitHub (opens in new tab)`}
                >
                  <GitFork size={14} />
                  GitHub
                </a> */}
                {proj.live && proj.live !== '#' && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Live demo of ${proj.title} (opens in new tab)`}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {proj.live === '#' && (
                  <span
                    className="project-link"
                    style={{ opacity: 0.4, cursor: 'default' }}
                    aria-label="Live demo coming soon"
                  >
                    <ExternalLink size={14} />
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
