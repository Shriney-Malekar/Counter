const initialState = {
    counter: 0,
    results: []
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter, })
            };
        case 'DELETE_RESULT':
            const newResult = state.results.filter(result => result.id !== action.resultElementID);
            return {
                ...state,
                results: newResult
            };
    }
    return state;
}

export default reducer;