import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import HamburgerMenu from './components/hamburger';

import NounsPage from './pages/nouns';
import DefPage from './pages/definitive';
import PosPage from './pages/possession';

function App() {

  return (
    <div className="App relative min-h-screen">
      <header className="App-header">
        <Router>
          <div className="absolute top-4 left-4">
            <HamburgerMenu />
          </div>
          <Routes>
            <Route path="/nouns" element={<NounsPage />} />
            <Route path="/definitive" element={<DefPage />} />
            <Route path="/possession" element={<PosPage />} />
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
