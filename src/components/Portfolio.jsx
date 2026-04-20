import { motion } from 'framer-motion';

const mediaList = [
  { type: 'video', src: "https://www.pexels.com/download/video/35323936/" },
  { type: 'image', src: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&q=80&w=800" },
  { type: 'video', src: "https://www.pexels.com/download/video/35340079/" },
  { type: 'image', src: "https://images.unsplash.com/photo-1519671482749-fd098f3f8a62?auto=format&fit=crop&q=80&w=800" },
];

// Duplicate for infinite scroll loop
const marqueeMedia = [...mediaList, ...mediaList];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '6rem 0', backgroundColor: 'var(--accent)', color: 'var(--background)', overflow: 'hidden' }}>
      <div style={{ padding: '0 2rem', marginBottom: '4rem' }}>
        <h2 className="huge-subtitle" style={{ color: 'var(--background)' }}>PREVIOUS EVENTS.</h2>
      </div>

      <div style={{ display: 'flex', width: 'max-content' }}>
        <motion.div
          animate={{ x: '-50%' }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: '2rem', paddingLeft: '2rem' }}
        >
          {marqueeMedia.map((item, i) => (
            <div key={i} style={{ width: '300px', height: '400px', flexShrink: 0, overflow: 'hidden', borderRadius: '0.5rem', backgroundColor: '#222' }}>
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={item.src}
                  alt="Event"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
