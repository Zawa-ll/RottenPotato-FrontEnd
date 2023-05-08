import React, { Component } from 'react';

const RenderInfo = (props) => {
    return (
        <div>
            Title:<h1>{props.state.title}</h1>
            Director:<h1>{props.state.director}</h1>
        </div>
    );
}

export default RenderInfo;