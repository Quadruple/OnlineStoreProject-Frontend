import React, { Component } from 'react'
import '../StyleSheets/main.css'
import '../StyleSheets/util.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    validateEmail = (email) => {
        var validateRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validateRegex.test(String(email).toLowerCase());
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        if (!this.validateEmail(this.state.username))
        {
            alert("Enter a correct format email!");
        }
        else 
        {
            alert(`${this.state.username} ${this.state.password}`);
        }
        
        event.preventDefault();
    }

    render() {
        return (
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={require("../images/img-01.png")} alt="IMG"></img>
                        </div>

                        <form class="login100-form validate-form" onSubmit={this.handleFormSubmit}>
                            <span class="login100-form-title">
                                Member Login
					        </span>

                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="text" name="email" placeholder="Email" onChange={this.handleUsernameChange}></input>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange}></input>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button type="submit" class="login100-form-btn">
                                    Login
						        </button>
                            </div>

                            <div class="text-center p-t-12">
                                <span class="txt1">
                                    Forgot 
						        </span>
                                <a class="txt2" href="#">
                                    Username / Password?
						        </a>
                            </div>

                            <div class="text-center p-t-136">
                                <a class="txt2" href="#">
                                    Create your Account
							        <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login