import 'C:/Users/Berk Uzalp/Desktop/frontend/node_modules/datatables.net-dt/css/jquery.dataTables.css'
import React, { Component } from 'react'
import pmanagerService from '../services/pmanager.service'
const $=require('jquery')
$.DataTable = require('datatables.net')

export class Dtable extends Component
{
    componentDidMount(){
        
        this.$el=$(this.el)
        var x=this.$el.DataTable({

            
            columns:[{title:"id",},{title:"description"},{title:"modal"},{title:"distribution_info"},{title:"Warrant_status"},{title:"stock"},{title:"price"},{title:" "}],

        data:this.props.data.map((item, index) => (
        
        ([item.id,'<input type="text" value='+item.description+'>'+item.description+'</input>','<input type="text" value='+item.modal+'>'+item.modal+'</input>','<input type="text" value='+item.distribution_info+'>'+item.distribution_info+'</input>','<input type="text" value='+item.Warrant_status+'>'+item.Warrant_status+'</input>','<input type="number" value='+item.stock+'>'+item.stock+'</input>','<input type="number" value='+item.price+'>'+item.price+'</input>','<button>Delete</button>'])
        
        
        ))

        }
        )

        this.$el.on( 'click', 'button', function () {
            var data = x.row( $(this).parents('tr') ).data();
            pmanagerService.DeleteItem(data[0]);
        } );
    }
    handleDeleteButton = (ProductId) => {
        pmanagerService.DeleteItem(ProductId);
    }

    render(){

        return <div style={{marginLeft : "10px"}}>
            <table className="display" width="100%" ref={el => this.el=el}></table>


        </div>
    }

}
