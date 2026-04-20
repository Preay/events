import { motion } from 'framer-motion';

export default function Hero({ onVideoReady }) {
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
          onLoadedData={() => onVideoReady && onVideoReady()}
          poster="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
