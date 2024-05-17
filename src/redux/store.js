import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer.js';
import { getFashionReducer } from './reducers/productFashionReducer.js';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { getLikeReducer, getStylesReducer } from './reducers/likeReducer.js';
import { getMobileDetailsReducer } from './reducers/likeReducer.js';
const reducer = combineReducers({
    getProductDetails: getProductDetailsReducer,
    getProducts: getProductsReducer,
    getLikes: getLikeReducer,
    getFashion: getFashionReducer,
    cart: cartReducer,
    getMobileDetails: getMobileDetailsReducer,
    getStyles: getStylesReducer,
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))

)

export default store;
