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
                className="home-mySwiper"
            >
                <SwiperSlide className="home-swiperSlide">
                    <img src='/images/home/carousels/Enviroment-Monitoring.jpg' alt='' />
                    <div>
                        <h1>NABET ACCREDITED</h1>
                        <p>
                            We are certified under the Quality Council of India for Environmental Clearance and Environmental Monitoring.
                        </p>
                        <a href='/service-sectors'>OUR SECTORS</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="home-swiperSlide">
                    <img src='/images/home/carousels/nabl-1.gif' alt='' />
                    <div>
                        <h1>NABL CERTIFIED LABORATORY</h1>
                        <p>
                            Our NABL certified laboratory is equipped for physical and chemical evaluation of basic elements of the environment like air, water, soil and noise.
                        </p>
                        <a href='/laboratory'>OUR LABORATORY</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="home-swiperSlide">
                    <img src='/images/home/carousels/MOEFCC.gif' alt='' />
                    <div>
                        <h1>RECOGNISED BY MOEF&CC</h1>
                        <p>
                            We are certified by the Ministry of Environment, Forest and Climate Change (MoEF&CC) for Environmental Monitoring and Analytical Testing.
                        </p>
                        <a href='/our-services'>OUR SERVICES</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="home-swiperSlide">
                    <img src='/images/home/carousels/Ecomen_GVTC_Simulators-1.gif' alt='' />
                    <div>
                        <h1>GVTC & Research and Training Centre</h1>
                        <p>
                            We are equipped with Simulators and more - aiming to upskill resources at all levels.
                        </p>
                        <a href='/training-services'>Training Services</a>
                    </div>
                </SwiperSlide>
                <div className="home-autoplay-progress" slot="container-end">
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