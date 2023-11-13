import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from '../pages/Home';
import About from '../pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
