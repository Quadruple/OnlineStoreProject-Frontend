import axios from 'axios'
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/test/getAllCategories"; // LEARN FROM BACKEND

class CategoriesService {
    fetchAllCategories() 
    { 
        console.log("Category Service:" , authHeader());
        return axios.get(API_URL, { headers: authHeader() }); 
    }
}

export default new CategoriesService();