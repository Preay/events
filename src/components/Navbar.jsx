export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      mixBlendMode: 'difference',
      color: '#ffffff'
    }}>
      <div style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>
        EVENTS
      </div>
      <div style={{ display: 'flex', gap: '2rem', fontFamily: 'Inter', fontWeight: 500 }}>
        <a href="#services">SERVICES</a>
        <a href="#portfolio">WORK</a>
        <a href="#contact">BOOK</a>
      </div>
    </nav>
  );
}
