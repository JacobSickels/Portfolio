import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute 
                    path="/"
                    component={HomePage}
                    exact={true}
                />
                <PublicRoute 
                    path="/projects"
                    component={ProjectsPage}
                    exact={true}
                />
                <PublicRoute 
                    path="/contact"
                    component={ContactPage}
                    exact={true}
                />
                <Route 
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;