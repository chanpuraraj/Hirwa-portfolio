import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Experience() {
  const { experience } = portfolioData;
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="section section--alt" id="experience">
      <div className="container" ref={sectionRef}>
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <h2 className="section__title">Work Experience</h2>
          <div className="section__line" />
          <p className="section__subtitle">My professional journey</p>
        </div>

        <div className="timeline">
          {experience.map((exp, i) => (
            <div
              className={`timeline__item reveal--left ${isVisible ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.2}s` }}
              key={i}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <span className="timeline__year">{exp.duration}</span>
                <h3 className="timeline__title">{exp.role}</h3>
                <p className="timeline__place">{exp.company}</p>
                <ul className="timeline__desc">
                  {exp.description.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
