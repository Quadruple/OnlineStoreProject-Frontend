import React, { Component } from 'react';

import pmanagerService from '../services/pmanager.service'

class itemAdder extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            id:"",
            description:"",
            modal:"",
            name:"",
            price:0,
            stock:0,
            Warrant_status:"",
            distribution_info:""


        };
    }

    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleModalChange = (event) => {
        this.setState({
            modal: event.target.value
        })
    }
    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    handleStockChange = (event) => {
        this.setState({
            stock: event.target.value
        })
    }
    handleWarrantChange = (event) => {
        this.setState({
            Warrant_status: event.target.value
        })
    }
    handleDistributionChange = (event) => {
        this.setState({
            distribution_info: event.target.value
        })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleFormSubmit = (event) => {


        pmanagerService.AddItem(this.state.id, this.state.description,this.state.distribution_info,this.state.modal,this.state.Warrant_status,this.state.name,this.state.stock,this.state.price).then(
            () => {
                alert("Item successfully added");
                window.location.reload();
            });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h3>Item Addition Form</h3>
                    <label for="id">ID:</label>
                    <input type="text" name="id" onChange={this.handleIdChange}></input>
                    <label for="description">Description:</label>
                    <input type="text" name="description" onChange={this.handleDescriptionChange}></input><br></br>
                    <label for="distribution">distribution_info:</label>
                    <input type="text" name="distribution" onChange={this.handleDistributionChange}></input><br></br>
                    <label for="modal">modal_number:</label>
                    <input type="text" name="modal" onChange={this.handleModalChange}></input><br></br>
                    <label for="name">Name:</label>
                    <input type="text" name="name" onChange={this.handleNameChange}></input><br></br>
                    <label for="price">Price:</label>
                    <input type="number" name="price" onChange={this.handlePriceChange}></input><br></br>
                    <label for="stock">quantity_stock:</label>
                    <input type="number" name="stock" onChange={this.handleStockChange}></input> <br></br>                          
                    <label for="warrant">Warrant_status:</label>
                    <input type="text" name="warrant" onChange={this.handleWarrantChange}></input><br></br>
                    <br></br>
                        <button type="submit" class="shopBtn">Add Item</button>
                </form>

            </div>)
        }
    }
export default itemAdder