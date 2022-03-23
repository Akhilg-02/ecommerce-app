import { GET_PRODUCT_REQ, GET_SINGLE_PRODUCT_REQ } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false,
    singleProduct: []
}

export const reducer = (state=initState , {type , payload})=>{

    // add the switch statement for different actions
    switch(type){
        case GET_PRODUCT_REQ :
            return {...state ,
            products:[payload] }

        case GET_SINGLE_PRODUCT_REQ: 
            return {
                ...state,
            singleProduct: [state.products[0].filter((item) => {
                return item.id === payload
            })]}

        default:
            return state;
    }
    
}