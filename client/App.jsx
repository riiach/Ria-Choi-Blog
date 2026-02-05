import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import {SearchProvider} from "./context/SearchContext.jsx";

const App = () => {
    return (
        <SearchProvider>
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </SearchProvider>
    )
}
export default App
