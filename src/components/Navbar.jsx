import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import chefVertuLogo from '../assets/logoChefVertu2.svg'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/pourquoi-sans-gluten', label: 'Pourquoi sans gluten ?' },
  { to: '/recettes', label: 'Recettes' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const id = setTimeout(() => setOpen(false), 0)
    return () => clearTimeout(id)
  }, [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(0,23,10,0.07)',
      boxShadow: '0 1px 24px rgba(0,23,10,0.05)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          {/* Logo — grand */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={chefVertuLogo}
              alt="Chef Vertu"
              width="140"
              height="56"
              style={{ height: '56px', width: 'auto' }}
            />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: '0.25rem' }} className="desktop-nav">
            {links.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={active ? 'nav-link nav-link--active' : 'nav-link'}
                  style={{
                    padding: '0.6rem 1.1rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: active ? '700' : '400',
                    color: active ? '#00461E' : '#00170A',
                    textDecoration: 'none',
                    position: 'relative',
                    letterSpacing: '0.01em',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          <style>{`
            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 2px;
              left: 1.1rem;
              right: 1.1rem;
              height: 2px;
              background-color: #00461E;
              border-radius: 2px;
              transform: scaleX(0);
              transform-origin: center;
              transition: transform 0.2s ease;
            }
            .nav-link:hover::after,
            .nav-link--active::after {
              transform: scaleX(1);
            }
            .nav-link:hover {
              color: #00461E !important;
            }
          `}</style>

          {/* CTA Desktop */}
          <Link
            to="/recettes"
            className="desktop-cta"
            style={{
              backgroundColor: '#ffffff',
              color: '#00461E',
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              border: '1.5px solid #00461E',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.9rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#00461E'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#00461E' }}
          >
            Voir les recettes
          </Link>

          {/* Mobile burger */}
          <button
            className="mobile-burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#00170A', fontSize: '1.6rem', lineHeight: 1 }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid rgba(0,70,30,0.12)',
          padding: '1rem 1.5rem 1.5rem',
          animation: 'slideDown 0.2s ease forwards',
        }}>
          {links.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link key={to} to={to} style={{
                display: 'block', padding: '0.875rem 1rem', marginBottom: '0.25rem',
                borderRadius: '8px', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                fontWeight: active ? '700' : '400',
                color: active ? '#00461E' : '#00170A',
                backgroundColor: active ? 'rgba(0,70,30,0.08)' : 'transparent',
                textDecoration: 'none',
              }}>
                {label}
              </Link>
            )
          })}
          <Link to="/recettes" style={{
            display: 'block', marginTop: '0.75rem', backgroundColor: '#00461E', color: 'white',
            padding: '0.875rem 1.5rem', borderRadius: '25px', fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem', fontWeight: '700', textDecoration: 'none', textAlign: 'center',
          }}>
            Voir les recettes
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-burger { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-burger { display: none !important; }
          .desktop-nav, .desktop-cta { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
