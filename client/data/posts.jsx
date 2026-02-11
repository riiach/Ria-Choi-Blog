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
            index: ["Introduction", "Overall Structure", "Using Figma", "Detailed Code Planning", "Navigation Planning"],
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
                            I’d definitely recommend checking out these websites for inspiration. 
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
                            url: 'https://www.figma.com'
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
                            type: 'img',
                            url: 'https://i.ibb.co/0pKSQ0SD/figma.png',
                            alt: 'my figma workspace',
                            caption: 'As you can see, figma file helped me a lot building this blog.'
                        },
                        {
                            type: 'link',
                            url: 'https://riachoiblog.riachoi.com/usingFigmaAsAProgrammerPart1'
                        },
                    ],
                },
                "Detailed Code Planning": {
                    content: [
                        {
                            type: 'title',
                            value: `Should I worry about how I'm actually going to build at this stage?`
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
                                "You're almost always going to figure out better ways to approach the problems, and you'll have to change your plan each time. "
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
                            value: `I probably would have to change the way I render the blog post as the project grows, but for small blog like I have now, I think this is going to be enough. `
                        },
                    ],
                },
                "Navigation Planning": {
                    content: [
                        {
                            type: 'title',
                            value: 'How do I plan where every button and link leads to?'
                        },
                        {
                            type: 'text',
                            value: `You don’t need a detailed plan at this stage, 
                        but I strongly recommend using a flowchart before you start building anything.`
                        },
                        {
                            type: 'text',
                            value: `You can check out the link below on my post about what is a flowchart.`
                        },
                        {
                            type: 'link',
                            url: 'https://riachoiblog.riachoi.com/mappingYourWebsiteJourneyFlowChart'
                        },
                        {
                            type: 'text',
                            value: `If you’re not a computer science major, don’t worry. 
                        Your flowchart doesn’t need to look professional or use fancy tools. 
                        What matters is having a clear plan for navigation. It can be as simple as writing each step on paper or sketching boxes and arrows to visualize the user journey.`
                        },
                        {
                            type: 'text',
                            value: `You can see my flowchart below, it tells how every action triggers another.`
                        },
                        {
                            type: 'img',
                            url: 'https://i.ibb.co/rRtpC7d5/Blog-Home-Page-Flow-Chart.png',
                            alt: 'my figma workspace',
                            caption: 'This is just for the home page on my blog website.'
                        },
                    ]
                }
            },
        },
    },
    {
        category: 'Development',
        slug: 'usingFigmaAsAProgrammerPart1',
        series: 'Using Figma as a programmer',
        title: 'Getting Resources from Figma',
        skills: ['Figma','Development', 'React Native'],
        date: '2026/02/10',
        thumbnail: 'https://i.ibb.co/G3nJJGyL/getting-Resources-On-Figma-Main.png',
        blogContent: {
            title: "Using Figma as a programmer",
            subtitle: "Getting Resources from Figma",
            thumbnail: "https://i.ibb.co/G3nJJGyL/getting-Resources-On-Figma-Main.png",
            index: ["Introduction", "Figma Community", "Work Space", "Getting Resources"],
            contents: {
                "Introduction": {
                    title: "Introduction to Getting Resources from Figma",
                    content: (
                        <>
                            As a beginner in programming, you probably came across Figma.
                            <br />
                            Figma is a web-based design tool people use to design websites, mobile apps,
                            and UI/UX interfaces—and collaborate on them in real time.
                            <br />
                            Figma is so popular in the industry for numerous reasons: It runs in the browser,
                            provides real-time collaboration and most important for programmers, it's{" "}
                            <span className="italic">developer-friendly.</span>
                        </>
                    )
                },
                "Figma Community": {
                    content: [
                        {
                            type: 'title',
                            value: "Let’s get started with the Figma Community"
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    There are tons of free templates you can find on the Figma Community and Marketplace.
                                    <br />
                                    But today, we’re going to look specifically for React Native templates.
                                    <br /><br />
                                    <span className="italic">You can click the link below to go over to Figma Community.</span>
                                </>
                            )
                        },
                        {
                            type: 'link',
                            url: 'https://www.figma.com/ko-kr/community'
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    The first thing you’ll see on the website is the search bar and a variety of templates.
                                    <br/>
                                    You can browse the community for inspiration.
                                    <br/>
                                    After looking around for a while, click on the search bar and type “React Native.”
                                    <br/>
                                    You can find almost any resource you need for web and app development on Figma.
                                </>
                            )
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/MyTZW5cn/getting-Resources-On-Figma1.png",
                            alt: "figma community",
                            caption: 'Type "react native" on the search bar.'
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/99mwqBFh/getting-Resources-On-Figma2.png",
                            alt: "search result",
                            caption: 'There are many templates you can use for free.'
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/7dTwtkDs/getting-Resources-On-Figma3.png",
                            alt: "open in figma",
                            caption: 'Click "Open in Figma"'
                        },
                        {
                            type: 'text',
                            value: 'In this post, we\'re going to use Argon React Native template by Creative Tim.'
                        }
                    ]
                },
                "Work Space": {
                    content: [
                        {
                            type: 'title',
                            value: "Welcome to the Workspace!"
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    The first thing you will see on the top left is a side bar for navigating through <span className="font-semibold">pages and layers.</span>
                                    <br/>
                                    If you want to know more about what is pages and layers, I strongly advise you to check
                                    out <a className="underline font-semibold italic" href="https://help.figma.com/hc/en-us/sections/23691657321239" target="_blank">Figma Learn</a>.
                                    <br/>
                                    They support courses and projects you can easily start with with no cost or subscription!
                                    <br/><br/>
                                    Now, let's get back to the pages and layers side bar. Today, we'll only be looking into a page called "Screens"
                                </>
                            )
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/k2ZR3DQ7/getting-Resources-On-Figma4.png",
                            alt: "workspace sidebar",
                            caption: ''
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/9mYBKwfz/getting-Resources-On-Figma8.png",
                            alt: "screens",
                            caption: 'You can find real time screen designs.'
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/QFdGW1Fm/getting-Resources-On-Figma5.png",
                            alt: "screens",
                            caption: (
                                <>
                                    You will also see
                                    <br/>
                                    a frame with components.
                                </>
                            )
                        },

                    ]
                },
                "Getting Resources": {
                    content: [
                        {
                            type: 'title',
                            value: 'Getting Resources on Figma'
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    In the previous chapter, we talked about frames that contain <span className="font-semibold">components. </span>
                                    <br/>
                                    Most of the information you need to build your app will be found within the frame.
                                    If you click on the text under Typography, you can view the font details and save them for later
                                    when setting up your <span className="italic">CSS</span> or <span className="italic">Tailwind configuration.</span>
                                </>
                            )
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/mCL0VhP9/getting-Resources-On-Figma6.png",
                            alt: "font details",
                            caption: ''
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    You can also find how to style spacing and layouts in the file.
                                    <br/>
                                    Just click the component you want to use and look for <span className="font-semibold">"Layout".</span>
                                </>
                            )
                        },
                        {
                            type: 'img',
                            url: "https://i.ibb.co/LhYd2GK6/getting-Resources-On-Figma10.png",
                            alt: "font details",
                            caption: ''
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/><br/>
                                    One of the most important parts of using Figma is understanding what <span className="font-semibold">components </span> are.
                                    <br/>
                                    If you want to learn more about components, you can check out Figma's official course on components.
                                </>
                            )
                        },
                        {
                            type: 'link',
                            url: 'https://help.figma.com/hc/en-us/articles/30984647753751-FD4B-Components-fundamentals'
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/><br/>
                                    Now, we’ll <span className="font-semibold">export the assets</span> we need directly from the file.
                                    This is one of the most convenient features Figma offers.
                                    You can export any element you see on the screen at no extra cost.
                                </>
                            )
                        },
                        {
                            type: 'img',
                            url: 'https://i.ibb.co/gFwhQNgj/getting-Resources-On-Figma12.png',
                            alt: 'figma export',
                            caption: (
                                <>
                                    Just look at the very bottom of the right sidebar,<br/> and you’ll find it.
                                </>
                            )
                        }

                    ]
                },
            }
        }
    },
    {
        category: 'Development',
        slug: 'mappingYourWebsiteJourneyFlowChart',
        series: 'Mapping Your Website Journey',
        title: 'Guide to FlowCharts with Mermaid',
        skills: ['Mermaid FlowChart', 'Development'],
        date: '2026/02/11',
        thumbnail: 'https://images.pexels.com/photos/6991831/pexels-photo-6991831.jpeg',
        blogContent: {
            title: "Mapping Your Website Journey",
            subtitle: "Guide to FlowCharts with Mermaid",
            thumbnail: "https://images.pexels.com/photos/6991831/pexels-photo-6991831.jpeg",
            index: ["Introduction", "About Flowchart", "About Mermaid", "Getting Started", "Features", "Implementations", "Cheat Sheet"],
            contents: {
                "Introduction": {
                    title: "Introduction to FlowCharts with Mermaid",
                    content: (
                        <>
                            Building a website without a proper plan is like going on a road trip without a map.
                            <br/>You might eventually get somewhere, but you'll take a few wrong turns along the way!
                            <br/>That's where flowcharts come to the rescue. Think of them as your friendly GPS for web development.
                            <br/>Today, we're going to dive in about how flowcharts can make your coding journey much easier!
                        </>
                    )
                },
                "About Flowchart": {
                    content: [
                        {
                            type: "title",
                            value: "Why Flowcharts are Your Best Friend"
                        },
                        {
                            type: "text",
                            value: "While there are many ways to plan a project, flowchart offers distinct advantages when used effectively."
                        },
                        {
                            type: 'ul',
                            title: '',
                            items: [
                                {
                                    label: 'See the Big Picture',
                                    description: 'Imagine how your users will move through your site, from the moment they land to when they hit that "buy" button',
                                },
                                {
                                    label: 'Stay Organized',
                                    description: 'Keep all your pages and content nicely structured',
                                },
                                {
                                    label: 'Plan the Tricky Stuff',
                                    description: 'Figure out all those "what if" scenarios, like what happens when someone forgets their password',
                                },
                                {
                                    label: 'Explain Your Ideas',
                                    description: 'Show your team or clients what you\'re thinking without confusing technical jargon'
                                },
                                {
                                    label: 'Catch Problems Early',
                                    description: 'Spot potential hiccups before you\'ve written tons of code'
                                },
                            ]
                        }
                    ]
                },
                "About Mermaid": {
                    content: [
                        {
                            type: 'title',
                            value: 'So, What\'s This Mermaid?'
                        },
                        {
                            type: 'text',
                            value: 'Mermaid is basically magic for making diagrams!' +
                                'Instead of clicking and dragging shapes around, you just write a few lines of simple code, and that\'s it!'
                        },
                        {
                            type: 'link',
                            url: 'https://mermaid.js.org/'
                        }
                    ]
                },
                "Getting Started": {
                    content: [
                        {
                            type: 'title',
                            value: 'Let\'s Start making!'
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <span className="text-lg font-semibold">The Basics</span>
                                    <br/>Here's what a simple Mermaid flowchart looks like!
                                </>
                            )
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
graph TD
    A[Start] --> B[Process]
    B --> C{Decision}
    C -->|Yes| D[Action 1]
    C -->|No| E[Action 2]
    D --> F[End]
    E --> F
                            `
                        },
                        {
                            type: 'ul',
                            title: 'Break Down',
                            items: [
                                {
                                    label: 'graph TD',
                                    description: 'A flowchart that goes from top to bottom'
                                },
                                {
                                    label: 'A[Start]',
                                    description: 'Creates a box with the word "Start" in it'
                                },
                                {
                                    label: '-->',
                                    description: 'Arrow connecting boxes'
                                },
                                {
                                    label: 'C{Decision}',
                                    description: 'Makes a diamond shape for yes/no questions'
                                },
                                {
                                    label: '|Yes|',
                                    description: 'Puts a label on the arrow so people know which path they\'re following'
                                },
                            ]
                        },
                        {
                            type: 'img',
                            url: 'https://i.ibb.co/Nd5gTN0x/mermaid1.png',
                            alt: 'mermaid basic',
                            caption: 'The result'
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/><br/>
                                    <span className="text-lg font-semibold">Mix it up with Different Shapes</span>
                                    <br/>Mermaid has different shapes for different purposes. It's like having different tools in your toolbox.
                                </>
                            )
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
graph LR
    A[Rectangle - Process]
    B(Rounded Rectangle - Start/End)
    C{Diamond - Decision}
    D([Stadium - Alternative Process])
    E[[Subroutine]]
    F[(Database)]
    G((Circle))
                            `
                        },
                        {
                            type: 'img',
                            alt: 'Mermaid Shapes',
                            url: 'https://i.ibb.co/G4XM8tzw/mermaid2.png',
                            caption: ''
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/><br/>
                                    <span className="text-lg font-semibold">Real life examples</span>
                                    <br/>Let's see how this works with actual website features you might build.
                                </>
                            )
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
//User Sign-Up Flow                            
graph TD
    Start([User Visits Registration Page]) --> Form[Fill Registration Form]
    Form --> Submit{Submit Form}
    Submit --> Validate{Validate Input}
    Validate -->|Invalid| Error[Display Error Messages]
    Error --> Form
    Validate -->|Valid| CheckEmail{Email Already Exists?}
    CheckEmail -->|Yes| EmailError[Show Email Exists Error]
    EmailError --> Form
    CheckEmail -->|No| CreateAccount[Create User Account]
    CreateAccount --> SendEmail[Send Verification Email]
    SendEmail --> Success[Show Success Message]
    Success --> Redirect[Redirect to Dashboard]
    Redirect --> End([Registration Complete])                            
                            `
                        },
                        {
                            type: 'img',
                            alt: 'Mermaid Sign Up',
                            url: 'https://i.ibb.co/bgwFqsfw/mermaid3.png',
                            description: ''
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
//Online Shopping Checkout                           
graph TD
    Start([User Clicks Checkout]) --> CheckAuth{User Logged In?}
    CheckAuth -->|No| Login[Redirect to Login]
    Login --> CheckAuth
    CheckAuth -->|Yes| Cart{Cart Has Items?}
    Cart -->|No| Empty[Show Empty Cart Message]
    Empty --> End([Return to Shop])
    Cart -->|Yes| Shipping[Enter Shipping Info]
    Shipping --> Payment[Enter Payment Details]
    Payment --> Validate{Validate Payment}
    Validate -->|Failed| PaymentError[Show Payment Error]
    PaymentError --> Payment
    Validate -->|Success| Process[Process Order]
    Process --> Confirmation[Show Order Confirmation]
    Confirmation --> Email[Send Confirmation Email]
    Email --> Complete([Order Complete])                         
                            `
                        },
                        {
                            type: 'img',
                            alt: 'Mermaid Shopping Cart',
                            url: 'https://i.ibb.co/99z0rd2h/mermaid4.png',
                            description: ''
                        }
                    ]
                },
                "Features": {
                  content: [
                      {
                          type: 'title',
                          value: 'Want to Get Fancy? Try These Cool Features!'
                      },
                      {
                          type: 'text',
                          value: 'You can add colors and styling to make your flowcharts pop'
                      },
                      {
                          type: 'code',
                          language: 'mermaid',
                          value: `                          
graph TD
    A[Start]:::startClass --> B[Process]
    B --> C{Decision}:::decisionClass
    C -->|Yes| D[Success]:::successClass
    C -->|No| E[Error]:::errorClass
    
    classDef startClass fill:#e1f5e1,stroke:#4caf50,stroke-width:3px
    classDef decisionClass fill:#fff3e0,stroke:#ff9800,stroke-width:2px
    classDef successClass fill:#e8f5e9,stroke:#4caf50,stroke-width:2px
    classDef errorClass fill:#ffebee,stroke:#f44336,stroke-width:2px                          
                          `
                      },
                      {
                          type: 'img',
                          alt: 'Mermaid Features color',
                          url: 'https://i.ibb.co/MxjNJz0Y/mermaid5.png',
                          description: ''
                      },
                      {
                          type: 'text',
                          value: 'Grouping Related Stuff Together'
                      },
                      {
                          type: 'code',
                          language: 'mermaid',
                          value: `                          
graph TD
    Start([User Action]) --> Auth
    
    subgraph Auth[Authentication System]
        A1[Check Credentials] --> A2{Valid?}
        A2 -->|No| A3[Lock Account After 3 Attempts]
        A2 -->|Yes| A4[Generate Session Token]
    end
    
    Auth --> Main
    
    subgraph Main[Main Application]
        M1[Load User Dashboard]
        M2[Fetch User Data]
        M3[Display Content]
        M1 --> M2 --> M3
    end
    
    Main --> End([User Session Active])                         
                          `
                      },
                      {
                          type: 'img',
                          alt: 'Mermaid Features group',
                          url: 'https://i.ibb.co/21km1zTp/mermaid6.png',
                          description: ''
                      }
                  ]
                },
                "Implementations": {
                    content: [
                        {
                            type: 'title',
                            value: 'How to Actually Use This Stuff'
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/>
                                    <span className="text-lg font-semibold">In your documentation</span>
                                    <br/>Lots of platforms like GitHub, GitLab, Notion support Mermaid!
                                    <br/>Just wrap your code like this
                                </>
                            )
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
\`\`\`mermaid
graph TD
    A[Start] --> B[End]
\`\`\`                            
                            `
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/>
                                    <span className="text-lg font-semibold">On Your Website</span>
                                </>
                            )
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
    </script>
</head>
<body>
    <div class="mermaid">
        graph TD
            A[Start] --> B[Process]
            B --> C[End]
    </div>
</body>
</html>                        
                            `
                        },
                        {
                            type: 'text',
                            value: (
                                <>
                                    <br/>
                                    <span className="text-lg font-semibold">Using Mermaid in React</span>
                                </>
                            )
                        },
                        {
                            type: 'code',
                            language: 'mermaid',
                            value: `
import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

function FlowChart({ chart }) {
    const ref = useRef(null);
    
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        if (ref.current) {
            mermaid.contentLoaded();
        }
    }, [chart]);
    
    return <div ref={ref} className="mermaid">{chart}</div>;
}              
                            `
                        },
                    ]
                },
                "Cheat Sheet": {
                    content: [
                        {
                            type: 'title',
                            value: 'Quick Cheat Sheet: Mermaid Syntax'
                        },
                        {
                            type: 'ul',
                            title: '',
                            items: [
                                {
                                    label: 'graph TD or graph LR',
                                    description: 'Which direction your flowchart flows'
                                },
                                {
                                    label: 'A[Text]',
                                    description: 'Regular rectangle - for process',
                                },
                                {
                                    label: 'B(Text)',
                                    description: 'Rounded rectangle rectangle - for start/end points',
                                },
                                {
                                    label: 'C{Text}',
                                    description: 'Diamond shape - for yes/no decisions',
                                },
                                {
                                    label: 'D([Text])',
                                    description: 'Stadium shape - rounded ends'
                                },
                                {
                                    label: 'E[[Text]]',
                                    description: 'Subroutine box'
                                },
                                {
                                    label: 'F[(Text)]',
                                    description: 'Database cylinder'
                                },
                                {
                                    label: '-->',
                                    description: 'Regular arrow'
                                },
                                {
                                    label: '-.->',
                                    description: 'Dotted arrow - for optional paths'
                                },
                                {
                                    label: '==>',
                                    description: 'Thick arrow - for emphasis'
                                },
                                {
                                    label: '--Label-->',
                                    description: 'Arrow with a label'
                                }
                            ]
                        },
                        {
                            type: 'img',
                            url: 'https://i.ibb.co/FLCVFDDr/mermaid7.png',
                            alt: 'Mermaid Cheat Sheet',
                            description: 'Example Flowchart'
                        }
                    ]
                },
            }
        }
    }
]