import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: '' },
        errors: {},
    };

    schema = {
        username: Joi.string()
            .required()
            .email()
            .label('Username'),
        password: Joi.string()
            .required()
            .min(5)
            .label('Password'),
        name: Joi.string()
            .required()
            .label('Name'),
    }

    doSubmit = () => {
        console.log('Submitted');
    }

    render() {
        return (
            <>
                <h2>Register Form</h2>
                <form onSubmit={this.doSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password')}
                    {this.renderInput('name', 'Name')}
                    {this.renderButton('Register')}
                </form>
            </>
        );
    }
}

export default RegisterForm;