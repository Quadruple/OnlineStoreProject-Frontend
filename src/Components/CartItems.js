import React, { Component } from 'react';
import mrcoffee from '../assets/coffeemachinesforsale/mrcoffee.jpg'
import nespresso from '../assets/coffeemachinesforsale/nespresso.jpg'
import bialetti from '../assets/coffeemachinesforsale/bialetti.jpg'
import cuisinart from '../assets/coffeemachinesforsale/cuisinart.jpg'
import CartService from '../services/cart.service'
import AuthService from '../services/auth.service'

class CartItems extends Component {

    componentDidMount() {
        var currentUser = AuthService.getCurrentUser();
        CartService.getCheckedOutItems(currentUser.id).then(
            response => {
                this.setState({
                    cartitems: this.state.cartitems.concat(response.data)
                });
            },
            error => {
                this.setState({
                    cartitems:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log("cartitems", this.state.cartitems);
            }
        ).then(
            () => {
                this.getQuantityOfProduct();
            }
        );
    }

    constructor(props) {
        super(props);

        this.state =
        {
            cartitems: [],
            quantity: [],
            decrementResponse: "",
            removeResponse: "",
            incrementResponse: ""
        };

        this.getProductPicture = this.getProductPicture.bind(this);
        this.getQuantityOfProduct = this.getQuantityOfProduct.bind(this);
        this.decrementQuantityofProduct = this.decrementQuantityofProduct.bind(this);
        this.removeProductFromUsersCart = this.removeProductFromUsersCart.bind(this);
    }

    getProductPicture = (pictureId) => {

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


    removeProductFromUsersCart = (productId) => {
        var currentUser = AuthService.getCurrentUser();
        CartService.removeFromCart(currentUser.id, productId).then(
            response => {
                this.setState({
                    removeResponse: response.data
                });
            },
            error => {
                this.setState({
                    removeResponse:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log(this.state.removeResponse);
            }
        ).then(
            () => {
                window.location.reload(false);
            }
        );
    }

    incrementQuantityofProduct = (productId) => {
        var currentUser = AuthService.getCurrentUser();
        CartService.incrementUserQuantityOfProduct(currentUser.id, productId).then(
            response => {
                this.setState({
                    incrementResponse: response.data
                });
            },
            error => {
                this.setState({
                    incrementResponse:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log(this.state.incrementResponse);
            }
        ).then(
            () => {
                window.location.reload(false);
            }
        );
    }

    decrementQuantityofProduct = (productId) => {
        var currentUser = AuthService.getCurrentUser();
        CartService.decrementUserQuantityOfProduct(currentUser.id, productId).then(
            response => {
                this.setState({
                    decrementResponse: response.data
                });
            },
            error => {
                this.setState({
                    decrementResponse:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log(this.state.decrementResponse);
            }
        ).then(
            () => {
                window.location.reload(false);
            }
        );
    }

    getQuantityOfProduct = () => {
        let currentUser = AuthService.getCurrentUser();
        this.state.cartitems.map((item, index) => (
            CartService.getUserQuantityOfProduct(currentUser.id, item.id).then(
                response => {
                    console.log(response.data);
                    this.setState({
                        quantity: this.state.quantity.concat(response.data[0].quantity)
                    });
                },
                error => {
                    this.setState({
                        quantity:
                            (error.response && error.response.data) ||
                            error.message ||
                            error.toString()
                    });
                }
            )
        ));
    }

    render() {
        return (
            <div>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Distributor</th>
                        <th>Warranty Status</th>
                        <th>Unit price</th>
                        <th>Qty </th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cartitems.map((item, index) => (
                        <tr>
                            <div><td><img width="100" src={this.getProductPicture(item.id)} alt=""></img></td></div>
                            <td>{item.description}</td>
                            <td> {item.distributorInfo} </td>
                            <td><span class="shopBtn"><span>{item.warrantyStatus}</span></span> </td>
                            <td>{item.price}$</td>
                            <td>
                                <input class="span1" style={{ width: 34 }} placeholder="1" size="16" type="text" value={this.state.quantity[index]} readOnly></input>
                                <div class="input-append">
                                    <button class="btn btn-mini" type="button" onClick={() => this.decrementQuantityofProduct(item.id)}>-</button><button class="btn btn-mini" type="button" onClick={() => this.incrementQuantityofProduct(item.id)}> + </button><button class="btn btn-mini btn-danger" type="button" onClick={() => this.removeProductFromUsersCart(item.id)}><span class="icon-remove"></span></button>
                                </div>
                            </td>
                            <td>{parseInt(this.state.quantity[index]) * parseInt(item.price)}$</td>
                        </tr>
                    ))}
                </tbody>
            </div>
        )
    }
}

export default CartItems;