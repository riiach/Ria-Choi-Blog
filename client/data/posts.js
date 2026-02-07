export default [
    {
        category: 'React Native',
        slug: 'howToBuildLogoDetectionAppPart1',
        series: 'How to Build Logo Detection App',
        title: 'Part1. How to Design overall structure and process for your app building.',
        skills: ['React Native', 'TailWind CSS', 'Figma'],
        date: '2021/04/02',
        thumbnail: 'https://images.pexels.com/photos/381949/pexels-photo-381949.jpeg',
        blogContent: {
            title: "How to Build Logo Detection App",
            subtitle: "Part1. How to Design overall structure and process for your app building.",
            thumbnail: "https://images.pexels.com/photos/381949/pexels-photo-381949.jpeg",
            index: ["Introduction", "Overall Design", "Using Figma", "Detailed Code Planning"],
            contents: {
                "Introduction": {
                    title: "Introduction to overall designing.",
                    content: "When you're just starting out building your website, it’s completely normal\n" +
                        "to feel overwhelmed. In this post, I’ll walk through how I built my blog.",
                },
                "Overall Design": {
                    content: [
                        {
                          type: 'title',
                          value: 'How to design app building.'
                        },
                        {
                            type: 'text',
                            value: `
                            When you're just starting out building your website, it’s completely normal
                            to feel overwhelmed. In this post, I’ll walk through how I built my blog.
                            `,
                        },

                        {
                            type: 'code',
                            language: 'javascript',
                            value: `
                            import express from 'express';
                                
                            const app = express();
                                
                            app.get('/', (req, res) => {
                              res.send('Hello world');
                            });
                                
                            app.listen(3000);
                            `,
                        },

                        {
                            type: 'link',
                            url: 'https://react.dev',
                        },

                        {
                            type: 'text',
                            value: `
                            This setup gave me a clean development experience and room to grow later.
                            `,
                        },
                        {
                            type: 'img',
                            url: "https://images.pexels.com/photos/381949/pexels-photo-381949.jpeg",
                            alt: "thumbnail"
                        },
                        {
                            type: 'caption',
                            value: "This img shows that..."
                        }
                    ],
                },
                "Using Figma": {
                    title: "Good Design tools makes the job x100 easier - Figma",
                    content: [],
                },
                "Detailed Code Planning": {
                    title: "Should I worry about how I actually going to make this at this stage?",
                    content: [],
                }
            }
        },
    },
]