import React from 'react';
import Row from './components/Row';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Row isLarge name="Now Playing"/>
      <Row name="Popular"/>
      <Row name="Top Rated"/>
      <Row name="Up Coming"/>
      <Footer />
    </div>
  );
}

export default App;
