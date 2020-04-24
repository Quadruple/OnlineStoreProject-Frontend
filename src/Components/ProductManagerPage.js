import React, { Component } from 'react';
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import ProductsService from '../services/products.service';
import Category from './Category'
import CoffeeMachineObjects from './CoffeeMachineObjects'

class ProductManagerPage extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            searchString: "",

        };
    }

    handleSearchBarChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }



    render() {
        return (
            <div >
                <div class="navbar">
                    <div class="navbar-inner">
                        <div class="container">
                            <a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </a>
                            <div class="nav-collapse">
                                <ul class="nav">
                                    <li ><a href="/Home">Home	</a></li>
                                    <li class="active"><a href="index.html">Manage</a></li>
                                    <form onSubmit={this.searchCoffeeMachines} class="navbar-search pull-left">
                                        <input type="text" placeholder="Search" class="search-query span2" onChange={this.handleSearchBarChange}></input>
                                    </form>
                                    <ul class="nav pull-right"></ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="sidebar" class="span3" style={{ height: 1600, width: 200 }}>
                        <div class="well well-small">
                            <div align="left" ><b>Manager Menu</b></div><br></br>
                            <ul class="nav nav-list" id="insertCategories">
                                <li>
                                <a>Add New Product</a>
                                </li><br></br>
                                <li>
                                <a>Manage Quantitys </a>
                                </li><br></br>
                                <li>
                                <a>User Management </a>
                                </li><br></br>
                            </ul>
                        </div>
                    </div>
                    <div class="well well-small">
                        <h3> Product Management </h3>
                        <hr class="soften" />
                        <div>Welcome Managet to your manage page.<br></br>In here you can:<br></br> add new products increase the quantity of existing item, Manage users setting</div>
                        <div>
                            <form>
                                <h3>Item Addition Form</h3>
                                <label for="id">ID:</label>
                                <input type="text" name="id"></input>
                                <label for="description">Description:</label>
                                <input type="text" name="description"></input><br></br>
                                <label for="distribution">distribution_info:</label>
                                <input type="text" name="distribution"></input><br></br>
                                <label for="modal">modal_number:</label>
                                <input type="text" name="modal"></input><br></br>
                                <label for="name">Name:</label>
                                <input type="text" name="name"></input><br></br>
                                <label for="price">Price:</label>
                                <input type="number" name="price"></input><br></br>
                                <label for="stock">quantity_stock:</label>
                                <input type="number" name="stock"></input> <br></br>                          
                                <label for="warrant">Warrant_status:</label>
                                <input type="text" name="warrant"></input><br></br>
                                <br></br>
                                    <button type="submit" class="shopBtn">Add Item</button>
</form>

                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductManagerPage