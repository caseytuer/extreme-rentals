import { csrfFetch } from "./csrf";

const SET_USERS = 'users/setUsers';

const setUsers = (users) => ({
    type: SET_USERS,
    users,
})

export const getUsers = () => async (dispatch) => {
    const res = await csrfFetch('/api/users');
    const users = await res.json();
    dispatch(setUsers(users));
}

const initialState = {};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, ...Object.fromEntries(action.users.map((user) => [user.id, user])) };
        default: 
        return state;
    };
};

export default usersReducer;