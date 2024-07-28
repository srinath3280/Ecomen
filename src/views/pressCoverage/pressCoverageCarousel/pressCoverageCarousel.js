import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './pressCoverageCarousel.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const PressCoverageCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="pressCoverage-mySwiper"
            >
                <SwiperSlide className="pressCoverage-mySwiper-slides">
                    <div>
                        <img src='/images/pressCoverage/1-768x511.jpeg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pressCoverage-mySwiper-slides">
                    <div>
                        <img src='/images/pressCoverage/2-768x511.jpeg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pressCoverage-mySwiper-slides">
                    <div>
                        <img src='/images/pressCoverage/3-768x511.jpeg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pressCoverage-mySwiper-slides">
                    <div>
                        <img src='/images/pressCoverage/4-768x511.jpeg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pressCoverage-mySwiper-slides">
                    <div>
                        <img src='/images/pressCoverage/5-768x511.jpeg' alt='' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default PressCoverageCarousel