import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const EDUCATION = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology – Computer Science & Engineering',
    institute: 'Institute of Technical Education and Research (ITER), SOA University',
    period: '2024 – Present',
    location: 'Bhubaneswar, Odisha',
    details: [
      'CGPA: 9.40',
      'Studying Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and Object-Oriented Programming',
    ],
    isCurrent: true,
  },
  {
    id: 'intermediate',
    degree: 'Higher Secondary (12th) – Science',
    institute: 'Simulia Higher Secondary School',
    period: '2022 – 2024',
    location: 'Markona, Odisha',
    details: [
      'Completed higher secondary education in the Science stream',
    ],
    isCurrent: false,
  },
  {
    id: 'matriculation',
    degree: 'Secondary (10th)',
    institute: 'B.T. High School',
    period: '2022',
    location: 'Tulamtula, Odisha',
    details: [
      'Completed secondary school education',
    ],
    isCurrent: false,
  },
]

export default function Education() {
  return (
    <section className="section section--alt" id="education" aria-labelledby="education-title">
      <div className="container">
        <span className="section-label fade-up">Education</span>
        <h2 className="section-title fade-up fade-up-delay-1" id="education-title">
          Academic Journey
        </h2>
        <p className="section-subtitle fade-up fade-up-delay-2">
          My formal education background.
        </p>

        <div className="education-list">
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.id}
              className={`glass-card edu-card fade-up fade-up-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="edu-icon" aria-hidden="true">
                <GraduationCap size={22} />
              </div>
              <div className="edu-body">
                <h3 className="edu-degree">
                  {edu.degree}
                  {edu.isCurrent && (
                    <span
                      style={{
                        marginLeft: 10,
                        padding: '2px 10px',
                        borderRadius: 999,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        background: 'var(--accent-secondary-dim)',
                        color: 'var(--accent-secondary)',
                        border: '1px solid var(--accent-secondary-glow)',
                        verticalAlign: 'middle',
                      }}
                    >
                      Ongoing
                    </span>
                  )}
                </h3>
                <p className="edu-institute">{edu.institute}</p>
                <div className="edu-meta">
                  <span>
                    <Calendar size={13} aria-hidden="true" />
                    {edu.period}
                  </span>
                  <span>
                    <MapPin size={13} aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
                {edu.details && (
                  <ul
                    style={{
                      marginTop: 14,
                      paddingLeft: 18,
                      listStyleType: 'disc',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                    }}
                  >
                    {edu.details.map((d) => (
                      <li
                        key={d}
                        style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
