import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetProjects } from './actions/projects';

import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(startSetProjects()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

