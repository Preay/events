import { useState, useEffect } from 'react';
import './App.css';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Upcoming from './components/Upcoming';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  // When loading is complete, we instantly unlock scroll
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Upcoming />
        <Contact />
      </main>
    </>
  );
}

export default App;
