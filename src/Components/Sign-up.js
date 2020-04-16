import React, { Component } from 'react'
import '../StyleSheets/main.css'
import '../StyleSheets/util.css'

class Sign_up extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email:'',
            password: '',
            password2: ''
        }
    }

    // Convert to 32bit integer 


    validateEmail = (email) => {
        var validateRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validateRegex.test(String(email).toLowerCase());
    }
    passwordcheck=(password,password2)=>
    {
        if(password==password2)
        {return true}
        else{return false}


    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handlePassword2Change = (event) => {
        this.setState({
            password2: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        if (!this.validateEmail(this.state.email))
        {
            alert("Enter a correct format email!");
        }
        else 
{
            if( this.passwordcheck(this.state.password,this.state.password2))
            {
            alert(`${this.state.username} ${this.state.password}` );
            }
            else{alert("Passwords don't match");}

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
                                Sign Up
					        </span>

                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="text" name="username" placeholder="Username" onChange={this.handleEmailChange}></input>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="text" name="email" placeholder="Email" onChange={this.handleEmailChange}></input>
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


                            <div class="wrap-input100 validate-input" >
                                <input class="input100" type="password" name="pass2" placeholder="Re-Enter Password" onChange={this.handlePassword2Change}></input>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="container-login100-form-btn">
                                <button type="submit" class="login100-form-btn">
                                    Sign up
						        </button>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sign_up
