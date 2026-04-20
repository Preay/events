import { useState, useEffect } from 'react';
import './App.css';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Upcoming from './components/Upcoming';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // When loading is complete, we instantly unlock scroll
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  // Safety fallback: if video takes longer than 6 seconds to load, let the page reveal anyway
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader isReady={videoLoaded} onComplete={() => setLoading(false)} />}
      
      <main>
        <Navbar />
        <Hero onVideoReady={() => setVideoLoaded(true)} />
        <Services />
        <Portfolio />
        <Upcoming />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
