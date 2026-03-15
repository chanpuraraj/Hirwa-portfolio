import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Certificates() {
  const { certificates } = portfolioData;
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="section section--alt" id="certificates">
      <div className="container" ref={sectionRef}>
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <h2 className="section__title">Certificates</h2>
          <div className="section__line" />
          <p className="section__subtitle">Professional certifications & credentials</p>
        </div>

        <div className="certificates__grid">
          {certificates.map((cert, i) => (
            <div
              className={`certificate__card reveal--scale ${isVisible ? 'reveal--visible' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              key={i}
            >
              <div className="certificate__icon">{cert.icon}</div>
              <h3 className="certificate__name">{cert.name}</h3>
              <p className="certificate__issuer">{cert.issuer}</p>
              <p className="certificate__year">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
