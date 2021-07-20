import { csrfFetch } from "./csrf";

const LOAD = 'rentals/LOAD';


const load = rental => ({
    type: LOAD,
    rental
})


export const getRentals = () => async (dispatch) => {
    const response = await csrfFetch('');

    if (response.ok) {
        const rental = await response.json();
        dispatch(load(rental));
        return rental;
    };
};

export const getRentalById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/rentals/${id}`);

    if (response.ok) {
        const rental = await response.json();
        dispatch(load(rental));
        return rental;
    };
};


const initialState = {};

const rentalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return action.rental; 
        default:
            return state;
    };
};

export default rentalReducer;