import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

const icons = ['✦', '◆', '●', '★'];

export default function About() {
  const { about } = portfolioData;
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="section section--alt" id="about">
      <div className="container" ref={sectionRef}>
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <h2 className="section__title">{about.title}</h2>
          <div className="section__line" />
          <p className="section__subtitle">Getting to know me better</p>
        </div>

        <div className="about__content">
          <div className={`about__text reveal--left ${isVisible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            {about.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about__highlights">
            {about.highlights.map((item, i) => (
              <div
                className={`about__highlight reveal--right ${isVisible ? 'reveal--visible' : ''}`}
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
                key={i}
              >
                <div className="about__highlight-icon">{icons[i % icons.length]}</div>
                <p className="about__highlight-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
