import "./Navbar.css"
import React from 'react'

export const Navbar = () => {




  return (
    <>

      <nav className="nav-wrapper">
        <div className="nav-content">
            <a href="#"><img class="logo" src="logo.png" alt="upload" /></a>

              <ul>
                <li>
                  <a href="" className="menu-item">Home</a>
                </li> 
                <li>
                  <a href="#about" className="menu-item">About</a>
                </li>
                <li>
                  <a href="#skills" className="menu-item">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="menu-item">Projects</a>
                </li>

                <button className="contact-btn" onClick={() => {}}>
                <a href="#contact" className="menu-item">Contact Me</a>
                </button>

              </ul>

              <button class="menu-btn" onClick={() => {}}>
                <span
                    class={"material-symbols-outlined"}
                    style={{fontsize: "1.8rem"}}
                    >
                </span>
              </button>
        </div>
    </nav>
    </>
  )
}
