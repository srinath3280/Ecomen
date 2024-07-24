import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './aboutCarousel.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const AboutCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="about-mySwiper"
            >
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/The-Team-scaled.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/Office-scaled.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/Office-Discussion-scaled.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/MOU-signing-with-IIT-Kanpur.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/The-Team.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/Ecomen-Marathon-Sponsor.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className='about-swiperSlide'>
                    <img src='/images/about/galleryCarousel/Our-Laboratory-scaled.jpg' alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default AboutCarousel
