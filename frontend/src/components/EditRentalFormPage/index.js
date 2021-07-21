import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import * as rentalActions from "../../store/rentals";
import * as imageActions from "../../store/images";
import { useHistory, useParams } from "react-router-dom";
import { getRentals } from "../../store/rentals";
import { getImages } from "../../store/images";
import { editRental } from "../../store/rentals";


const EditRentalForm = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const sessionUser = useSelector((state) => state.session.user);
    const currentRental = useSelector(state => state.rentals[id]);

    console.log(currentRental)

    const [address, setAddress] = useState(currentRental?.address);
    const [city, setCity] = useState(currentRental?.city);
    const [state, setState] = useState(currentRental?.state);
    const [country, setCountry] = useState(currentRental?.country);
    const [lat, setLat] = useState(currentRental?.lat);
    const [lng, setLng] = useState(currentRental?.lng);
    const [name, setName] = useState(currentRental?.name);
    const [description, setDescription] = useState(currentRental?.description);
    const [price, setPrice] = useState(currentRental?.price);
    const [errors, setErrors] = useState([]);
    const [userId, setUserId] = useState(sessionUser?.id);
    // const [imgUrl, setImgUrl] = useState(currentRental?.);



    useEffect(() => {
        dispatch(getRentals());
    }, [dispatch])

    console.log(currentRental)

    const handleSubmit = (e) => {
        e.preventDefault();
        const edited = dispatch(editRental(currentRental))
        if (edited) {
            history.push(`/rentals/${currentRental?.id}`);
        }
    }
   

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const rentalEdited = dispatch(rentalActions.editRental({
    //         userId,
    //         address,
    //         city,
    //         state,
    //         country,
    //         lat,
    //         lng,
    //         name,
    //         description,
    //         price
    //     }))
    //         .catch(async (res) => {
    //             const data = await res.json();
    //             if (data && data.errors) setErrors(data.errors);
    //         });

    //     if (rentalEdited) {
    //         history.push(`/`)
    //     }

    // }


    return (
        <div id="signup-form-container">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="signup-container">
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.address}
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.city}
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.state}
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.country}
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.lat}
                                type="text"
                                value={lat}
                                onChange={(e) => setLat(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.lng}
                                type="text"
                                value={lng}
                                onChange={(e) => setLng(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.name}
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.description}
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder={currentRental?.price}
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    {/* <div className="signup-field">
                        <label>
                            <input
                                className="form-input"
                                placeholder="Image URL"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </label>
                    </div> */}
                    <div className="signup-field signup-btn">
                        <button className="form-btn" type="submit">Edit Rental</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditRentalForm;