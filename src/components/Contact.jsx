import { ArrowRight } from 'lucide-react';

const InstagramIcon = ({ size }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Form Area */}
        <div>
          <h2 className="huge-subtitle" style={{ color: 'var(--background)', marginBottom: '2rem' }}>LET'S TALK.</h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #333',
                color: 'var(--background)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontFamily: 'Outfit',
                fontWeight: 800,
                padding: '1rem 0',
                outline: 'none'
              }}
            />
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #333',
                color: 'var(--background)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontFamily: 'Outfit',
                fontWeight: 800,
                padding: '1rem 0',
                outline: 'none'
              }}
            />
            <input 
              type="text" 
              placeholder="EVENT DETAILS (DATE, LOCATION, VIBE)" 
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: '2px solid #333',
                color: 'var(--background)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontFamily: 'Outfit',
                fontWeight: 800,
                padding: '1rem 0',
                outline: 'none'
              }}
            />
            
            <button 
              type="submit"
              className="btn-primary" 
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
                alignSelf: 'flex-start',
                marginTop: '1rem',
                gap: '0.5rem',
                fontSize: '1.25rem',
                padding: '1.25rem 2.5rem'
              }}
            >
              SEND REQUEST <ArrowRight size={24} />
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div style={{ paddingTop: '4rem', borderTop: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ fontFamily: 'Inter', fontWeight: 500 }}>
            © 2026 AGENCY. ALL RIGHTS RESERVED.
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontFamily: 'Outfit',
              fontWeight: 800,
              transition: 'opacity 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
            onMouseOut={(e) => e.currentTarget.style.opacity = 1}
          >
            INSTAGRAM <InstagramIcon size={40} />
          </a>
        </div>

      </div>
    </section>
  );
}
