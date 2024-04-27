import React from "react"
import "./App.css"
// import Skills from "./components/Navbar/Skills/Skills" 

import { Navbar } from "./components/Navbar/Navbar"
// import Hero from "./components/Navbar/Hero";
import Hero from "./components/Navbar/Hero/Hero"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
      </div>
    </>
  )
}

export default App
