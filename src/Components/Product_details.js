import React, { Component } from 'react';
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import ProductsService from '../services/products.service';
import Category from './Category'
import AuthService from '../services/auth.service'
import CartService from '../services/cart.service'
import CoffeeMachineObjects from './CoffeeMachineObjects'
import mrcoffee from '../assets/coffeemachinesforsale/mrcoffee.jpg'
import nespresso from '../assets/coffeemachinesforsale/nespresso.jpg'
import bialetti from '../assets/coffeemachinesforsale/bialetti.jpg'
import cuisinart from '../assets/coffeemachinesforsale/cuisinart.jpg'

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
            productInfo: [],
            addToCartResult: []
        };  
        
        this.handleAddToCartButton = this.handleAddToCartButton.bind(this);
        this.getProductPicture = this.getProductPicture.bind(this);
    }
    
    getProductPicture = (pictureId) => {
        console.log(pictureId);
        if (pictureId === 1) {
            return mrcoffee;
        }
        else if (pictureId === 2) {
            return cuisinart;
        }
        else if (pictureId === 3) {
            return nespresso;
        }
        else if (pictureId === 4) {
            return bialetti;
        }
    }

    handleSearchBarChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }

    handleQuantityPlusButton = () => {

    }

    handleAddToCartButton = (productid, quantity) => {
        var currentUser = AuthService.getCurrentUser();
        //console.log(currentUser.id);
        //console.log(this.props.coffeemachineobjects[index].id);
        CartService.addToCart(currentUser.id, productid, quantity).then(
            response => {
                this.setState({
                    addToCartResult: response.data
                });
            },
            error => {
                this.setState({
                    addToCartResult:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log(this.state.addToCartResult);
                alert("Product added to cart successfully.");
            }
        );
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
                                    <li><a href="index.html">Management	</a></li>
                                    <ul class="nav pull-right"></ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div style={{marginLeft: 40, marginRight: 40}} class="well well-small">
                        <h3><a class="btn btn-mini pull-right" href="/cart" title="View more">Go To Cart<span class="icon-plus"></span></a> Product Details  </h3>
                        <hr class="soften" />
                        <div class="row-fluid">
                            <img  class="span2" src={this.getProductPicture(this.state.productInfo.id)}></img>
                            <div class="span7">
                                <h3>Name of the Item: {this.state.productInfo.name}</h3>
                                <hr class="soft" />

                                <form class="form-horizontal qtyFrm">
                                    <div class="control-group">
                                        {this.state.productInfo.discounted ? <label class="control-label"><span>Discounted! ${this.state.productInfo.discountedPrice}</span></label> : <label class="control-label"><span>${this.state.productInfo.price}</span></label>}
                                        
                                        <div class="controls">
                                            <label class="control-label"><span>Quantity:</span></label>
                                            <input id="quantityInput" class="span1" style={{ width: 40 }} placeholder="1" size="16" type="text" value={1}></input>
                                            <div class="input-append">
                                                <button class="btn btn-mini" type="button">-</button><button class="btn btn-mini" type="button"> + </button>
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
                                    <button class="shopBtn" onClick={() => this.handleAddToCartButton(this.state.productInfo.id, document.getElementById("quantityInput").value)}><span class=" icon-shopping-cart"></span> Add to cart</button>
                                </form>
                                <p>Reviews:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product_Details