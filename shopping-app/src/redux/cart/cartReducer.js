import { BUY_ITEM } from "./cartType";
import { REMOVE_ITEM } from "./cartType";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            let newArr = state.cart
            let isExist = false
            newArr.forEach(i => {
                if (i['_id'] === action.item['_id']) {
                    i['_quantity'] += action.item['_quantity']
                    isExist = true
                    return
                }
            })
            return isExist ?
                {
                    ...state,
                    cart: newArr
                }
                : {
                    ...state,
                    cart: [...newArr, action.item]
                }
        case REMOVE_ITEM:
            return {
                ...state,
                cart: [...state.cart].filter(i => {
                    return i['_id'] !== action.id
                })
            }
        default:
            return state
    }
}

export default cartReducer