import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import posts from '../data/posts.jsx'
import { NavLink } from "react-router-dom";
import { MoveUpRight } from 'lucide-react'

import 'swiper/css';
import 'swiper/css/pagination';

const RelatedContents = ({post}) => {
    const series = post.series

    const contents = posts.filter((content, index) =>
        content.series === series
    )
    const contentsArray = Object.values(contents);

    return (
        <div id="section-realatedContents">
            <p className="text-xl text-black/80 font-semibold mb-4 border-t border-gray-400 pt-6 mt-12">Related Contents</p>

            {/*mobile*/}
            <div className="w-auto md:hidden h-86">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-86"
                >
                    {
                        contentsArray.map((content, index) => (
                            <SwiperSlide key={index}>
                                <img src={content.thumbnail} className="w-full h-64 object-cover" />
                                    <NavLink
                                        className="text-black/80 font-semibold underline mt-2 inline-flex group mt-2"
                                        to={`/${content.slug}`}
                                    >
                                        {content.series}
                                        <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                    group-hover:opacity-100
                                    group-hover:translate-y-0"
                                        />
                                    </NavLink>
                                <p className="text-black/80 text-sm">{content.title}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/*tablet-md*/}
            <div className="w-auto hidden md:block lg:hidden h-86">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-86"
                >
                    {
                        contentsArray.map((content, index) => (
                            <SwiperSlide key={index}>
                                <img src={content.thumbnail} className="w-full h-64 object-cover" />
                                <NavLink
                                    className="text-black/80 font-semibold mt-2 underline inline-flex group"
                                    to={`/${content.slug}`}
                                >
                                    {content.series}
                                    <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                    group-hover:opacity-100
                                    group-hover:translate-y-0"
                                    />
                                </NavLink>
                                <p className="text-black/80 text-sm">{content.title}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/*tablet-lg*/}
            <div className="w-auto hidden lg:block xl:hidden h-86">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-86"
                >
                    {
                        contentsArray.map((content, index) => (
                            <SwiperSlide key={index}>
                                <img src={content.thumbnail} className="w-full h-64 object-cover" />
                                <NavLink
                                    className="text-black/80 font-semibold mt-2 underline inline-flex group"
                                    to={`/${content.slug}`}
                                >
                                    {content.series}
                                    <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                    group-hover:opacity-100
                                    group-hover:translate-y-0"
                                    />
                                </NavLink>
                                <p className="text-black/80 text-sm">{content.title}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/*desktop-xl*/}
            <div className="w-auto hidden xl:block h-86 mb-10">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-96"
                >
                    {
                        contentsArray.map((content, index) => (
                            <SwiperSlide key={index}>
                                <img src={content.thumbnail} className="w-full h-64 object-cover" />
                                <NavLink
                                    className="text-black/80 font-semibold underline mt-2 inline-flex group"
                                    to={`/${content.slug}`}
                                >
                                    {content.series}
                                    <MoveUpRight className="w-4 opacity-0 translate-y-1 transition
                                    group-hover:opacity-100
                                    group-hover:translate-y-0"
                                    />
                                </NavLink>
                                <p className="text-black/80 text-sm">{content.title}</p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default RelatedContents
