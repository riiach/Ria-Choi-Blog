import React from 'react'

const BlogPost = ({post}) => {

    return (
        <div
            className="inline-flex flex-col">
            <img
                src={post.thumbnail}
                alt={post.title}
                className="h-108 mb-6 object-cover"
            />

            <div className="flex flex-col gap-2 min-w-[320px]">
                <p className="text-xl font-semibold">{post.series}</p>
                <p className="break-words">{post.title}</p>

                <div className="flex flex-wrap gap-2">
                    {post.skills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-1 text-sm border border-black/80 text-black/80 rounded-2xl"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogPost
