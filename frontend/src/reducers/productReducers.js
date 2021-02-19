import {
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";




export const productListReducer = (state = {products : []}, action ) => {
    switch (action.type) {
      case PRODUCTS_LIST_REQUEST:
        return { loading: true, product: []};
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }

  }


export const productDetailsReducer = (state = { product: { reviews : [] }}, action) => {
  
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return { loading: true,...state};
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};