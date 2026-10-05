'use client';
import { motion } from 'framer-motion';
import { Counter, ease } from './ui';
import { stats } from '@/data/content';

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {stats.map((s, i) => (
          <motion.div key={s.label} className="stat" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.9, ease, delay: i * 0.1 }}>
            <strong>{s.text ?? <Counter to={s.value} suffix={s.suffix} />}</strong>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
