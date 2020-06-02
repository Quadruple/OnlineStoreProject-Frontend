import axios from 'axios';
import authHeader from './auth-header';


const GET_USER_INFO = "http://localhost:8080/api/test/returnUserInfo/";
const UPDATE_USER_INFO = "http://localhost:8080/api/test/updateUserInfo/";
const getAllProducts = "";


class UserService
{
    getUserInformationForProfile(userId)
    {
        return axios.get(GET_USER_INFO + userId, { headers: authHeader() });
    }

    getOrders(id){
        return axios.get(getAllProducts+id, { headers: authHeader() });  
    }

    Update(userId,name,email,adress)
    {
        console.log(UPDATE_USER_INFO + userId + "/" + name + "/" + email + "/" + adress);
        return axios.get(UPDATE_USER_INFO + userId + "/" + name + "/" + email + "/" + adress, { headers: authHeader() });
    }
}

export default new UserService();