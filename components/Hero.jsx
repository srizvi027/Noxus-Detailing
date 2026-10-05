'use client';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Pic, SplitText, Button, ease } from './ui';
import { images } from '@/data/content';

export default function Hero({ ready }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const bgX = useTransform(sx, (v) => v * -26);
  const bgY = useTransform(sy, (v) => v * -16);
  const txX = useTransform(sx, (v) => v * 10);
  const txY = useTransform(sy, (v) => v * 6);

  useEffect(() => {
    // cursor parallax: desktop with a real pointer only
    if (!window.matchMedia('(hover:hover) and (pointer:fine) and (min-width:1021px)').matches) return;
    const f = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', f, { passive: true });
    return () => window.removeEventListener('mousemove', f);
  }, [mx, my]);

  return (
    <section id="home" className="hero">
      <motion.div className="hero-bg" style={{ x: bgX, y: bgY }}>
        <div className="zoom"><Pic src={images.hero} alt="Detailed silver sedan, close up of hood and headlight" sizes="100vw" priority /></div>
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-glow" />
      <div className="streak" />

      <motion.div className="wrap hero-inner" style={{ x: txX, y: txY }}>
        <motion.span className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={ready ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease }}>
          Premium automotive detailing
        </motion.span>
        <SplitText as="h1" className="h-xl" text={'Detailing\nwithout\ncompromise.'} trigger={ready} delay={0.1} />
        <motion.p className="hero-sub" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease, delay: 0.7 }}>
          Precision detailing. Obsessive results. Built for vehicles that deserve more.
        </motion.p>
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease, delay: 0.85 }}>
          <Button href="#contact">Book your detail</Button>
          <Button href="#recent-work" variant="ghost">View our work</Button>
        </motion.div>
      </motion.div>

      <div className="hero-trust">PREMIUM AUTOMOTIVE DETAILING</div>
      <motion.div className="scroll-ind" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 1.4 }} />
    </section>
  );
}
