import React from 'react'
import Content from '../components/Content.jsx'
import Navbar from "../components/Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const BlogPost = ({post}) => {

    return (
        <div className="w-screen h-auto flex flex-col py-16">
            <ScrollToTop post={post} />
            <Navbar />
            <Content post={post} />
            <Footer />
        </div>
    )
}
export default BlogPost
