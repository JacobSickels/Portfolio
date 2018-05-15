import React from 'react';

const ProjectCard = () => (
    <div className="col s12 m3">
        <div className="card">
            <div className="card-image">
                <img src="images/favicon.png" />
                <span className="card-title">Card Title</span>
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
        </div>
    </div>
);

export default ProjectCard;