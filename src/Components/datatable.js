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

            
            columns:[{title:"id",},{title:"description"},{title:"modal"},{title:"distribution_info"},{title:"Warrant_status"},{title:"stock"},{title:"price"},{title:" "},{title:" "}],

        data:this.props.data.map((item, index) => (
        
        ([item.id,'<input type="text" value='+item.description+'></input>','<input type="text" value='+item.modal+'></input>','<input type="text" value='+item.distribution_info+'></input>','<input type="text" value='+item.Warrant_status+'>year(s)</input>','<input type="number" value='+item.stock+'></input>','<input type="number" value='+item.price+'></input>','<button onclick=pmanagerService.DeleteItem('+item.id +') type="submit">Delete</button>','<button type="submit">Update</button>'])
        
        
        ))

        }
        )


    }


    render(){

        return <div>
            <table className="display" width="100%" ref={el => this.el=el}></table>


        </div>
    }

}
