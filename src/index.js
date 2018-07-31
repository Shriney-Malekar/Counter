import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/Reducer';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';\

// Middleware
const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));
// here applyMiddleware(logger) in the above createStore() function called Enhancer

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
