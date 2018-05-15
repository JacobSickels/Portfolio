import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        <div>
            <Header />
            <div className="component">
                <Component {...props} />
            </div>
            <Footer />
        </div>
    )}/>
);


export default PublicRoute;