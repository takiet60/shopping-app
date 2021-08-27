import React from 'react'

function CheckoutScreen() {
    return (
        <div className="mt-36 max-w-screen-xl mx-auto">
            <h1 className="font-bold text-xl text-center">Checkout </h1>
            <div className="container lg:flex lg:justify-between">
                <div className="left-side text-center text-sm px-10 bg-gray-200 shadow-md my-5 py-5 lg:w-2/3">
                    <h1 className="font-medium text-base py-5 md:text-lg md:font-semibold">Personal Information</h1>
                    <div className="flex">
                        <div className="name block mb-2 text-left ">
                            <label htmlFor="firstName" className="inline-block w-36 md:font-bold">First Name</label>
                            <input type="text" name="firstName" className="border py-2 px-4 rounded-md md:w-11/12 " />
                        </div>
                        <div className="name block mb-2 text-left ">
                            <label htmlFor="firstName" className="inline-block w-36 md:font-bold">Last Name</label>
                            <input type="text" name="firstName" className="border py-2 px-4 rounded-md md:w-11/12" />
                        </div>
                    </div>
                    <div className="name block mb-2 text-left ">
                        <label htmlFor="firstName" className="inline-block w-36 md:font-bold">Email Address</label>
                        <input type="text" name="firstName" className="border py-2 px-4 rounded-md md:w-1/2 md:block" />
                    </div>
                    <div className="name block mb-2 text-left ">
                        <label htmlFor="firstName" className="inline-block w-36 md:font-bold">Streets</label>
                        <input type="text" name="firstName" className="border py-2 px-4 rounded-md md:w-1/2 md:block" />
                    </div>
                    <div className="flex">
                        <div className="name block mb-2 text-left ">
                            <label htmlFor="firstName" className="inline-block w-36 md:font-bold">City</label>
                            <input type="text" name="firstName" className="border py-2 px-4 rounded-md md:w-11/12" />
                        </div>
                        <div className="name block mb-2 text-left ">
                            <label htmlFor="firstName" className="inline-block w-36 md:font-bold">Country</label>
                            <input type="text" name="firstName" className="border py-2 px-4 rounded-md md:w-11/12" />
                        </div>
                    </div>
                    <div className="name block mb-2 text-left ">
                        <label htmlFor="firstName" className="inline-block w-36 md:font-bold">Phone number</label>
                        <input type="text" name="firstName" className="border py-2 px-4 rounded-md w-1/2 md:block" />
                    </div>
                </div>
                <div className="right-side">
                    <div className="delivery bg-gray-200 shadow-md py-10 my-5">
                        <h1 className="text-base font-medium text-center md:text-lg md:font-semibold">Delivery</h1>
                        <div className="mx-10 ">
                            <h2>Delivery fee</h2>
                            <div className="fee flex py-5">
                                <button className="no-fee bg-gray-50 text-center w-1/2 py-5">
                                    <h1 className="text-green-600 text-lg font-semibold">0$</h1>
                                    <p>3-4 weeks</p>
                                </button>
                                <button className="fee w-1/2 text-center bg-green-400 py-5">
                                    <h1 className="text-gray-50 font-semibold">5$</h1>
                                    <p>3-4 days</p>
                                </button>
                            </div>
                            <p>Estimate delivery date 4th August</p>
                            <p>Every package has a tracking number</p>
                        </div>
                    </div>
                    <div className="mx-10 my-5">
                        <input type="checkbox" className="checked:bg-green-600 checked:border-transparent" id="subcribes" name="vehicle1" value="sub" />
                        <label > Subscribe for our newsletter</label><br />
                        <input type="checkbox" className="checked:bg-green-600 checked:border-transparent" id="create" name="vehicle1" value="create" />
                        <label > Create an account</label><br />
                    </div>
                    <button className="bg-green-400 py-2 w-full font-semibold hover:bg-green-700 hover:text-gray-50">Confirm my order</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutScreen
