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
                    <NavLink to={`/${post.slug}`} className="text-xl font-semibold hover:underline group inline-flex">
                        {post.series}
                        <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                                group-hover:opacity-100
                                                group-hover:translate-y-0"
                        />
                    </NavLink>
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
