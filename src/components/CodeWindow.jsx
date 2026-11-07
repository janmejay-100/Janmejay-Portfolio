/**
 * Decorative code window shown in the Hero section.
 * All syntax colouring is done with CSS classes — no external library.
 */
export default function CodeWindow() {
  return (
    <div className="code-window-wrap hero-animate hero-animate-code" aria-hidden="true">
      <div className="code-window" role="img" aria-label="Decorative code snippet">
        {/* Window chrome */}
        <div className="code-header">
          <div className="code-dots">
            <span className="code-dot red"   />
            <span className="code-dot yellow"/>
            <span className="code-dot green" />
          </div>
          <span className="code-filename">Portfolio.jsx</span>
        </div>

        {/* Code body */}
        <div className="code-body">
          <CodeLine n={1}>
            <span className="tk-keyword">import </span>
            <span className="tk-punct">{'{'} </span>
            <span className="tk-fn">useState</span>
            <span className="tk-punct">{', '}</span>
            <span className="tk-fn">useEffect</span>
            <span className="tk-punct">{' }'}</span>
            <span className="tk-keyword"> from </span>
            <span className="tk-str">'react'</span>
          </CodeLine>

          <CodeLine n={2}><span className="tk-plain">&nbsp;</span></CodeLine>

          <CodeLine n={3}>
            <span className="tk-comment">{'// A passionate developer'}</span>
          </CodeLine>

          <CodeLine n={4}>
            <span className="tk-keyword">const </span>
            <span className="tk-fn">Developer</span>
            <span className="tk-punct"> = () </span>
            <span className="tk-keyword">{'=> {'}</span>
          </CodeLine>

          <CodeLine n={5}>
            <span className="tk-plain">{'  '}</span>
            <span className="tk-keyword">const </span>
            <span className="tk-punct">[</span>
            <span className="tk-var">skills</span>
            <span className="tk-punct">, </span>
            <span className="tk-fn">setSkills</span>
            <span className="tk-punct">] = </span>
            <span className="tk-fn">useState</span>
            <span className="tk-punct">([</span>
          </CodeLine>

          <CodeLine n={6}>
            <span className="tk-plain">{'    '}</span>
            <span className="tk-str">'React'</span>
            <span className="tk-punct">, </span>
            <span className="tk-str">'TypeScript'</span>
            <span className="tk-punct">,</span>
          </CodeLine>

          <CodeLine n={7}>
            <span className="tk-plain">{'    '}</span>
            <span className="tk-str">'Node.js'</span>
            <span className="tk-punct">, </span>
            <span className="tk-str">'Python'</span>
          </CodeLine>

          <CodeLine n={8}>
            <span className="tk-plain">{'  '}</span>
            <span className="tk-punct">])</span>
          </CodeLine>

          <CodeLine n={9}><span className="tk-plain">&nbsp;</span></CodeLine>

          <CodeLine n={10}>
            <span className="tk-plain">{'  '}</span>
            <span className="tk-keyword">return </span>
            <span className="tk-punct">{'('}</span>
          </CodeLine>

          <CodeLine n={11}>
            <span className="tk-plain">{'    '}</span>
            <span className="tk-punct">{'<'}</span>
            <span className="tk-tag">Portfolio</span>
          </CodeLine>

          <CodeLine n={12}>
            <span className="tk-plain">{'      '}</span>
            <span className="tk-attr">name</span>
            <span className="tk-punct">{'='}</span>
            <span className="tk-val">"Janmejay Sahoo"</span>
          </CodeLine>

          <CodeLine n={13}>
            <span className="tk-plain">{'      '}</span>
            <span className="tk-attr">passion</span>
            <span className="tk-punct">{'='}</span>
            <span className="tk-val">"building things"</span>
          </CodeLine>

          <CodeLine n={14}>
            <span className="tk-plain">{'      '}</span>
            <span className="tk-attr">available</span>
            <span className="tk-punct">{'='}</span>
            <span className="tk-val">{'{true}'}</span>
          </CodeLine>

          <CodeLine n={15}>
            <span className="tk-plain">{'    '}</span>
            <span className="tk-punct">{'/>'}</span>
          </CodeLine>

          <CodeLine n={16}>
            <span className="tk-plain">{'  '}</span>
            <span className="tk-punct">{')'}</span>
          </CodeLine>

          <CodeLine n={17}>
            <span className="tk-keyword">{'}'}</span>
          </CodeLine>

          <CodeLine n={18}><span className="tk-plain">&nbsp;</span></CodeLine>

          <CodeLine n={19}>
            <span className="tk-keyword">export default </span>
            <span className="tk-fn">Developer</span>
          </CodeLine>
        </div>
      </div>
    </div>
  )
}

function CodeLine({ n, children }) {
  return (
    <div className="code-line">
      <span className="code-ln">{n}</span>
      <span>{children}</span>
    </div>
  )
}
