import { motion } from 'framer-motion';

const upcoming = [
  { date: "APR 25", name: "PAJAMA PARTY 2.0", loc: "ECLIPSE PICKLEBALL COURT" },
  { date: "NOV 12", name: "TECH SUMMIT VIP GALA", loc: "SAN FRANCISCO" },
  { date: "DEC 31", name: "MILLENNIUM EVE", loc: "MIAMI" }
];

export default function Upcoming() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <p style={{ fontFamily: 'Inter', fontWeight: 500, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Upcoming</p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {upcoming.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 0',
              borderBottom: '1px solid var(--border)'
            }}
          >
            <div style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 900 }}>
              {item.date}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: 'Outfit', fontWeight: 800 }}>
                {item.name}
              </div>
              <div style={{ fontFamily: 'Inter', fontWeight: 500, color: '#666' }}>
                {item.loc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
