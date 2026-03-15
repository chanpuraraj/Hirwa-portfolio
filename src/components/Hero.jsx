import { portfolioData } from '../data/portfolioData';
import hirwaPhoto from '../assets/Hirwa.jpeg';

export default function Hero() {
  const { name, tagline } = portfolioData;

  return (
    <section className="hero" id="hero">
      {/* Floating decorative shapes */}
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />
      <div className="hero__shape hero__shape--3" />
      <div className="hero__shape hero__shape--4" />
      <div className="hero__shape hero__shape--5" />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">
            {name.split(' ')[0]} <span>{name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="hero__tagline-wrapper">
            <p className="hero__tagline">{tagline}</p>
          </div>
          <div className="hero__buttons">
            <a className="btn btn--primary" href="#contact">
              Get in Touch ✦
            </a>
            <a className="btn btn--outline" href="#experience">
              View Resume →
            </a>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__avatar">
            <img src={hirwaPhoto} alt={name} className="hero__photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
