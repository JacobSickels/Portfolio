import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSlice = () => (
    <div className="projects-slice">
        <div className="container">
            <div className="row">
                <div className="col s12 m6 l6">
                    <h1 className="projects-title">Projects</h1>
                </div>
            </div>
            <div className="row">
                <ProjectCard />
            </div>
        </div>
    </div>
);

export default ProjectsSlice;