'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal, SplitText, Arrow } from './ui';
import { contactInfo, serviceOptions } from '@/data/content';

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'vehicle', label: 'Vehicle', type: 'text', placeholder: 'Year, make, model' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: connect a backend here (e.g. fetch('/api/contact', { method:'POST', body: JSON.stringify(data) }))
    console.log('Detail request', data);
    setSent(true);
  };
  return (
    <section id="contact" className="sec">
      <div className="wrap contact-grid">
        <div>
          <Reveal><span className="eyebrow">Contact</span></Reveal>
          <SplitText as="h2" className="h-lg" text={"Let's detail\nsomething special."} />
          <Reveal className="cinfo" delay={0.2}>
            <div><small>Phone</small><a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}>{contactInfo.phone}</a></div>
            <div><small>Email</small><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
            <div><small>Location</small><p>{contactInfo.location}</p></div>
            <div><small>Hours</small><p>{contactInfo.hours}</p></div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" className="form-ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h3 className="h-lg" style={{ fontSize: 'clamp(26px,3vw,40px)', marginBottom: 12 }}>Request received.</h3>
                <p className="muted">Thanks. We will get back to you shortly to confirm your detail.</p>
                <button className="btn ghost" style={{ marginTop: 22 }} onClick={() => setSent(false)}>Send another</button>
              </motion.div>
            ) : (
              <motion.form key="f" className="form" onSubmit={submit} exit={{ opacity: 0 }}>
                {fields.map((f) => (
                  <div className="field" key={f.name}>
                    <label htmlFor={f.name}>{f.label}</label>
                    <input id={f.name} {...f} />
                  </div>
                ))}
                <div className="field full">
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" />
                </div>
                <div className="full" style={{ gridColumn: '1/-1' }}>
                  <button className="btn solid" type="submit">Request a detail <Arrow size={16} /></button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
