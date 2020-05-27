import React, { Component } from 'react';
import {Dtable} from './datatable.js'
import pmanagerService from '../services/pmanager.service'

class ProductManaging extends Component {
    
    
    /*componentDidMount() {
       pmanagerService.getProducts().then(
            response => {
                this.setState({
                    Products: response.data
                });
            },
            error => {
                
            }
        )}*/
    constructor(props) {
        super(props);
        this.handleDeleteButton=this.handleDeleteButton.bind(this);
        

        this.state = {
            Products:[{id:1,description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"},{id:"x",description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"},{id:"x",description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"},{id:"x",description:"z",distribution_info:"aaa",modal:"sdfg",Warrant_status:"year",stock:"10",price:"111"}]



        };
    }
    handleDeleteButton = (ProductId) => {
        pmanagerService.DeleteItem(ProductId);
    }


    render() {
        return(<div id="here" style={{textAlign: 'right'}}>
            <Dtable data={this.state.Products}></Dtable>


        </div>)
            
        }
    }
export default ProductManaging