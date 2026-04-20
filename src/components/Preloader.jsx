import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isReady, onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < 99) {
      interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + Math.floor(Math.random() * 5) + 1;
          return next > 99 ? 99 : next;
        });
      }, 50);
    } else if (count === 99 && isReady) {
      setTimeout(() => setCount(100), 200);
    } else if (count === 100) {
      setTimeout(() => {
        setCount(101);
      }, 500); // short wait at 100 before transition
    } else if (count === 101) {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200); // wait for 1.2s exit animation
    }

    return () => clearInterval(interval);
  }, [count, isReady, onComplete]);

  return (
    <AnimatePresence>
      {count <= 100 && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, x: 0 }}
          exit={{ x: '-100%', opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#000000',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            padding: '2rem'
          }}
        >
          <div style={{ fontSize: 'clamp(6rem, 20vw, 20rem)', fontFamily: 'Outfit', fontWeight: 900, lineHeight: 0.8 }}>
            {count}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
