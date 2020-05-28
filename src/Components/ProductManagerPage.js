import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../style.css';
import '../assets/font-awesome/css/font-awesome.css';
import '../assets/css/bootstrap.css';
import "../services/products.service";
import ItemAdder from '../Components/itemadder';
import ProductManaging from '../Components/ProductManaging';
import ProductManagingE from '../Components/ProductManagingE';
import pmanagerService from '../services/pmanager.service'
import productsService from '../services/products.service';
import {Dtable} from './datatable.js'

class ProductManagerPage extends Component {
    constructor(props) {
        
        super(props);
    
        this.handleDeleteButton=this.handleDeleteButton.bind(this);
        

        this.state = {
            searchString: "",
            Products:[{id:1,description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"},{id:"x",description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"},{id:"x",description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"},{id:"x",description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"}]


        };
    }
    handleDeleteButton = (ProductId) => {
        pmanagerService.DeleteItem(ProductId);
    }

    handleSearchBarChange = (event) => {
        this.setState({
            searchString: event.target.value
        });
    }
    handleMenu1= (event) =>{
        var element=<ItemAdder></ItemAdder>;
        ReactDOM.render(element, document.getElementById('forms'));
        document.getElementById('sidebar').style.height="700px";
    }
    handleMenu2= (event) =>{
        var element=<ProductManaging ></ProductManaging>;
        
        ReactDOM.render(element, document.getElementById('forms'));
        document.getElementById('sidebar').style.height="200px";
    }    
    handleMenu3= (event) =>{
        var element=<ProductManagingE ></ProductManagingE>;
        
        ReactDOM.render(element, document.getElementById('forms'));
        document.getElementById('sidebar').style.height="200px";
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
                                    <li ><a href="/Home">Home	</a></li>
                                    <li class="active"><a href="index.html">Manage</a></li>
                                    <form onSubmit={this.searchCoffeeMachines} class="navbar-search pull-left">
                                        <input type="text" placeholder="Search" class="search-query span2" onChange={this.handleSearchBarChange}></input>
                                    </form>
                                    <ul class="nav pull-right"></ul>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="sidebar" class="span3" style={{ height: 700, width: 200 }}>
                        <div class="well well-small">
                            <div align="left" ><b>Manager Menu</b></div>
                            <hr class="soften" />
                            <ul class="nav nav-list" id="insertCategories">
                                <li style={{borderStyle: "double"}} onClick={this.handleMenu1}>
                                <a >-Add New Product</a>
                                </li>
                                <li style={{borderStyle: "double"}}onClick={this.handleMenu2}>
                                <a >-Display Products </a>
                                </li>
                                <li style={{borderStyle: "double"}}onClick={this.handleMenu3}>
                                <a >-Edit Products </a>
                                </li>                                
                                <li>
                                </li><br></br>
                            </ul>
                        </div>
                    </div>
                    <div class="well well-small">
                        <h3> Product Management </h3><div id="buttonholder"style={{float:"right"}}></div>
                        <hr class="soften" />
                        <div  id="forms">Welcome Managet to your manage page.<br></br>In here you can:<br></br> add new products increase the quantity of existing item, Manage users setting</div>

                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductManagerPage