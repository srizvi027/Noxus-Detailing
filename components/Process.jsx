'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal, SplitText, useMedia, ease } from './ui';
import { process } from '@/data/content';

export default function Process() {
  const ref = useRef(null);
  const mobile = useMedia('(max-width:760px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 65%'] });
  const p = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">How it works</span></Reveal>
            <SplitText as="h2" className="h-lg" text="Four steps." />
          </div>
        </div>
        <div className="proc" ref={ref}>
          <div className="proc-track"><motion.div className="proc-fill" style={mobile ? { scaleY: p } : { scaleX: p }} /></div>
          {process.map((s, i) => (
            <motion.div key={s.n} className="step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, ease, delay: i * 0.12 }}>
              <div className="dot">{s.n}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
