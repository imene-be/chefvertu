import { Link } from 'react-router-dom'

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
  'Affections et maladies inflammatoires, y compris l\'arthrite',
  'Insomnie',
  'Troubles intestinaux, y compris la maladie cœliaque, une intolérance au gluten ou le syndrome de l\'intestin irritable',
  'Troubles de la mémoire et déficit cognitif léger, signes annonciateurs de la maladie d\'Alzheimer',
  'Troubles de l\'humeur',
  'Surpoids et obésité',
  'Syndrome de Gilles de la Tourette',
  'Et bien d\'autres encore',
]


const sections = [
  {
    titre: 'Ce n\'est pas dans vos gènes',
    contenu: [
      `Le sort de votre cerveau n'est pas écrit dans votre ADN. Maux de tête, dépression, troubles de la mémoire  le coupable n'est pas forcément votre héritage familial.`,
      `Il se cache dans la nourriture que vous consommez.`,
    ],
  },
  {
    titre: 'Le gluten, un poison méconnu',
    contenu: [
      `Au-delà de la maladie cœliaque, le gluten est aujourd'hui identifié comme un déclencheur de démence, d'épilepsie, de dépression et de TDAH. La plupart des gens ne font pas le lien  pourtant, il est direct.`,
    ],
  },
  {
    titre: 'Alzheimer : et si c\'était un diabète de type 3 ?',
    contenu: [
      `Les recherches les plus récentes établissent un lien fort entre la consommation de sucre et de glucides raffinés et le déclin cognitif. Un cerveau constamment exposé à des pics de glycémie s'enflamme, se détériore  et vieillit prématurément.`,
    ],
  },
  {
    titre: 'Les graisses sont vos alliées',
    contenu: [
      `On a diabolisé les graisses pendant des décennies. C'était une erreur. Le cerveau est composé à 60% de graisses. Les bonnes graisses  huile d'olive, avocat, noix, poissons gras  le nourrissent et le protègent. Ce sont les glucides qui l'endommagent.`,
    ],
  },
  {
    titre: 'Le mythe du cholestérol',
    contenu: [
      `Un faible taux de cholestérol est associé à une augmentation du risque de dépression et de troubles cognitifs. Les statines, prescrites massivement, peuvent altérer les fonctions cérébrales. Ce qu'on vous a dit sur le cholestérol mérite d'être remis en question.`,
    ],
  },
  {
    titre: 'Votre cerveau peut se régénérer',
    contenu: [
      `La neurogenèse  la capacité du cerveau à créer de nouveaux neurones  est réelle et possible à tout âge. L'exercice physique, le jeûne intermittent et une alimentation pauvre en glucides stimulent la production de BDNF, la protéine qui favorise cette régénération.`,
    ],
  },
  {
    titre: 'Gluten et enfants',
    contenu: [
      `Le gluten n'affecte pas que les adultes. Des études établissent un lien entre sensibilité au gluten et troubles du comportement, TDAH, autisme et difficultés de concentration chez l'enfant. Retirer le gluten peut, dans certains cas, changer radicalement leur quotidien.`,
    ],
  },
  {
    titre: 'Même si vous vous portez bien',
    contenu: [
      `Vous n'avez pas besoin d'être malade pour agir. Moins de gluten, moins de glucides raffinés  c'est plus d'énergie, un esprit plus clair, et un cerveau qui vieillit mieux.`,
    ],
  },
]

const myths = [
  { myth: 'Le sans gluten, c\'est pour les cœliaques', reality: 'La sensibilité au gluten touche jusqu\'à 10% de la population, souvent sans diagnostic. Les bénéfices vont bien au-delà de la digestion.' },
  { myth: 'C\'est moins bon à manger', reality: 'Farine d\'amande, sarrasin, quinoa, coco... La cuisine sans gluten est riche, variée et délicieuse quand elle est bien faite.' },
  { myth: 'C\'est compliqué au quotidien', reality: 'Il suffit de revenir à l\'essentiel : légumes, viandes, poissons, œufs, légumineuses. La nature est naturellement sans gluten.' },
  { myth: 'C\'est une mode', reality: 'La recherche scientifique sur le lien gluten-cerveau est sérieuse et en plein essor. Des neurologues de renom en font leur cheval de bataille.' },
]

export default function PourquoiSansGluten() {
  return (
    <div style={{ paddingTop: '90px' }}>

      {/* ─── CITATION ─── */}
      <section style={{ backgroundColor: '#f0f8f4', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <blockquote style={{ fontFamily: f, fontWeight: '700', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', color: D, lineHeight: '1.7', margin: '0 0 1.25rem' }}>
            "Le sort de votre cerveau n'est pas écrit dans votre ADN. La dégénérescence n'est pas une fatalité  elle se cache dans la nourriture que vous consommez."
          </blockquote>
          <p style={{ fontFamily: f, fontSize: '0.875rem', color: G, fontWeight: '600', margin: 0 }}> Dr David Perlmutter, neurologue</p>
        </div>
      </section>

      {/* ─── TROUBLES ─── */}
      <section style={{ backgroundColor: D, padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="troubles-grid">
          <div>
            <p style={{ fontFamily: f, fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', marginTop: 0 }}>Êtes-vous concerné(e) ?</p>
            <h2 style={{ fontFamily: f, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '900', color: 'white', margin: '0 0 1.25rem', lineHeight: '1.2' }}>
              Le gluten peut être en cause dans ces troubles
            </h2>
            <p style={{ fontFamily: f, fontSize: '0.9rem', color: 'rgba(255,255,255,0.42)', lineHeight: '1.75', margin: 0 }}>
              Pas besoin d'attendre d'être diagnostiqué. Si vous vous reconnaissez dans l'un de ces symptômes, l'alimentation est souvent la première piste à explorer.
            </p>
          </div>
          <div>
            {troubles.map((t, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '0.9rem 0', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                <span style={{ fontFamily: f, fontSize: '0.65rem', fontWeight: '700', color: 'rgba(255,255,255,0.18)', minWidth: '24px', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: f, fontSize: '0.875rem', color: 'rgba(255,255,255,0.68)', lineHeight: '1.4' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.troubles-grid{grid-template-columns:1fr!important}}`}</style>
      </section>


      {/* ─── FAITS CLÉS ─── */}
      <section style={{ backgroundColor: '#f8fcf9', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: f, fontSize: '0.72rem', fontWeight: '700', color: G, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '2rem', marginTop: 0 }}>Ce que dit la science</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', backgroundColor: 'rgba(0,70,30,0.07)', borderRadius: '10px', overflow: 'hidden' }}>
            {[
              { stat: '60%', label: 'du cerveau est composé de graisses  les bonnes graisses le nourrissent.' },
              { stat: '×3', label: 'le risque de démence est multiplié par 3 chez les gros consommateurs de glucides.' },
              { stat: '10%', label: 'de la population serait sensible au gluten sans le savoir.' },
              { stat: '↑BDNF', label: 'l\'exercice et le jeûne stimulent la protéine qui crée de nouveaux neurones.' },
            ].map(({ stat, label }, i) => (
              <div key={i} style={{ backgroundColor: 'white', padding: '2rem 1.75rem' }}>
                <div style={{ fontFamily: f, fontSize: '2rem', fontWeight: '900', color: G, marginBottom: '0.5rem', lineHeight: 1 }}>{stat}</div>
                <p style={{ fontFamily: f, fontSize: '0.85rem', color: 'rgba(0,23,10,0.55)', lineHeight: '1.6', margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTIONS CONTENU ─── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {sections.map(({ titre, contenu }, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(0,23,10,0.08)', padding: '4rem 0', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }} className="section-row">
              <h3 style={{ fontFamily: f, fontSize: '1.05rem', fontWeight: '800', color: D, margin: 0, lineHeight: '1.35', position: 'sticky', top: '80px' }}>{titre}</h3>
              <div>
                {contenu.map((para, j) => (
                  <p key={j} style={{
                    fontFamily: f,
                    fontSize: '0.95rem',
                    color: para.startsWith('Il se cache') ? G : 'rgba(0,23,10,0.62)',
                    lineHeight: '1.85',
                    margin: j === 0 ? 0 : '1rem 0 0',
                    fontWeight: para.startsWith('Il se cache') ? '700' : '400',
                    fontStyle: para.startsWith('Il se cache') ? 'italic' : 'normal',
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:640px){.section-row{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ─── PROGRAMME 4 SEMAINES ─── */}
      <section style={{ backgroundColor: D, padding: '5rem 1.5rem', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.02)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: f, fontSize: '0.72rem', fontWeight: '700', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', marginTop: 0 }}>Par où commencer ?</p>
            <h2 style={{ fontFamily: f, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', color: 'white', margin: '0 0 0.75rem', lineHeight: '1.1' }}>
              4 semaines pour tout changer
            </h2>
            <p style={{ fontFamily: f, fontSize: '1rem', color: 'rgba(255,255,255,0.5)', margin: 0, maxWidth: '520px', lineHeight: '1.7' }}>
              Le Dr Perlmutter propose un protocole simple en quatre étapes. Pas de régime draconien  juste un changement progressif, pilier par pilier.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }} className="semaines-grid">
            {[
              {
                semaine: 'Semaine 1',
                theme: 'Alimentation',
                desc: 'Supprimer le gluten et les glucides raffinés. Remplir son assiette de légumes, bonnes graisses, protéines de qualité. Faire le tri dans ses placards.',
                actions: ['Retirer pain, pâtes, céréales', 'Ajouter huile d\'olive, avocat, noix', 'Lire les étiquettes'],
              },
              {
                semaine: 'Semaine 2',
                theme: 'Mouvement',
                desc: 'L\'exercice physique stimule la production de BDNF  la protéine de la neurogenèse. 20 à 30 minutes par jour suffisent à relancer le cerveau.',
                actions: ['Marche rapide quotidienne', 'Exercice d\'endurance léger', 'Bouger après les repas'],
              },
              {
                semaine: 'Semaine 3',
                theme: 'Sommeil',
                desc: 'Le cerveau se nettoie, se répare et consolide la mémoire pendant le sommeil. Un bon sommeil régule aussi la leptine  l\'hormone de la satiété.',
                actions: ['Coucher à heure fixe', 'Pas d\'écran avant de dormir', '7 à 8h par nuit'],
              },
              {
                semaine: 'Semaine 4',
                theme: 'Équilibre durable',
                desc: 'Les trois piliers s\'assemblent. Le corps retrouve son rythme naturel. L\'objectif : faire de ce mode de vie une habitude, pas une contrainte.',
                actions: ['Jeûne intermittent facultatif', 'Stimulation intellectuelle', 'Maintenir la cohérence'],
              },
            ].map(({ semaine, theme, desc, actions }, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(0,0,0,0.15)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: f, fontSize: '0.65rem', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.35rem' }}>{semaine}</span>
                  <h3 style={{ fontFamily: f, fontSize: '1.15rem', fontWeight: '900', color: 'white', margin: 0 }}>{theme}</h3>
                </div>
                <p style={{ fontFamily: f, fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', margin: '0 0 1.5rem', flex: 1 }}>{desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {actions.map((a, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '6px' }} />
                      <span style={{ fontFamily: f, fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* ─── IDÉES REÇUES (fusionné) ─── */}
          <div style={{ maxWidth: '900px', margin: '5rem auto 0' }}>
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontFamily: f, fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.75rem', marginTop: 0 }}>Démêlons le vrai du faux</p>
              <h2 style={{ fontFamily: f, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'white', fontWeight: '900', margin: 0 }}>
                Idées reçues & réalités
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', borderRadius: '12px', overflow: 'hidden' }}>
              {myths.map(({ myth, reality }, i) => (
                <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderLeft: `3px solid ${G}` }} className="myth-row">
                  <div>
                    <div style={{ fontFamily: f, fontSize: '0.68rem', color: 'rgba(255,255,255,0.28)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Idée reçue</div>
                    <p style={{ fontFamily: f, fontSize: '0.9rem', color: 'rgba(255,255,255,0.78)', fontStyle: 'italic', margin: 0, lineHeight: '1.5' }}>{myth}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: f, fontSize: '0.68rem', color: G, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Réalité</div>
                    <p style={{ fontFamily: f, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: '1.6' }}>{reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        <style>{`@media(max-width:768px){.semaines-grid{grid-template-columns:1fr 1fr!important} } @media(max-width:480px){.semaines-grid{grid-template-columns:1fr!important}} @media(max-width:640px){.myth-row{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: f, fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', color: D, fontWeight: '900', marginBottom: '0.75rem', marginTop: 0 }}>
            Prêt(e) à passer à l'action ?
          </h2>
          <p style={{ fontFamily: f, fontSize: '0.95rem', color: 'rgba(0,23,10,0.52)', lineHeight: '1.7', marginBottom: '2rem' }}>
            Des recettes simples, savoureuses et sans gluten  pour commencer dès aujourd'hui.
          </p>
          <Link to="/recettes"
            style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: G, color: 'white', padding: '0.875rem 1.75rem', borderRadius: '8px', fontFamily: f, fontSize: '0.95rem', fontWeight: '700', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#003618'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = G}
          >
            Voir les recettes
          </Link>
        </div>
      </section>

    </div>
  )
}
