import { motion } from 'framer-motion';

const services = [
  "COMMERCIAL EVENTS",
  "WEDDINGS",
  "DECORS",
  "VENUES",
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <p style={{ fontFamily: 'Inter', fontWeight: 500, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What we do</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {services.map((svc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="huge-subtitle" style={{ borderBottom: '2px solid var(--border)', paddingBottom: '1rem' }}>
              {svc}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
