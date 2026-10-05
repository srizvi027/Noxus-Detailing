'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { Button, ease } from './ui';
import { navLinks } from '@/data/content';

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('locked', open);
    return () => document.body.classList.remove('locked');
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="wrap nav-in">
          <a href="#home" aria-label="Noxus Detailing — home" onClick={() => setOpen(false)} style={{ position: 'relative', zIndex: 70 }}>
            <Logo id="nav-logo" style={{ opacity: ready ? 1 : 0, transition: 'opacity .3s' }} />
          </a>
          <motion.nav className="nav-links" aria-label="Primary" initial={{ opacity: 0, y: -10 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease, delay: 0.1 }}>
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </motion.nav>
          <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="nav-cta-wrap" style={{ display: 'contents' }}>
            <Button href="#contact" className="cta">Book your detail</Button>
          </motion.div>
          <button className={`burger ${open ? 'open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ clipPath: 'circle(0% at 92% 4%)' }} animate={{ clipPath: 'circle(150% at 92% 4%)' }} exit={{ clipPath: 'circle(0% at 92% 4%)' }} transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}>
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href} className="ml" onClick={() => setOpen(false)} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease }}>
                {l.label}
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} style={{ marginTop: 28 }}>
              <Button href="#contact" onClick={() => setOpen(false)}>Book your detail</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
