import React, { Component, useState } from 'react';

class Register extends Component {
    state = {
        userId: "",
        userName: "",
        passWord: "",
        firstName: "",
        lastName: ""
    }

    inputUserId = (val) => {
        let userId = { ...this.state.userId };
        userId = val.target.value;
        this.setState({ userId: userId });
    }

    inputUserName = (val) => {
        let userName = { ...this.state.userName };
        userName = val.target.value;
        this.setState({ userName: userName })
    }

    inputPassword = (val) => {
        let passWord = { ...this.state.passWord };
        passWord = val.target.value;
        this.setState({ passWord: passWord })
    }

    inputFirstName = (val) => {
        let firstName = { ...this.state.firstName };
        firstName = val.target.value;
        this.setState({ firstName: firstName })
    }

    inputLastName = (val) => {
        let lastName = { ...this.state.lastName };
        lastName = val.target.value;
        this.setState({ lastName: lastName })
    }

    onPost = (state) => {
        fetch("http://localhost:9201/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userId": state.userId,
                "username": state.userName,
                "password": state.passWord,
                "firstname": state.firstName,
                "lastname": state.lastName
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // onPost = (state) => {
    //     console.log({ state });
    // }
    handleSubmit = () => {
        this.onPost(this.state);
    }

    render() {
        return (
            <>
                <h1>Register Page</h1>
                <div>
                    UserId: <input onChange={this.inputUserId}></input>
                    UserName: <input onChange={this.inputUserName}></input>
                    PassWord: <input onChange={this.inputPassword}></input>
                    FirstName: <input onChange={this.inputFirstName}></input>
                    LastName: <input onChange={this.inputLastName}></input>
                    <button
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </>

        );
    }
}

export default Register;
