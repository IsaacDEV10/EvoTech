import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';




const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills/>
        <Project/>
        <Sobre/>
      </div>
      <Footer/>
    </>
  );
}

export default App;