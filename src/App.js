import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UpbuttonPage from './components/UpbuttonPage';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <UpbuttonPage/>
    </div>
  );
};

export default App;
