import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Skills() {
  const { skills } = portfolioData;
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div className="container" ref={sectionRef}>
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <h2 className="section__title">Skills</h2>
          <div className="section__line" />
          <p className="section__subtitle">What I bring to the table</p>
        </div>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <div
              className={`skills__category reveal ${isVisible ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
              key={i}
            >
              <h3>{group.category}</h3>
              <div className="skills__pills">
                {group.items.map((skill, j) => (
                  <span
                    className={`skill__pill ${isVisible ? 'skill__pill--visible' : ''}`}
                    style={{ transitionDelay: `${0.4 + j * 0.08}s` }}
                    key={j}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
