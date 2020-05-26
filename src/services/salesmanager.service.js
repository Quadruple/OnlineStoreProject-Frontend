import axios from 'axios';
import authHeader from './auth-header';

const REMOVE_DISCOUNT = "http://localhost:8080/api/test/removeDiscountItem/";
const SET_DISCOUNT_TO_PRODUCT = "http://localhost:8080/api/test/discountItem/";

class SalesManagerServices
{
    removeDiscountFromProduct(productId)
    {
        return axios.get(REMOVE_DISCOUNT + productId, { headers: authHeader() });
    }

    setDiscountToProduct(productId, discountPercentage)
    {
        return axios.get(SET_DISCOUNT_TO_PRODUCT + productId + "/" + discountPercentage);
    }
}

export default new SalesManagerServices();