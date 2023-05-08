import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/fetchtesting">Fetch Testing</Link>
                </li>
                <li>
                    <Link to="/searchbar">Serach Bar</Link>
                </li>
                <li>
                    <Link to="/loginform">LOGIN FORM</Link>
                </li>
                <li>
                    <Link to="/display">Display</Link>
                </li>
                <li>
                    <Link to="/login_v2">Login_V2</Link>
                </li>
                <li>
                    <Link to='/login3'>LOGIN_REAL</Link>
                </li>
                <li>
                    <Link to='/registerform'>REGISTER_REAL</Link>
                </li>
            </ul>
        </div>
    );
};




export default NavBar;