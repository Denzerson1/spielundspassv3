import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/preise" element={<LandingPage />} />
            <Route path="/kontakt" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
