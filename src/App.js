import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/preise" element={<LandingPage />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
