import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar.jsx'
import Category from '../components/Category.jsx'
import BlogPost from './BlogPost.jsx'
import posts from '../data/posts.js'
import { useSearch } from '../context/SearchContext.jsx';
import Footer from './Footer.jsx'

const Blog = () => {
    const [title, setTitle] = React.useState("Newest");
    const [renderPosts, setRenderPosts] = React.useState([]);
    const [button, setButton] = useState("Newest");
    const { searchQuery, searchResults } = useSearch();

    useEffect(() => {
        const renders = posts.filter(post =>
            post.skills.includes(title)
        )
        setRenderPosts(renders);
        setButton(title);
    }, [title]);

    let content;

    if (searchQuery && searchResults.length > 0) {
        content = searchResults.map((post, index) => (
            <BlogPost key={index} post={post} />
        ));
    } else if (searchQuery && searchResults.length === 0) {
        content = <p>No results found.</p>;
    } else if (button === "Newest") {
        content = posts.map((post, index) => (
            <BlogPost key={index} post={post} />
        ));
    } else {
        content = renderPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
        ));
    }

    return (
        <div className="w-screen h-auto mt-16 px-6 md:px-8 py-16 flex flex-col gap-8">
            <Navbar />
            <h1 className="text-black/80 text-5xl md:text-7xl">
                {searchQuery
                    ? `Results for "${searchQuery}"`
                    : `${title}`}
            </h1>
            <Category setTitle={setTitle} title={title} />
            <div className="w-full flex flex-wrap gap-8">
                {content}
            </div>
            <Footer />
        </div>
    )
}
export default Blog
