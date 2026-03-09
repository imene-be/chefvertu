import { Link } from 'react-router-dom'
import chefVertuLogo from '../assets/logoChefVertu.svg'

const G = '#00461E'
const D = '#00170A'
const f = "'DM Sans', sans-serif"

const troubles = [
  'Trouble déficitaire de l\'attention avec hyperactivité (TDAH)',
  'Anxiété et stress chronique',
  'Maux de tête et migraines chroniques',
  'Dépression',
  'Diabète',
  'Épilepsie',
  'Troubles de l\'attention et de la concentration',
  'Maladies inflammatoires, y compris l\'arthrite',
  'Insomnie',
  'Troubles intestinaux, syndrome de l\'intestin irritable',
  'Troubles de la mémoire, signes précoces d\'Alzheimer',
  'Troubles de l\'humeur',
  'Surpoids et obésité',
]

export default function Home() {
  return (
    <div style={{ paddingTop: '60px' }}>

      {/* ─── HERO ─── */}
      <section style={{ backgroundColor: '#ffffff', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,70,30,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
          <div>
            <p style={{ fontFamily: f, fontSize: '0.78rem', fontWeight: '700', color: G, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.25rem', marginTop: 0 }}>
              Santé · Bio · Sans Gluten
            </p>
            <h1 style={{ fontFamily: f, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', fontWeight: '900', color: D, lineHeight: '1.08', margin: '0 0 1.5rem' }}>
              Bien manger<br />
              <span style={{ color: G }}>pour vivre longtemps</span>
            </h1>
            <p style={{ fontFamily: f, fontSize: '1.05rem', color: 'rgba(0,23,10,0.58)', lineHeight: '1.85', margin: '0 0 2.5rem', maxWidth: '480px' }}>
              Pas besoin d'être malade pour prendre soin de soi. Chef Vertu, c'est une cuisine sans gluten, savoureuse, pour ceux qui veulent vieillir en pleine forme.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
              <Link to="/recettes"
                style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: G, color: 'white', padding: '0.875rem 1.75rem', borderRadius: '8px', fontFamily: f, fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#003618'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = G}
              >
                Voir les recettes
              </Link>
              <Link to="/pourquoi-sans-gluten"
                style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: D, padding: '0.875rem 1.5rem', borderRadius: '8px', border: '1.5px solid rgba(0,23,10,0.18)', fontFamily: f, fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,23,10,0.18)'; e.currentTarget.style.color = D }}
              >
                Pourquoi sans gluten ?
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-logo">
            <img src={chefVertuLogo} alt="Chef Vertu" fetchpriority="high" width="300" height="300" style={{ width: 'min(300px, 90%)', height: 'auto', opacity: 0.95 }} />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-logo { display: none !important; }
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ─── TICKER ─── */}
      <div style={{ backgroundColor: G, overflow: 'hidden' }}>
        <div style={{ display: 'flex', animation: 'ticker 28s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(3)].map((_, rep) => (
            <span key={rep} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {[
                '1 personne sur 3 est sensible au gluten sans le savoir',
                '150+ recettes sans gluten sur Chef Vertu',
                '0g de gluten dans toutes nos recettes',
                'Votre cerveau n\'est pas condamné par vos gènes',
                'Une alimentation saine, c\'est la meilleure prévention',
              ].map((item, i) => (
                <span key={i} style={{ fontFamily: f, fontSize: '0.82rem', fontWeight: '600', color: 'rgba(255,255,255,0.9)', padding: '0.9rem 2.5rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  {item}
                  <span style={{ marginLeft: '2.5rem', color: 'rgba(255,255,255,0.3)' }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
      </div>

      {/* ─── CITATION ─── */}
      <section style={{ backgroundColor: '#f0f8f4', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{ fontFamily: f, fontWeight: '700', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', color: D, lineHeight: '1.7', margin: '0 0 1.25rem' }}>
            "Le sort de votre cerveau n'est pas écrit dans votre ADN. La dégénérescence n'est pas une fatalité,  elle se cache dans la nourriture que vous consommez."
          </blockquote>
          <p style={{ fontFamily: f, fontSize: '0.875rem', color: G, fontWeight: '600', margin: 0 }}> Dr David Perlmutter, neurologue</p>
        </div>
      </section>

      {/* ─── TROUBLES ─── */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="troubles-grid">
          <div>
            <p style={{ fontFamily: f, fontSize: '0.75rem', fontWeight: '700', color: G, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', marginTop: 0 }}>Et même si vous vous portez bien</p>
            <h2 style={{ fontFamily: f, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', color: D, margin: '0 0 1.25rem', lineHeight: '1.2' }}>
              Prévenir vaut mieux que guérir
            </h2>
            <p style={{ fontFamily: f, fontSize: '0.95rem', color: 'rgba(0,23,10,0.55)', lineHeight: '1.75', margin: '0 0 1.75rem' }}>
              Vous n'avez pas besoin de souffrir pour agir. Mieux manger aujourd'hui, c'est protéger votre cerveau, votre énergie et votre corps pour les décennies à venir.
            </p>
            <Link to="/pourquoi-sans-gluten"
              style={{ fontFamily: f, fontSize: '0.875rem', fontWeight: '600', color: G, textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              En savoir plus →
            </Link>
          </div>
          <div>
            <p style={{ fontFamily: f, fontSize: '0.82rem', color: 'rgba(0,23,10,0.38)', marginBottom: '0.75rem', marginTop: 0 }}>
              Le gluten peut aussi être en cause dans ces troubles :
            </p>
            {troubles.map((t, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(0,23,10,0.07)', padding: '0.7rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontFamily: f, fontSize: '0.65rem', fontWeight: '700', color: 'rgba(0,23,10,0.18)', minWidth: '24px' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: f, fontSize: '0.875rem', color: 'rgba(0,23,10,0.68)', lineHeight: '1.4' }}>{t}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(0,23,10,0.07)', padding: '0.7rem 0' }}>
              <span style={{ fontFamily: f, fontSize: '0.875rem', fontStyle: 'italic', color: 'rgba(0,23,10,0.35)' }}>Et bien d'autres encore.</span>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.troubles-grid{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
      </section>

      {/* ─── APPROCHE ─── */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#f8fcf9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: f, fontSize: '0.75rem', fontWeight: '700', color: G, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', marginTop: 0 }}>Notre approche</p>
            <h2 style={{ fontFamily: f, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', color: D, margin: 0, lineHeight: '1.15' }}>
              Fait pour vous.<br />Pensé pour votre santé.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: '01', titre: 'Un chef à votre service', texte: 'Chef Vertu vous prépare des repas faits maison, adaptés à vos besoins de santé. Bien manger tous les jours, sans y penser.' },
              { num: '02', titre: 'Une cuisine qui prend soin de vous', texte: 'Chaque recette réduit l\'inflammation, stabilise la glycémie et soutient vos fonctions cognitives. Sans additifs, sans gluten superflu.' },
              { num: '03', titre: 'Des résultats que vous ressentez', texte: 'Plus d\'énergie, moins de brouillard mental, un sommeil qui s\'améliore. Ce que vous mangez change ce que vous ressentez, dès la première semaine.' },
            ].map(({ num, titre, texte }, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(0,23,10,0.08)', padding: '2rem 0', display: 'grid', gridTemplateColumns: '48px 1fr 1fr', gap: '1.5rem', alignItems: 'start' }} className="pilier-row">
                <span style={{ fontFamily: f, fontSize: '0.75rem', fontWeight: '700', color: 'rgba(0,23,10,0.2)', paddingTop: '4px' }}>{num}</span>
                <h3 style={{ fontFamily: f, fontSize: '1.1rem', fontWeight: '700', color: D, margin: 0 }}>{titre}</h3>
                <p style={{ fontFamily: f, fontSize: '0.9rem', color: 'rgba(0,23,10,0.55)', lineHeight: '1.75', margin: 0 }}>{texte}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.pilier-row{grid-template-columns:40px 1fr!important} .pilier-row p{grid-column:2!important}}`}</style>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section style={{ backgroundColor: D, padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: f, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: '900', color: 'white', margin: '0 0 1rem', lineHeight: '1.2' }}>
            Votre santé future se construit aujourd'hui
          </h2>
          <p style={{ fontFamily: f, fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', margin: '0 0 2.5rem' }}>
            Commencez par comprendre, puis passez à table.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/recettes"
              style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: G, color: 'white', padding: '0.875rem 1.75rem', borderRadius: '8px', fontFamily: f, fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#003618'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = G}
            >
              Voir les recettes
            </Link>
            <Link to="/pourquoi-sans-gluten"
              style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.65)', padding: '0.875rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', fontFamily: f, fontSize: '0.9rem', fontWeight: '400', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}
            >
              Comprendre le gluten
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
