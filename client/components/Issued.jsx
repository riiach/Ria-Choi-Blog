import React from 'react'

const Issued = ({post}) => {
    const date = post.date;

    return (
        <div className="w-full h-12 border-b border-gray-400 mb-8 pb-4 flex flex-row justify-between items-end">
            <p>Written by <span className="italic">Ria Choi</span></p>
            <p>{date}</p>
        </div>
    )
}
export default Issued
