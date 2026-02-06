import React from 'react'

const TemplateNoImg = ({content}) => {
    const title = content.title;
    const words = content.content;

    return (
        <div className="mt-26 flex flex-row flex-wrap border-t border-gray-200 pt-8">
            <div className="w-full md:w-2/3 ">
                <p className="text-lg md:text-5xl mb-4 font-semibold text-black/80">{title}</p>
                <p className="text-black/80">{words}</p>
            </div>
        </div>
    )
}
export default TemplateNoImg
