'use client';
import { motion } from 'framer-motion';
import { Pic, Reveal, SplitText, ImageReveal, ease } from './ui';
import { images, differenceLabels } from '@/data/content';

export default function FeaturedDetail() {
  return (
    <section className="sec diff">
      <div className="wrap">
        <Reveal><span className="eyebrow">The process</span></Reveal>
        <SplitText as="h2" className="h-lg" text={'The difference is\nin the details.'} />
        <div className="diff-grid">
          <Reveal className="info" delay={0.1}>
            <h3>Nothing is overlooked</h3>
            <p className="muted">We work panel by panel, seam by seam. Edges, badges, vents, wheel barrels and door jambs get the same focus as the paint everyone sees first.</p>
            <ul>
              <li>Paint decontaminated and refined</li>
              <li>Glass cleaned inside and out</li>
              <li>Interior cleaned stitch by stitch</li>
            </ul>
          </Reveal>
          <div className="diff-stage">
            <ImageReveal className="diff-img" style={{ position: 'absolute', inset: 0 }}>
              <Pic src={images.difference} alt="Silver sedan after detail" sizes="(max-width:900px) 90vw, 45vw" />
            </ImageReveal>
            {differenceLabels.map((l, i) => (
              <motion.div key={l.text} className={`tag ${l.side}`} style={{ left: `${l.x}%`, top: `${l.y}%` }} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: 1 + i * 0.15 }}>
                <i /><span>{l.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
