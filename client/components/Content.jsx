import React from 'react'
import TemplateImg from "./TemplateImg.jsx";
import TemplateNoImg from "./TemplateNoImg.jsx";
import Issued from "./Issued.jsx";
import RelatedContents from "./RelatedContents.jsx";
import Footer from "../pages/Footer.jsx";
import { MoveUpRight } from 'lucide-react'

const Content = ({post}) => {
    const title = post.blogContent.title;
    const subtitle = post.blogContent.subtitle;
    const thumbnail = post.blogContent.thumbnail;
    const index = post.blogContent.index;
    const contents = post.blogContent.contents;
    const introduction = post.blogContent.contents["Introduction"];
    const introTitle = introduction.title;
    const introContent= introduction.content;
    const sections = Object.entries(post.blogContent.contents)
        .filter(([key, value]) => key !== "Introduction");

    console.log(post); //Leave this for debugging.
    console.log(sections);

    return (
        <div className="w-screen h-auto mt-16 p-4 md:p-8">
            <Issued post={post} />
            <div className="px-0 md:px-8 py-4">
                <section id="section-1" className="scroll-mt-24">
                    <p className="text-5xl md:text-7xl text-black/80 mb-6 font-semibold">{title}</p>
                    <p className="text-base md:text-lg text-black/80 mb-8 ">{subtitle}</p>
                    <img src={thumbnail} alt="thumbnail" className="w-full md:w-auto md:h-124 object-cover mb-12" />
                    <div className="w-full h-auto flex flex-row gap-16 flex-wrap">
                        <div className="mr-48">
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
                                        <MoveUpRight className="opacity-0 group-hover:opacity-100 w-4"/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
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
                                {section.contentImg.length === 0
                                    ? <TemplateNoImg content={section}/>
                                    : <TemplateImg content={section}/>
                                }
                            </section>
                        )
                    })
                }
            </div>
            <RelatedContents post={post} />
            <Footer />
        </div>
    )
}
export default Content
