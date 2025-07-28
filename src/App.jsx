import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PaquimetroService from './pages/services/PaquimetroService';
import MicrometroService from './pages/services/MicrometroService';
import IndustrialService from './pages/services/IndustrialService';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/servicos/paquimetros" element={<PaquimetroService />} />
            <Route path="/servicos/micrometros" element={<MicrometroService />} />
            <Route path="/servicos/equipamentos-industriais" element={<IndustrialService />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

