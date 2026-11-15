
import { GitFork, Link2 } from 'lucide-react'
import { IconBrandLeetcode } from '@tabler/icons-react'

const TECH_CHIPS = [
  'React',
  'Vite',
  'JavaScript',
  'CSS3',
  'Node.js',
  'Python',
  'Git'
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">

      {/* Tech stack strip */}
      <div className="tech-strip">
        <div className="container tech-strip-inner">
          <span className="tech-strip-label">Built with</span>

          {TECH_CHIPS.map((chip) => (
            <span key={chip} className="tech-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer bar */}
      <div className="container footer-inner">

        <span className="footer-logo" aria-label="Janmejay Sahoo">
          JS
        </span>

        <p className="footer-copy">
          © {year} Janmejay Sahoo - Portfolio Website
        </p>

        {/* Social links */}
        <nav className="footer-links" aria-label="Social links">

          {/* GitHub */}
          <a
            href="https://github.com/janmejay-100"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GitFork size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/janmejay-sahoo100/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Link2 size={18} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/janmejay_100/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LeetCode Profile"
            title="LeetCode"
          >
            <IconBrandLeetcode size={20} stroke={1.8} />
          </a>

        </nav>
      </div>
    </footer>
  )
}
