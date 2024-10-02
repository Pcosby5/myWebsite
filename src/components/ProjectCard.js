import React from 'react';
import '../styles/project.css'

const ProjectCard = () => {
  return (
    <main className="wrapper">
        <section className="section" id="projects">
            <div className="top-header">
                <h1>Projects</h1>
            </div>

            <div className="project-container">
                <div className="project-box">
                    <i className="uil-briefcase-alt"></i>
                    <h3>Completed</h3>
                    <label>20+ Finished Projects</label>
                </div>

                <div className="project-box">
                    <i className="uil-users-alt"></i>
                    <h3>Clients</h3>
                    <label>30+ Happy clients</label>
                </div>

                <div className="project-box">
                    <i className="uil-briefcase-alt"></i>
                    <h3>Experience</h3>
                    <label>2+ years of Experience</label>
                </div>

            </div>

        </section>
    </main>
  );
}

export default ProjectCard;
