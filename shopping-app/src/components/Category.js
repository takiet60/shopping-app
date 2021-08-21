import React from 'react'

export const Category = () => {
    return (
        <div className="py-10">
            <div className="bg-green-700 py-5 text-center">
                <h1 className="text-gray-50 text-3xl font-bold">Categories</h1>
            </div>
            <div className="cards pt-10 flex justify-center max-w-screen-xl items-center mx-auto flex-auto flex-wrap gap-10"   >

                <div className="card h-64 w-72 relative hover:shadow-xl">
                    <img src={'assets/img/category/vegetable.jpg'} alt="vegetables" className="object-cover object-center h-64 w-auto rounded-lg " />
                    <div className="absolute h-64 w-72 bg-gray-800 top-0 bg-gradient-to-t from-gray-800  to-gray-500 opacity-50 rounded-lg"></div>
                    <p className="absolute bottom-5 left-4 text-gray-50 text-2xl font-semibold">Vegetable</p>
                </div>
                <div className="card h-64 w-72 relative hover:shadow-xl">
                    <img src={'assets/img/category/fruit.jpg'} alt="vegetables" className="object-cover object-center h-64 w-auto rounded-lg " />
                    <div className="absolute h-64 w-72 bg-gray-800 top-0 bg-gradient-to-t from-gray-800  to-gray-500 opacity-50 rounded-lg"></div>
                    <p className="absolute bottom-5 left-4 text-gray-50 text-2xl font-semibold">Fruit</p>
                </div>

                <div className="card h-64 w-72 relative hover:shadow-xl">
                    <img src={'assets/img/category/juice.jpg'} alt="vegetables" className="object-cover object-center h-64 w-auto rounded-lg " />
                    <div className="absolute h-64 w-72 bg-gray-800 top-0 bg-gradient-to-t from-gray-800  to-gray-500 opacity-50 rounded-lg"></div>
                    <p className="absolute bottom-5 left-4 text-gray-50 text-2xl font-semibold">Juice</p>
                </div>
                <div className="card h-64 w-72 relative hover:shadow-xl">
                    <img src={'assets/img/category/dried-fruit.jpg'} alt="vegetables" className="object-cover object-center h-64 w-auto rounded-lg " />
                    <div className="absolute h-64 w-72 bg-gray-800 top-0 bg-gradient-to-t from-gray-800  to-gray-500 opacity-50 rounded-lg"></div>
                    <p className="absolute bottom-5 left-4 text-gray-50 text-2xl font-semibold">Dried Fruit</p>
                </div>

            </div>
        </div>
    )
}
