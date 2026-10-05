import Logo from './Logo';
import { SocialIcon } from './ui';
import { brand, navLinks, contactInfo, socials } from '@/data/content';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Logo />
            <p className="foot-tag">{brand.tagline}</p>
          </div>
          <div className="foot-cols">
            <div>
              <h4>Navigate</h4>
              {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            </div>
            <div>
              <h4>Contact</h4>
              <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}>{contactInfo.phone}</a>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <p>{contactInfo.location}</p>
            </div>
            <div>
              <h4>Follow</h4>
              <div className="soc">
                {socials.map((s) => <a key={s.name} href={s.href} aria-label={s.name}><SocialIcon name={s.icon} /></a>)}
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Demo website</span>
        </div>
      </div>
      <div className="foot-word" aria-hidden>{brand.short}</div>
    </footer>
  );
}
