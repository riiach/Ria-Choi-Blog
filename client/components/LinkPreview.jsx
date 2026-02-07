import React from 'react'

const LinkPreview = ({ image, title, description, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-3xl border rounded-lg overflow-hidden hover:bg-neutral-50 transition mt-12"
        >
            {/* Image */}
            {image && (
                <div className="w-48 h-32 flex-shrink-0 bg-black">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col justify-center p-4 gap-1">
                <h3 className="font-semibold text-lg line-clamp-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {description}
                </p>
                {url && (
                    <span className="text-xs text-gray-400 mt-1">
                        {new URL(url).hostname}
                    </span>
                )}
            </div>
        </a>
    )
}
export default LinkPreview
