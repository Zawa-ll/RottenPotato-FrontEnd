import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Center from './Center';


class Login extends Component {
    state = {
        userName: "",
        passWord: "",
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

    onGet = () => {
        return (
            fetch("http://localhost:9201/users")
                .then(res => res.json())
                .then(data => console.log(data))
        )
    }

    onLogin = (path) => {
        return (
            fetch("http://localhost:9201/users/username" + path)
                .then(res => res.json())
                .then(data => !(data.length === 0) ? window.location = "/center" : window.alert("Failed to login")))
    }

    handleLogin = () => {
        const { userName, passWord, lastName } = this.state;
        let path = "?username=" + userName + "&password=" + passWord + "&lastname=" + lastName;
        // return this.onLogin(path);
        return this.onLogin(path);
    }

    render() {
        return (
            <>
                <h1>Login Page</h1>
                <div>
                    UserName: <input onChange={this.inputUserName}></input>
                    PassWord: <input onChange={this.inputPassword}></input>
                    LastName: <input onChange={this.inputLastName}></input>
                </div>
                <button onClick={this.handleLogin} >Login</button>
            </>
        );
    }
}

export default Login;