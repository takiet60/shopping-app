import { BUY_ITEM } from "./cartType"

export const buyItem = (item) => {
    return {
        type: BUY_ITEM,
        item: item
    }
}