import React from 'react';
import './pressCoverage.css';
import PressCoverageCarousel from './pressCoverageCarousel/pressCoverageCarousel';

const PressCoverage = () => {
    return (
        <div>
            <section className='pressCoverage'>
                <div className='pressCoverage-heading'>
                    <h1>Press Coverage</h1>
                </div>
                <div className='pressCoverage-content'>
                    <p>
                        On October 8, 2022, Hon’ble, <strong> Dr Daya Shanker Mishra </strong>, Minister of State [Independent Charge] – Ayush, Food and Drugs Administration inaugurated the office of Ecomen Food Safety and Health Private Limited, located at <strong>First Floor Hall, H . NO B-1/8, Sector – H, Aliganj, Lucknow.</strong> <br/>
                        On the occasion , Hon’ble <strong>Shri Ramesh Chandra Tripathi,</strong> MLA – Badlapur , Uttar Pradesh was present as Guest of Honor. <strong>Shri Binay Prakash Pandey,</strong> Director of the company welcomed the Chief Guest and Guest of Honor with flowers. During his welcome address he informed that Ecomen Food Safety and Health Private Limited may be the first private food testing company in Uttar Pradesh. He also conveyed the objective of establishing this company :
                        The objects to be pursued by Ecomen Food Safety and Health Private Limited are:—
                    </p>
                    <ul>
                        <li>
                            To study and provide safety standards and solutions using scientific approach by conducting surveys and special studies and providing certification in the areas of safety of the food and health industry.
                        </li>
                        <li>
                            To establish and run laboratories/workshops for sampling and assessment / Testing [Physical, Chemical and Biological] of food and to carry out the business as Technical Advisors or consultants on all matters in order to support our clients for achieving quality and safety standards and also to mitigate risks in terms of health & safety.
                        </li>
                        <li>
                            Sampling and analysis of various environmental components which include air, water, wastewater, noise, soil/sediments, sludge & solid waste and to
                            carry out the business as Technical Advisors or consultants to reduce risks and improve our clients’ performance, in terms of quality, health, safety, environmental protection.
                        </li>
                        <li>
                            To undertake all type of statutory clearances, compliance and safety audits to provide end to end solutions for Food, Health, Safety and Environmental Pollution.
                        </li>
                        <li>
                            To collaborate & deal with Equipments & accessories related with field of Food, Health, Safety & Environment.
                        </li>
                        <li>
                            To undertake Research and Development work in the area of Food, Safety, Health and Environment.
                        </li>
                        <li>
                            To undertake Digitisation in the field of Food, Safety, Health and Environment
                        </li>
                    </ul>
                    <p>
                        Ecomen Food Safety and Health Private Limited is sister company of Ecomen Laboratories Pvt Ltd, which is +30 years old company in the field of Environment, Mining and Forest.
                        <br />
                        On the occasion other Director, Ms Khushboo Dubey and investor Mr Anil Karnati were also present.
                    </p>
                </div>
                <div>
                    <PressCoverageCarousel></PressCoverageCarousel>
                </div>
            </section>

            <section className='pressCoverage-magazine'>
                <div className='pressCoverage-magazine-heading'>
                    <h1>
                        Green Consultants & Environmental Consultants Special –
                        <br />
                        December 2021 – Consultants Review Magazine
                    </h1>
                </div>
                <div className='pressCoverage-magazine-image'>
                    <img src='/images/pressCoverage/Green-Consultants-Environmental-Consultants-Special-December-2021-ConsultantsReview-Magazine-1.png' alt='' />
                </div>
            </section>

            {/* Events */}
            <section className='pressCoverage-events'>
                <div className='pressCoverage-events-heading'>
                    <h1>Events</h1>
                </div>
                <div className='pressCoverage-events-content1'>
                    <p>
                        <strong>ECOMEN Group Vocational Training Centre (GVTC)</strong> had the privilege of exhibiting at the Mines Safety Observance Week organized by <strong>Karnataka State Minerals Corporation Limited (KSMCL)</strong> and <strong>Mines Safety Association Karnataka (MSAK)</strong> Zone 3 at Vijnana Bhavan, University of <strong>Mysore</strong>, on the 4th of December 2022. Our team was delighted to talk about various services that we offer and highlight what we do at our Group Vocational Training Centre. It was a wonderful experience interacting with participants and visitors about our customized Training Programmes, Simulator Courses, end-to-end Mining Solutions and so much more.
                    </p>
                    <div className='pressCoverage-events-content1-image'>
                        <img src='/images/pressCoverage/GVTC-Mysore-Collage-1536x1229.png' alt='' />
                    </div>
                </div>
                <div className='pressCoverage-events-divideline'></div>
                <div className='pressCoverage-events-content2'>
                    <p>
                        We, ECOMEN Laboratories Pvt. Ltd. had the opportunity to exhibit at the conference on <strong>‘Iron and Steel and Coal – Emerging Trends and Challenges’, organized by FIMI, Federation of Indian Mineral Industries.</strong> The event was conducted on 15th and 16th of Januray 2023 at the HITEX International Convention and Exhibition Centre, Hyderabad. It was an absolute pleasure to discuss various services that we offer, with the visitors and other guests at the event.
                    </p>
                    <div className='pressCoverage-events-content2-image'>
                        <img src='/images/pressCoverage/ECOMEN-and-Reactore-@-FIMI-Conference-in-Hyderabad.png' alt='' />
                    </div>
                </div>
                <div className='pressCoverage-events-divideline'></div>
                <div className='pressCoverage-events-content3'>
                    <p>
                        Team <strong>ECOMEN</strong> is delighted to have successfully completed a 6-day Residential Training Programme for <strong>Geologists</strong> from the <strong>DMG Offices</strong>, Karnataka, from 27th March 2023 to 1st May 2023. Mixed with engaging sessions, field visits, practical applications and more – this was a great learning experience for not just participants but also the Training team at ECOMEN. We received extremely promising feedback from all participants and are even more energized and motivated to support the Mining and associated sectors with such customized programmes.
                    </p>
                    <div className='pressCoverage-events-content3-image'>
                        <img src='/images/pressCoverage/IMG-20230331-WA0006-1536x1023.jpg' alt='' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PressCoverage
