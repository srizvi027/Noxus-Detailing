'use client';
import { motion } from 'framer-motion';
import { Pic, Reveal, SplitText, Arrow, ease } from './ui';
import { services } from '@/data/content';

export default function Services() {
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal><span className="eyebrow">Services</span></Reveal>
            <SplitText as="h2" className="h-lg" text={'Built for\nthe obsessed.'} />
          </div>
          <Reveal as="p" className="lead muted" delay={0.2}>Every detail matters. Every surface gets the attention it deserves.</Reveal>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <motion.a href="#contact" key={s.name} className="svc" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.9, ease, delay: (i % 3) * 0.1 }}>
              <div className="svc-img">
                <span className="svc-n">{String(i + 1).padStart(2, '0')}</span>
                <Pic src={s.image} alt={s.name} sizes="(max-width:620px) 100vw, (max-width:1020px) 50vw, 33vw" />
              </div>
              <div className="svc-body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="svc-arrow"><Arrow size={18} dir="up" /></span>
              </div>
              <span className="svc-line" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
