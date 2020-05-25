import axios from 'axios';
import authHeader from './auth-header';

const FETCH_CHECKEDOUT_ITEMS = "http://localhost:8080/api/test/fetchAllProductsInCarts/"; // LEARN FROM BACKEND
const REMOVE_FROM_CART = "http://localhost:8080/api/test/removeItemFromCart/";
const ADD_TO_CART = "http://localhost:8080/api/test/addToCart/";
const FETCH_QUANTITY = "http://localhost:8080/api/test/fetchUserSelectsProducts/";
const DECREMENT_PRODUCT_QUANTITY_OF_USER = "http://localhost:8080/api/test/removeQuantityFromCart/";
const INCREMENT_PRODUCT_QUANTITY_OF_USER = "http://localhost:8080/api/test/incrementQuantityFromCart/";
const FINALIZE_CHECKOUT = "http://localhost:8080/api/test/finalizeCheckout/";

class CartService
{
    getCheckedOutItems(userId)
    {
        return axios.get(FETCH_CHECKEDOUT_ITEMS + userId, { headers: authHeader() });
    }

    removeFromCart(userId, productId)
    {
        return axios.post(REMOVE_FROM_CART + userId + "/" + productId, { headers: authHeader() });
    }

    addToCart(userId, productId, quantity)
    {
        return axios.post(ADD_TO_CART + userId + "/" + productId + "/" + quantity, { headers: authHeader() });
    }

    getUserQuantityOfProduct(userId, productId)
    {
        return axios.get(FETCH_QUANTITY + userId + "/" + productId, { headers: authHeader() });
    }

    decrementUserQuantityOfProduct(userId, productId)
    {
        return axios.post(DECREMENT_PRODUCT_QUANTITY_OF_USER + userId + "/" + productId, { headers: authHeader() });
    }

    incrementUserQuantityOfProduct(userId, productId)
    {
        return axios.post(INCREMENT_PRODUCT_QUANTITY_OF_USER + userId + "/" + productId, { headers: authHeader() });
    }

    finalizeCheckout(userId)
    {
        return axios.get(FINALIZE_CHECKOUT + userId, {headers: authHeader()});      
    }
}

export default new CartService();