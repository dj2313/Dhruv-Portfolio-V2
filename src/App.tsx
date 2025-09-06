import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './styles/animations.css';
import "@fontsource/playfair-display"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-slate-900">
            <Header />
            <Hero />
            <About />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;