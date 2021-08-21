import { BUY_ITEM } from "./cartType";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            let newArr = state.cart
            newArr.forEach(i => {
                if (i['_id'] === action.item['_id']) {
                    i['_quantity'] += action.item['_quantity']
                    return {
                        ...state,
                        cart: [...newArr]
                    }
                }
            })
            return {
                ...state,
                cart: [...newArr, action.item]
            }
        case 'REMOVE':
            break
        default:
            return state
    }
}

export default cartReducer