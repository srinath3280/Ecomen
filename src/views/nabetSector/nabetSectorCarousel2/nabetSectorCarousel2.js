import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './nabetSectorCarousel2.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const NABETSectorCarousel2 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="nabetSectorCarousel2-mySwiper"
            >
                <SwiperSlide className="nabetSectorCarousel2-mySwiper-slides">
                    <img src='/images/home/clients/best-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel2-mySwiper-slides">
                    <img src='/images/home/clients/magic-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel2-mySwiper-slides">
                    <img src='/images/home/clients/Sree-Sumangala-150x150.png' alt='' />
                </SwiperSlide>

                <SwiperSlide className="nabetSectorCarousel2-mySwiper-slides">
                    <img src='/images/home/clients/best-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel2-mySwiper-slides">
                    <img src='/images/home/clients/magic-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel2-mySwiper-slides">
                    <img src='/images/home/clients/Sree-Sumangala-150x150.png' alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default NABETSectorCarousel2