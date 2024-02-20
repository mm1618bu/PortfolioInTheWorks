// src/App.js

import React from 'react';
import Gallery from './Gallery';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <Gallery />
      <Footer />
    </div>

  );
}

export default App;
