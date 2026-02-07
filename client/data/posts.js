import CodeSnippet from "../components/CodeSnippet.jsx";
import LinkFetch from "../components/LinkFetch.jsx";
import {MoveUpRight} from "lucide-react";
import React from "react";

export default [
    {
        category: 'React',
        slug: 'howIBuiltThisBlogPart1',
        series: 'How I Built This Blog',
        title: 'Part1. Planning & Designing a Blog-Type Website.',
        skills: ['React', 'Figma'],
        date: '2026/02/07',
        thumbnail: 'https://images.pexels.com/photos/381949/pexels-photo-381949.jpeg',
        blogContent: {
            title: "How I Built This Blog",
            subtitle: "Part1. Planning & Designing a Blog-Type Website.",
            thumbnail: "https://images.pexels.com/photos/381949/pexels-photo-381949.jpeg",
            index: ["Introduction", "Overall Structure", "Using Figma", "Detailed Code Planning"],
            contents: {
                "Introduction": {
                    title: "Introduction to Blog-Type Website Planning",
                    content:
                        "If you’re just getting started with building websites, feeling overwhelmed is basically part of the process.\n" +
                        "There’s so much to think about, and it’s not always clear where to begin.\n" +
                        "There are a million ways to build a website, app, or software. In this post, I’m sharing how I personally plan and design small, personal projects like this blog.\n"
                },
                "Overall Structure": {
                    content: [
                        {
                          type: 'title',
                          value: 'Designing the overall structure'
                        },
                        {
                            type: 'text',
                            value: `
                            For personal projects, I don’t start with long documents or strict workflows. 
                            I usually jump straight into visual inspiration. 
                            Seeing real layouts helps me figure out what I want way faster than planning everything on paper.
                            `,
                        },
                        {
                            type: 'img',
                            url: 'https://i.ibb.co/Q4vQf5f/post1.png',
                            alt: 'my inspiration board',
                            caption: 'This is the inspiration board I used while designing the blog.'
                        },
                        {
                            type: 'text',
                            value: `
                            I’d definitely recommend checking out this site for inspiration. 
                            There’s nothing wrong with seeing how other professionals built their projects, 
                            especially when you’re just starting out.
                            `,
                        },
                        {
                            type: 'ulLink',
                            title: 'Websites for inspiration',
                            items: [
                                {
                                    label: 'Dribbble',
                                    description: 'Great for UI ideas and layout inspiration.',
                                    url: 'https://dribbble.com/'
                                },
                                {
                                    label: 'Figma Community',
                                    description: 'Tons of free templates you can actually use.',
                                    url: 'https://www.figma.com/community'
                                },
                                {
                                    label: 'Awwwards',
                                    description: 'Super cool designs, but many of them are way too complex for beginners. ' +
                                        'I usually just like to get graphic inspiration.',
                                    url: ''
                                }
                            ]
                        },
                        {
                            type: 'text',
                            value: `
                            In this step, you need to decide what kind of contents you actually want on your blog.     
                            `
                        },
                        {
                            type: 'quote',
                            value: [`" Do I want people to subscribe to my blog? "`, `" Do I need a comment section...? "`],
                        },
                        {
                            type: 'text',
                            value: `
                            Then you move on to what I call a "Rough Sketch".
                            `
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/PzQWRgQ8/post2.jpg",
                            alt: "rough Sketch",
                            caption: 'Is this too rough?'
                        },
                    ],
                },
                "Using Figma": {
                    content: [
                        {
                            type: 'title',
                            value: 'Figma makes the job x10 easier'
                        },
                        {
                            type: 'link',
                            value: 'https://www.figma.com'
                        },
                        {
                            type: 'text',
                            value: `There are a lot of free templates that already follow decent design rules, and once you get used to reading Figma files as a developer, your workflow becomes so much easier. Spacing, colors, fonts. Everything is already there.`
                        },
                        {
                            type: 'text',
                            value: `I’m not going to break down every Figma feature here, 
                            but I’ve written a separate post about how programmers can pull the info they actually need from Figma design files:`
                        },
                        {
                            type: 'link',
                            value: 'https://www.figma.com'
                        },
                    ],
                },
                "Detailed Code Planning": {
                    content: [
                        {
                            type: 'title',
                            value: `Should I worry about how I'm actually going to build this at this stage?`
                        },
                        {
                            type: 'text',
                            value: "You're mostly going to overthink about the project as a beginner,\n" +
                                "I'm telling you, if you're a true beginner, nothing will go as you planned. 😌\n" +
                                "So to give you the short answer, "
                        },
                        {
                            type: 'emphasis',
                            value: 'YES ———'
                        },
                        {
                            type: 'text',
                            value: "if you are an experienced programmer and knows exactly how everything is going to turn out, "
                        },
                        {
                            type: 'emphasis',
                            value: 'NO ———'
                        },
                        {
                            type: 'text',
                            value: "as a beginner.\n" + "\n" +
                                "You're almost always going to figure out a better way to approach the problems, and you'll have to change your plan everytime. "
                        },
                        {
                            type: 'text',
                            value: "So my advice would be"
                        },
                        {
                            type: 'ul',
                            title: '',
                            items: [
                                {
                                    label: 'Build first',
                                    description: '',
                                },
                                {
                                    label: 'Learn as you go',
                                    description: '',
                                },
                                {
                                    label: 'Refactor later & Review',
                                    description: '',
                                }
                            ]
                        },
                        {
                            type: 'text',
                            value: "Planning while you code, and reviewing afterward, is how real learning happens."
                        },
                        {
                            type: 'text',
                            value: "I actually had to rewrite most of my code when I was building this blog."
                        },
                        {
                            type: 'text',
                            value: "I used simple destructuring and returned the blog contents from the data to render everything.\n" +
                                "Then I realised this is never going to work, and my data file would be too complicated.\n" +
                                "So I decided to use Switch/Case statement to properly render everything."
                        },
                        {
                            type: 'code',
                            language: 'javascript',
                            value: `
//My Code Before
const Template = ({content}) => {
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
                            `,
                        },
                        {
                            type: 'code',
                            language: 'javascript',
                            value: `
//My Code After
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
                                <img src={block.url}
                                     alt={block.alt || ''}
                                     className="w-full lg:w-1/2 h-auto object-cover rounded-t-2xl border border-black/80"
                                />
                                <div className="w-full lg:w-1/2 h-auto bg-black rounded-b-2xl py-2 md:py-4 px-4 border-t-0">
                                    <p className="text-gray-300 italic">{block.caption}</p>
                                </div>
                            </div>
                        )

                    default:
                        return null;
                }
            })}
        </div>
    )
}
                            `,
                        },
                        {
                            type: 'text',
                            value: `I probably would have to change the way I render the blog post as time moves on, but for small blog like I have now, I think this is going to be enough. `
                        },
                    ],
                },
            }
        },
    },
]