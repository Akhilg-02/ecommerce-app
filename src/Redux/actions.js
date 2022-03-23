import { FILTER_DATA, GET_PRODUCT_FAILURE, GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_REQ } from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
    //type:GET_PRODUCT_REQ
});

// action for get products success

export const getProductsSuccess = (payload) => ({
    type:GET_PRODUCT_SUCCESS,
    payload
});

// action for get products failure

export const getProductsFailure = () => ({
    type:GET_PRODUCT_FAILURE,
    
});

// thunk call to fetch products  list
export const getproductsData = (payload) => ({
   type:GET_PRODUCT_REQ,
   payload
});

// action object for sort  feature

export const sortProducts = (payload) => ({
    type:FILTER_DATA,
    payload
});

export const getsingleproductreq = (payload) => {
    return {
        type:GET_SINGLE_PRODUCT_REQ,
        payload
    }
}
