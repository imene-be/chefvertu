import { useState } from 'react'
import { recettes, categories } from '../data/recettes'

const G = '#00461E'
const D = '#00170A'
const GL = 'rgba(0,70,30,0.07)'
const GB = 'rgba(0,70,30,0.15)'

export default function Recettes() {
  const [activeCategory, setActiveCategory] = useState('Toutes')
  const [selectedRecette, setSelectedRecette] = useState(null)

  const filtered = activeCategory === 'Toutes'
    ? recettes
    : recettes.filter(r => r.categorie === activeCategory)

  return (
    <div style={{ paddingTop: '90px' }}>

      {/* Header + Filter */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid rgba(0,70,30,0.08)', position: 'sticky', top: '72px', zIndex: 30, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.75rem 1.5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: '700', color: G, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 0.35rem' }}>Chef Vertu</p>
              <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '900', color: D, margin: 0 }}>
                Toutes les recettes sans gluten
              </h1>
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(0,23,10,0.35)' }}>
              {filtered.length} recette{filtered.length > 1 ? 's' : ''}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '0',
                  border: 'none',
                  borderBottom: activeCategory === cat ? `2px solid ${G}` : '2px solid transparent',
                  backgroundColor: 'transparent',
                  color: activeCategory === cat ? G : 'rgba(0,23,10,0.45)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: activeCategory === cat ? '700' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  marginBottom: '-1px',
                }}
                onMouseEnter={e => { if (activeCategory !== cat) e.currentTarget.style.color = D }}
                onMouseLeave={e => { if (activeCategory !== cat) e.currentTarget.style.color = 'rgba(0,23,10,0.45)' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '3rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(recette => (
              <RecetteCard
                key={recette.id}
                recette={recette}
                onOpen={() => setSelectedRecette(recette)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedRecette && (
        <RecetteModal
          recette={selectedRecette}
          onClose={() => setSelectedRecette(null)}
        />
      )}
    </div>
  )
}

function RecetteCard({ recette, onOpen }) {
  return (
    <div
      onClick={onOpen}
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        border: `1px solid ${GB}`,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,70,30,0.12)'; e.currentTarget.style.borderColor = G }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = GB }}
    >
      {recette.image ? (
        <div style={{
          height: '200px',
          backgroundImage: `url(${recette.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: `1px solid rgba(0,70,30,0.06)`,
        }} />
      ) : (
        <div style={{
          height: '130px',
          background: `linear-gradient(135deg, rgba(0,70,30,0.06) 0%, rgba(0,70,30,0.02) 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '3.5rem',
          borderBottom: `1px solid rgba(0,70,30,0.06)`,
        }}>
          {recette.emoji}
        </div>
      )}

      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span style={{
            backgroundColor: GL,
            color: G,
            padding: '0.2rem 0.75rem',
            borderRadius: '20px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem',
            fontWeight: '500',
          }}>
            {recette.categorie}
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: recette.difficulte === 'Facile' ? G : D, fontWeight: '500', opacity: 0.7 }}>
            {recette.difficulte}
          </span>
        </div>

        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.15rem', color: D, marginBottom: '0.6rem', marginTop: 0, lineHeight: '1.3' }}>
          {recette.titre}
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: 'rgba(0,23,10,0.5)', lineHeight: '1.6', margin: '0 0 1.25rem' }}>
          {recette.description}
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(0,23,10,0.4)' }}>{recette.temps}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(0,23,10,0.4)' }}>{recette.portions} pers.</span>
        </div>

        <div style={{ borderTop: `1px solid rgba(0,70,30,0.08)`, paddingTop: '0.875rem' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: G, lineHeight: '1.4' }}>{recette.bienfaits}</span>
        </div>
      </div>
    </div>
  )
}

function RecetteModal({ recette, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,23,10,0.7)',
        zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        backdropFilter: 'blur(6px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        maxWidth: '700px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 40px 80px rgba(0,23,10,0.4)',
      }}>
        {/* Header */}
        <div style={{
          padding: '2rem 2rem 1.5rem',
          borderBottom: `1px solid rgba(0,70,30,0.1)`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1,
          borderRadius: '20px 20px 0 0',
        }}>
          <div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.5rem', color: D, marginTop: 0, marginBottom: '0.5rem' }}>
              {recette.titre}
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(0,23,10,0.45)' }}>{recette.temps}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(0,23,10,0.45)' }}>{recette.portions} personnes</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: G }}>{recette.difficulte}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', color: 'rgba(0,23,10,0.4)', flexShrink: 0, fontSize: '1.4rem', lineHeight: 1 }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '2rem' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: 'rgba(0,23,10,0.6)', lineHeight: '1.8', marginTop: 0 }}>
            {recette.description}
          </p>

          {/* Bienfaits */}
          <div style={{ backgroundColor: 'rgba(0,70,30,0.05)', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.5rem', borderLeft: `3px solid ${G}` }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: G, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Bienfaits</span>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: D, marginTop: '0.25rem', marginBottom: 0 }}>{recette.bienfaits}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.1rem', color: D, marginBottom: '1rem', marginTop: 0 }}>Ingrédients</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {recette.ingredients.map((ing, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.6rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(0,23,10,0.65)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: G, flexShrink: 0, marginTop: '6px' }} />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.1rem', color: D, marginBottom: '1rem', marginTop: 0 }}>Préparation</h3>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {recette.etapes.map((step, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.875rem' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      backgroundColor: G, color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: '600',
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(0,23,10,0.65)', lineHeight: '1.6', paddingTop: '2px' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
