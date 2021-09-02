import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai'
import { connect } from 'react-redux'
import { login } from '../redux'

function LoginScreen(props) {

    const [info, setInfo] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault()
        if (info.email && info.password) {
            props.login(info)
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInfo({ ...info, [name]: value })
    }

    return (
        <div className="mt-36">
            <h1 className="text-center text-xl font-semibold md:text-3xl md:font-bold">Login Screen</h1>
            <form onSubmit={handleSubmit}>
                <div className="min-w-screen container max-w-md mb-5 mx-auto bg-gray-50 p-5 shadow-lg ">
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="johnsmith@example.com"
                                    value={info.email}
                                    onChange={handleChange}
                                    name="email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="********"
                                    value={info.password}
                                    onChange={handleChange}
                                    name="password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3 justify-between">
                        <div className="w-full px-3 mb-5">
                            <input type="checkbox" name="remembers" id="" />
                            <label htmlFor="" className="text-sm font-semibold px-1">Remember me?</label>
                        </div>
                        <a href="google.com" className="text-sm w-3/4 inline-block text-green-700 font-semibold" >Forgot your password?</a>
                    </div>
                    <div className="flex">
                        <div className="w-full px-3 my-5">
                            <button className="block w-full max-w-xl bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg py-3 px-3 font-semibold">LOGIN</button>
                        </div>
                    </div>
                    <h1 className="before:left-line after:right-line text-center relative">or</h1>
                    <div className="social-link flex justify-between my-5">
                        <a
                            href="google.com"
                            className="border border-gray-400 px-10 rounded-sm py-2 text-2xl hover:text-green-600"
                        ><FaFacebook className="inline-block" /></a>
                        <a
                            href="google.com"
                            className="border border-gray-400 px-10 rounded-sm py-2 text-2xl hover:text-green-600"
                        ><AiFillGoogleCircle className="inline-block" /></a>
                        <a
                            href="google.com"
                            className="border border-gray-400 px-10 rounded-sm py-2 text-2xl hover:text-green-600"
                        ><AiOutlineGithub className="inline-block" /></a>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartState,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)
