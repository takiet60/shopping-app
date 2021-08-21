import React, { useEffect, useState } from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BiPhoneCall } from 'react-icons/bi'
import { HiArrowUp } from 'react-icons/hi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'

export const Footer = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        let screen = document.documentElement.scrollTop
        if (screen > 300) {
            setVisible(true)
        } else if (screen <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        scrollToTop()
        window.addEventListener('scroll', toggleVisible)
        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    }, []);



    return (
        <div>
            <div>
                {
                    visible &&
                    <button onClick={scrollToTop} className="bubble fixed bottom-10 right-3 bg-green-700 p-3 rounded-full text-gray-50"><HiArrowUp /></button>
                }
            </div>
            <div>
                <div className="footer relative bottom-0 bg-green-900 flex justify-around text-left  py-10 list-none flex-auto flex-wrap ">
                    <div className="social-links w-1/2">
                        <h2 className="text-lg font-semibold text-gray-300">We have permision to bring for everybody the best vegetables with the lowest cost than ever</h2>
                        <ul className="flex w-36 justify-around">
                            <li className="text-lg font-semibold text-gray-300"><FaFacebook /></li>
                            <li className="text-lg font-semibold text-gray-300"><AiFillTwitterCircle /></li>
                            <li className="text-lg font-semibold text-gray-300"><FaYoutube /></li>
                            <li className="text-lg font-semibold text-gray-300"><FiInstagram /></li>
                        </ul>
                    </div>
                    <div className="contacts flex justify-center flex-col">
                        <li className="text-lg font-semibold text-gray-300">
                            <HiLocationMarker className="inline-block" />
                            <span>7/19/10 Binh Duong 3, An Binh, Di An, Binh Duong</span>
                        </li>
                        <li className="text-lg font-semibold text-gray-300">
                            <BiPhoneCall className="inline-block" />
                            <span>0385883948</span>
                        </li>
                    </div>
                </div>
                <div className="copy-right bg-green-900 text-center">
                    <h1>@CopyRight HnaTeik 2021. All right reverse</h1>
                </div>
            </div>
        </div>
    )
}
