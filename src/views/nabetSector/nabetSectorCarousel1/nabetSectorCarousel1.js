import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './nabetSectorCarousel1.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const NABETSectorCarousel1 = () => {
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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="nabetSectorCarousel1-mySwiper"
            >
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/Tata-steel.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/jsw.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/coal-india.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/adani.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/ntpc.svg' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/jsl.webp' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/minera.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/the-hutti-goldmines.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/nmdc.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/client/mines-geology-karnataka.png' alt='' />
                </SwiperSlide>

                {/* <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/clients/jsw-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/clients/lafarge-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/clients/rungta-group-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/clients/tata-steel-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="nabetSectorCarousel1-mySwiper-slides">
                    <img src='/images/home/clients/nmdc-150x150.png' alt='' />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
export default NABETSectorCarousel1