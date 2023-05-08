import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import DetailPage from './detailPage';

const DetailsButton = (props) => {
    return (
        <div>
            <button className='btn btn-primary' onClick={props.detailClick}>
                Details{/* <Redirect to="/detailPage"></Redirect> */}
            </button>
        </div>
    );
}

export default DetailsButton;