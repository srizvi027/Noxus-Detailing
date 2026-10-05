'use client';
import { motion } from 'framer-motion';
import { Pic, SplitText, Reveal, Button } from './ui';
import { images } from '@/data/content';

export default function CTA() {
  return (
    <section className="cta-sec">
      <motion.div className="cta-bg" initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 6, ease: 'easeOut' }}>
        <Pic src={images.cta} alt="" sizes="100vw" />
      </motion.div>
      <div className="orb o1" /><div className="orb o2" />
      <div className="wrap cta-in">
        <SplitText as="h2" className="h-xl" text={'Ready to see\nthe difference?'} />
        <Reveal as="p" className="lead muted" delay={0.2}>Give your vehicle the finish it deserves.</Reveal>
        <Reveal delay={0.3}><Button href="#contact">Book your detail</Button></Reveal>
      </div>
    </section>
  );
}
