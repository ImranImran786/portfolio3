// import React, { useState } from 'react'
import "./Navbar.css"
import React from 'react'
// import { MobileNav } from './MobileNav/MobileNav';

export const Navbar = () => {

  // const [openMenu, setOpenMenu] = useState(false);
  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };



  return (
    <>

    {/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> */}



      <nav className="nav-wrapper">
        <div className="nav-content">
            <img src="" alt="upload" />

              <ul>
                <li>
                  <a href="https://www.youtube.com/results?search_query=portfolio+react+project+with+source+code" className="menu-item">Home</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=portfolio+react+project+with+source+code" className="menu-item">Skills</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=portfolio+react+project+with+source+code" className="menu-item">Work Experience</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=portfolio+react+project+with+source+code" className="menu-item">Contact Me</a>
                </li>

                <button className="contact-btn" onClick={() => {}}>
                  Hire Me
                </button>

              </ul>

              {/* <button class="menu-btn" onClick={toggleMenu}> */}
              <button class="menu-btn" onClick={() => {}}>
                <span
                    class={"material-symbols-outlined"}
                    style={{fontsize: "1.8rem"}}
                    >
                      {/* {openMenu ? "close" : "menu"} */}
                </span>
              </button>
        </div>
    </nav>
    </>
  )
}
