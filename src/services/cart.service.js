import axios from 'axios';
import authHeader from './auth-header';

const FETCH_CHECKEDOUT_ITEMS = "http://localhost:8080/api/getCheckedOutItems"; // LEARN FROM BACKEND
const REMOVE_FROM_CART = "http://localhost:8080/api/removeFromCart/";

class CartService
{
    getCheckedOutItems()
    {
        return axios.get(FETCH_CHECKEDOUT_ITEMS, { headers: authHeader() });
    }

    removeFromCart(uniqueProductProp)
    {
        return axios.post(REMOVE_FROM_CART + uniqueProductProp, { headers: authHeader() });
    }
}

export default new CartService();