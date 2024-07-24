import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './projectCarousel.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const ProjectCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="ourproject-mySwiper"
            >
                <SwiperSlide className='ourproject-swiperSlide'>
                    <img src='/images/home/ourProjects/Picture1a.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className='ourproject-swiperSlide'>
                    <img src='/images/home/ourProjects/project2a.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className='ourproject-swiperSlide'>
                    <img src='/images/home/ourProjects/project3a.png' alt='' />
                </SwiperSlide>
                <SwiperSlide className='ourproject-swiperSlide'>
                    <img src='/images/home/ourProjects/project4a.png' alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ProjectCarousel
