'use client';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import Logo from './Logo';

const clamp = (v) => Math.min(1, Math.max(0, v));

/**
 * Cinematic start-up: blue line sweeps across, revealing the logo,
 * logo glows, then flies into the navbar position while the screen dissolves.
 * ~2.2s total.
 */
export default function Loader({ onMove, onDone }) {
  const root = useRef(null);
  const line = useRef(null);
  const lock = useRef(null);

  useEffect(() => {
    document.body.classList.add('locked');
    const W = window.innerWidth;
    const lineW = W * 0.3;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lr = lock.current.getBoundingClientRect();
    let cancelled = false;

    const finish = () => {
      document.body.classList.remove('locked');
      onDone();
    };
    if (reduced) { onMove(); finish(); return; }

    (async () => {
      lock.current.style.clipPath = 'inset(0 100% 0 0)';
      // 1 — line sweep + logo reveal
      await animate(0, 1, {
        duration: 1.05,
        ease: [0.65, 0, 0.25, 1],
        onUpdate: (p) => {
          const left = -lineW + p * (W + lineW * 1.2);
          line.current.style.transform = `translateX(${left}px)`;
          const head = left + lineW;
          lock.current.style.clipPath = `inset(0 ${clamp((lr.right - head) / lr.width) * 100}% 0 0)`;
        },
      });
      if (cancelled) return;
      lock.current.style.clipPath = 'none';
      line.current.style.opacity = 0;
      // 2 — glow
      await animate(lock.current, { filter: ['drop-shadow(0 0 0px #367BAE)', 'drop-shadow(0 0 26px #367BAE)', 'drop-shadow(0 0 8px #367BAE)'] }, { duration: 0.5 });
      if (cancelled) return;
      // 3 — fly into navbar, dissolve
      const target = document.getElementById('nav-logo')?.getBoundingClientRect();
      onMove();
      const dx = target ? target.left + target.width / 2 - (lr.left + lr.width / 2) : 0;
      const dy = target ? target.top + target.height / 2 - (lr.top + lr.height / 2) : 0;
      const s = target ? target.width / lr.width : 0.5;
      animate(root.current, { backgroundColor: 'rgba(4,11,20,0)' }, { duration: 0.7, delay: 0.1 });
      await animate(lock.current, { x: dx, y: dy, scale: s, filter: 'drop-shadow(0 0 0px #367BAE)' }, { duration: 0.75, ease: [0.7, 0, 0.2, 1] });
      finish();
    })();

    return () => { cancelled = true; document.body.classList.remove('locked'); };
  }, [onDone, onMove]);

  return (
    <div className="loader" ref={root} aria-hidden>
      <div className="loader-line" ref={line} style={{ transform: 'translateX(-40vw)' }} />
      <div ref={lock} style={{ willChange: 'transform' }}>
        <Logo />
      </div>
    </div>
  );
}
