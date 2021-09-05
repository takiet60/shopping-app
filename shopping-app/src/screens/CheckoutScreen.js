import React from 'react'

function CheckoutScreen() {
    return (
        <div className="mt-36 max-w-screen-xl mx-auto">
            <h1 className="font-bold text-xl text-center">Checkout </h1>
            <div className="container lg:flex lg:justify-between">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden lg:w-2/3">
                    <h1 className="font-medium text-base py-5 md:text-lg md:font-semibold">Personal Information</h1>
                    <div className="md:flex w-full">
                        <div className="w-full py-10 px-5 md:px-10">
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">First name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="John"
                                                name="firstName"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">Last name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="Smith"
                                                name="lastName"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="email"
                                                className="form-input"
                                                placeholder="johnsmith@example.com"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">City/Province</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="John"
                                                name="firstName"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">District</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="Smith"
                                                name="lastName"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">Sub-district</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="John"
                                                name="firstName"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label className="text-xs font-semibold px-1">House Number</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="Smith"
                                                name="lastName"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-side">
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden py-10 my-5">
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
