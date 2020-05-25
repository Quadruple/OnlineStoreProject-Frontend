import React, { Component } from 'react'
import '../style.css'
import '../assets/font-awesome/css/font-awesome.css'
import '../assets/css/bootstrap.css'
import CartItems from './CartItems'
import AuthService from '../services/auth.service'
import CartService from '../services/cart.service'

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = 
        {
            checkoutResponse: ""
        };

        this.finalizeCheckout = this.finalizeCheckout.bind(this);
    }

    finalizeCheckout = () => {
        var currentUser = AuthService.getCurrentUser();
        CartService.finalizeCheckout(currentUser.id).then(
            response => {
                this.setState({
                    checkoutResponse: response.data
                });
            },
            error => {
                this.setState({
                    checkoutResponse:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log(this.state.checkoutResponse);
            }
        ).then(
            () => {
                alert(this.state.checkoutResponse);
                window.location.reload(false);
            }
        );
    }

    render() {
        return (
            <div>
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
                                    <li class=""><a href="index.html">Home	</a></li>

                                </ul>
                                <form action="#" class="navbar-search pull-left">
                                    <input type="text" placeholder="Search" class="search-query span2"></input>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="span12">
                        <ul class="breadcrumb">
                            <li><a href="index.html">Home</a> <span class="divider">/</span></li>
                            <li class="active">Check Out</li>
                        </ul>
                        <div class="well well-small">
                            <h1>Check Out</h1>
                            <hr class="soften" />
                            <CartItems></CartItems>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <form class="form-inline">
                                                <label style={{ width: 159 }}> VOUCHERS Code: </label>
                                                <input type="text" class="input-medium" placeholder="CODE"></input>
                                                <button type="submit" class="shopBtn"> ADD</button>
                                            </form>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>


                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <form class="form-inline">
                                                <label style={{ width: 159 }}> VOUCHERS Code: </label>
                                                <input type="text" class="input-medium" placeholder="CODE"></input>
                                                <button type="submit" class="shopBtn"> ADD</button>
                                            </form>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr><td>ESTIMATE YOUR SHIPPING & TAXES</td></tr>
                                    <tr>
                                        <td>
                                            <form class="form-horizontal">
                                                <div class="control-group">
                                                    <label class="span2 control-label" for="inputEmail">Country</label>
                                                    <div class="controls">
                                                        <input type="text" placeholder="Country"></input>

                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="span2 control-label" for="inputPassword">Post Code/ Zipcode</label>
                                                    <div class="controls">
                                                        <input type="password" placeholder="Password"></input>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="controls">
                                                        <button type="submit" class="shopBtn">Click to check the price</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="products.html" class="shopBtn btn-large"><span class="icon-arrow-left"></span> Continue Shopping </a>
                            <a class="shopBtn btn-large pull-right" onClick={() => this.finalizeCheckout()}>Next <span class="icon-arrow-right"></span></a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default Cart