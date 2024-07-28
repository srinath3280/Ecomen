import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './nabetSectorCarousel3.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const NABETSectorCarousel3 = () => {
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
                className="NABETSectorCarousel3-mySwiper"
            >
                <SwiperSlide className="NABETSectorCarousel3-mySwiper-slides">
                    <img src='/images/home/clients/jrt-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="NABETSectorCarousel3-mySwiper-slides">
                    <img src='/images/home/clients/upal-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="NABETSectorCarousel3-mySwiper-slides">
                    <img src='/images/home/clients/visaka-150x150.png' alt='' />
                </SwiperSlide>

                <SwiperSlide className="NABETSectorCarousel3-mySwiper-slides">
                    <img src='/images/home/clients/jrt-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="NABETSectorCarousel3-mySwiper-slides">
                    <img src='/images/home/clients/upal-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="NABETSectorCarousel3-mySwiper-slides">
                    <img src='/images/home/clients/visaka-150x150.png' alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default NABETSectorCarousel3