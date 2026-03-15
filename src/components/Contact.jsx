import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const { email, location, linkedin } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sectionRef, isVisible] = useScrollReveal();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container" ref={sectionRef}>
        <div className={`reveal ${isVisible ? 'reveal--visible' : ''}`}>
          <h2 className="section__title">Get in Touch</h2>
          <div className="section__line" />
          <p className="section__subtitle">I'd love to hear from you</p>
        </div>

        <div className="contact__content">
          <div className={`contact__info reveal--left ${isVisible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3>Let's Connect</h3>
            <p>
              Whether you have a question, an opportunity, or just want to say
              hello — feel free to reach out!
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">📧</div>
                <span>{email}</span>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">📍</div>
                <span>{location}</span>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">💼</div>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <form className={`contact__form reveal--right ${isVisible ? 'reveal--visible' : ''}`} style={{ transitionDelay: '0.3s' }} onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" htmlFor="name">Your Name</label>
              <input
                className="form__input"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="email">Your Email</label>
              <input
                className="form__input"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="message">Message</label>
              <textarea
                className="form__textarea"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn--primary" type="submit">
              Send Message ✦
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
