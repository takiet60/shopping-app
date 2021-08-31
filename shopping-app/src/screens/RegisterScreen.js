import React, { useState } from 'react'
import { Redirect } from 'react-router';

function RegisterScreen() {

    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        province: '',
        district: '',
        subDistrict: '',
        numberAddress: '',
        phoneNumber: ''
    });


    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const uri = "http://localhost:3000/users"
        if (person.firstName && person.lastName
            && person.email && person.password
            && person.province && person.district
            && person.subDistrict && person.numberAddress
            && person.phoneNumber) {
            const newPerson = { ...person, id: new Date().getTime }
            await fetch(uri, {
                method: 'POST',
                body: JSON.stringify(newPerson),
                headers: { 'Content-Type': 'application/json' }
            })
            setPerson({
                firstName: '', lastName: '', email: '', password: '',
                province: '', district: '', subDistrict: '',
                numberAddress: '', phoneNumber: ''
            })
            return <Redirect to="/login" />
        }
    }

    return (
        <div className="mt-10">
            <div className="min-w-screen min-h-screen max-w-screen-lg mx-auto flex items-center justify-center">
                <form>
                    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
                        <div className="text-center">
                            <h1 className="font-bold text-3xl text-gray-900 mt-10">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <div className="md:flex w-full">
                            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
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
                                                    onChange={handleChange}
                                                    value={person.firstName}
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
                                                    value={person.lastName}
                                                    onChange={handleChange}
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
                                                    value={person.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12">
                                            <label className="text-xs font-semibold px-1">Password</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <input
                                                    type="password"
                                                    className="form-input"
                                                    placeholder="************"
                                                    value={person.password}
                                                    name="password"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full md:w-1/2 -mt-10 md:mt-10 px-5 md:px-10">
                                <div>
                                    <div className="flex -mx-3">
                                        <div className="w-1/2 px-3 mb-5">
                                            <label className="text-xs font-semibold px-1">Province/City</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <input
                                                    type="text"
                                                    className="form-input"
                                                    value={person.province}
                                                    name="province"
                                                    onChange={handleChange}
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
                                                    value={person.district}
                                                    name="district"
                                                    onChange={handleChange}
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
                                                    value={person.subDistrict}
                                                    name="subDistrict"
                                                    onChange={handleChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-3 mb-5">
                                            <label className="text-xs font-semibold px-1">Number address</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                <input
                                                    type="text"
                                                    className="form-input"
                                                    value={person.numberAddress}
                                                    name="numberAddress"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex -mx-3">
                                        <div className="w-full px-3 mb-12">
                                            <label className="text-xs font-semibold px-1">Phone number</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                <input
                                                    type="number"
                                                    className="form-input"
                                                    value={person.phoneNumber}
                                                    name="phoneNumber"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-10 md:-mt-10">
                            <div className="w-full px-3 mb-5">
                                <button onClick={handleSubmit} className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen
