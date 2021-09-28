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
        <>
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
            <div className="footer-container">

                <div className="developer-links">
                    Developer:
                    <a href='https://github.com/caseytuer'>
                        <i className='fab fa-github dev-link'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/caseytuer/'>
                        <i className='fab fa-linkedin dev-link'></i>
                    </a>
                    <a href='mailto:caseytuer@gmail.com'>
                        <i class="far fa-envelope dev-link"></i>
                    </a>
                    {/* <a href="https://docs.google.com/document/d/19G2Hf9_OyJj0ctKjRYIPijYRTgtabvW38xY505J47q4/edit?usp=sharing" className="dev-link">Resume</a> */}
                </div>
                <div className="developer-links">
                    Project: 
                    <a href='https://github.com/caseytuer/extreme-rentals'>
                        <i className='fab fa-github dev-link'></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navigation;