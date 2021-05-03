import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../utils/_Data';
import Footer from "./Footer";

class Projects extends Component {
    render () {
        return (
            <div className="projects-container">
                <div className="projects-container-header">
                    A list of my best projects so far
                </div>
                {
                    Object.keys (projects).map ((pid) => {
                        return (
                            <div key={pid} className="projects-item">
                                <ProjectCard 
                                    name={projects[pid].name}
                                    img={projects[pid].img}
                                    descriptionArray={projects[pid].description}
                                    githubLink={projects[pid].github} 
                                />
                            </div>
                        )
                    })
                }
                <Footer />
            </div>
        )
    }
}

export default Projects;