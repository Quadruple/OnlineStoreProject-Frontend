import React, { Component } from 'react';
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import ProductsService from '../services/products.service';
import Category from './Category'
import CoffeeMachineObjects from './CoffeeMachineObjects'

class Product_Details extends Component {
    componentDidMount() {
        var productInfo = JSON.parse(localStorage.getItem('productinfo'));
        console.log(productInfo);
        this.setState({
            productInfo: productInfo
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            searchString: "",
            coffeeMachineResults: "",
            productInfo: []
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
                        <h3><a class="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span class="icon-plus"></span></a> Product Details  </h3>
                        <hr class="soften" />
                        <div class="row-fluid">
                            <div class="span7">
                                <h3>Name of the Item: {this.state.productInfo.name}</h3>
                                <hr class="soft" />

                                <form class="form-horizontal qtyFrm">
                                    <div class="control-group">
                                        <label class="control-label"><span>${this.state.productInfo.modelNumber}</span></label>
                                        <div class="controls">
                                            <label class="control-label"><span>Quantity:</span></label>
                                            <input class="span1" style={{ width: 40 }} placeholder="1" size="16" type="text" value={1}></input>
                                            <div class="input-append">
                                                <button class="btn btn-mini" type="button">-</button><button class="btn btn-mini" type="button"> + </button><button class="btn btn-mini btn-danger" type="button"><span class="icon-remove"></span></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="control-group">
                                        <label class="control-label"><span>Description</span></label>
                                        <div class="controls">
                                            <label class="control-label"><span>{this.state.productInfo.description}</span></label>
                                        </div>
                                    </div>
                                    <h4>{this.state.productInfo.quantityStocks} items in stock</h4>
                                    <p></p>
                                    <button type="submit" class="shopBtn"><span class=" icon-shopping-cart"></span> Add to cart</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_Details