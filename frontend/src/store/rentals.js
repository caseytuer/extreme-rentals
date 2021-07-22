import { csrfFetch } from "./csrf";

const SET_RENTAL = 'rentals/SET_RENTAL';
const SET_RENTALS = 'rentals/SET_RENTALS';
const ADD_RENTAL = 'rentals/RENTAL';
const DELETE_RENTAL = 'rentals/DELETE';
const UPDATE_RENTAL = 'rentals/UPDATE';

const setRental = (rental) => ({
    type: SET_RENTAL,
    rental
})

const setRentals = (rentals) => ({
    type: SET_RENTALS,
    rentals
})

const addRental = (rental) => ({
    type: ADD_RENTAL,
    rental,
});

const deleteRental = (rentalId) => ({
    type: DELETE_RENTAL,
    rentalId
})

const updateRental = (rental) => ({
    type: UPDATE_RENTAL,
    rental
})


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

export const editRental = (rental) => async (dispatch) => {
    const { userId, address, city, state, country, lat, lng, name, description, price } = rental;
    const response = await csrfFetch(`/api/rentals/${rental.id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId, address, city, state, country, lat, lng, name, description, price })
    });
    if (response.ok) {
        // console.log(rental)
        const updatedRental = await response.json();
        console.log(updatedRental)
        dispatch(updateRental(updatedRental));
        return updatedRental;
    }
}

export const cancelRental = (rentalId) => async (dispatch) => {
    const response = await csrfFetch(`/api/rentals/${rentalId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        const rentalId = await response.json();
        return dispatch(deleteRental(rentalId.rentalId));
    };
}


const initialState = {};

const rentalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RENTAL:
            var newState = {...state};
            const newRental = action.rental;
            newState[newRental.rental.id] = {
                id: newRental.rental.id,
                userId: newRental.rental.userId,
                address: newRental.rental.adress,
                city: newRental.rental.city,
                state: newRental.rental.state,
                country: newRental.rental.country,
                lat: newRental.rental.lat,
                lng: newRental.rental.lng,
                name: newRental.rental.name,
                description: newRental.rental.description,
                price: newRental.rental.price
            };
            return newState;
        case SET_RENTALS:
            return { ...state, ...Object.fromEntries(action.rentals.map((rental) => [rental.id, rental])) };
        case DELETE_RENTAL:
            var newState = { ...state }
            delete newState[action.rentalId]
            return newState;
        case UPDATE_RENTAL: {
            return {
                ...state,
                [action.rental?.updatedRental.id]: {
                    ...action.rental.updatedRental
                }
            }
        }
        default:
            return state;
    };
};

export default rentalsReducer;