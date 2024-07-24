import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './clientCarousel.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const ClientCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
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
                className="client-mySwiper"
            >
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/acc-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/coal-india-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/best-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/Bharat-petroleum-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/magic-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/balco-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/hal-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/heidelbern-cment-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/hp-1-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/indian-bureau-of-mines-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/indian-oil-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/indian-railways-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/jindal-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/jrt-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/jsw-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/lafarge-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/lanco-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/nerolac-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/nhpc-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/omc-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/nmdc-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/pepsico-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/ntpc-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/prism-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/reliance-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/resize-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/rungta-group-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/Sree-Sumangala-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/tata-steel-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/top-chem-cement-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/upal-150x150.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className="client-mySwiper-slides">
                    <img src='/images/home/clients/visaka-150x150.png' alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default ClientCarousel