
export const fetchUsers = () => {
    return async (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            dispatch({
                type: 'SET_USERS',
                users
            })
        })
    }
}