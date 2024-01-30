import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage/HomePage';
import OurTeamPage from './components/OurTeam/OurTeamPage';
import PoetryPage from './components/Poetry/PoetryPage';
import DetailsPage from './components/OurTeam/DetailsPage';
import ShortStoriesPage from './components/ShortStoriesPage';

function App() {
  return (
    <Router>
      {/* #1A1F33 */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#1A1F33', color: 'white' }}>
        <Header />
        <Routes style={{ flex: 1 }}>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<OurTeamPage />} />
          <Route path="/poetry" element={<PoetryPage />} />
          <Route path="/short-stories" element={<ShortStoriesPage />} />
          <Route path="/details/:year" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
