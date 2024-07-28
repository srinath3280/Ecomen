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
                    <div className='ourproject-swiperSlide-image'>
                        <img src='/images/home/ourProjects/Picture1a.png' alt='' />
                    </div>
                    <div className='ourproject-swiperSlide-content'>
                        <p>
                            <span>Client Name: </span>
                            NMDC Limited
                        </p>
                        <p>
                            <span>Location: </span>
                            Bailadila Iron Ore Mine Kirandul Complex,
                            South Baster Dantewada District,
                            Chhattisgarh.
                        </p>
                        <p>
                            <span>Scope of Work: </span>
                            Obtaining Environment Clearnces from MOEF&CC
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='ourproject-swiperSlide'>
                    <div className='ourproject-swiperSlide-image'>
                        <img src='/images/home/ourProjects/project2a.png' alt='' />
                    </div>
                    <div className='ourproject-swiperSlide-content'>
                        <p>
                            <span>Client Name: </span>
                            Lance Anpara Power Limited
                        </p>
                        <p>
                            <span>Location: </span>
                            Anpara in Sonbhadra District (Uttar Pradesh)
                        </p>
                        <p>
                            <span>Scope of Work: </span>
                            Environment Monitoring Services (2021-2022). Which involves:
                            <ul>
                                <li>Stack Monitoring,</li>
                                <li>Sewage Treatment,</li>
                                <li>Ash Water Recycling System,</li>
                                <li>Ambient Air Quality,</li>
                                <li>Drinking Water,</li>
                                <li>Ground Water,</li>
                                <li>Soil Quality & Coal Sampling</li>
                            </ul>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='ourproject-swiperSlide'>
                    <div className='ourproject-swiperSlide-image'>
                        <img src='/images/home/ourProjects/project3a.png' alt='' />
                    </div>
                    <div className='ourproject-swiperSlide-content'>
                        <p>
                            <span>Client Name: </span>
                            JSW Iron Ore Mines
                        </p>
                        <p>
                            <span>Location: </span>
                            9 Mines in Bellary District (Karnataka)
                        </p>
                        <p>
                            <span>Scope of Work: </span>
                            Environment Monitoring Services (2021-2022). Which involves:
                            <ul>
                                <li>Stack Monitoring,</li>
                                <li>Surface Water,</li>
                                <li>Ambient Noise Monitoring,</li>
                                <li>Ambient Air Quality,</li>
                                <li>Ground Water,</li>
                                <li>Soil Quality & Fugitive Dust Monitoring</li>
                            </ul>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='ourproject-swiperSlide'>
                    <div className='ourproject-swiperSlide-image'>
                        <img src='/images/home/ourProjects/project4a.png' alt='' />
                    </div>
                    <div className='ourproject-swiperSlide-content'>
                        <p>
                            <span>Client Name: </span>
                            NTPC
                        </p>
                        <p>
                            <span>Location: </span>
                            Shaktinagar (Uttar Pradesh)
                        </p>
                        <p>
                            <span>Scope of Work: </span>
                            Environment Monitoring Services (2021-2022). Which involves:
                            <ul>
                                <li>Stack Monitoring,</li>
                                <li>Surface Water,</li>
                                <li>Ambient Noise Monitoring,</li>
                                <li>Ambient Air Quality,</li>
                                <li>Personal Exposure to Noise,</li>
                                <li>Soil Quality & Blasting Vibration</li>
                            </ul>
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ProjectCarousel
