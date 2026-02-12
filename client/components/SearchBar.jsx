import React from 'react'
import { useSearch } from '../context/SearchContext.jsx';
import posts from '../data/posts.jsx'
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
            className={`w-36 h-12 md:w-48 md:h-12 justify-end items-center
                ${home ? 'flex' : 'hidden'}
            `}
        >
            <input
                className="w-36 h-10 md:w-42 text-sm md:text-base pl-4 text-black border-b"
                placeholder="Search contents..."
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}
export default SearchBar
