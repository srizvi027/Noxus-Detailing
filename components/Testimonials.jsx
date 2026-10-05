'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal, SplitText, Arrow, ease } from './ui';
import { testimonials as T } from '@/data/content';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d) => setI((v) => (v + d + T.length) % T.length);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused]);
  const t = T[i];
  return (
    <section id="reviews" className="sec rev" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">Reviews</span></Reveal>
            <SplitText as="h2" className="h-lg" text={'What clients\nnotice first.'} />
          </div>
        </div>
        <div className="rev-stage">
          <AnimatePresence mode="wait">
            <motion.article key={i} className="rev-card" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.6, ease }}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>“{t.text}”</blockquote>
              <footer><b>{t.name}</b><span className="muted">{t.vehicle}</span></footer>
            </motion.article>
          </AnimatePresence>
          <div className="rev-ctrl">
            <button onClick={() => go(-1)} aria-label="Previous review"><Arrow dir="left" /></button>
            <button onClick={() => go(1)} aria-label="Next review"><Arrow /></button>
            <div className="pips">{T.map((_, k) => <i key={k} className={k === i ? 'on' : ''} />)}</div>
          </div>
          <p className="disclaimer">Placeholder reviews for demo purposes only. Replace with real customer feedback in data/content.js.</p>
        </div>
      </div>
    </section>
  );
}
