import { motion } from 'framer-motion';

const testimonials = [
  { text: `"INSANE ENERGY. LITERALLY THE BEST NIGHT OF MY LIFE."`, author: "SARAH, 21" },
  { text: `"MAIN CHARACTER VIBES ALL NIGHT LONG. NO CAP."`, author: "ALEX, 23" },
  { text: `"THE MUSIC, THE VENUE, THE PEOPLE. FLAWLESS."`, author: "JORDAN, 20" },
  { text: `"I'VE BEEN TO 100 PARTIES. THIS WAS THE ONLY ONE THAT MATTERED."`, author: "CHLOE, 22" }
];

export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
      <p style={{ fontFamily: 'Inter', fontWeight: 500, marginBottom: '4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Word on the street</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderLeft: '4px solid var(--background)', paddingLeft: '2rem' }}
          >
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
              {t.text}
            </h3>
            <p style={{ fontFamily: 'Inter', fontWeight: 500, opacity: 0.7, fontSize: '1.25rem' }}>
              — {t.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
