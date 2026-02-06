import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import {SearchProvider} from "./context/SearchContext.jsx";
import posts from "./data/posts.js"

const App = () => {
    return (
        <SearchProvider>
            <Routes>
                <Route path="/" element={<Blog />} />
                {posts.map((post) => (
                    <Route
                        key={post.slug}
                        path={`/${post.slug}`}
                        element={<BlogPost post={post} />}
                    />
                ))}
            </Routes>
        </SearchProvider>
    )
}
export default App
