import React from 'react';
// import profileImage from '../assets/image/profile.jpeg'; // Adjust the path as necessary
import '../styles/about.css';

export default function About() {
  return (
    <main className="wrapper">
      <section className="section" id="about">
        <div className="top-header">
          <h1>About me</h1>
        </div>

        {/* Row now houses both about-info and skills */}
        <div className="row">
          <div className="col">
            <div className="about-info">
              <figure className="about-me">
                <figcaption>
                  <img src="/assets/image/upwork.jpg" alt="Profile" className="profile" />
                  <h1>Web Developer</h1>
                  <p>I am a Full stack web developer learning React</p>
                </figcaption>
              </figure>
              <button className="about-me-btn">Hire Me</button>
            </div>
          </div>

          {/* Skills section inside the same row */}

          <div className="skills">
            <div className="skill-box">
              <span className="title">GIT</span>
              <div className="skill-bar">
                <span className="skill-per git">
                  <span className="tool-tip">95%</span>
                </span>
              </div>
            </div>



            <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tool-tip">90%</span>
                </span>
              </div>
            </div>



            <div className="skill-box">
              <span className="title">PYTHON</span>
              <div className="skill-bar">
                <span className="skill-per python">
                  <span className="tool-tip">85%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">JAVASCRIPT</span>
              <div className="skill-bar">
                <span className="skill-per js">
                  <span className="tool-tip">80%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">CSS</span>
              <div className="skill-bar">
                <span className="skill-per css">
                  <span className="tool-tip">75%</span>
                </span>
              </div>
            </div>



          </div>

        </div>
      </section>
    </main>
  );
}
