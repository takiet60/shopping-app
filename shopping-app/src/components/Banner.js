import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const Banner = () => {
    return (
        <div>
            <div className="flex items-center justify-center max-w-screen-xl m-auto flex-wrap-reverse px-2  pt-20 pb-10">
                <div className="banner-left-side py-2 m-auto">
                    <h1 className="text-3xl font-bold text-gray-800">Your right choose about vegetables</h1>
                    <p className="font-normal py-5">The place you can choose and buy the frestest and newest vegetables</p>
                    <button className="w-44 bg-green-700 font-semibold text-gray-200  rounded py-2 shadow-md hover:bg-green-900 hover:text-gray-50">Start Buying <AiOutlineArrowRight className="inline-block" /></button>
                </div>
                <div className="banner-right-side m-auto">
                    <img src={'assets/img/banner/banner.jpg'} className="object-cover h-auto w-full" alt="" />
                </div>
            </div>
        </div>
    )
}
