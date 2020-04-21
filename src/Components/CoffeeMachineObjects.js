import React, { Component } from 'react';
import Dimage from '../assets/coffeemachinesforsale/delonghiIconaVintage.png';
import Eimage from '../assets/coffeemachinesforsale/NespressoEssenzaMini.png';
import Fimage from '../assets/coffeemachinesforsale/SiemensAutomaticMachine.png';
import ProductService from '../services/products.service'

class CoffeeMachineObjects extends Component {
    componentDidMount() {
        this.setState({
            coffeemachineobjects: [["22$", "Philips", "1"], ["15$", "Simbo", "2"], ["60$", "Starbucks", "3"]]
        });

        /*
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
        );
        */
    }

    constructor(props) {
        super(props);

        this.state = {
            coffeemachineobjects: []
        }

        this.getProductPicture = this.getProductPicture.bind(this);
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
                {this.state.coffeemachineobjects.map((item, index) => (
                    <li class="span4">
                        <div class="thumbnail">
                            <a class="zoomTool" href="product_details.html" title="add to cart"><span class="icon-search"></span> QUICK VIEW</a>
                            <a href="product_details.html"><img src={this.getProductPicture(item[2])} alt=""></img></a>
                            <div class="caption">
                                <h5>{item[1]}</h5>
                                <h4>
                                    <a class="defaultBtn" href="product_details.html" title="Click to view"><span class="icon-zoom-in"></span></a>
                                    <a class="shopBtn" href="#" title="add to cart"><span class="icon-plus"></span></a>
                                    <span class="pull-right">{item[0]}</span>
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