import React, { Component } from 'react';
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import ProductsService from '../services/products.service';
import Category from './Category'
import CoffeeMachineObjects from './CoffeeMachineObjects'

class Product_Details extends Component {
    constructor(props) {
        super(props);

        this.searchCoffeeMachines = this.searchCoffeeMachines.bind(this);

        this.state = {
            searchString: "",
            coffeeMachineResults: ""
        };
    }

    handleSearchBarChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }

    searchCoffeeMachines = (event) => {
        event.preventDefault();

        ProductsService.getRelatedCoffeeMachines(this.state.searchString).then(
            response => {
                this.setState({
                    coffeeMachineResults: response.data
                });
            },
            error => {
                this.setState({
                    coffeeMachineResults:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
        console.log(this.state.coffeeMachineResults);
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
                                    <li class="active"><a href="index.html">Home	</a></li>

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
                    <div id="sidebar" class="span3" style={{ height: 600, width: 150 }}>
                        <div class="well well-small">
                            <div align="left" ><b>Catagories:</b></div>
                            <ul class="nav nav-list" id="insertCategories">
                                <Category></Category>
                            </ul>
                        </div>
                    </div>
                    <div class="well well-small">
                        <h3><a class="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span class="icon-plus"></span></a> Featured Products  </h3>
                        <hr class="soften" />
                        <div class="row-fluid">
                            <ul class="thumbnails">
                                <CoffeeMachineObjects></CoffeeMachineObjects>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_Details