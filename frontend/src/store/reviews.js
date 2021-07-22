import { csrfFetch } from "./csrf";

const ADD_REVIEW = 'reviews/ADD_REVIEW';
const SET_REVIEWS = 'reviews/SET_REVIEWS';

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    reviews
})

export const createReview = data => async (dispatch) => {
    const response = await csrfFetch('/api/reviews/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const review = await response.json();
        dispatch(addReview(review));
        return review;
    }
}

export const getReviews = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews');
    const reviews = await response.json();
    dispatch(setReviews(reviews));
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const newState = {...state};
            const newReview = action.review;
            newState[newReview.review.id] = {
                id: newReview.review.id,
                userId: newReview.review.userId,
                rentalId: newReview.review.rentalId,
                review: newReview.review.reviewBody
            };
            return newState;
        case SET_REVIEWS:
            return { ...state, ...Object.fromEntries(action.reviews.map((review) => [review.id, review]))};
        default:
            return state;
    }
}

export default reviewsReducer;