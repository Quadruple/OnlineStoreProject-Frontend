import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import ItemAdder from '../Components/itemadder';
import ProductManaging from '../Components/ProductManaging';
import pmanagerService from '../services/pmanager.service'

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
    handleMenu1= (event) =>{
        var element=<ItemAdder></ItemAdder>;
        ReactDOM.render(element, document.getElementById('forms'));

    }
    handleMenu2= (event) =>{
        var element=<ProductManaging ></ProductManaging>;
        
        ReactDOM.render(element, document.getElementById('forms'));

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
                    <div id="sidebar" class="span3" style={{ height: 700, width: 200 }}>
                        <div class="well well-small">
                            <div align="left" ><b>Manager Menu</b></div><br></br>
                            <ul class="nav nav-list" id="insertCategories">
                                <li onClick={this.handleMenu1}>
                                <a >Add New Product</a>
                                </li><br></br>
                                <li onClick={this.handleMenu2}>
                                <a >Manage Products </a>
                                </li><br></br>
                                <li>
                                </li><br></br>
                            </ul>
                        </div>
                    </div>
                    <div class="well well-small">
                        <h3> Product Management </h3>
                        <hr class="soften" />
                        <div>Welcome Managet to your manage page.<br></br>In here you can:<br></br> add new products increase the quantity of existing item, Manage users setting</div>
                        <div id="forms" style={{verticalAlign:'top'}}>

                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductManagerPage