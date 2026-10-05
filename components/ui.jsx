'use client';
import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const ease = [0.2, 0.8, 0.2, 1];

/** Fade-up wrapper */
export function Reveal({ children, delay = 0, y = 36, className, as = 'div', ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Word-by-word masked text reveal. Pass `trigger` (bool) to control manually, else reveals on scroll. */
export function SplitText({ text, className, as = 'div', delay = 0, trigger }) {
  const M = motion[as];
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '-60px' });
  const lines = text.split('\n');
  const v = {
    hide: { y: '118%' },
    show: (i) => ({ y: 0, transition: { duration: 1.1, ease, delay: delay + i * 0.07 } }),
  };
  // observe the (unclipped) container, not the masked words
  const on = trigger !== undefined ? trigger : seen;
  const ctrl = { initial: 'hide', animate: on ? 'show' : 'hide' };
  let k = 0;
  return (
    <M ref={ref} className={className} aria-label={text.replace(/\n/g, ' ')}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }} aria-hidden>
          {line.split(' ').map((w, wi) => (
            <span key={wi} className="mask" style={{ marginRight: '.22em' }}>
              <motion.span custom={k++} variants={v} {...ctrl}>
                {w}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </M>
  );
}

/** Image with curtain reveal */
export function ImageReveal({ children, className, style, delay = 0 }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.3, delay, ease: [0.7, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** next/image that fills its (relatively positioned) parent. Lazy by default. */
export function Pic({ src, alt = '', sizes = '(max-width:768px) 100vw, 50vw', priority = false, position }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={80}
      style={{ objectFit: 'cover', objectPosition: position }}
    />
  );
}

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.2, 0.8, 0.2, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function useMedia(query) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const f = () => setM(mq.matches);
    f();
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, [query]);
  return m;
}

export const Arrow = ({ size = 18, dir = 'right' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"
    style={{ transform: dir === 'left' ? 'scaleX(-1)' : dir === 'up' ? 'rotate(-45deg)' : undefined }}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const SocialIcon = ({ name }) => {
  const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 };
  if (name === 'instagram') return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>;
  if (name === 'facebook') return <svg {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></svg>;
  return <svg {...p}><path d="M14 3v11a4 4 0 1 1-4-4M14 3c.4 3 2.2 4.8 5 5" /></svg>;
};

export const Button = ({ href = '#contact', children, variant = 'solid', className = '', ...rest }) => (
  <a href={href} className={`btn ${variant} ${className}`} {...rest}>
    {children}
    <Arrow size={16} />
  </a>
);
