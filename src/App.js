import Homepage from './components/Homepage';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Section section="proj" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
