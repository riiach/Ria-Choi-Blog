import React from 'react'
import Content from '../components/Content.jsx'
import Navbar from "../components/Navbar.jsx";

const BlogPost = ({post}) => {
    return (
        <div className="w-screen h-auto flex flex-col">
            <Navbar />
            <Content post={post} />
        </div>
    )
}
export default BlogPost
