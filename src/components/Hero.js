import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import './Hero.css';

function Hero() {
  const typedElement = useRef(null); // Create a reference for the typed element

  useEffect(() => {
    const options = {
      strings: ['Prince Eugene Ofosu', 'A Full Stack Developer', 'A Tech Enthusiast', 'A Problem Solver'],
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed
      loop: true,    // Loop the typing effect boolean
    };

    // Initialize Typed.js on the reference element
    const typed = new Typed(typedElement.current, options);

    // Cleanup the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="wrapper">
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="text-section">
            <div className="hello">
              <p>Heya, I'm</p>
            </div>

            <div className="hero-name">
              {/* Use ref to link the typed text */}
              <span ref={typedElement} className="typedText"></span>
            </div>

            <div className="hero-text-info">
              <p>A web developer with 2+ years of experience</p>
              <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
            </div>

            <div className="hero-text-btn">
              <button className="btn">Explore</button>
              <button className="btn">Resume <i className="uil uil-file"></i></button>
            </div>

            <div className="social-icons">
              <div className="icon"><i className="uil uil-instagram"></i></div>
              <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
              <div className="icon"><i className="uil uil-github-alt"></i></div>
              <div className="icon"><i className="uil uil-twitter-alt"></i></div>
            </div>
          </div>

          <div className="image-section">
            <div className="image">
              <img src="../assets/image/upwork.jpg" alt="hero-logo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
