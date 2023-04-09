import Homepage from './components/Homepage';
import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Section section="proj" startNum={0} />} />
            <Route path="/contact" element={<Section section="cont" startNum={100} />} />
            <Route path="/about" element={<Section section="about" startNum={200} />} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
