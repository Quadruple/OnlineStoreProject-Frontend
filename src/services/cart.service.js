import axios from 'axios';
import authHeader from './auth-header';

const FETCH_CHECKEDOUT_ITEMS = "http://localhost:8080/api/test/fetchAllProductsInCarts/"; // LEARN FROM BACKEND
const REMOVE_FROM_CART = "http://localhost:8080/api/removeFromCart/";
const ADD_TO_CART = "http://localhost:8080/api/test/addToCart/";
const FETCH_QUANTITY = "http://localhost:8080/api/test/fetchUserSelectsProducts/"

class CartService
{
    getCheckedOutItems(userId)
    {
        return axios.get(FETCH_CHECKEDOUT_ITEMS + userId, { headers: authHeader() });
    }

    removeFromCart(uniqueProductProp)
    {
        return axios.post(REMOVE_FROM_CART + uniqueProductProp, { headers: authHeader() });
    }

    addToCart(userId, productId, quantity)
    {
        return axios.post(ADD_TO_CART + userId + "/" + productId + "/" + quantity, { headers: authHeader() });
    }

    getUserQuantityOfProduct(userId, productId)
    {
        return axios.get(FETCH_QUANTITY + userId + "/" + productId, { headers: authHeader() });
    }
}

export default new CartService();