import axios from 'axios'
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/getCategories"; // LEARN FROM BACKEND

class CategoriesService {
    fetchAllCategories() 
    { 
        return axios.get(API_URL, { headers: authHeader() }); 
    }
}

export default new CategoriesService();