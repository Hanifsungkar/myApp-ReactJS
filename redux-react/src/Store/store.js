import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const initialState = {
    counter: 0
}

const doCounter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 }
        case "DECREMENT":
            return { counter: state.counter - 1 }
        default:
            return state
    }
}


const store = createStore(doCounter, applyMiddleware(logger))

export default store