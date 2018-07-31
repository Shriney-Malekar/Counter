import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
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

// Store
const store = createStore(reducer, applyMiddleware(logger));
// here applyMiddleware(logger) in the above createStore() function called Enhancer

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
