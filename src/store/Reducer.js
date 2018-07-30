import * as actionTypes from './Actions';

const initialState = {
    counter: 0,
    results: []
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: state.counter, })
            };
        case actionTypes.DELETE_RESULT:
            const newResult = state.results.filter(result => result.id !== action.resultElementID);
            return {
                ...state,
                results: newResult
            };
    }
    return state;
}

export default reducer;