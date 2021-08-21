import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import FormatNumber from '../services/FormatNumber'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import ProductsData from '../data/products.json'
import { FaShoppingCart } from 'react-icons/fa'

export const Products = () => {


    const all = ProductsData.products

    const vegetable = ProductsData.products
        .filter((item) => {
            return item.category === "vegetable"
        }
        )
    const juice = ProductsData.products
        .filter((item) => {
            return item.category === "juice"
        }
        )
    const fruit = ProductsData.products
        .filter((item) => {
            return item.category === "fruit"
        }
        )
    const driedFruit = ProductsData.products
        .filter((item) => {
            return item.category === "dried-fruit"
        }
        )

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [number, setNumber] = useState({ value: 1 });

    const increNumber = () => {
        setNumber({ value: number.value++ })
    }

    const decreNumber = () => {
        setNumber({ value: number.value-- })
    }

    const handleChange = (e) => {
        setNumber({ value: number.value })
    }


    return (
        <div className="mt-32 max-w-screen-xl mx-auto">
            <h1 className="text-4xl text-center font-bold uppercase">Our products</h1>
            <Tabs className="mt-10 text-center text-sm md:text-base font-semibold">
                <TabList className="flex lg:justify-between justify-center w-5/12 md:w-1/2 mx-auto items-center cursor-pointer">
                    <Tab className="text-green-600 bg-gray-300 shadow-md  px-4 py-2 rounded mr-2 visited:bg-green-800 ">All</Tab>
                    <Tab className="text-green-600 bg-gray-300 shadow-md  px-4 py-2 rounded mr-2 visited:bg-green-800">Vegetables</Tab>
                    <Tab className="text-green-600 bg-gray-300 shadow-md  px-4 py-2 rounded mr-2 visited:bg-green-800">Juice</Tab>
                    <Tab className="text-green-600 bg-gray-300 shadow-md  px-4 py-2 rounded mr-2 visited:bg-green-800">Fruit</Tab>
                    <Tab className="text-green-600 bg-gray-300 shadow-md px-4 py-2 rounded mr-2 visited:bg-green-800">Dried Fruit</Tab>
                </TabList>

                <TabPanel className="mt-10">
                    <div className="container-all max-w-screen-xl mx-auto flex justify-center items-center gap-20 flex-auto flex-wrap">
                        {
                            all.map((item, id) => {
                                return (
                                    <div key={id} className="card w-64 border-green-600 shadow-lg rounded-t relative">
                                        <img src={'assets/img/products/lemon-juice.jpg'} alt="" />
                                        <h1 className="p-2 absolute top-36 left-16 bg-gray-50 rounded-md capitalize">{item.name}</h1>
                                        <p className="mt-5 text-base "><span className="line-through">{FormatNumber(item.price)}</span><span className="text-base"> /kg</span><span className="text-red-500 text-base no-underline"> -{item.discount}%</span></p>
                                        <p className="text-lg font-bold">{FormatNumber(item.price - (item.price * item.discount / 100))}<span className="text-base font-medium"> /kg</span></p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex justify-center items-center py-5">
                                                <button className="bg-green-200 rounded p-2 hover:bg-green-500" onClick={decreNumber}><AiOutlineMinus /></button>
                                                <input type="number" className="text-center w-12 border-1" value={number.value} onChange={handleChange} />
                                                <button className="bg-green-200 rounded p-2 hover:bg-green-500" onClick={increNumber}><AiOutlinePlus /></button>
                                            </div>
                                            <button className="bg-green-700 text-gray-50 py-2 px-6 font-medium rounded mb-5 hover:bg-green-800"><FaShoppingCart className="inline-block" />&nbsp;Buy now</button>
                                        </form>
                                    </div>

                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel className="mt-10">
                    <div className="container-all max-w-screen-xl mx-auto flex justify-center items-center gap-20 flex-auto flex-wrap">
                        {
                            vegetable.map((item, id) => {
                                return (
                                    <div key={id} className="card w-64 border-green-600 shadow-lg rounded-t relative">
                                        <img src={'assets/img/products/lemon-juice.jpg'} alt="" />
                                        <h1 className="p-2 absolute top-36 left-16 bg-gray-50 rounded-md capitalize">{item.name}</h1>
                                        <p className="mt-5 text-base "><span className="line-through">{FormatNumber(item.price)}</span><span className="text-base"> /kg</span><span className="text-red-500 text-base no-underline"> -{item.discount}%</span></p>
                                        <p className="text-lg font-bold">{FormatNumber(item.price - (item.price * item.discount / 100))}<span className="text-base font-medium"> /kg</span></p>
                                        <div className="flex justify-center items-center py-5">
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlineMinus /></button>
                                            <input type="number" className="text-center w-12 border-1" value="1" />
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlinePlus /></button>
                                        </div>
                                        <button className="bg-green-700 text-gray-50 py-2 px-6 font-medium rounded mb-5 hover:bg-green-800"><FaShoppingCart className="inline-block" />&nbsp;Buy now</button>

                                    </div>
                                )
                            })
                        }

                    </div>
                </TabPanel>
                <TabPanel className="mt-10">
                    <div className="container-all max-w-screen-xl mx-auto flex justify-center items-center gap-20 flex-auto flex-wrap">
                        {
                            juice.map((item, id) => {
                                return (
                                    <div key={id} className="card w-64 border-green-600 shadow-lg rounded-t relative">
                                        <img src={'assets/img/products/lemon-juice.jpg'} alt="" />
                                        <h1 className="p-2 absolute top-36 left-16 bg-gray-50 rounded-md capitalize">{item.name}</h1>
                                        <p className="mt-5 text-base "><span className="line-through">{FormatNumber(item.price)}</span><span className="text-base"> /kg</span><span className="text-red-500 text-base no-underline"> -{item.discount}%</span></p>
                                        <p className="text-lg font-bold">{FormatNumber(item.price - (item.price * item.discount / 100))}<span className="text-base font-medium"> /kg</span></p>
                                        <div className="flex justify-center items-center py-5">
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlineMinus /></button>
                                            <input type="number" className="text-center w-12 border-1" value="1" />
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlinePlus /></button>
                                        </div>
                                        <button className="bg-green-700 text-gray-50 py-2 px-6 font-medium rounded mb-5 hover:bg-green-800"><FaShoppingCart className="inline-block" />&nbsp;Buy now</button>

                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel className="mt-10">
                    <div className="container-all max-w-screen-xl mx-auto flex justify-center items-center gap-20 flex-auto flex-wrap">
                        {
                            fruit.map((item, id) => {
                                return (
                                    <div key={id} className="card w-64 border-green-600 shadow-lg rounded-t relative">
                                        <img src={'assets/img/products/lemon-juice.jpg'} alt="" />
                                        <h1 className="p-2 absolute top-36 left-16 bg-gray-50 rounded-md capitalize">{item.name}</h1>
                                        <p className="mt-5 text-base "><span className="line-through">{FormatNumber(item.price)}</span><span className="text-base"> /kg</span><span className="text-red-500 text-base no-underline"> -{item.discount}%</span></p>
                                        <p className="text-lg font-bold">{FormatNumber(item.price - (item.price * item.discount / 100))}<span className="text-base font-medium"> /kg</span></p>
                                        <div className="flex justify-center items-center py-5">
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlineMinus /></button>
                                            <input type="number" className="text-center w-12 border-1" value="1" />
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlinePlus /></button>
                                        </div>
                                        <button className="bg-green-700 text-gray-50 py-2 px-6 font-medium rounded mb-5 hover:bg-green-800"><FaShoppingCart className="inline-block" />&nbsp;Buy now</button>

                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel className="mt-10">
                    <div className="container-all max-w-screen-xl mx-auto flex justify-center items-center gap-20 flex-auto flex-wrap">
                        {
                            driedFruit.map((item, id) => {
                                return (
                                    <div key={id} className="card w-64 border-green-600 shadow-lg rounded-t relative">
                                        <img src={'assets/img/products/lemon-juice  .jpg'} alt="" />
                                        <h1 className="p-2 absolute top-36 left-16 bg-gray-50 rounded-md capitalize">{item.name}</h1>
                                        <p className="mt-5 text-base "><span className="line-through">{FormatNumber(item.price)}</span><span className="text-base"> /kg</span><span className="text-red-500 text-base no-underline"> -{item.discount}%</span></p>
                                        <p className="text-lg font-bold">{FormatNumber(item.price - (item.price * item.discount / 100))}<span className="text-base font-medium"> /kg</span></p>
                                        <div className="flex justify-center items-center py-5">
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlineMinus /></button>
                                            <input type="number" className="text-center w-12 border-1" value="1" />
                                            <button className="bg-green-200 rounded p-2 hover:bg-green-500"><AiOutlinePlus /></button>
                                        </div>
                                        <button className="bg-green-700 text-gray-50 py-2 px-6 font-medium rounded mb-5 hover:bg-green-800"><FaShoppingCart className="inline-block" />&nbsp;Buy now</button>

                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}
