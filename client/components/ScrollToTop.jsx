import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = ({ post }) => {
    const [hide, setHide] = useState(false)
    const [showList, setShowList] = useState(false)
    const index = post.blogContent.index

    useEffect(() => {
        const footer = document.getElementById('footer')
        if (!footer) return

        const observer = new IntersectionObserver(
            ([entry]) => setHide(entry.isIntersecting),
            { threshold: 0 }
        )

        observer.observe(footer)
        return () => observer.disconnect()
    }, [])

    if (hide) return null

    const handleClick = (e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div
            className="fixed bottom-8 right-6 z-[9999] flex flex-col items-end"
            onMouseLeave={() => setShowList(false)}
        >
            {/* PARENT BOX */}
            <div
                className={`
          bg-white p-4 rounded-2xl shadow-lg
          flex flex-col items-end gap-2
          transition-all duration-200
          ${showList
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
            >
                <ul className="flex flex-col items-end gap-2">
                    {index.map((item, i) => (
                        <li key={i}>
                            <a
                                className="underline text-black/80 text-right"
                                href={`#section-${i + 1}`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    className="underline text-black/80 text-right"
                    href={"#section-realatedContents"}
                >Related Contents</a>
            </div>

            {/* BUTTON */}
            <button
                className="
                group
          mt-2
          w-12 h-12 rounded-full
          bg-white border border-black
          hover:bg-black
          flex items-center justify-center
          transition
        "
                onClick={handleClick}
                onMouseEnter={() => setShowList(true)}
            >
                <ArrowUp className="w-6 text-black group-hover:text-white" />
            </button>
        </div>
    )
}

export default ScrollToTop
