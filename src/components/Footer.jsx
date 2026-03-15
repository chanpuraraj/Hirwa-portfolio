import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">{name}</div>
          <div className="footer__socials">
            <a className="footer__social" href="#" aria-label="LinkedIn">
              in
            </a>
            <a className="footer__social" href="#" aria-label="Email">
              ✉
            </a>
            <a className="footer__social" href="#" aria-label="Twitter">
              𝕏
            </a>
          </div>
        </div>
        <hr className="footer__divider" />
        <p className="footer__bottom">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
