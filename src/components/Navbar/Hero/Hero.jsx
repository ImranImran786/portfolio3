import React from 'react'
import "./Hero.css"


const Hero = () => {
  return <section className="hero-container">
    <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
            passionate Fontend Developer | Transforming Ideas into Seamless 
            and Visually Stunning Web Solutions
        </p>
    </div>


    <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="./sql.png" alt="sql "/>
            </div>
                <img id='programmer' src="./programmer.png" alt="u"/>
        </div>

        <div>
            <div className="tech-icon">
                <img src="./html.png" alt="tech-icon" />
            </div>
            <div className="tech-icon">
                <img src="./css.png" alt="tech-icon" />
            </div>
            <div className="tech-icon">
                <img src="./java.png" alt="tech-icon" />
            </div>
            <div className="tech-icon">
                <img src="./sql.png" alt="tech-icon" />
            </div>
            <div className="tech-icon">
                <img src="./php.png" alt="tech-icon" />
            </div>
        </div>

    </div>
    </section>
  
}

export default Hero