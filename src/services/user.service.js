import axios from 'axios';
import authHeader from './auth-header';


const getOrders = "http://localhost:8080/api/test/getAllProducts/";


class UserService
{
    

    getOrders(id){
        return axios.get(getAllProducts+id, { headers: authHeader() });
        
    }
}

export default new UserService();