import React, { useEffect, useRef, useState } from 'react';
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


    const [openModalId, setOpenModalId] = useState(null); // Track the ID of the open modal

    const toggleModal = (id) => {
        // If modal is open for the same ID, close it, otherwise open the modal for the new ID
        setOpenModalId(openModalId === id ? null : id);
    };

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
                {/* <div className='about-board-content'>
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
                </div> */}

                {/* Writeup */}
                <div className='about-board-writeup'>
                    {/* Button with image and text */}
                    <button className="modal-button" onClick={() => toggleModal(1)}>
                        <img src="/images/about/boardOfDirectors/binay-pandey.png" alt="Director" className="button-image" />
                        <div className="button-text">
                            <p>Dr. Binay Prakash Pandey</p>
                            <span>
                                Chairman & CEO
                            </span>
                        </div>

                    </button>

                    {/* Modal Box */}
                    {openModalId === 1 && (
                        <div className="modal">
                            <div className="modal-content">
                                <div className="modal-left">
                                    <img src="/images/about/boardOfDirectors/binay-pandey.png" alt="Left Content" className="modal-image" />
                                </div>
                                <div className="modal-right">
                                    <h1>Dr. Binay Prakash Pandey</h1>
                                    <h4>Chairman & CEO</h4>
                                    <p>
                                        At Ecomen Mining Pvt. Ltd., our mission to drive sustainable and innovative solutions in the mining and environmental sectors led with passion and expertise by our Chairman and CEO, Dr. Binay Prakash Pandey. With a distinguished career spanning over three decades, Dr. Pandey has been a cornerstone in advancing Environmental Impact Assessment (EIA) and technical area management, setting new benchmarks in the industry.
                                    </p>
                                    <p>
                                        Dr. Pandey's journey is marked by a strong academic foundation and an unwavering commitment to environmental stewardship. He earned his PhD in eco-friendly iron ore mining from the Indian School of Mines (IIT) Dhanbad, reflecting his dedication to integrating sustainable practices into mining operations. His qualifications also include M.Tech in Environment from IIT Dhanbad, an MBA in Management from Indira Gandhi National Open University, and a B.Tech degree in Mining from NITK Surathkal. This diverse educational background provides him with a comprehensive understanding of both technical and managerial aspects, equipping him to lead with both insight and strategic vision.
                                    </p>
                                    <p>
                                        In his role as Chairman and CEO since 2020, Dr. Pandey has played a pivotal role in steering Ecomen Mining Pvt. Ltd. towards excellence. His leadership has been instrumental in securing critical Forest Clearance proposals in obtaining Stage-I & II approvals for major iron ore mining projects, including those with renowned organizations such as KIOCL, TATA Steel, Kirloskar Ferrous Industries Ltd., NMDC, SAIL, JSW, RAMCO, Karnataka Power Corporation Ltd., etc. His strategic oversight ensures that our operations not only meet but exceed industry standards in environmental and forest management.
                                    </p>
                                    <p>
                                        Before joining Ecomen Mining Pvt. Ltd., Dr. Pandey, served as Senior Vice President at JSW Steel – Tornagallu region in Sandur (Karnataka) where he managed all the EHS (Environment, Health, and Safety) site activities, Head of Mining Projects and complex forest diversion proposals, and at KIOCL Limited, where he was key in safety management for one of Asia’s largest mining projects. His contributions to Environmental Impact Assessment include pioneering frameworks for noise monitoring, air quality, hydrology and ground water conservation and mitigation, designing noise and vibration attenuation systems, and developing green belt plans to address environmental impacts.
                                    </p>
                                    <p>
                                        Dr. Pandey’s commitment to continuous improvement is evident from his training in Leadership and Change Management at IIM-Ahmedabad, highlighting his dedication to effective and progressive management.
                                    </p>
                                    <p>
                                        As a life member of the Federation of Indian Mineral Institutions and the Mining Engineers Association of India, and a member of the Institute of Engineers India, Dr. Pandey remains deeply connected to the professional community, furthering his mission of advancing industry standards and practices.
                                    </p>
                                    <p>
                                        Under Dr. Pandey’s leadership, Ecomen Mining Pvt. Ltd. continues to thrive as a leader in sustainable mining practices and environmental management. His extensive expertise and strategic vision make him an invaluable asset to our organization and the broader industry.
                                    </p>
                                    <h4>Looking Ahead</h4>
                                    <p>
                                        At Ecomen Mining Pvt. Ltd., we are dedicated to driving innovation and sustainability in our projects. Our commitment to environmental management and technical excellence remains steadfast as we navigate the challenges and opportunities in our industry. I am proud to lead a team that shares this vision and look forward to our continued success in achieving sustainable growth and operational excellence.
                                    </p>
                                    <p>
                                        Thank you for your interest in Ecomen Mining Pvt. Ltd. we are excited about the future and our role in shaping a more sustainable and advancing industry standards and practices in mining industry.
                                    </p>
                                    <button className="close-button" onClick={() => toggleModal(1)}>
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Button with image and text */}
                    <button className="modal-button" onClick={() => toggleModal(2)}>
                        <img src="/images/about/boardOfDirectors/Anil-editednew.jpg" alt="Director" className="button-image" />
                        <div className="button-text">
                            <p>ANIL KUMAR KARNATI</p>
                            <span>
                                Director (FINANCE)
                            </span>
                        </div>

                    </button>

                    {/* Modal Box */}
                    {openModalId === 2 && (
                        <div className="modal">
                            <div className="modal-content">
                                <div className="modal-left">
                                    <img src="/images/about/boardOfDirectors/Anil-editednew.jpg" alt="Left Content" className="modal-image" />
                                </div>
                                <div className="modal-right">
                                    <h1>ANIL KUMAR KARNATI</h1>
                                    <h4>Director (FINANCE)</h4>
                                    <p>
                                        Mr. Anil Kumar Karnati, 46, has been the Director (Finance) of Ecomen Mining Private Limited since September 30, 2020. With a degree and over 20 years of experience in mining and infrastructure, he exemplifies resilience and visionary leadership. Rising from humble beginnings, Mr. Anil overcame financial hardships to become a prominent figure in the business world, known for his strategic foresight and empathetic leadership style.
                                    </p>
                                    <p>
                                        His hands-on approach has driven numerous successful projects, demonstrating his ability to transform challenges into opportunities. Under his guidance, Ecomen has established itself as an industry leader, focused on excellence and collaboration. Additionally, Mr. Anil serves as CEO and Director of MSR Projects and Minerals Pvt. Ltd. in Hyderabad, where his leadership has led to project success and profitability.
                                    </p>
                                    <p>
                                        Mr. Anil's journey from adversity to leadership inspires aspiring entrepreneurs and highlights the importance of perseverance and innovation. His commitment to integrity and teamwork continues to shape the company's success and legacy.
                                    </p>
                                    <button className="close-button" onClick={() => toggleModal(2)}>
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
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
