import React, { Component } from 'react';
import Input from './common/input';
import Joi, { errors } from 'joi-browser';

class Login_V2 extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
        errors: {
            // username: "Username is required",
            // password: "Password is required"
        }
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    }

    validate = () => {
        const options = { abortEarly: false }
        const result = Joi.validate(this.state.account, this.schema, options);
        if (!result.error) return null;

        const errors = {};
        for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;

        // const { account } = this.state;
        // if (account.username.trim() === "")
        //     errors.username = "Username is required";
        // if (account.password.trim() === "")
        //     errors.password = "Password is required";

        // return Object.keys(errors).length === 0 ? null : errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };

        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;

        // if (name === "username") {
        //     if (value.trim() === '') return "Username is required."
        // }
        // if (name === "password") {
        //     if (value.trim() === '') return "Password is required."
        // }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
    }

    handleChange = ({ currentTarget: input }) => {

        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account: account, errors: errors });
    }

    render() {
        const { account, errors } = this.state;
        return (
            <>
                <h1>Login_V2</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <Input
                            name="username"
                            value={account.username}
                            type="text"
                            label="UserName"
                            onChange={this.handleChange}
                            error={errors.username} />
                    </div>
                    <div className="form-group">
                        <Input
                            name="password"
                            value={account.password}
                            type="text"
                            label="Password"
                            onChange={this.handleChange}
                            error={errors.password} />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}

export default Login_V2;