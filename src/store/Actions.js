export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (val) => {
    return {
        type: ADD,
        value: val
    };
};

export const sub = (val) => {
    return {
        type: SUB,
        value: val
    };
};

export const storeResult = () => {
    return {
        type: STORE_RESULT
    };
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElementID: id
    };
};