import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-materialize';

export const Social = () => (
    <header className="social">
        <Container>
            <div className="row">
                <div className="col s4">
                    <a href="./res/JacobSickelsResume.pdf">
                        <i className="material-icons">description</i>
                        <div><p>Resume</p></div>
                    </a>
                </div>
                <div className="col s4">
                    <a href="https://github.com/JacobSickels">
                        <img src="./images/Github.svg" alt="Github"/>
                        <div><p>Github</p></div>
                    </a>
                </div>
                <div className="col s4">
                    <a href="https://www.linkedin.com/in/jacob-sickels-b29368a7/">
                        <img src="./images/LinkedIn.svg" alt="LinkedIn"/>
                        <div><p>LinkedIn</p></div>
                    </a>    
                </div>
            </div>
        </Container>
    </header>
);

export default Social;