import axios from 'axios';
import authHeader from './auth-header';

const ADDITEM_URL = "http://localhost:8080/api/test/insertProduct/"; // LEARN FROM BACKEND
const UPDATE_ITEM_URL = "http://localhost:8080/api/test/updateProduct/";
const DELETE_ITEM_URL = "http://localhost:8080/api/test/deleteProductById/";
const getAllProducts = "http://localhost:8080/api/test/getAllProducts";


class pmanagerService
{
    

    AddItem(description,distribution_info,modal,Warrant_status,name,stock,price)
    {
        console.log(ADDITEM_URL+description+"/"+distribution_info+"/"+modal+"/"+name+"/"+price+"/"+stock+"/"+Warrant_status )
        return axios.get(ADDITEM_URL+description+"/"+distribution_info+"/"+modal+"/"+name+"/"+price+"/"+stock+"/"+Warrant_status , { headers: authHeader() });
    }
    UpdateItem(id,description,distribution_info,modal,Warrant_status,name,stock,price)
    {
        return axios.get(UPDATE_ITEM_URL+id+"/"+description+"/"+distribution_info+"/"+modal+"/"+name+"/"+price+"/"+stock+"/"+Warrant_status , { headers: authHeader() });
    }
    DeleteItem(id)
    {   console.log(DELETE_ITEM_URL+id );
        return axios.get(DELETE_ITEM_URL+id , { headers: authHeader() });
    }
    getProducts(){
        return axios.get(getAllProducts, { headers: authHeader() });
        
    }
}

export default new pmanagerService();