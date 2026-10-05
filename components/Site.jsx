'use client';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import FeaturedDetail from './FeaturedDetail';
import BeforeAfter from './BeforeAfter';
import RecentWork from './RecentWork';
import FeaturedProject from './FeaturedProject';
import WhyNoxus from './WhyNoxus';
import Process from './Process';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Contact from './Contact';
import Footer from './Footer';

export default function Site() {
  const [reveal, setReveal] = useState(false); // loader is flying to navbar
  const [done, setDone] = useState(false);
  const onMove = useCallback(() => setReveal(true), []);
  const onDone = useCallback(() => setDone(true), []);
  return (
    <>
      {!done && <Loader onMove={onMove} onDone={onDone} />}
      <Navbar ready={done} />
      <motion.main
        initial={{ opacity: 0, filter: 'blur(14px)' }}
        animate={reveal ? { opacity: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        onAnimationComplete={(d) => d?.filter && (document.querySelector('main').style.filter = 'none')}
      >
        <Hero ready={reveal} />
        <Stats />
        <Services />
        <FeaturedDetail />
        <BeforeAfter />
        <RecentWork />
        <FeaturedProject />
        <WhyNoxus />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}
