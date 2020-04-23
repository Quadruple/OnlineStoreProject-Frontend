import React, { Component } from 'react';
import Dimage from '../assets/coffeemachinesforsale/delonghiIconaVintage.png';
import Eimage from '../assets/coffeemachinesforsale/NespressoEssenzaMini.png';
import Fimage from '../assets/coffeemachinesforsale/SiemensAutomaticMachine.png';
import mrcoffee from '../assets/coffeemachinesforsale/mrcoffee.jpg'
import nespresso from '../assets/coffeemachinesforsale/nespresso.jpg'
import bialetti from '../assets/coffeemachinesforsale/bialetti.jpeg'
import cuisinart from '../assets/coffeemachinesforsale/cuisinart.jpg'
import ProductService from '../services/products.service'

class CoffeeMachineObjects extends Component {
    componentDidMount() {
        /*
        this.setState({
            coffeemachineobjects: [["22$", "Philips", "1"], ["15$", "Simbo", "2"], ["60$", "Starbucks", "3"]]
        });
        */
        
        ProductService.getAllCoffeeMachines().then(
            response => {
                this.setState({
                    coffeemachineobjects: response.data
                });
            },
            error => {
                this.setState({
                    coffeemachineobjects:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        ).then(
            () => {
                console.log(this.state.coffeemachineobjects);
            }
        );
    }

    constructor(props) {
        super(props);

        this.state = {
            coffeemachineobjects: []
        }

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
        else if (pictureId === 4)
        {
            return bialetti;
        }
    }

    render() {
        return (
            <div>
                {this.state.coffeemachineobjects.map((item, index) => (
                    <li class="span4">
                        <div class="thumbnail">
                            <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                            <a href="product_details.html"><img src={this.getProductPicture(item.id)} alt=""></img></a>
                            <div class="caption">
                                <h5>{item.name}</h5>
                                <h4>
                                    <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
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