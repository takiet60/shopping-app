import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import FormatNumber from '../services/FormatNumber'
import { GiCancel } from 'react-icons/gi'
import { ImBin, ImPencil } from 'react-icons/im'
import { buyItem } from '../redux'
import { connect } from 'react-redux'

function CartScreen(props) {

    const handleChange = (q) => {
        return q
    }

    const increNumber = (q) => {
        return q++
    }

    const decreNumber = (q) => {
        return q > 1 ? q-- : q
    }

    const items = props.cart.cart

    const provisional = () => {
        let pro = 0
        items.map(i => {
            return pro += i._price * i._quantity
        })
        return pro
    }

    const tax = () => {
        return provisional() * 15 / 100
    }

    const discount = () => {
        return (provisional() + tax()) * 10 / 100
    }

    const total = () => {
        return provisional() + tax() - discount()
    }

    return (
        <div className="mt-32 max-w-screen-xl mx-auto mb-3">
            <h1 className="text-center text-xl font-semibold my-5">Cart screen</h1>
            <div className="md:flex md:justify-between">
                <div className="md:flex-col w-2/3 mx-auto">
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="card w-72 mx-auto flex justify-between border-b text-center border-gray-400 my-5 py-3
                            md:w-96 md:justify-around
                            lg:mx-0 lg:w-full
                            ">
                                    <img
                                        className="h-12 w-auto
                                md:h-24"
                                        src={item._img}
                                        alt="" />
                                    <div className="text-left text-xs font-thin
                                md:text-sm md:font-medium
                                lg:text-base lg:flex lg:items-center lg:w-2/3 lg:justify-between ">
                                        <h1 >{item._name}</h1>
                                        <span className="lg:hidden" >Price:</span> <span>{FormatNumber(item._price)}/<span>{item._unit}</span></span>
                                        <div>
                                            <div className="flex ">
                                                <button className="bg-green-200 rounded p-2 hover:bg-green-500" onClick={() => decreNumber(item._quantity)}><AiOutlineMinus /></button>
                                                <input type="number" className="text-center w-12 border-1" value={item._quantity} onChange={handleChange} />
                                                <button className="bg-green-200 rounded p-2 hover:bg-green-500" onClick={() => increNumber(item._quantity)}><AiOutlinePlus /></button>
                                            </div>
                                        </div>
                                        <span className="lg:hidden">Total: </span><span>{FormatNumber(item._quantity * item._price)}</span>
                                        <div className="hidden lg:flex lg:w-12 lg:justify-between">
                                            <button
                                                className="hover:text-red-600"><ImBin className="inline-block" /></button>
                                            <button className="hover:text-green-600"><ImPencil className="inline-block" /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between lg:hidden">
                                        <button><GiCancel className="inline-block"></GiCancel></button>
                                        <button className="text-xs">Buy later</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-sm text-left w-72 mx-auto font-medium bg-gray-200 py-3 shadow-md h-48">
                    <div className="ml-2 mr-2">
                        <p className="mb-2">Provisional: <span>{FormatNumber(provisional())}</span></p>
                        <p className="mb-2">Tax(15%): {FormatNumber(tax())}</p>
                        <p className="mb-2">Discount: {FormatNumber(discount())}</p>
                        <p className="mb-2 border-t border-gray-600 pt-2">Total: {FormatNumber(total())}</p>
                        <button className="bg-green-600 px-10 py-2 w-full font-semibold hover:bg-green-800">Check out</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        cart: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyItem: (item) => dispatch(buyItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)

