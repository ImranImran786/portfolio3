import React from "react"
import "./App.css"
// import Skills from "./components/Navbar/Skills/Skills" 

import { Navbar } from "./components/Navbar/Navbar"
// import Hero from "./components/Navbar/Hero";
import Hero from "./components/Navbar/Hero/Hero"
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <About />
        <Skills />
        <Projects />
			  <Contact />
        <Footer />
        
      </div>
    </>
  )
}

export default App
