import React from 'react'
import logo from '../src/logo.png'

const Footer = () => {
    return (
        <div className="w-full h-56 border-t border-gray-400 pt-8 flex flex-row justify-between items-start">
            <img src={logo} alt="logo" className="w-10"/>
            <div className="w-full h-full flex flex-col justify-start items-end">
                <div className="w-auto h-auto border-b border-gray-500 flex flex-col justify-start items-end pb-8 mb-8 gap-2">
                    <a className="font-semibold">Written by Ria Choi</a>
                    <a>Check out my website</a>
                </div>
                <a>riiachoii@gmail.com</a>
                <a>LinkedIn profile</a>
                <a>riiiach@instagram</a>
            </div>
        </div>
    )
}
export default Footer
