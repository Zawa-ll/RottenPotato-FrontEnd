import React, { Component } from 'react';
import Joi from 'joi-browser'
import Form from './common/form';

class LoginForm3 extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        console.log('Submitted');
    }

    render() {
        return (
            <div>
                <h1>Login_REAL</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm3;