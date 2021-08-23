import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { buyItem } from '../redux'
import { connect } from 'react-redux'

function Menu(props) {
    const [isToggle, setIsToggle] = useState(false)
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)
    const [isVisibleCart, setIsVisibleCart] = useState(false)
    const [isInfor, setIsInfor] = useState(false)
    const [searchText, setSearchText] = useState({ value: '' });
    const cart = props.cart

    const onToggleMenu = (e) => {
        e.preventDefault();
        setIsToggle(!isToggle)
    }

    const controlNavbar = useCallback(
        () => {
            setScrollPos(document.body.getBoundingClientRect().top)
            setShow(document.body.getBoundingClientRect().top > scrollPos)
        },
        [scrollPos],
    )

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        };
    }, [controlNavbar]);

    const handleSearch = (e) => {
        setSearchText(c => {
            return { value: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={`duration-500 ${show && "fixed top-0 w-screen bg-gray-100 z-10 m-auto"}`}>
            <nav className=" z-10 max-w-screen-xl mx-auto   py-5 flex items-center justify-between">
                <div className="logo">
                    <Link to="/" className="text-3xl font-bold">Logo</Link>
                </div>
                <div className="links flex items-center justify-around w-1/2 ">
                    <Link to="/" className="text-lg font-semibold hidden lg:block ">Home</Link>
                    <Link to="/products" className="text-lg font-semibold hidden lg:block ">Products</Link>
                    <Link to="/blogs" className="text-lg font-semibold hidden lg:block ">Blogs</Link>
                    <a href="https://www.google.com/" className="text-lg font-semibold hidden lg:block">Category</a>
                    <span onClick={() => setIsVisibleCart(!isVisibleCart)} className="bg-green-400 rounded p-2 cursor-pointer relative inline-block">
                        <FaShoppingCart className="inline-block " /> ({cart.length})
                        <div className={`${isVisibleCart ? "dropdown absolute left-0 top-10 rounded" : "hidden "}`}>
                            <ul>
                                {
                                    cart.map(item => {
                                        return (
                                            <li key={item._id} className="bg-gray-50 w-28 py-3 hover:bg-gray-400 flex justify-between " >
                                                <img src={item._img}
                                                    alt="carrot"
                                                    className="object-contain h-5 w-auto rounded"
                                                />
                                                <span className="text-sm">{item._name} x{item._quantity}</span>
                                            </li>
                                        )
                                    })
                                }
                                s                            </ul>
                            <Link to="/cart" className="bg-gray-200 w-28 py-3 hover:bg-gray-400">Go to cart</Link>
                        </div>
                    </span>
                    <span onClick={() => setIsInfor(!isInfor)} className=" p-2 cursor-pointer relative inline-block">
                        <IoPersonCircleSharp className="inline-block " />
                        <div className={`${isInfor ? "dropdown absolute left-0 top-10 rounded flex flex-col" : "hidden "}`}>
                            <p>Hello Hna Teik</p>
                            <a href="https://www.google.com/">Login</a>
                            <a href="https://www.google.com/">Register</a>
                        </div>
                    </span>
                    <button onClick={onToggleMenu}><GiHamburgerMenu className="inline-block lg:hidden text-xl" /></button>
                </div>

            </nav>
            <div className="search flex justify-center">
                <form onSubmit={handleSubmit} className=" w-2/3 md:w-1/2 flex">
                    <input type="text" value={searchText.value} placeholder="Search..." onChange={handleSearch} className="outline-none border bg-gray-200 focus:bg-gray-50  border-gray-700 p-2 rounded-l-lg text-base font-medium w-full md:w-1/2 " />
                    <button className="bg-green-600 px-4 py-3 inline-block rounded-r-lg hover:bg-green-700"><AiOutlineSearch className="font-bold text-lg" /></button>
                </form>
            </div>
            <nav className={"duration-700 w-1/2 text-gray-50 font-semibold fixed z-10 lg:hidden  " + (isToggle && show ? "left-0" : "-left-full")}>
                <Link to="/" className="block p-4 bg-green-800 hover:bg-green-700">Home</Link>
                <Link to="/products" className="block p-4 bg-green-800 hover:bg-green-700">Products</Link>
                <Link to="/blogs" className="block p-4 bg-green-800 hover:bg-green-700">Blogs</Link>
                <Link to="/category" className="block p-4 bg-green-800 hover:bg-green-700">Category</Link>
                <Link to="/contact" className="block p-4 bg-green-800 hover:bg-green-700">Contact</Link>
            </nav>
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
        buyItem: () => dispatch(buyItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
