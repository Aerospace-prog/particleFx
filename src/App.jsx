import { Routes, Route } from 'react-router-dom';
import ParticleApp from './components/ParticleApp';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Features from './components/Features';
import Docs from './components/Docs';
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<ParticleApp />} />
          <Route path="/features" element={<Features />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}

export default App;
