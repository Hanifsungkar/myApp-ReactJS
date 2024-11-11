import { createStore, applyMiddleware} from 'redux';
import { fetchUsers } from '../store/action';
import { thunk } from 'redux-thunk';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return { users: action.users }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store