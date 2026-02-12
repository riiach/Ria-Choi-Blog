import React, { useState } from 'react'
import categories from '../data/categories.js'
import { useSearch } from '../context/SearchContext.jsx';

const Category = ({title, setTitle}) => {

    const { searchQuery } = useSearch();
    const isActive = (category) => {
        return category === title;
    }

    const handleClick = (category) => {
        setTitle(category);
    }

    return (
        <div className={`w-screen h-auto flex-row gap-4 flex-wrap px-6 md:px-8 ${
            searchQuery ? "hidden" : "flex"
        }`}
        >
            {categories.map((category, index) => (
                <button
                key={index}
                className={`
                w-22 sm:w-32 md:w-42 h-10
                text-xs sm:text-base
                flex justify-center items-center
                ${isActive(category)
                    ? 'bg-[#FFFF5C]'
                    : 'bg-white border border-black/80 text-black/80 hover:bg-[#FFFF5C] hover:border-white'
                }`}
                onClick={() => handleClick(category)}
                >{category}</button>
            ))}
        </div>
    )
}
export default Category
