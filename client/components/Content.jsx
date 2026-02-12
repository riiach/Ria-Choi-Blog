import React from 'react'
import Template from "./Template.jsx";
import Issued from "./Issued.jsx";
import RelatedContents from "./RelatedContents.jsx";
import { MoveUpRight } from 'lucide-react'

const Content = ({post}) => {
    const title = post.blogContent.title;
    const subtitle = post.blogContent.subtitle;
    const thumbnail = post.blogContent.thumbnail;
    const index = post.blogContent.index;
    const introduction = post.blogContent.contents["Introduction"];
    const introTitle = introduction.title;
    const introContent= introduction.content;
    const sections = Object.entries(post.blogContent.contents)
        .filter(([key, value]) => key !== "Introduction");

    console.log(post); //Leave this for debugging.
    console.log(sections);

    return (
        <div className="w-screen h-auto p-4 md:p-8">
            <Issued post={post} />
            <div className="px-0 md:px-8 py-4">
                <section id="section-1" className="scroll-mt-24">
                    <p className="text-5xl md:text-7xl text-black/80 mb-6 font-semibold">{title}</p>
                    <p className="text-base md:text-2xl text-black/80 mb-8 ">{subtitle}</p>
                    <img src={thumbnail} alt="thumbnail" className="w-full md:w-auto md:h-124 object-cover mb-12" />
                    <div className="w-full h-auto flex flex-row gap-16 flex-wrap">
                        <div className="mr-0 md:mr-48">
                            <p className="font-semibold text-base md:text-xl mb-2 text-black/80">Content Index</p>
                            <ul className="list-none pl-2">
                                {
                                    index.map((item, index) => (
                                        <li
                                            key={index}
                                            className="group flex flex-row gap-2"
                                        ><p>{index + 1}</p><a
                                            className="mb-1 underline text-black/80"
                                            href={`#section-${index + 1}`}
                                        >{item}</a>
                                            <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                    group-hover:opacity-100
                                    group-hover:translate-y-0"
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <p className="text-base md:text-xl mb-2 font-semibold text-black/80">{introTitle}</p>
                            <p className="text-black/80">{introContent}</p>
                        </div>
                    </div>
                </section>
                {
                    sections.map(([key, section], index) => {
                        const sectionNumber = index + 2;
                        return (
                            <section
                                key={index}
                                id={`section-${sectionNumber}`}
                                className="scroll-mt-24"
                            >
                                <Template content={section.content}/>
                            </section>
                        )
                    })
                }
            </div>
            <RelatedContents post={post} />
        </div>
    )
}
export default Content
