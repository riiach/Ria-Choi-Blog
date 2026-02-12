import React from 'react'
import logo from '../src/logo.png'
import { MoveUpRight } from 'lucide-react'

const Footer = () => {
    return (
        <div id="footer" className="w-full h-auto border-t border-gray-400 pt-8 flex flex-col fmd:flex-row justify-between items-start overflow-y-hidden">
            <div className="pr-12 md:pr-0 md:pl-6 self-end md:self-start mb-8">
                <img src={logo} alt="logo" className="w-10"/>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-end pr-12">
                <div className="w-auto h-auto border-b border-gray-500 flex flex-col justify-start items-end pb-8 mb-8 gap-2">
                    <p className="font-semibold">Written & Built by Ria Choi</p>
                        <a
                            className="hover:underline group inline-flex"
                            href="https://www.riachoi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Check out my website
                            <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                                group-hover:opacity-100
                                                group-hover:translate-y-0"
                            />
                        </a>
                </div>
                    <a
                        className="hover:underline group inline-flex"
                        href="mailto:riiachoii@gmail.com"
                    >riiachoii@gmail.com
                        <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                                group-hover:opacity-100
                                                group-hover:translate-y-0"
                        />
                    </a>
                    <a
                        className="hover:underline group inline-flex"
                        href="https://www.linkedin.com/in/ria-choi-76a658309/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >LinkedIn profile
                        <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                                group-hover:opacity-100
                                                group-hover:translate-y-0"
                        />
                    </a>
                    <a
                        className="hover:underline group flex flex-row"
                        href="https://www.instagram.com/riiiach?igsh=Z2c4d2g4ZzBkNXN0&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >riiiach@instagram
                        <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                                group-hover:opacity-100
                                                group-hover:translate-y-0"
                        />
                    </a>
            </div>
        </div>
    )
}
export default Footer
