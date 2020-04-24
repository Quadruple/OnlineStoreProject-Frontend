import React, { Component } from 'react';
import Dimage from '../assets/coffeemachinesforsale/delonghiIconaVintage.jpg';
import Eimage from '../assets/coffeemachinesforsale/NespressoEssenzaMini.jpg';
import Fimage from '../assets/coffeemachinesforsale/SiemensAutomaticMachine.jpg';
import CartService from '../services/cart.service'
import AuthService from '../services/auth.service'

class CartItems extends Component {
    componentDidMount() {
        /*
        this.setState({
            cartitems: [["23956", "An amazing product from Berk", "Model", "Available", "50", "2", "1"],
            ["20537", "An amazing product from Atakan", "Model", "Available", "55", "3", "2"],
            ["99999", "Shit product", "Model", "Not available", "1200", "4", "3"]]
        });
        */
        var currentUser = AuthService.getCurrentUser();
        CartService.getCheckedOutItems(currentUser.id).then(
            response => {
                this.setState({
                    cartitems: response.data
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
                console.log(this.state.cartitems);
            }
        ).then(
            () => {
                var resultQuantities = [];
                this.state.cartitems.forEach(function (arrayItem) {
                    resultQuantities.push(arrayItem.id);
                });
                this.setState({
                    idArray: resultQuantities
                });
            }
        ).then(
            () => {
                for(var i = 0; i < this.state.idArray.length; i++)
                {
                    console.log(i);
                }
            }
        ).then(
            () => {
                console.log(this.state.quantity);
            }
        );
    }

    constructor(props) {
        super(props);

        this.state =
        {
            cartitems: [],
            quantity: [],
            idArray: []
        };

        this.getProductPicture = this.getProductPicture.bind(this);
        this.removeSelectedProduct = this.removeSelectedProduct.bind(this);
        this.getQuantityOfProduct = this.getQuantityOfProduct.bind(this);
    }

    removeSelectedProduct(row) {
        this.state.cartitems.splice(row.rowIndex, 1);
    }

    getProductPicture = (pictureId) => {

        if (pictureId === 1) {
            return Dimage;
        }
        else if (pictureId === 2) {
            return Eimage;
        }
        else if (pictureId === 3) {
            return Fimage;
        }
    }

    getQuantityOfProduct = (productId) => {
        var currentUser = AuthService.getCurrentUser();
        CartService.getUserQuantityOfProduct(currentUser.id, productId).then(
            response => {
                this.setState({
                    quantity: response.data
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
        ).then(
            () => {
                console.log(this.state.quantity);
            }
        );
    }

    render() {
        return (
            <div>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>	Ref. </th>
                        <th>Avail.</th>
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
                            <td> - </td>
                            <td><span class="shopBtn"><span>{item.distributorInfo}</span></span> </td>
                            <td>{item.price}$</td>
                            <td>
                                <input class="span1" style={{ width: 34 }} placeholder="1" size="16" type="text" value={6}></input>
                                <div class="input-append">
                                    <button class="btn btn-mini" type="button">-</button><button class="btn btn-mini" type="button"> + </button><button class="btn btn-mini btn-danger" type="button"><span class="icon-remove"></span></button>
                                </div>
                            </td>
                            <td>{parseInt(1) * parseInt(item.price)}$</td>
                        </tr>
                    ))}
                    <tr>
                        <td colspan="6" class="alignR">Total products:	</td>
                        <td> $448.42</td>
                    </tr>
                    <tr>
                        <td colspan="6" class="alignR">Total products:	</td>
                        <td> $448.42</td>
                    </tr>
                    <tr>
                        <td colspan="6" class="alignR">Total products:	</td>
                        <td> $448.42</td>
                    </tr>
                    <tr>
                        <td colspan="6" class="alignR">Total products:	</td>
                        <td class="label label-primary"> $448.42</td>
                    </tr>
                </tbody>
            </div>
        )
    }
}

export default CartItems;