import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from '../pages/Home';
import About from '../pages/About';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;