'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Pic, Reveal, SplitText, Button, ImageReveal } from './ui';
import { images, featuredProject as f } from '@/data/content';

export default function FeaturedProject() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  return (
    <section ref={ref} className="feat">
      <ImageReveal style={{ position: 'absolute', inset: 0 }}>
        <motion.div className="feat-bg" style={{ y }}>
          <Pic src={images.featured} alt="" sizes="100vw" />
        </motion.div>
      </ImageReveal>
      <div className="wrap feat-in">
        <Reveal><span className="eyebrow">{f.label}</span></Reveal>
        <SplitText as="h2" className="h-xl" text={f.title.replace('. ', '.\n').replace('dull to', 'dull\nto')} delay={0.1} />
        <Reveal as="p" className="lead muted" delay={0.3}>{f.text}</Reveal>
        <Reveal delay={0.4}><Button href={f.href}>{f.cta}</Button></Reveal>
      </div>
    </section>
  );
}
