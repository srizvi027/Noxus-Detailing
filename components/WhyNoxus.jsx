'use client';
import { motion } from 'framer-motion';
import { Reveal, SplitText, ease } from './ui';
import { why } from '@/data/content';

export default function WhyNoxus() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">Why us</span></Reveal>
            <SplitText as="h2" className="h-lg" text="Why Noxus?" />
          </div>
        </div>
        <div className="why-list">
          {why.map((w, i) => (
            <motion.div key={w.n} className="why-row" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1, ease, delay: 0.05 }}>
              <span className="n">{w.n}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
