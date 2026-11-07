import { Trophy, Code2, Users, BookOpen } from 'lucide-react'

/**
 * NOTE: No personal achievements have been invented here.
 * All entries are either clearly marked [PLACEHOLDER] or are
 * verifiable public-program templates you should fill in.
 * Remove or update any card that does not apply to you.
 */
const ACHIEVEMENTS = [
  {
    id: 'competitive',
    icon: <Code2 size={20} />,
    iconClass: 'violet',
    title: 'Competitive Programming',
    description:
      'Solved 150+ Data Structures and Algorithms problems on LeetCode and GeeksforGeeks, covering arrays, strings, recursion, and basic dynamic programming.',
    badge: '150+ Problems',
  },
  {
    id: 'internship',
    icon: <Trophy size={20} />,
    iconClass: 'gold',
    title: 'Frontend Developer Intern',
    description:
      'Selected for the Alfido Tech Virtual Internship Program. Worked on frontend development using HTML, CSS, and JavaScript.',
    badge: 'Sep – Nov 2025',
  },
  {
    id: 'certification',
    icon: <BookOpen size={20} />,
    iconClass: 'cyan',
    title: 'Google Data Analytics',
    description:
      'Completed the Google course Foundations: Data, Data, Everywhere through Coursera.',
    badge: 'Certificate',
  },
  {
    id: 'community',
    icon: <Users size={20} />,
    iconClass: 'green',
    title: 'Campus Ambassador',
    description:
      'Represented Internshala and Techkriti, IIT Kanpur as a Campus Ambassador.',
    badge: 'Leadership',
  },
]
export default function Achievements() {
  return (
    <section className="section" id="achievements" aria-labelledby="achievements-title">
      <div className="container">
        <span className="section-label fade-up">Achievements</span>
        <h2 className="section-title fade-up fade-up-delay-1" id="achievements-title">
          Milestones &amp; Recognition
        </h2>
        <p className="section-subtitle fade-up fade-up-delay-2">
          
        </p>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((ach, i) => (
            <div
              key={ach.id}
              className={`glass-card achievement-card fade-up fade-up-delay-${Math.min(i + 1, 4)}`}
            >
              <div className={`achievement-icon ${ach.iconClass}`} aria-hidden="true">
                {ach.icon}
              </div>
              <h3 className="achievement-title">{ach.title}</h3>
              <p className="achievement-desc">{ach.description}</p>
              <span className="achievement-badge">{ach.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
