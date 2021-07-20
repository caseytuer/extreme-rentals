import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
// import { createRental } from "../../store/rentals";


function NewRentalForm() {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);
    const [userId, setUserId] = useState('');

    // setUserId(sessionUser)
    // console.log(sessionUser)


    const handleSubmit = (e) => {
        e.preventDefault();
        
            return dispatch(sessionActions.createRental({ 
                userId,
                address,
                city,
                state, 
                country,
                lat,
                lng,
                name,
                description,
                price
             }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
    

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
                                placeholder="Address"
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
                                placeholder="City"
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
                                placeholder="State"
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
                                placeholder="Country"
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
                                placeholder="Latitude"
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
                                placeholder="Longitude"
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
                                placeholder="Item Name"
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
                                placeholder="Description"
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
                                placeholder="Price Per Day"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="signup-field signup-btn">
                        <button className="form-btn" type="submit">Post Rental</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewRentalForm;