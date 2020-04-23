import React, { Component } from 'react';
import mrcoffee from '../assets/coffeemachinesforsale/mrcoffee.jpg'
import nespresso from '../assets/coffeemachinesforsale/nespresso.jpg'
import bialetti from '../assets/coffeemachinesforsale/bialetti.jpg'
import cuisinart from '../assets/coffeemachinesforsale/cuisinart.jpg'
import history from '../history'

class CoffeeMachineObjects extends Component {
    constructor(props) {
        super(props);

        this.getProductPicture = this.getProductPicture.bind(this);
        this.showProductDetails = this.showProductDetails.bind(this);
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

    showProductDetails = (index) => {

        localStorage.setItem('productinfo', JSON.stringify(this.props.coffeemachineobjects[index]));
        console.log(JSON.stringify(this.props.coffeemachineobjects[index]));
        history.push("/productdetails");
        window.location.reload();
    }

    render() {
        return (
            <div>
                {this.props.coffeemachineobjects.map((item, index) => (
                    <li class="span4">
                        <div class="thumbnail">
                            <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                            <a href="product_details.html"><img src={this.getProductPicture(item.id)} alt=""></img></a>
                            <div class="caption">
                                <h5>{item.name}</h5>
                                <h4>
                                    <a class="defaultBtn" title="Click to see product details" onClick={() => this.showProductDetails(index)}><span class="icon-zoom-in"></span></a>
                                    <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                    <span class="pull-right">{item.modelNumber}$</span>
                                </h4>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        )
    }
}

export default CoffeeMachineObjects