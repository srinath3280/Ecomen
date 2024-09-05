import React, { useEffect, useRef } from 'react';
import './about.css';
import AboutCarousel from './aboutCarousel/aboutCarousel';

const About = () => {

    // About Animation Start
    const AboutRefs = useRef([]);

    useEffect(() => {

        // Animate the first image immediately on page load
        if (AboutRefs.current[0]) {
            AboutRefs.current[0].classList.add('in-view');
        }

        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 5 * 4;
            AboutRefs.current.forEach(ref => {
                const AboutTop = ref.getBoundingClientRect().top;

                if (AboutTop < triggerBottom) {
                    ref.classList.add('in-view');
                } else {
                    ref.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // About Animation End

    // AboutExpertise Animation Start
    const AboutExpertiseRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
            AboutExpertiseRefs.current.forEach(ref => {
                const AboutExpertiseTop = ref.getBoundingClientRect().top;

                if (AboutExpertiseTop < triggerBottom) {
                    ref.classList.add('in-view');
                } else {
                    ref.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // AboutExpertise Animation End

    return (
        <div>
            <section className='about'>
                <h1 className='about-heading'>About Us</h1>
                <div className='about-content'>
                    <div className='about-content-left'>
                        <h3>We are leading company in Environmental Consulting Services.</h3>
                        <p>
                            Ecomen is a multi-disciplinary, professionally managed, environmental consulting organisation for over 30 years. Ecomen Laboratory has <b>NABET accreditation</b> across  following sectors:
                        </p>
                        <ol>
                            <li>Mining,</li>
                            <li>Thermal power plants,</li>
                            <li>Mineral beneficiation,</li>
                            <li>Metallurgical industries (ferrous & non-ferrous),</li>
                            <li>Cement plants,</li>
                            <li>Asbestos milling and asbestos based products,</li>
                            <li>Synthetic organic chemicals industry,</li>
                            <li>Distilleries,</li>
                            <li>Sugar Industry,</li>
                            <li>Isolated storage & handling of hazardous chemicals,</li>
                            <li>Ports, harbours, break waters and dredging,</li>
                            <li>Highways,</li>
                            <li>Building and construction projects,</li>
                            <li>Townships and Area development projects</li>
                        </ol>
                        <p>
                            Ecomen provides  environmental related  social and economic solutions to companies associated in these sectors. Our scientific approach has enabled us to successfully complete a wide range of assignments to the full satisfaction of our clients.
                        </p>
                        <p>
                            The Ministry of Environment & Forests, Govt. of India has approved Ecomen Laboratories Pvt. Ltd. as a Gazette of India and a notified <b>environmental laboratory</b> under the Environment (Protection) Act, 1986.
                        </p>
                        <p>
                            We also have extensive exposure and experience in conducting surveys and special studies in rural sector.
                        </p>
                    </div>
                    <div className='about-content-right'>
                        <img className='about-content-right-image' src='/images/about/infoSymbols/nabet-1-150x150.jpg' alt='' data-direction="right" ref={el => AboutRefs.current[0] = el} />
                        <img className='about-content-right-image' src='/images/about/infoSymbols/nabl1-150x150.jpg' alt='' data-direction="right" ref={el => AboutRefs.current[1] = el} />
                        <img className='about-content-right-image' src='/images/about/infoSymbols/moefcc-1-150x150.jpg' alt='' data-direction="right" ref={el => AboutRefs.current[2] = el} />
                    </div>
                </div>
            </section>

            <section className='about-text'>
                <div className='about-text-image'>
                    <p>
                        We distinguish ourselves by having outstanding experience, vision and exposure with <br /> Functionality Experts and Specialists.
                    </p>
                </div>
            </section>

            {/* Our Expertise */}
            <section className='about-expertise'>
                <div className='about-expertise-heading'>
                    <h1>Our Expertise</h1>
                </div>
                <div className='about-expertise-images'>
                    <div className='about-expertise-images-1' data-direction="top" ref={el => AboutExpertiseRefs.current[0] = el}>Environmental <br /> Science</div>
                    <div className='about-expertise-images-2' data-direction="right" ref={el => AboutExpertiseRefs.current[1] = el}>Mining</div>
                    <div className='about-expertise-images-3' data-direction="bottom" ref={el => AboutExpertiseRefs.current[2] = el}>Forestry</div>
                </div>
                <div className='about-expertise-buttons'>
                    <a href='/our-services'>OUR SERVICES<i class="bi bi-arrow-right-short"></i></a>
                    <a href='/contact'>CONTACT US<i class="bi bi-arrow-right-short"></i></a>
                </div>
            </section>

            {/* Board Of Directors */}
            <section className='about-board'>
                <div className='about-board-heading'>
                    <h1>Board Of Directors</h1>
                </div>
                <div className='about-board-content'>
                    <div className='about-board-content-image'>
                        <figure>
                            <img src='/images/about/boardOfDirectors/DSC_5721_-_Copy-removebg-preview.png' alt='' />
                        </figure>
                        <h3>Binay Pandey</h3>
                        <p>Chief Executive Officer</p>
                    </div>
                    <div className='about-board-content-image'>
                        <figure>
                            <img src='/images/about/boardOfDirectors/sanjeev_edited.jpg' alt='' />
                        </figure>
                        <h3>Sanjeev Bijapur</h3>
                        <p>Ex Officio Director</p>
                    </div>
                    <div className='about-board-content-image'>
                        <figure>
                            <img src='/images/about/boardOfDirectors/Anil-editednew.jpg' alt='' />
                        </figure>
                        <h3>Anil Karnati</h3>
                        <p>Finance Director</p>
                    </div>
                    <div className='about-board-content-image'>
                        <figure>
                            <img src='/images/about/boardOfDirectors/preeti-edited.jpg' alt='' />
                        </figure>
                        <h3>Preeti Singh</h3>
                        <p>Ex Officio Director</p>
                    </div>
                </div>
            </section>

            {/* EIA Co-Ordinators */}
            <section className='about-eia'>
                <div className='about-eia-heading'>
                    <h1>EIA Co-Ordinators</h1>
                </div>
                <div className='about-eia-content'>
                    <div className='about-eia-content-image'>
                        <figure>
                            <img src='/images/about/eiaCoOrdinators/Binay-edited.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Binay Prakash Pandey</h3>
                            <p>EC - Mining, Mineral benefication, Cement plant</p>
                            <p>FAE - Geo, RH & HG, SHW</p>
                        </div>
                    </div>
                    <div className='about-eia-content-image'>
                        <figure>
                            <img src='/images/about/eiaCoOrdinators/Mr-Ram-Sushil-Mishra.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Ram Sushil Mishra</h3>
                            <p>EC - Metallurgical industries, Cement plants, Synthetic organic chemical industry, Isolated storage & Handling of Hazardous chemicals, Ports, Harbours, break waters and dredging</p>
                            <p>FAE - RH & WP.</p>
                        </div>
                    </div>
                    <div className='about-eia-content-image'>
                        <figure>
                            <img src='/images/about/eiaCoOrdinators/Ms-Akansha-Rampuria.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Akansha Rampuria</h3>
                            <p>EC - Metallurgical industries, Cement plants, Building & Construction & Townships & Area development</p>
                            <p>FAE - AQ, AP, SHW & WP</p>
                        </div>
                    </div>
                    <div className='about-eia-content-image'>
                        <figure>
                            <img src='/images/about/eiaCoOrdinators/Mr-Rajiv-Rastogi-Socio-Economic-Expert.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Rajiv Rastogi</h3>
                            <p>EC - Mining & Asbestos</p>
                            <p>FAE - SE</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Functional Area Experts */}
            <section className='about-funtionalArea'>
                <div className='about-funtionalArea-heading'>
                    <h1>Functional Area Experts</h1>
                </div>
                <div className='about-funtionalArea-content'>
                    <div className='about-funtionalArea-content-image'>
                        <figure>
                            <img src='/images/about/functionalExperts/Mr-Praveen-Dubey-General-Manager.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Praveen Dubey</h3>
                            <p>FAE - AQ, AP,EB</p>
                        </div>
                    </div>
                    <div className='about-funtionalArea-content-image'>
                        <figure>
                            <img src='/images/about/functionalExperts/Ms-Anuradha-Srivastava-Admin-Manager.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Ms. Anuradha</h3>
                            <p>FAE - RH</p>
                        </div>
                    </div>
                    <div className='about-funtionalArea-content-image'>
                        <figure>
                            <img src='/images/about/functionalExperts/Preeti_singh_pic-removebg-previe.png' alt='' />
                        </figure>
                        <div>
                            <h3>Ms. Preeti Singh</h3>
                            <p>FAE - LU</p>
                        </div>
                    </div>
                    <div className='about-funtionalArea-content-image'>
                        <figure>
                            <img src='/images/about/functionalExperts/Mr-Rajneesh-Manager.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Rajneesh</h3>
                            <p>FAE - SW, WP</p>
                        </div>
                    </div>
                    <div className='about-funtionalArea-content-image'>
                        <figure>
                            <img src='/images/about/functionalExperts/Reena_Tripath-removebg-preview-e1623603019716.png' alt='' />
                        </figure>
                        <div>
                            <h3>Ms. Reena Tripathi</h3>
                            <p>Laboratory Manager <br />FAE - WP & SC</p>
                        </div>
                    </div>
                    <div className='about-funtionalArea-content-image'>
                        <figure>
                            <img src='/images/about/functionalExperts/Rama-Shanker-Shukla.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. R S Shukla</h3>
                            <p>FAE - LU, EB</p>
                        </div>
                    </div>
                </div>
            </section >


            {/* Project Management Cell */}
            <section className='about-projectManagement'>
                <div className='about-projectManagement-heading'>
                    <h1>Project Management Cell</h1>
                </div>
                <div className='about-projectManagement-content'>
                    <div className='about-projectManagement-content-image'>
                        <figure>
                            <img src='/images/about/projectManagementCell/Mr.-Aman-Dixit.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Aman Dixit</h3>
                            <p>Project Manager</p>
                        </div>
                    </div>
                    <div className='about-projectManagement-content-image'>
                        <figure>
                            <img src='/images/about/projectManagementCell/Mallika_Brahma-removebg-preview.png' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Brahmaiah</h3>
                            <p>Manager (Geologist)</p>
                        </div>
                    </div>
                    <div className='about-projectManagement-content-image'>
                        <figure>
                            <img src='/images/about/projectManagementCell/Mr-Abhishek-Singh-Quality-Manager.jpg' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Abhishek Singh</h3>
                            <p>Quality Manager</p>
                        </div>
                    </div>
                    <div className='about-projectManagement-content-image'>
                        <figure>
                            <img src='/images/about/projectManagementCell/Murali_Manas-removebg-preview-1.png' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Murali Manas</h3>
                            <p>Mines Manager</p>
                        </div>
                    </div>
                    <div className='about-projectManagement-content-image'>
                        <figure>
                            <img src='/images/about/projectManagementCell/Harshavardhan_Reddy-removebg-preview.png' alt='' />
                        </figure>
                        <div>
                            <h3>Mr. Harshavardhan</h3>
                            <p>Surveyor</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Gallery */}
            <section className='about-gallery'>
                <div className='about-gallery-heading'>
                    <h1>Gallery</h1>
                </div>
                <div className='about-gallery-content'>
                    <AboutCarousel></AboutCarousel>
                </div>
            </section>
        </div >
    )
}

export default About
