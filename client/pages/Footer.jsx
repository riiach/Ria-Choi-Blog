import React from 'react'
import logo from '../src/logo.png'
import { MoveUpRight } from 'lucide-react'

const Footer = () => {
    return (
        <div className="w-full h-56 border-t border-gray-400 pt-8 flex flex-row justify-between items-start">
            <img src={logo} alt="logo" className="w-10"/>
            <div className="w-full h-full flex flex-col justify-start items-end">
                <div className="w-auto h-auto border-b border-gray-500 flex flex-col justify-start items-end pb-8 mb-8 gap-2">
                    <p className="font-semibold">Written & Built by Ria Choi</p>
                    <p className="group/2 flex flex-row">
                        <a
                            className="hover:underline"
                            href="https://www.riachoi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Check out my website</a>
                        <MoveUpRight className="hidden group-hover/2:block w-4" />
                    </p>
                </div>
                <p className="group/3 flex flex-row">
                    <a
                        className="hover:underline"
                        href="mailto:riiachoii@gmail.com"
                    >riiachoii@gmail.com</a>
                    <MoveUpRight className="hidden group-hover/3:block w-4" />
                </p>
                <p className="group/4 flex flex-row">
                    <a
                        className="hover:underline"
                        href="https://www.linkedin.com/in/ria-choi-76a658309/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >LinkedIn profile</a>
                    <MoveUpRight className="hidden group-hover/4:block w-4" />
                </p>
                <p className="group/5 flex flex-row">
                    <a
                        className="hover:underline"
                        href="https://www.instagram.com/riiiach?igsh=Z2c4d2g4ZzBkNXN0&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >riiiach@instagram</a>
                    <MoveUpRight className="hidden group-hover/5:block w-4" />
                </p>
            </div>
        </div>
    )
}
export default Footer
