import { BUY_ITEM, REMOVE_ITEM } from "./cartType"

export const buyItem = (item) => {
    return {
        type: BUY_ITEM,
        item: item
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id: id
    }
}