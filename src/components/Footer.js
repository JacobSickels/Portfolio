import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <div className="footer">
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Github</a></li>
                            <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
                            <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Resume</a></li>
                            <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Projects</a></li>
                            <li className="footer-link"><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                © 2018 Jacob Sickels
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;