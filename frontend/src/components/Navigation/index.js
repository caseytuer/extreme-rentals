import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SearchBar from './SearchBar';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div id="new-rental-btn-container">
                    <NavLink id="new-rental-btn" className="login-btn" to="/rentals/new">become an extremist</NavLink>
                </div>
                <div>
                    <ProfileButton  user={sessionUser} />
                </div>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <div className="login-btn">
                    <NavLink to="/login">Log In</NavLink>
                </div>
                <div className="login-btn">
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </>
        );
    }

    return (
        <div id="navbar-ul-container">
            <ul>
                <li>
                    <div className="navbar-container">
                        <div className="home-btn">
                            <NavLink exact to="/home" >
                                <img className="logo-img" src="https://extreme-rentals.s3.us-west-1.amazonaws.com/61749a99a9424c2f9cdb2bb84536a639.png" alt=""></img>
                            </NavLink>
                        </div>
                        <div id="find-the-extreme-btn">
                            🔬 find the extreme 🛸
                            {/* <img id="find-the-extreme" src="https://vectr.com/tmp/b1LGYBTS5f/a5B7Xq7AW.svg?width=640&height=640&select=a5B7Xq7AWpage0" alt="find the extreme"></img> */}
                            {/* <SearchBar /> */}
                        </div>
                        <div className="login-and-signup-btns">
                            {isLoaded && sessionLinks}
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    );
}

export default Navigation;