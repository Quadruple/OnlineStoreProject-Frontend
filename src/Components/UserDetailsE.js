import React, { Component } from 'react';

import pmanagerService from '../services/pmanager.service'
import userService from '../services/user.service';

class UserDetailsE extends Component {
    constructor(props) {
        super(props);

        

        this.state = {

            name:"xxxx",
            username:"xxxx",
            email:"xxx",
            address:"xxx",
            roles:["xxxx","xxxxxx"]



        };
    }


    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
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
    handleAdressChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }
 

    handleFormSubmit = (event) => {

        console.log("here");
        userService.Update( this.state.name,this.state.email,this.state.address).then(
            () => {
                alert("Changes Applied");

            });
    }

    render() {
        return(
            <div>

                    <h3>Edit Your Details</h3>
                    <label for="name">Full Name:</label>
                    <input type="text" value={this.state.name}name="fullname" onChange={this.handleNameChange}></input><br></br>
                    <label for="username ">username:</label>
                    <input type="text" readOnly={true} value={this.state.username} name="username" onChange={this.handleUsernameChange}></input><br></br>
                    <label for="email">email:</label>
                    <input  type="text" value={this.state.email} name="email" onChange={this.handleEmailChange}></input><br></br>
                    <label for="adress">address:</label>
                    <input  type="text" value={this.state.address} name="address" onChange={this.handleAdressChange}></input><br></br>

                    <label for="price">roles:</label>
                    <input  type="text" readOnly={true} value={this.state.roles} name="roles" ></input><br></br>
                    <br></br>
                        <button onClick={this.handleFormSubmit} class="shopBtn">Update</button>


            </div>)
        }
    }
export default UserDetailsE