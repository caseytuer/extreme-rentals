import { csrfFetch } from "./csrf";

const SET_IMAGES = 'images/SetImages';

const setImages = (images) => ({
    type: SET_IMAGES,
    images
})


export const getImages = () => async (dispatch) => {
    const res = await csrfFetch('/api/images');
    const images = await res.json();
    dispatch(setImages(images));
};


const initialState = {};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return { ...state, ...Object.fromEntries(action.images.map((image) => [image.id, image])) };
        default:
            return state;
    };
};

export default imagesReducer;