import React from 'react'
import { AiOutlineSearch, AiOutlineArrowRight, AiTwotoneHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

export const BlogScreen = () => {
    return (
        <div className="mt-36 max-w-screen-xl mx-auto flex flex-auto flex-wrap">
            <div className="left-side lg:w-1/4 hidden lg:block overscroll-y-auto">
                <input type="text" name="searchBlog" className="border-2 outline-none px-2 py-1 rounded mb-3" />
                <button className="bg-green-400 px-2 py-1 rounded-r"><AiOutlineSearch className="inline-block" /></button>
                <h3>Hot topics</h3>
                <ul>
                    <li className="mb-3 font-medium">How to cook ?</li>
                    <li className="mb-3 font-medium">Foods for vegetarians</li>
                    <li className="mb-3 font-medium">How to cook ?</li>
                    <li className="mb-3 font-medium">Foods for vegetarians</li>
                    <li className="mb-3 font-medium">How to cook ?</li>
                    <li className="mb-3 font-medium">Foods for vegetarians</li>
                    <li className="mb-3 font-medium">How to cook ?</li>
                    <li className="mb-3 font-medium">Foods for vegetarians</li>
                    <div className="promote h-72 w-72 bg-green-800">

                    </div>
                </ul>
            </div>
            <div className="right-side lg:w-3/4">
                <div className="img-area mx-16 relative">
                    <img src={'assets/img/cook/spaghetti.jpg'} alt="vegetables" className="object-cover object-center h-full w-auto rounded-lg " />
                    <p className="absolute bottom-5 left-5 text-white font-bold lg:text-5xl text-xl shadow-2xl">Spaghetti</p>
                </div>
                <div className="container mt-5 flex flex-auto justify-center">
                    <div className="left w-2/3 ">
                        <div className="blog border-b ">
                            <img className="h-56 md:h-96 w-auto rounded" src={'assets/img/cook/spaghetti.jpg'} alt="" />
                            <h1 className="py-2 text-2xl font-bold">How to cook spaghetti ?</h1>
                            <p className="py-2">Short desciption</p>
                            <div className="flex py-2 justify-between">
                                <button className="bg-green-800 px-4 py-2 text-gray-50 font-medium">Read more <AiOutlineArrowRight className="inline-block" /></button>
                                <div className="w-5/12">
                                    <button className="mx-2 hover:scale-110"><AiTwotoneHeart className="inline-block" /></button>
                                    <button className="mx-2 hover:scale-110"><FaComment className="inline-block" /></button>
                                    <button className="mx-2 hover:scale-110"><AiOutlineShareAlt className="inline-block" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="blog border-b ">
                            <img className="h-56 md:h-96 w-auto rounded" src={'assets/img/cook/spaghetti.jpg'} alt="" />
                            <h1 className="py-2 text-2xl font-bold">How to cook spaghetti ?</h1>
                            <p className="py-2">Short desciption</p>
                            <div className="flex py-2 justify-between">
                                <button className="bg-green-800 px-4 py-2 text-gray-50 font-medium">Read more <AiOutlineArrowRight className="inline-block" /></button>
                                <div className="w-5/12">
                                    <button className="mx-2 hover:scale-110"><AiTwotoneHeart className="inline-block" /></button>
                                    <button className="mx-2 hover:scale-110"><FaComment className="inline-block" /></button>
                                    <button className="mx-2 hover:scale-110"><AiOutlineShareAlt className="inline-block" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="blog border-b ">
                            <img className="h-56 md:h-96 w-auto rounded" src={'assets/img/cook/spaghetti.jpg'} alt="" />
                            <h1 className="py-2 text-2xl font-bold">How to cook spaghetti ?</h1>
                            <p className="py-2">Short desciption</p>
                            <div className="flex py-2 justify-between">
                                <button className="bg-green-800 px-4 py-2 text-gray-50 font-medium">Read more <AiOutlineArrowRight className="inline-block" /></button>
                                <div className="w-5/12">
                                    <button className="mx-2 hover:scale-110"><AiTwotoneHeart className="inline-block" /></button>
                                    <button className="mx-2 hover:scale-110"><FaComment className="inline-block" /></button>
                                    <button className="mx-2 hover:scale-110"><AiOutlineShareAlt className="inline-block" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right lg:w-1/3 hidden lg:block">
                        <h1 className="text-2xl font-semibold">Category</h1>
                        <ul>
                            <li>All</li>
                            <li>Vegetable</li>
                            <li>Fruit</li>
                            <li>Juice</li>
                            <li>Dried Fruit</li>
                        </ul>
                        <hr />
                        <h1 className="text-2xl font-semibold">Images on Instagram</h1>

                    </div>
                </div>

            </div>
        </div>
    )
}
