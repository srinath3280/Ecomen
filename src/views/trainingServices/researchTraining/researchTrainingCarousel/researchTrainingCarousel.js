import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './researchTrainingCarousel.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const ResearchTrainingCarousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="researchTraining-mySwiper"
            >
                <SwiperSlide className="researchTraining-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/researchTraining/carousels/photo_2022-11-25_12-11-41.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="researchTraining-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/researchTraining/carousels/photo_2022-11-25_12-11-48.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="researchTraining-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/researchTraining/carousels/photo_2022-11-25_12-11-52.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="researchTraining-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/researchTraining/carousels/photo_2022-11-25_12-11-41.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="researchTraining-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/researchTraining/carousels/photo_2022-11-25_12-11-48.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="researchTraining-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/researchTraining/carousels/photo_2022-11-25_12-11-52.jpg' alt='' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default ResearchTrainingCarousel