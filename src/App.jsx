// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./assets/components/Navbar.jsx";
import AboutPage from './assets/components/AboutPage.jsx';
import Banner from "./assets/components/Banner";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import CivicsApp from './assets/components/CivicsApp.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/civics-app" element={<CivicsApp/>} />
      </Routes>
    </div>
  );
}

export default App;

