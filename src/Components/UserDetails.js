import React, { Component } from 'react';

import pmanagerService from '../services/pmanager.service'

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




    render() {
        return(
            <div>

                    <h3>Your Details</h3>
                    <label for="name">Full Name:</label>
                    <input type="text" readOnly={true} value={this.state.name}name="fullname" ></input><br></br>
                    <label for="username ">username:</label>
                    <input type="text" readOnly={true} value={this.state.username} name="username" ></input><br></br>
                    <label for="email">email:</label>
                    <input  type="text" readOnly={true} value={this.state.email} name="email" ></input><br></br>
                    <label for="adress">address:</label>
                    <input  type="text" readOnly={true} value={this.state.address} name="address"></input><br></br>

                    <label for="price">roles:</label>
                    <input  type="text" readOnly={true} value={this.state.roles} name="roles" ></input><br></br>
                    <br></br>
                        


            </div>)
        }
    }
export default UserDetailsE