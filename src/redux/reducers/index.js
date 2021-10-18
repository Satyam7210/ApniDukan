import {combineReducers} from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers;


// when we have multiple reducer then we are going to combine all the reducer inside this file.

