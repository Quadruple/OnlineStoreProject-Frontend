import React, { Component } from 'react';
import Dimage from '../assets/coffeemachinesforsale/delonghiIconaVintage.png';
import Eimage from '../assets/coffeemachinesforsale/NespressoEssenzaMini.png';
import Fimage from '../assets/coffeemachinesforsale/SiemensAutomaticMachine.png';
import CartService from '../services/cart.service'

class CartItems extends Component {
    componentDidMount()
    {
        this.setState({
            cartitems: [["23956", "An amazing product from Berk", "Model", "Available", "50", "2", "1"],
            ["20537", "An amazing product from Atakan", "Model", "Available", "55", "3", "2"],
            ["99999", "Shit product", "Model", "Not available", "1200", "4", "3"]]
        });
        /*
        CartService.getCheckedOutItems().then(
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
        );
        */
    }

    constructor(props) {
        super(props);

        this.state =
        {
            cartitems: []
        };

        this.getProductPicture = this.getProductPicture.bind(this);
        this.removeSelectedProduct = this.removeSelectedProduct.bind(this);
    }

    removeSelectedProduct(row)
    {
        this.state.cartitems.splice(row.rowIndex, 1);
    }

    getProductPicture = (pictureId) => {
        if (pictureId === "1") {
            return Dimage;
        }
        else if (pictureId === "2") {
            return Eimage;
        }
        else if (pictureId === "3") {
            return Fimage;
        }
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
                            <div><td><img width="100" src={this.getProductPicture(item[6])} alt=""></img></td></div>
                            <td>{item[1]}</td>
                            <td> - </td>
                            <td><span class="shopBtn"><span>{item[3]}</span></span> </td>
                            <td>{item[4]}$</td>
                            <td>
                                <input class="span1" style={{ width: 34 }} placeholder="1" size="16" type="text" value={item[5]}></input>
                                <div class="input-append">
                                    <button class="btn btn-mini" type="button">-</button><button class="btn btn-mini" type="button"> + </button><button class="btn btn-mini btn-danger" type="button" onSubmit={console.log("neden")}><span class="icon-remove"></span></button>
                                </div>
                            </td>
                            <td>{parseInt(item[4]) * parseInt(item[5])}$</td>
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