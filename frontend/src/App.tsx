import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Resumes from './components/Experiences/Resumes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resumes" element={<Resumes/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
