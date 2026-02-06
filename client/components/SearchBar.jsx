import React from 'react'
import { useSearch } from '../context/SearchContext.jsx';
import posts from '../data/posts.js'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const location = useLocation();
    const { setSearchQuery, setSearchResults } = useSearch();
    const home = location.pathname === '/';

    const handleSearch = (value) => {
        const query = value.toLowerCase();

        setSearchQuery(value);
        setSearchResults(
            posts.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.skills.some(skill =>
                    skill.toLowerCase().includes(query)
                ) ||
                post.series.toLowerCase().includes(query)
            )
        );
    };

    return (
        <div
            className={`w-36 h-12 md:w-48 md:h-12 flex justify-end items-center
                ${home ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
        >
            <input
                className="w-36 h-10 md:w-48 text-sm md:text-base pl-4 text-gray-500 bg-white rounded-full shadow-[2px_2px_4px_0px_rgb(211,210,210)]"
                placeholder="Search contents..."
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}
export default SearchBar
