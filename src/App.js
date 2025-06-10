import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Preise from './pages/Preise';
import Fotos from './pages/Photos';
import About from './pages/About';
import Footer from './components/Footer';
import AGB from './pages/AGB';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/über-uns" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
         
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
