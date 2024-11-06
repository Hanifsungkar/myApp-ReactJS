import { createStore } from 'redux';

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


const store = createStore(counter)

export default store