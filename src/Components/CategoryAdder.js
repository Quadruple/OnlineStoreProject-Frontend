import React, { Component } from 'react';

import pmanagerService from '../services/pmanager.service'

class CatAdder extends Component {

    constructor(props) {
        super(props);



        this.state = {

            category: ""


        };
    }

    handleCategoryChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        if (this.state.category != "") {
            console.log("here");
            pmanagerService.AddCategory(this.state.category).then(
                () => {
                    alert("Category successfully added");

                });
        }
    }
    fakefunction = (event) => {


        event.preventDefault();
        return false;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fakefunction}>
                    <h3>Add Category</h3>
                    <label for="Category">Category:</label>
                    <input id="categories" required="required" type="text" name="Category" onChange={this.handleNameChange}></input><br></br>
                    <br></br>
                    <button onClick={this.handleFormSubmit} class="shopBtn">Confirm</button>

                </form>
            </div>)
    }
}
export default CatAdder