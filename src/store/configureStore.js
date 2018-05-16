import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import projectsReducer from '../reducers/projects';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
