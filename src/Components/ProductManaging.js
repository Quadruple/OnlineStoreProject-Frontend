import React, { Component } from 'react';

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

        

        this.state = {
            Products:[{name:"x",email:"z",description:"aaa",modal:"sdfg",distribution_info:"kkk",Warrant_status:"year",stock:10,price:111}]



        };
    }



    render() {
        return(<div style={{textAlign: 'right'}}>
            <table  class="table table-bordered"  style={{verticalAlign:'top'}}>

            <thead>   
            <tr>
                <th>Name</th>
                <th>Email</th>                
                <th>Description</th> 
                <th>Modal</th> 
                <th>Distributor</th> 
                <th>Warrant_status</th>
                <th>Stock</th>
                <th>Price</th>                                  
                <th>{" "}</th>
                <th>{" "}</th>    
            </tr></thead> 
            <tbody>
            {this.state.Products.map((item, index) => (
                <tr>
                    
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><input type="text" defaultValue={item.description}></input></td>
                    <td><input type="text" defaultValue={item.modal}></input></td>
                    <td><input type="text" defaultValue={item.distribution_info}></input></td>
                    <td><input type="text" defaultValue={item.Warrant_status}></input></td>                                                                              
                    <td><input type="number" defaultValue={item.stock}></input></td>
                    <td><input type="number" defaultValue={item.price}></input></td>                    
                    <td><button type="submit">Update</button></td>
                    
                    
                    <td><button type="submit">Remove</button></td>
                    
                </tr>




            ))}</tbody>





            </table>





        </div>)
            
        }
    }
export default ProductManaging