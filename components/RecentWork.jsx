'use client';
import { motion } from 'framer-motion';
import { Pic, Reveal, SplitText, ease } from './ui';
import { projects } from '@/data/content';

export default function RecentWork() {
  return (
    <section id="recent-work" className="sec" style={{ paddingBottom: 'clamp(40px,6vw,80px)' }}>
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">Gallery</span></Reveal>
            <SplitText as="h2" className="h-lg" text="Recent work" />
          </div>
          <Reveal as="p" className="lead muted" delay={0.2}>Results that speak louder than words.</Reveal>
        </div>
        <div className="masonry">
          {projects.map((p, i) => (
            <motion.a href="#contact" key={p.name} className="pj" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 1, ease, delay: (i % 3) * 0.08 }}>
              <div style={{ aspectRatio: p.ratio }}>
                <Pic src={p.image} alt={p.name} sizes="(max-width:520px) 100vw, (max-width:1020px) 50vw, 33vw" />
              </div>
              <div className="pj-ov">
                <small>{p.tag}</small>
                <h3>{p.name}</h3>
                <em>VIEW DETAIL</em>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
