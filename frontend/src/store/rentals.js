import { csrfFetch } from "./csrf";

const SET_RENTALS = 'rentals/SetRentals';
const ADD_RENTAL = 'rentals/RENTAL';


const setRentals = (rentals) => ({
    type: SET_RENTALS,
    rentals
})

const addRental = rental => ({
    type: ADD_RENTAL,
    rental,
});

export const createRental = data => async (dispatch) => {
    const response = await csrfFetch('/api/rentals/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const rental = await response.json();
        dispatch(addRental(rental));
        return rental
    }


}


export const getRentals = () => async (dispatch) => {
    const res = await csrfFetch('/api/rentals');
    const rentals = await res.json();
    dispatch(setRentals(rentals));
};

export const getRentalById = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/rentals/${id}`);

    if (response.ok) {
        const rental = await response.json();
        dispatch(setRentals(rental));
        return rental;
    };
};


const initialState = {};

const rentalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RENTALS:
            return { ...state, ...Object.fromEntries(action.rentals.map((rental) => [rental.id, rental])) };
        default:
            return state;
    };
};

export default rentalsReducer;