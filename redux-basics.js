const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...store,
            counter: state.counter ++
        };
    } 
    
    if (action.type === 'ADD_COUNTER') {
        return {
            ...store,
            counter: state.counter + 10
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('[]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER'}, value: 10);