import React from 'react'
// Icons and Images

// Data and Service
import DataNewest from '../data/newest.json'
import Product from './Product'


export const Newest = () => {

    return (
        <div className="text-center py-10">
            <h1 className="text-4xl font-bold">Newest</h1>
            <div className="container mx-auto max-w-screen-xl my-10">
                <div className="flex flex-wrap -mx-4">
                    {
                        DataNewest['newest'].map((item, index) => {
                            return (
                                <Product key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
