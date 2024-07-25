import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './groupVocationalCarousel.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const GroupVocationalTrainingCarousel = () => {
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
                className="groupVocational-mySwiper"
            >
                <SwiperSlide className="groupVocational-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/groupVocationalTraining/carousels/photo_2022-11-25_12-13-33.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="groupVocational-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/groupVocationalTraining/carousels/photo_2022-11-25_12-13-20.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="groupVocational-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/groupVocationalTraining/carousels/photo_2022-11-25_12-13-26.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="groupVocational-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/groupVocationalTraining/carousels/photo_2022-11-25_12-13-33.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="groupVocational-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/groupVocationalTraining/carousels/photo_2022-11-25_12-13-20.jpg' alt='' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="groupVocational-mySwiper-slides">
                    <div>
                        <img src='/images/trainingServices/groupVocationalTraining/carousels/photo_2022-11-25_12-13-26.jpg' alt='' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default GroupVocationalTrainingCarousel