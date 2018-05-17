import React from 'react';

export const Education = () => (  
    <div className="education-slice">
        <div className="container">
            <div className="row">
                <div className="col s12 m8 l8">
                    <h1 className="education-title">Education</h1>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6 l4 offset-m6 offset-l8">
                    <img className="education-logo" src="./images/CarrollLogo.svg"  alt="Carroll University" />
                </div>
            </div>
            <div className="row education-content">
                <div className="col s12 m8 l8">
                    <h3 className="content--title">B.S. Computer Science</h3>
                    <p><em> Emphasis in Software Engineering</em></p>
                    <p className="content--minor">Minor in Graphic Design</p>  
                </div>
            </div>
        </div>
    </div>
);

export default Education;
