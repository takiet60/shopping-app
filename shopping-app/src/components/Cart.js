import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let newArr = [...state]
            newArr.forEach(i => {
                if (i.item['_id'] === action.item.item['_id']) {
                    console.log(action.item.item['_quantity'])
                    i.item['_quantity'] += action.item.item['_quantity']
                    return newArr
                }
            })
            return [...newArr, action.item]
        case "REMOVE":
            return [...state].splice(action.id, 1)
        default:
            return state
    }
}

const initialState = []

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);



