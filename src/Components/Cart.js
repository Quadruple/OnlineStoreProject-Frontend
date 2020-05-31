import React, { Component } from 'react'
import '../style.css'
import '../assets/font-awesome/css/font-awesome.css'
import '../assets/css/bootstrap.css'
import CartItems from './CartItems'
import AuthService from '../services/auth.service'
import CartService from '../services/cart.service'
import history from '../history'

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = 
        {
            checkoutResponse: ""
        };

        this.finalizeCheckout = this.finalizeCheckout.bind(this);
        this.handleContinueShoppingButton = this.handleContinueShoppingButton.bind(this);
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

    handleContinueShoppingButton = () => {
        history.push("/home");
        window.location.reload();
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
                                    <li onClick={() => this.handleContinueShoppingButton()}><a>Home	</a></li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" style={{marginLeft: 20, marginRight: 20}}>
                    <div>
                        <ul class="breadcrumb">
                            <li onClick={() => this.handleContinueShoppingButton()}><a>Home</a> <span class="divider">/</span></li>
                            <li class="active">Check Out</li>
                        </ul>
                        <div class="well well-small">
                            <h1>Check Out</h1>
                            <hr class="soften" />
                            <CartItems></CartItems>
                            <a class="shopBtn btn-large"  onClick={() => this.handleContinueShoppingButton()}><span class="icon-arrow-left"></span> Continue Shopping </a>
                            <a class="shopBtn btn-large pull-right" onClick={() => this.finalizeCheckout()}>Checkout <span class="icon-arrow-right"></span></a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





export default Cart