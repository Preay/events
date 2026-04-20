import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="app-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem', zIndex: 1 }}>
      {/* Background Wrapper */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        {/* Placeholder video element */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
        >
          <source src="https://www.pexels.com/download/video/9757102/" type="video/mp4" />
        </video>
        {/* Black overlay for contrast */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ color: '#ffffff' }}
      >
        <h1 className="huge-title" style={{ color: '#ffffff' }}>UNFORGETTABLE<br />EVENTS.</h1>
      </motion.div>
    </section>
  );
}
