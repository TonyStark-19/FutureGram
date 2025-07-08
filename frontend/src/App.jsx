import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Header from './components/header';
 import LetterPage from './pages/letter';
// import SuccessPage from './pages/SuccessPage';

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen">
      {/* Header will show on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/letter" element={<LetterPage />} />
        {/*<Route path="/success" element={<SuccessPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
