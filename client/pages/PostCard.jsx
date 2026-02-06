import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MoveUpRight } from 'lucide-react'

const PostCard = ({post}) => {

    return (
        <div
            className="inline-flex flex-col">
            <img
                src={post.thumbnail}
                alt={post.title}
                className="h-108 mb-6 object-cover"
            />
            <div className="flex flex-col gap-2 min-w-[320px]">
                <p className="group flex flex-row">
                    <NavLink to={`/${post.slug}`} className="text-xl font-semibold hover:underline">{post.series}</NavLink>
                    <MoveUpRight className="opacity-0 group-hover:opacity-100 w-4"/>
                </p>
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
export default PostCard
