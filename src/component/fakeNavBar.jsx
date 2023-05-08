import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const FakeNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-item nav-link" to="/searchbar">Searching</NavLink>
                    <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-item nav-link" to="/Register">Register</NavLink>

                </div>
            </div>
        </nav>
    );
}

export default FakeNavBar;