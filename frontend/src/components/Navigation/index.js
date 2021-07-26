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
                <div>
                    <NavLink className="login-btn" to="/rentals/new">become an extremist</NavLink>
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
                <div className="signup-btn">
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
                                <img className="logo-img" src="https://i.ibb.co/DQ5q7yH/logo.png" alt=""></img>
                            </NavLink>
                        </div>
                        <div >
                            <SearchBar />
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