import { csrfFetch } from "./csrf";

const ADD_REVIEW = 'reviews/ADD_REVIEW';
const SET_REVIEW = 'reviews/SET_REVIEWS';
const SET_REVIEWS = 'reviews/SET_REVIEWS';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

const setReview = (reviewId) => ({
    type: SET_REVIEW,
    reviewId
})

const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    reviews
})

const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const deleteReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
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

export const getReviewById = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    
    if (res.ok) {
        const review = await res.json();
        dispatch(setReview(review));
        return review;
    };
};

export const getReviews = () => async (dispatch) => {
    const response = await csrfFetch('/api/reviews');
    const reviews = await response.json();
    dispatch(setReviews(reviews));
}

export const editReview = (review) => async (dispatch) => {
    const { userId, rentalId, reviewBody } = review;
    const response = await csrfFetch(`/api/reviews/${review?.id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId, rentalId, reviewBody })
    })
    if (response.ok) {
        const updatedReview = await response.json();
        dispatch(updateReview(updatedReview));
        return updatedReview;
    }
}

export const destroyReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });
    if (response.ok) {
        await response.json();
        return dispatch(deleteReview(reviewId));
    }
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            var newState = {...state};
            const newReview = action.review;
            newState[newReview.review.id] = {
                id: newReview.review.id,
                userId: newReview.review.userId,
                rentalId: newReview.review.rentalId,
                reviewBody: newReview.review.reviewBody
            };
            return newState;
        // case SET_REVIEW:
        //     return { ...state, [action.review]: review  }
        case SET_REVIEWS:
            return { ...state, ...Object.fromEntries(action.reviews.map((review) => [review.id, review]))};
        case UPDATE_REVIEW: {
            return {
                ...state,
                [action.review?.updatedReview.id]: {
                    ...action.review.updatedReview
                }
            }
        }
        case DELETE_REVIEW:
            var newState = { ...state }
            delete newState[action.reviewId]
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;