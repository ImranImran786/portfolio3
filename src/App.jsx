import React from "react"
import "./App.css"
// import Skills from "./components/Navbar/Skills/Skills" 

import { Navbar } from "./components/Navbar/Navbar"
// import Hero from "./components/Navbar/Hero";
import Hero from "./components/Navbar/Hero/Hero"
import WorkExperience from "./components/Navbar/WorkExperience/WorkExperience"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <WorkExperience/>
      </div>
    </>
  )
}

export default App
