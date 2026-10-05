'use client';
import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { Pic, Reveal, SplitText } from './ui';
import { comparisons } from '@/data/content';

function Slider({ before, after, title }) {
  const box = useRef(null);
  const dragging = useRef(false);
  const touched = useRef(false);
  const inView = useInView(box, { once: true, amount: 0.5 });

  const set = (pct) => box.current?.style.setProperty('--pos', `${Math.min(97, Math.max(3, pct))}%`);
  const fromEvent = (e) => {
    const r = box.current.getBoundingClientRect();
    set(((e.clientX - r.left) / r.width) * 100);
  };

  // little intro sweep so people see it's interactive
  useEffect(() => {
    if (!inView) return;
    const c = animate([50, 22, 78, 50], 0, { duration: 0 }); c.stop();
    const a = animate(0, 1, {
      duration: 2.2, ease: 'easeInOut',
      onUpdate: (p) => { if (!touched.current) set(50 + Math.sin(p * Math.PI * 2) * -28 * (1 - p * 0.3)); },
      onComplete: () => !touched.current && set(50),
    });
    return () => a.stop();
  }, [inView]);

  return (
    <div>
      <div
        ref={box}
        className={`ba ${inView && !touched.current ? 'hint' : ''}`}
        style={{ '--pos': '50%' }}
        role="slider" tabIndex={0} aria-label={`${title}: drag to compare before and after`} aria-valuemin={0} aria-valuemax={100}
        onPointerDown={(e) => { touched.current = true; dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); fromEvent(e); }}
        onPointerMove={(e) => dragging.current && fromEvent(e)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onKeyDown={(e) => {
          const cur = parseFloat(getComputedStyle(box.current).getPropertyValue('--pos')) || 50;
          if (e.key === 'ArrowLeft') set(cur - 4);
          if (e.key === 'ArrowRight') set(cur + 4);
        }}
      >
        <Pic src={before} alt="Before" sizes="(max-width:1020px) 100vw, 90vw" />
        <div className="ba-after" style={{ position: 'absolute', inset: 0 }}>
          <Pic src={after} alt="After" sizes="(max-width:1020px) 100vw, 90vw" />
        </div>
        <span className="ba-lab b">BEFORE</span>
        <span className="ba-lab a">AFTER</span>
        <div className="ba-div">
          <div className="ba-knob">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FCFCFC" strokeWidth="1.8"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
          </div>
        </div>
        <span className="ba-hint">DRAG TO COMPARE</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="sec">
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">Before / After</span></Reveal>
            <SplitText as="h2" className="h-lg" text={'See it.\nThen compare it.'} />
          </div>
          <Reveal as="p" className="lead muted" delay={0.2}>Same car, same angle. Drag the line to see what a proper detail changes.</Reveal>
        </div>
        <div className="ba-wrap">
          {comparisons.map((c) => (
            <Reveal key={c.title} y={60}>
              <Slider {...c} />
              <div className="ba-note"><b style={{ fontFamily: 'var(--display)', textTransform: 'uppercase' }}>{c.title}</b><span className="muted">{c.note}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
