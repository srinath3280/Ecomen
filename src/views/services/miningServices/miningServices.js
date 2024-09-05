import React, { useRef, useEffect } from 'react';
import './miningServices.css';

const MiningServices = () => {

    // Our Services Animation Start
    const MServiceRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
            MServiceRefs.current.forEach(ref => {
                const MServiceTop = ref.getBoundingClientRect().top;

                if (MServiceTop < triggerBottom) {
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
    // Our Services Animation End

    return (
        <div>
            <section className='miningServices'>
                <div className='miningServices-heading'>
                    <h1>Mining Services</h1>
                </div>
                <div className='miningServices-content'>
                    <div className='miningServices-content-left'>
                        <img src='/images/services/miningServices/Mining-Services-scaled.jpg' alt='' />
                    </div>
                    <div className='miningServices-content-right'>
                        <p>
                            India is blessed with abundant mineral resources, and the country’s regulatory policies recognize these minerals as a key resource for the development of the nation. These mineral resources play an important role in giving a competitive edge to the Indian industries. Also, India has set up ambitious development targets which are in line with the internationally declared commitments of the country. These targets need to be taken into account for holistic development of the mineral sector on a sustainable basis.
                        </p>
                        <p>
                            India has large reserves of Iron Ore, Bauxite, Chromium, Manganese Ore, Baryte, Rare Earth and Mineral Salts. With the launch of the National Mineral Policy 2019, India presents a major opportunity for investors. <br />
                            Our Mining Engineers and Geologists have vast experience in providing services related to the Mining Industry, which involves evaluation, design, development and technical management of mining projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='miningServices-services'>
                <div className='miningServices-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='miningServices-services-list'>
                    <div data-direction="top" ref={el => MServiceRefs.current[0] = el}>
                        <img src='/images/services/miningServices/mine-feasibility-study.jpg' alt='' />
                        <a href='/mine-feasibility-study'>Mine Feasibility Study</a>
                    </div>
                    <div data-direction="right" ref={el => MServiceRefs.current[1] = el}>
                        <img src='/images/services/miningServices/geology-and-mineral-exploration.jpg' alt='' />
                        <a href='/geology-mineral-exploration'>Geology & Mineral Exploration</a>
                    </div>
                    <div data-direction="bottom" ref={el => MServiceRefs.current[2] = el}>
                        <img src='/images/services/miningServices/mining-plan.jpg' alt='' />
                        <a href='/mining-plan'>Mining Plan</a>
                    </div>
                    <div data-direction="left" ref={el => MServiceRefs.current[3] = el}>
                        <img src='/images/services/miningServices/Mining-audit.jpg' alt='' />
                        <a href='/mining-audit'>Mine Audit</a>
                    </div>
                    <div data-direction="bottom" ref={el => MServiceRefs.current[4] = el}>
                        <img src='/images/services/miningServices/RR-Plan-Implementation.jpg' alt='' />
                        <a href='/rr-plan-implementation'>R&R Planning & Implementation</a>
                    </div>
                    <div data-direction="right" ref={el => MServiceRefs.current[5] = el}>
                        <img src='/images/services/miningServices/mining-digitization.jpg' alt='' />
                        <a href='/mine-digitization'>Mine Digitization</a>
                    </div>
                    <div data-direction="top" ref={el => MServiceRefs.current[6] = el}>
                        <img src='/images/services/miningServices/mining-survey.jpg' alt='' />
                        <a href='/surveying'>Surveying</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MiningServices
