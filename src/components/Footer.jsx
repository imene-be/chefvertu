import { Link } from 'react-router-dom'
import chefVertuLogo from '../assets/logoChefVertu2.svg'

const f = "'DM Sans', sans-serif"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#00170A', color: 'rgba(255,255,255,0.85)', padding: '4rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Top */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', marginBottom: '3.5rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <img
              src={chefVertuLogo}
              alt="Chef Vertu"
              style={{ height: '80px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.88, marginBottom: '1.25rem', display: 'block' }}
            />
            <p style={{ fontFamily: f, fontSize: '0.875rem', lineHeight: '1.75', color: 'rgba(255,255,255,0.42)', margin: '0 0 1.5rem', maxWidth: '280px' }}>
              Une cuisine sans gluten, ancrée dans la science pour vivre mieux et plus longtemps.
            </p>
            <p style={{ fontFamily: f, fontSize: '0.78rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.22)', margin: 0 }}>
              Les informations présentées sont à visée éducative uniquement et ne constituent pas un avis médical.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: f, fontSize: '0.68rem', fontWeight: '700', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem', marginTop: 0 }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { to: '/', label: 'Accueil' },
                { to: '/pourquoi-sans-gluten', label: 'Pourquoi sans gluten ?' },
                { to: '/recettes', label: 'Recettes' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ fontFamily: f, fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Légal */}
          <div>
            <p style={{ fontFamily: f, fontSize: '0.68rem', fontWeight: '700', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem', marginTop: 0 }}>Légal</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <Link
                to="/mentions-legales"
                style={{ fontFamily: f, fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                Mentions légales
              </Link>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontFamily: f, fontSize: '0.68rem', fontWeight: '700', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem', marginTop: 0 }}>Réalisé par</p>
              <p style={{ fontFamily: f, fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: '1.6' }}>
                Imène Bentifraouine<br />
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.22)' }}>Développement & Design</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{ fontFamily: f, fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Bentifraouine Imène — Tous droits réservés
          </span>
         
        </div>
      </div>

      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr!important;gap:2.5rem!important}}`}</style>
    </footer>
  )
}
