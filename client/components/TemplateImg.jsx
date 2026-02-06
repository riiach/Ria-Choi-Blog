import React from 'react'

const TemplateImg = ({content}) => {
    const title = content.title;
    const words = content.content;
    const imgs = content.contentImg;

    return (
        <div className="mt-26 flex flex-col border-t border-gray-200 pt-8">
            <div className="w-full md:w-2/3">
                <p className="text-lg md:text-5xl mb-4 font-semibold text-black/80">{title}</p>
                <p className="mb-2 pr-16 text-black/80">{words}</p>
            </div>
            <div className="img-continer w-full h-auto flex flex-row flex-wrap gap-4">
                {
                    imgs.map((img, i) => (
                        <img
                        key={i}
                        src={img}
                        className="w-full md:max-w-1/3 h-auto object-cover"
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default TemplateImg
