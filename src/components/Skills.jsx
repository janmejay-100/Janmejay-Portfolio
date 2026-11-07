import { Code2, Globe, Wrench, Sparkles } from 'lucide-react'


const SKILL_GROUPS = [
  {
    id: 'programming',
    icon: <Code2 size={18} />,
    iconClass: 'violet',
    title: 'Programming Languages',
    skills: ['Java', 'C', 'Python', 'JavaScript'],
  },
  {
    id: 'frontend',
    icon: <Globe size={18} />,
    iconClass: 'cyan',
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'Django'],
  },
  {
    id: 'tools',
    icon: <Wrench size={18} />,
    iconClass: 'mixed',
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'MySQL'],
  },
  {
    id: 'learning',
    icon: <Sparkles size={18} />,
    iconClass: 'learn',
    title: 'Core CS & Tools',
    skills: [
      'DSA',
      'OOPS',
      'DBMS',
      'Git',
      'GitHub',
      'VS Code',
      'Debugging',
    ],
  },
]


export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label fade-up" style={{ justifyContent: 'center' }}>
            Technical Skills
          </span>
          <h2 className="section-title fade-up fade-up-delay-1" id="skills-title"
              style={{ margin: '12px auto 0', textAlign: 'center' }}>
            My Tech Toolbox
          </h2>
          <p className="section-subtitle fade-up fade-up-delay-2"
             style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Technologies and tools I work with, from day-to-day development
            to ongoing exploration.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.id}
              className={`glass-card skill-group fade-up fade-up-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="skill-group-header">
                <div className={`skill-group-icon ${group.iconClass}`} aria-hidden="true">
                  {group.icon}
                </div>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <div className="skill-tags" role="list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag" role="listitem">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
