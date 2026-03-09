import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PourquoiSansGluten from './pages/PourquoiSansGluten'
import Recettes from './pages/Recettes'
import MentionsLegales from './pages/MentionsLegales'

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pourquoi-sans-gluten" element={<PourquoiSansGluten />} />
            <Route path="/recettes" element={<Recettes />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
