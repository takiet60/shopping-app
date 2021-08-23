import React, { useState } from 'react'
import { Item } from '../models/items'
import FormatNumber from '../services/FormatNumber'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { buyItem } from '../redux'
import { removeItem } from '../redux'
import { connect } from 'react-redux'

function Product(props) {
    const { name, img, price, description, location, unit, review } = props
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [number, setNumber] = useState({ value: 1 });

    const increNumber = () => {
        setNumber(c => {
            return { value: c.value++ }
        })
    }

    const decreNumber = () => {
        setNumber(c => {
            return { value: c.value-- }
        })
    }

    const handleChange = (e) => {
        setNumber(c => {
            return { value: c.value }
        })
    }
    const addToCart = (i) => {
        let item = new Item()
        item.id = i.id
        item.name = i.name
        item.img = i.img
        item.value = 20000
        item.discount = 40
        item.price = i.price
        item.description = i.description
        item.unit = i.unit
        item.location = i.location
        item.quantity = number.value
        props.buyItem(item)
    }
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    <img className="absolute inset-0 h-full w-full object-cover" src={img} alt={description} />
                </div>
                <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none text-red-500 rounded-full font-semibold uppercase tracking-wide text-xs">Newest</span>
                    <h2 className="mt-2 mb-2  font-bold">{name}</h2>
                    <div className="mt-3 flex items-center">
                        <span className="font-bold text-xl">{FormatNumber(price)}</span>&nbsp;<span className="text-sm font-semibold">/{unit}</span>
                    </div>
                </div>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                        <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{location.length} Locations&nbsp;<HiLocationMarker />
                    </span>
                    <span className="flex items-center">
                        <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{
                            location.map(i => {
                                return i + ', '
                            })
                        }
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center py-5">
                        <button className="bg-green-200 rounded p-2 hover:bg-green-500" onClick={decreNumber}><AiOutlineMinus /></button>
                        <input type="number" className="text-center w-12 border-1" value={number.value} onChange={handleChange} />
                        <button className="bg-green-200 rounded p-2 hover:bg-green-500" onClick={increNumber}><AiOutlinePlus /></button>
                    </div>
                    <button
                        onClick={() => addToCart(props)}
                        className="bg-green-700 text-gray-50 py-2 px-6 font-medium rounded mb-5 hover:bg-green-800 inline-block"><FaShoppingCart className="inline-block" />&nbsp;Buy now</button>
                </form>
                <div className="p-4 flex items-center text-sm text-gray-600">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400">
                        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>
                    <span className="ml-2">{review} reviews</span></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyItem: (item) => dispatch(buyItem(item)),
        removeItem: (id) => dispatch(removeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
