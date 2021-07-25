import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className="dropdown-btn-container">
            <button onClick={openMenu} className="profile-btn">
                <img src="https://extreme-rentals.s3.us-west-1.amazonaws.com/imageedit_5_8587382554_adobespark.png" alt="avatar" className="logo-img"></img>
            </button>
            {showMenu && (
                <div className="profile-dropdown-container">
                    <ul className="profile-dropdown">
                        <li className="profile-dropdown-content">{user.username}</li>
                        <li className="profile-dropdown-content">{user.email}</li>
                        <li className="profile-dropdown-content">
                            <button className="demo-btn" onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProfileButton;