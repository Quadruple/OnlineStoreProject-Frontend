import axios from 'axios';
import authHeader from './auth-header';


const getAllProducts = "http://localhost:8080/api/test/getAllProducts/";


class UserService
{
    

    getOrders(id){
        return axios.get(getAllProducts+id, { headers: authHeader() });
        
    }
    Update(name,username,email,adress)
    {
        console.log(getAllProducts+"/"+name+"/"+username+"/"+email+"/"+adress);
        return axios.get(getAllProducts+name+"/"+username+"/"+email+"/"+adress, { headers: authHeader() });


    }
}

export default new UserService();