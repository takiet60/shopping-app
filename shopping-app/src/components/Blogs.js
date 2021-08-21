import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import DataCooking from '../data/cooking.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Blogs = () => {

    const responsiveBlog = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div>

            <h1 className="text-4xl font-bold text-center my-10">Cooking Blogs</h1>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsiveBlog}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    DataCooking.cooking.map((item, index) => {
                        return (
                            <div key={index} className="flex items-center justify-center max-w-screen-xl m-auto flex-wrap-reverse px-2  py-10">
                                <div className="banner-left-side py-2 m-aut text-left">
                                    <h1 className="text-3xl font-bold text-gray-800">What do we cook today ?</h1>
                                    <h3 className="text-xl font-bold my-5 text-gray-800">{item.name}</h3>
                                    <p className="font-medium text-gray-600 py-5 w-96">{item.desciption}</p>
                                    <button className=" font-semibold text-green-600 hover:text-green-800">Learn more <AiOutlineArrowRight className="inline-block" /></button>
                                </div>
                                <div className="banner-right-side m-auto">
                                    <img src={item.img} className="object-cover h-auto w-full" alt="" />
                                </div>
                            </div>

                        )
                    })
                }
            </Carousel>;
        </div>
    )
}
