import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/test/search/"; // LEARN FROM BACKEND

class ProductsService
{
    getRelatedCoffeeMachines(searchString)
    {
        return axios.get(API_URL + searchString, { headers: authHeader() });
    }
}

export default new ProductsService();