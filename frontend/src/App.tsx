import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Resumes from './components/Experiences/Resumes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resumes" element={<Resumes/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;