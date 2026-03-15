import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Education() {
  const { education } = portfolioData;
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="section" id="education">
      <div className="container" ref={sectionRef}>
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <h2 className="section__title">Education</h2>
          <div className="section__line" />
          <p className="section__subtitle">My academic journey</p>
        </div>

        <div className="timeline">
          {education.map((edu, i) => (
            <div
              className={`timeline__item reveal--left ${isVisible ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.2}s` }}
              key={i}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <span className="timeline__year">{edu.year}</span>
                <h3 className="timeline__title">{edu.degree}</h3>
                <p className="timeline__place">{edu.institution}</p>
                <p className="timeline__desc">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
