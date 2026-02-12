import React from 'react'
import LinkFetch from './LinkFetch.jsx'
import CodeSnippet from './CodeSnippet.jsx'
import { MoveUpRight } from 'lucide-react'

const Template = ({content}) => {

    return (
        <div className="flex flex-col mt-12 border-t border-gray-200 py-8">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'text':
                        return (
                            <p key={index} className="whitespace-pre-line text-black/80 mb-6 ">
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
                            <p key={index} className="whitespace-pre-line text-2xl md:text-4xl font-semibold text-black/80 mb-4">
                                {block.value}
                            </p>
                        )

                    case 'img':
                        return (
                            <div className="flex flex-col mb-4">
                                <div className="w-fit max-w-full">
                                    <img
                                        src={block.url}
                                        alt={block.alt || ''}
                                        className={`
                                            max-w-full
                                            max-h-[80vh]
                                            object-contain
                                            border border-black/80
                                            ${block.caption ? "rounded-t-2xl" : "rounded-2xl"}
                                          `}
                                    />

                                    <div
                                        className={`bg-[#FFFF5C] border-x border-b rounded-b-2xl py-1 px-4 
                                                    ${block.caption ? "block" : "hidden"}`}
                                    >
                                        <p className="text-black italic">{block.caption}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    case 'ulLink':
                        return (
                            <div key={index} className="mb-4">

                                {block.title && (
                                    <p className="mb-3 font-semibold text-lg text-black/80">
                                        {block.title}
                                    </p>
                                )}

                                <ul className="space-y-3 pl-4">
                                    {block.items.map((item, i) => (
                                        <li key={i}>
                                            <div className="flex flex-row items-center mb-1 group">
                                                <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
                                                <a
                                                    className="font-semibold text-black/80 underline"
                                                    href={item.url}
                                                    target="_blank"
                                                >{item.label}
                                                </a>
                                                <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                                group-hover:opacity-100
                                                group-hover:translate-y-0"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-600 italic">
                                                {item.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );

                    case 'ul':
                        return (
                            <div key={index} className="mb-4">

                                {block.title && (
                                    <p className="mb-3 font-semibold text-lg text-black/80">
                                        {block.title}
                                    </p>
                                )}

                                <ul className="space-y-3 pl-4">
                                    {block.items.map((item, i) => (
                                        <li key={i}>
                                            <div className="flex flex-row items-center mb-1">
                                                <div className="w-2 h-2 rounded-full bg-black mr-2"></div>
                                                <p className="font-semibold text-black/80">{item.label}</p>
                                            </div>
                                            <p className="text-sm text-gray-600 italic">
                                                {item.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );

                        case 'quote':
                            return block.value.map((item, i) => (
                                <p key={i} className="italic text-gray-400 pl-6 mb-1">
                                    {item}
                                </p>
                            ));

                    case 'emphasis':
                        return (
                            <p className="text-2xl italic text-black/70">{block.value}</p>
                        )

                    default:
                        return null;
                }
            })}
        </div>
    )
}
export default Template
