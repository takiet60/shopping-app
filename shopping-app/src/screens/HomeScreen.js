import React from 'react'
import { Banner } from '../components/Banner'
import { Category } from '../components/Category'
import { Discount } from '../components/Discount'
import { Newest } from '../components/Newest'
import { Products } from '../components/Products'
import { Blogs } from '../components/Blogs'

export const HomeScreen = () => {
    return (
        <>
            <Banner />
            <Discount />
            <Newest />
            <Category />
            <Products />
            <Blogs />
        </>
    )
}
