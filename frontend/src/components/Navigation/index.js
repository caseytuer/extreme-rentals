import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <div >
                    <div className="login-btn">
                        <NavLink to="/login">Log In</NavLink>
                    </div>
                    <div className="signup-btn">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                </div>
            </>
        );
    }

    return (
        <ul>
            <li>
                <div className="navbar-container">
                    <div className="home-btn">
                        <NavLink exact to="/">Home</NavLink>
                    </div>
                    <div className="login-and-signup-btns">
                        {isLoaded && sessionLinks}
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default Navigation;