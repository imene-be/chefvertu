const G = '#00461E'
const D = '#00170A'
const f = "'DM Sans', sans-serif"

const sections = [
  {
    num: '01',
    titre: 'Qui a fait ce site ?',
    contenu: (
      <>
        <p>Ce site a été conçu et développé par <strong>Imène Bentifraouine</strong>, étudiante en Mastère Stratégie Digitale, Manager de projets informatiques (RNCP38905).</p>
        <p>Chef Vertu est un site vitrine dédié à la cuisine sans gluten, réalisé dans le cadre d'un projet client. Il n'a pas de vocation commerciale directe.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
          <span>✉ bentifraouineimene@gmail.com</span>
          <span>🌐 imenebe.fr</span>
        </div>
      </>
    ),
  },
  {
    num: '02',
    titre: 'Hébergement',
    contenu: (
      <>
        <p>Ce site est hébergé chez <strong>Vercel</strong>, une plateforme de déploiement pensée pour les projets web modernes.</p>
        <p style={{ color: 'rgba(0,23,10,0.5)', fontSize: '0.875rem' }}>
          Vercel Inc. — 340 Pine Street, Suite 700 — San Francisco, CA 94104, États-Unis<br />
          vercel.com
        </p>
      </>
    ),
  },
  {
    num: '03',
    titre: 'Propriété du contenu',
    contenu: (
      <>
        <p>Les textes, recettes, visuels et contenus éditoriaux publiés sur Chef Vertu sont la propriété de leurs auteurs respectifs.</p>
        <p>Les références scientifiques citées (notamment les travaux du Dr David Perlmutter) sont reprises à titre informatif et éducatif. Toute reproduction ou exploitation commerciale sans autorisation explicite est interdite.</p>
      </>
    ),
  },
  {
    num: '04',
    titre: 'Données personnelles & RGPD',
    contenu: (
      <>
        <p>Ce site ne collecte aucune donnée personnelle via un formulaire. Aucune information n'est stockée en base de données, revendue ou utilisée à des fins commerciales.</p>
        <p>Conformément au règlement européen RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande :</p>
        <p style={{ color: G, fontWeight: '600' }}>bentifraouineimene@gmail.com</p>
      </>
    ),
  },
  {
    num: '05',
    titre: 'Cookies',
    contenu: (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            'Aucun cookie déposé sur votre appareil.',
            'Aucun cookie de tracking ou publicitaire.',
            'Vercel Analytics peut être utilisé pour des statistiques de fréquentation anonymes. Cet outil est privacy-first : aucune donnée personnelle collectée.',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ color: G, fontWeight: '700', flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ color: 'rgba(0,23,10,0.45)', fontSize: '0.875rem' }}>Si cela venait à changer, une bannière de consentement conforme serait mise en place.</p>
      </>
    ),
  },
  {
    num: '06',
    titre: 'Avis médical',
    contenu: (
      <>
        <p>Les informations et recettes publiées sur Chef Vertu sont fournies à titre éducatif et informatif uniquement. Elles ne constituent en aucun cas un avis médical ou nutritionnel personnalisé.</p>
        <p>Consultez toujours un professionnel de santé avant de modifier votre alimentation, notamment en cas de maladie diagnostiquée.</p>
      </>
    ),
  },
  {
    num: '07',
    titre: 'Responsabilité',
    contenu: (
      <>
        <p>Chef Vertu est un site à visée éducative. Les projets et informations présentés le sont à titre illustratif et démonstratif. L'éditeur ne peut être tenu responsable d'une utilisation du contenu en dehors de ce cadre.</p>
        <p>Pour tout problème ou signalement : <span style={{ color: G, fontWeight: '600' }}>bentifraouineimene@gmail.com</span></p>
      </>
    ),
  },
]

export default function MentionsLegales() {
  return (
    <div style={{ paddingTop: '90px' }}>

      {/* ─── HEADER ─── */}
      <section style={{ backgroundColor: '#f0f8f4', padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: f, fontSize: '0.72rem', fontWeight: '700', color: G, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', marginTop: 0 }}>Transparence & légalité</p>
          <h1 style={{ fontFamily: f, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', color: D, margin: '0 0 0.75rem', lineHeight: '1.1' }}>
            Mentions légales
          </h1>
          <p style={{ fontFamily: f, fontSize: '0.875rem', color: 'rgba(0,23,10,0.45)', margin: 0 }}>
            chefvertu.fr — Réalisé par © 2026 Bentifraouine Imène — Tous droits réservés
          </p>
        </div>
      </section>

      {/* ─── CONTENU ─── */}
      <section style={{ padding: '0 1.5rem 5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {sections.map(({ num, titre, contenu }) => (
            <div key={num} style={{ borderTop: '1px solid rgba(0,23,10,0.07)', padding: '3rem 0', display: 'grid', gridTemplateColumns: '64px 1fr', gap: '2rem', alignItems: 'start' }} className="ml-row">
              <span style={{ fontFamily: f, fontSize: '0.72rem', fontWeight: '700', color: 'rgba(0,23,10,0.18)', paddingTop: '5px' }}>{num}</span>
              <div>
                <h2 style={{ fontFamily: f, fontSize: '1.15rem', fontWeight: '800', color: D, margin: '0 0 1.25rem' }}>{titre}</h2>
                <div style={{ fontFamily: f, fontSize: '0.925rem', color: 'rgba(0,23,10,0.62)', lineHeight: '1.8' }}>
                  {contenu}
                </div>
              </div>
            </div>
          ))}

          <div style={{ borderTop: '1px solid rgba(0,23,10,0.07)', paddingTop: '2rem', marginTop: '1rem' }}>
            <p style={{ fontFamily: f, fontSize: '0.78rem', color: 'rgba(0,23,10,0.3)', margin: 0 }}>
              Réalisé par Bentifraouine Imène — Dernière mise à jour : 22 février 2026
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .ml-row p { margin: 0 0 0.75rem; }
        .ml-row p:last-child { margin-bottom: 0; }
        @media(max-width:640px){ .ml-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; } }
      `}</style>
    </div>
  )
}
