export class Item {
    constructor(id, name, img, value, discount, price, description, unit, location, quantity = 0) {
        this._id = id
        this._name = name
        this._img = img
        this._value = value
        this._discount = discount
        this._price = price
        this._description = description
        this._unit = unit
        this._location = location
        this._quantity = quantity
    }
    getId() {
        return this._id
    }

    getName() {
        return this._name
    }

    getImg() {
        return this._img
    }

    getValue() {
        return this._value
    }

    getDiscount() {
        return this._discount
    }

    getPrice() {
        return this._price
    }

    getDescription() {
        return this._description
    }

    getUnit() {
        return this._unit
    }

    getLocation() {
        return this._location
    }

    getQuantity() {
        return this._quantity
    }

    set id(id) {
        this._id = id
    }

    set name(name) {
        this._name = name
    }

    set img(img) {
        this._img = img
    }

    set value(value) {
        this._value = value
    }

    set discount(discount) {
        this._discount = discount
    }

    set price(price) {
        this._price = price
    }

    set description(description) {
        this._description = description
    }

    set location(location) {
        this._location = location
    }

    set unit(unit) {
        this._unit = unit
    }

    set review(review) {
        this._review = review
    }

    set quantity(quantity) {
        this._quantity = quantity
    }

}