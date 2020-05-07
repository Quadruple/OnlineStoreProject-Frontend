import axios from 'axios';
import authHeader from './auth-header';

const ADDITEM_URL = "http://localhost:8080/api/test/AddItem/"; // LEARN FROM BACKEND
const UPDATE_ITEM_URL = "http://localhost:8080/api/test/UpdateItem/";
const DELETE_ITEM_URL = "http://localhost:8080/api/test/DeleteItem/";

class PManagerService
{
    

    AddItem(id,description,distribution_info,modal,Warrant_status,name,stock,price)
    {
        return axios.get(ADDITEM_URL , { headers: authHeader() });
    }
    UpdateItem()
    {
        return axios.get(UPDATE_ITEM_URL , { headers: authHeader() });
    }
    DeleteItem()
    {
        return axios.get(DELETE_ITEM_URL , { headers: authHeader() });
    }
    getProducts(){

        
    }
}

export default new PManagerService();