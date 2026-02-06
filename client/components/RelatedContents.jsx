import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import posts from '../data/posts.js'

import 'swiper/css';
import 'swiper/css/pagination';

const RelatedContents = ({post}) => {
    const series = post.series

    const contents = posts.filter((content, index) =>
        content.series === series
    )
    const contentsArray = Object.values(contents);

    return (
        <div className="mb-12">
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
                                <p className="text-black/80 font-semibold">{content.series}</p>
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
                                <p className="text-black/80 font-semibold">{content.series}</p>
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
                                <p className="text-black/80 font-semibold">{content.series}</p>
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
                                <p className="text-black/80 font-semibold">{content.series}</p>
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
