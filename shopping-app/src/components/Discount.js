import React from 'react'

export const Discount = () => {
    return (
        <div className="my-10 flex flex-auto justify-around items-center bg-green-600 flex-wrap-reverse">
            <div className="left-side">
                <h1 className="uppercase text-3xl md:text-5xl lg:text-7xl font-bold text-gray-200">Discount 50%</h1>
                <p className="text-xl text-gray-50 font-medium">For the bill has price more than $50</p>
            </div>
            <div className="right-side">
                <img src="assets/img/banner/vegetables.png" alt="" className="bg-green-600 w-96 object-cover" />
            </div>
        </div>
    )
}
