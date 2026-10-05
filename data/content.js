// ============================================================
// NOXUS DETAILING — EDIT EVERYTHING HERE
// Swap images by replacing files in /public/images (same name)
// or by changing the paths below.
// ============================================================

export const brand = {
  name: 'NOXUS DETAILING',
  short: 'NOXUS',
  logo: '/images/logo.png',
  tagline: 'PRECISION. PERFORMANCE. PERFECTION.',
};

export const contactInfo = {
  phone: '+1 (000) 000-0000',
  email: 'hello@noxusdetailing.com',
  location: 'Your City, Your State',
  hours: 'Mon – Sat · By appointment',
};

export const socials = [
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'TikTok', href: '#', icon: 'tiktok' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Before / After', href: '#before-after' },
  { label: 'Recent Work', href: '#recent-work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const images = {
  hero: '/images/merc-hero.webp',
  difference: '/images/merc.webp',
  featured: '/images/merc-hood.webp',
  cta: '/images/merc-light.webp',
};

export const stats = [
  { value: 100, suffix: '%', label: 'Attention to detail' },
  { text: 'Premium', label: 'Finishes' },
  { text: 'Pro-grade', label: 'Products' },
  { text: 'Customer', label: 'Focused' },
];

export const services = [
  { name: 'Full Detail', desc: 'Interior and exterior restored in one complete, uncompromising service.', image: '/images/merc.webp' },
  { name: 'Interior Detail', desc: 'Carpets, leather, plastics and glass deep cleaned back to showroom feel.', image: '/images/acura.webp' },
  { name: 'Exterior Detail', desc: 'Safe wash, decontamination and protection for a clean, glossy finish.', image: '/images/merc-light.webp' },
  { name: 'Paint Correction', desc: 'Machine polishing that removes swirls and restores depth and clarity.', image: '/images/merc-hood.webp' },
  { name: 'Ceramic Coating', desc: 'Long-lasting protection with intense gloss and easier maintenance.', image: '/images/merc-grille.webp' },
  { name: 'Maintenance Detail', desc: 'Regular upkeep that keeps a finished vehicle looking finished.', image: '/images/after.webp' },
];

export const differenceLabels = [
  { text: 'Paint', x: 38, y: 46, side: 'left' },
  { text: 'Glass', x: 80, y: 30, side: 'right' },
  { text: 'Interior', x: 60, y: 36, side: 'left' },
  { text: 'Finish', x: 22, y: 64, side: 'left' },
  { text: 'Wheels', x: 90, y: 78, side: 'right' },
];

// Add more pairs here for more sliders.
export const comparisons = [
  { title: 'Interior Restoration', before: '/images/before.webp', after: '/images/after.webp', note: 'Driver footwell. Same angle, same car.' },
];

// span: 'tall' | 'wide' | 'square'  (controls the magazine layout)
export const projects = [
  { name: 'Mercedes S-Class', tag: 'Full Detail', image: '/images/merc.webp', ratio: '3 / 4' },
  { name: 'Headlight & Paint', tag: 'Exterior Detail', image: '/images/merc-light.webp', ratio: '7 / 5' },
  { name: 'Acura ILX', tag: 'Interior Detail', image: '/images/acura.webp', ratio: '3 / 4' },
  { name: 'Chrome & Grille', tag: 'Ceramic Coating', image: '/images/merc-grille.webp', ratio: '1 / 1' },
  { name: 'Footwell Reset', tag: 'Interior Restoration', image: '/images/after.webp', ratio: '3 / 4' },
  { name: 'Hood Gloss', tag: 'Paint Correction', image: '/images/merc-hood.webp', ratio: '2 / 1' },
];

export const featuredProject = {
  label: 'Featured Detail',
  title: 'From dull to distinct.',
  text: 'Years of road film and swirl marks gone. What is left is deep, even gloss that holds the light the way the paint was meant to.',
  cta: 'View project',
  href: '#recent-work',
};

export const why = [
  { n: '01', title: 'Attention to detail', text: 'We look where others do not.' },
  { n: '02', title: 'Premium products', text: 'Professional-grade chemistry only.' },
  { n: '03', title: 'Precision finishes', text: 'Measured, even and flawless.' },
  { n: '04', title: 'No shortcuts', text: 'Every step done properly.' },
];

export const process = [
  { n: '01', title: 'Book', text: 'Tell us about your vehicle.' },
  { n: '02', title: 'Prepare', text: 'Inspect, plan and protect.' },
  { n: '03', title: 'Detail', text: 'Clean, correct and finish.' },
  { n: '04', title: 'Reveal', text: 'Walk around the result.' },
];

// PLACEHOLDER reviews for the demo. Replace with real customer reviews.
export const testimonials = [
  { name: 'Daniel R.', vehicle: 'Luxury sedan', text: 'Absolutely incredible attention to detail. The car looked better than the day I bought it.' },
  { name: 'Michael T.', vehicle: 'Daily driver', text: 'The finish was unbelievable. You can immediately see the difference in the quality of the work.' },
  { name: 'James K.', vehicle: 'Sport sedan', text: "I've tried several detailers before, but the attention to detail here is on another level." },
  { name: 'Ryan M.', vehicle: 'SUV', text: 'The interior looked brand new. Every corner was cleaned, nothing was skipped.' },
];

export const serviceOptions = services.map((s) => s.name);
