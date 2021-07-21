import { csrfFetch } from "./csrf";

const ADD_IMAGE = 'image/AddImage';
const SET_IMAGES = 'images/SetImages';

const setImages = (images) => ({
    type: SET_IMAGES,
    images
})

const addImage = (image) => ({
    type: ADD_IMAGE,
    image
})

export const addNewImage = data => async (dispatch) => {
    const response = await csrfFetch('/api/images', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(addImage(image));
        return image
    }

}


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