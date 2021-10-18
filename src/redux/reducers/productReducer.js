import { ActionTypes } from "../constant/action-types";

const initialState = {
    products :[
        {
        id: 1,
        title: "satyam",
        category: "programmer"
    }
    ]
}

// {type, payload} is replaced by action . this is called destructuring
export const productReducer = (state=initialState , {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
           return state;
    
        default:
            return state;

    }

};