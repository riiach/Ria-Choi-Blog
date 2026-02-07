import React from 'react'
import LinkFetch from './LinkFetch.jsx'
import CodeSnippet from './CodeSnippet.jsx'

const Template = ({content}) => {

    return (
        <div className="flex flex-col mt-12 border-t border-gray-200 py-8">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'text':
                        return (
                            <p key={index} className="whitespace-pre-line text-black/80 mb-6 mt-4 ">
                                {block.value}
                            </p>
                        );

                    case 'code':
                        return (
                            <CodeSnippet
                                key={index}
                                code={block.value}
                                language={block.language}
                                className="mb-2"
                            />
                        );

                    case 'link':
                        return <LinkFetch key={index} url={block.url} className="mb-2" />;

                    case 'title':
                        return (
                            <p key={index} className="whitespace-pre-line text-base md:text-xl font-semibold text-black/80">
                                {block.value}
                            </p>
                        )

                    case 'img':
                        return (
                                <img src={block.url}
                                     alt={block.alt || ''}
                                     className="w-full lg:w-1/2 h-auto object-cover rounded-t-2xl border border-black/80"
                                />
                        )

                    case 'caption':
                        return (
                            <div className="w-full lg:w-1/2 h-auto border border-black/80 rounded-b-2xl py-4 pl-2 border-t-0 mb-2">
                                <p className="text-gray-400">{block.value}</p>
                            </div>
                        )

                    default:
                        return null;
                }
            })}
        </div>
    )
}
export default Template
