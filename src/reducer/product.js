/* eslint-disable import/no-cycle */
import axios from 'axios';
import store from 'store';

// constants
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

// #actions

export function setCategoryList(data) {
 return {
  type: SET_CATEGORY_LIST,
  payload: data,
 };
}

export function setProductList(data) {
 return {
  type: SET_PRODUCT_LIST,
  payload: data,
 };
}

export const startLogin = (data) => {
 return (dispatch) => {
  return axios({
   url: 'https://apiuat.mccoymart.com/b2b/signin',
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'post',
   data: {
    action: 'other',
    device_type: '2',
    username: data.username,
    password: data.password,
   },
   responseType: 'json',
  }).then((response) => {
   store.set('User', response.data.data);
   window.location.href = '/productList';
  });
 };
};

export const getCategoryList = () => {
 return (dispatch) => {
  return axios({
   url: 'http://3.131.5.153:4000/api/product/category-list',
   headers: {
    'Content-Type': 'application/json',
   },
   method: 'get',
   data: {
    page_no: 1,
   },
   responseType: 'json',
  }).then((response) => {
   dispatch(setCategoryList(response.data.data.categories));
  });
 };
};

export const getProductList = () => {
 return (dispatch) => {
  return axios({
   url: 'http://3.131.5.153:4000/api/product/product-list?page_no=1',
   method: 'get',
   data: {
    page_no: 1,
   },
   responseType: 'json',
  }).then((response) => {
   console.log('response=====List prodct', response.data.data.products);
   dispatch(setProductList(response.data.data.products));
  });
 };
};

// initialize state and auth reducer
export const initialState = {
 categoryList: [],
 productList: [],
};

// swicthing action
const ACTION_HANDLERS = {
 [SET_CATEGORY_LIST]: (state, action) => {
  return {
   ...state,
   categoryList: action.payload,
  };
 },
 [SET_PRODUCT_LIST]: (state, action) => {
  return {
   ...state,
   productList: action.payload,
  };
 },
};

/**
 * @type {object} status
 */
// upload profile pic
export default function productReducer(state = initialState, action) {
 const handler = ACTION_HANDLERS[action.type];
 return handler ? handler(state, action) : state;
}
