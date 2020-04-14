import React, { Component } from 'react';
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import Dimage from '../assets/img/d.jpg';
import Eimage from '../assets/img/e.jpg';
import Fimage from '../assets/img/f.jpg';
import "../services/products.service";
import ProductsService from '../services/products.service';

class Home_Page extends Component {
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
        //console.log(this.state.coffeeMachineResults);
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


                <div class="well well-small">
                    <h3><a class="btn btn-mini pull-right" href="products.html" title="View more">VIew More<span class="icon-plus"></span></a> Featured Products  </h3>
                    <hr class="soften" />
                    <div class="row-fluid">
                        <ul class="thumbnails">
                            <li class="span4">
                                <div class="thumbnail">
                                    <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                                    <a href="product_details.html"><img src={Dimage} alt=""></img></a>
                                    <div class="caption">
                                        <h5>Manicure & Pedicure</h5>
                                        <h4>
                                            <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                            <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                            <span class="pull-right">$22.00</span>
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li class="span4">
                                <div class="thumbnail">
                                    <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                                    <a href="product_details.html"><img src={Eimage} alt=""></img></a>
                                    <div class="caption">
                                        <h5>Manicure & Pedicure</h5>
                                        <h4>
                                            <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                            <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                            <span class="pull-right">$22.00</span>
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li class="span4">
                                <div class="thumbnail">
                                    <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                                    <a href="product_details.html"><img src={Fimage} alt="" /></a>
                                    <div class="caption">
                                        <h5>Manicure & Pedicure</h5>
                                        <h4>
                                            <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                            <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                            <span class="pull-right">$22.00</span>
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home_Page