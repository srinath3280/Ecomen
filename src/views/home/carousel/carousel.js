import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './carousel.css';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeCarousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div style={{ marginTop: '100px' }}>
            {/* <h1>Home</h1> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className="swiperSlide">
                    <img src='/images/home/carousels/Enviroment-Monitoring.jpg' alt='' />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src='/images/home/carousels/nabl-1.gif' alt='' />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src='/images/home/carousels/MOEFCC.gif' alt='' />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src='/images/home/carousels/Ecomen_GVTC_Simulators-1.gif' alt='' />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    )
}

export default HomeCarousel