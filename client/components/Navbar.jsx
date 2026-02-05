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
        <nav className="w-screen h-16 fixed top-0 left-0 z-50 flex flex-row justify-between items-center px-6 md:px-8 bg-white shadow-[2px_2px_4px_0px_rgb(211,210,210)]">
            <NavLink to="/" onClick={handleClick}>
                <img src={logo} alt="logo" className="w-8 aspect-auto" />
            </NavLink>
            <NavLink to="/" onClick={handleClick} className="text-base sm:text-xl text-black/80 font-semibold">HoW?ToCoD3</NavLink>
            <SearchBar />
        </nav>
    )
}
export default Navbar
