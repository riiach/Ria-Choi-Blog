import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../src/logo.png'
import SearchBar from '../components/SearchBar.jsx'

const Navbar = () => {
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/') {
            window.location.reload()
        }
    }

    return (
        <>
            {/* Desktop */}
            <nav className="hidden md:flex w-screen h-16 fixed top-0 left-0 z-50 flex-row justify-between items-center px-6 md:px-8 bg-white/30
                backdrop-blur-md border-t-8 border-[#FFFF5C]">
                <NavLink to="/" onClick={handleClick}>
                    <img src={logo} alt="logo" className="w-8 aspect-auto" />
                </NavLink>
                <NavLink to="/" onClick={handleClick} className="text-base sm:text-xl text-black/80 font-bold">CodeBegin</NavLink>
                <SearchBar />
            </nav>

            {/* Mobile */}
            <nav className="md:hidden flex w-screen h-16 fixed top-0 left-0 z-50 flex-row justify-between items-center px-6 md:px-8 bg-white/30
                backdrop-blur-md border-t-8 border-[#FFFF5C]">
                <div className="w-auto h-auto flex flex-row items-center gap-4">
                    <NavLink to="/" onClick={handleClick}>
                        <img src={logo} alt="logo" className="w-8 aspect-auto" />
                    </NavLink>
                    <NavLink to="/" onClick={handleClick} className="text-base sm:text-xl text-black/80 font-bold">CodeBegin</NavLink>
                </div>
                <SearchBar />
            </nav>
        </>
    )
}
export default Navbar
