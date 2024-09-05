import React, { useRef, useEffect } from 'react';
import './laboratory.css';

const Laboratory = () => {

    // LaboratoyServices Animation Start
    const LaboratoryRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
            LaboratoryRefs.current.forEach(ref => {
                const LaboratoryTop = ref.getBoundingClientRect().top;

                if (LaboratoryTop < triggerBottom) {
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
    // LaboratoyServices Animation End

    return (
        <div>
            {/* NABL Certified Laboratory */}
            <section className='laboratory'>
                <div className='laboratory-heading'>
                    <h1>NABL Certified Laboratory</h1>
                </div>
                <div className='laboratory-content'>
                    <div className='laboratory-content-left'>
                        <img src='/images/laboratory/Laboratory-Services-scaled.jpg' alt='' />
                    </div>
                    <div className='laboratory-content-right'>
                        <p>
                            Our Environmental Consulting Laboratory provides <strong>reliable</strong> and <strong>accurate</strong> analysis of various environmental elements such as air, water, soil, sludge & solid waste etc. The Laboratory analytical reports have been used for the generation of baseline data which is a part of the <strong>Environmental Impact Assessment</strong> process and also supports <strong>Environmental Audit</strong> and <strong>Environment Monitoring.</strong>
                        </p>
                        <p>
                            Ecomen Laboratories Pvt. Ltd. is a <strong>NABL certified</strong> laboratory with more than 25+ years of experience in this field, and we are proud to announce that we follow the standards of USEPA, BIS, WHO & APHA methods to fulfill the requirements of our clients. We always upgrade the equipment with the newer versions for better and accurate results. Our laboratory is also accredited for mineral and ore tests along with dry fuel (Coke) tests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Laboratory Services */}
            <section className='laboratory-services'>
                <div className='laboratory-services-heading'>
                    <h1>Our Laboratory Services</h1>
                </div>
                <div className='laboratory-services-content'>
                    <div className='laboratory-services-content-image' data-direction="top" ref={el => LaboratoryRefs.current[0] = el}>
                        <img src='/images/laboratory/ourLaboratoryServices/water-testing.jpg' alt='' />
                        <a href='/water-testing'>Water Testing</a>
                    </div>
                    <div className='laboratory-services-content-image' data-direction="left" ref={el => LaboratoryRefs.current[1] = el}>
                        <img src='/images/laboratory/ourLaboratoryServices/soil-testing.jpg' alt='' />
                        <a href='/soil-testing'>Soil Testing</a>
                    </div>
                    <div className='laboratory-services-content-image' data-direction="bottom" ref={el => LaboratoryRefs.current[2] = el}>
                        <img src='/images/laboratory/ourLaboratoryServices/asbestos-testing.jpg' alt='' />
                        <a href='/asbestos-testing'>Asbestos Testing</a>
                    </div>
                    <div className='laboratory-services-content-image' data-direction="right" ref={el => LaboratoryRefs.current[3] = el}>
                        <img src='/images/laboratory/ourLaboratoryServices/ores-and-mineral-testing.jpg' alt='' />
                        <a href='/ores-and-minerals-testing'>Ores and Minerals Testing</a>
                    </div>
                    <div className='laboratory-services-content-image' data-direction="bottom" ref={el => LaboratoryRefs.current[4] = el}>
                        <img src='/images/laboratory/ourLaboratoryServices/coke-and-coal-testing.jpg' alt='' />
                        <a href='/coke-and-coal-testing'>Coke and Coal Testing</a>
                    </div>
                </div>
            </section>


            {/* Laboratory Equipment */}
            <section className='laboratory-equipment'>
                <div className='laboratory-equipment-heading'>
                    <h1>Laboratory Equipment</h1>
                </div>
                <div className='laboratory-equipment-content'>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/ph-meter-removebg-preview.png' alt='' />
                        <a href='/water-testing'>pH Meter</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/flame-photometer.png' alt='' />
                        <a href='/soil-testing'>Flame Photometer</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/digital-colony-counts.png' alt='' />
                        <a href='/asbestos-testing'>Colony Counter</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/cod-digesters.png' alt='' />
                        <a href='/ores-and-minerals-testing'>COD Assembly</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/centrifuge-removebg-preview.png' alt='' />
                        <a href='/coke-and-coal-testing'>Centrifuge</a>
                    </div>

                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/bod-incubator.png' alt='' />
                        <a href='/water-testing'>BOD Incubator</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/bacteriological-incubator.png' alt='' />
                        <a href='/soil-testing'>Bacteriological Incubator</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/microscope.png' alt='' />
                        <a href='/asbestos-testing'>Microscope</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/4-digit-analyticsal-balance-removebg-preview.png' alt='' />
                        <a href='/ores-and-minerals-testing'>Analytical Balance</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/turbidity-meter.png' alt='' />
                        <a href='/coke-and-coal-testing'>Turbidity Meter</a>
                    </div>

                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/spectrophotometer1.png' alt='' />
                        <a href='/water-testing'>Spectrophotometer</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/muffle-furnance.png' alt='' />
                        <a href='/soil-testing'>Muffle Furnance</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/atomic-absorbtion-spectrometer.png' alt='' />
                        <a href='/asbestos-testing'>Atomic Absorption Spectrophotometer</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/magnetic-stirrers-with-hot-plate.png' alt='' />
                        <a href='/ores-and-minerals-testing'>Magnetic Stirrer</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/ion-seletive-meter2-removebg-preview.png' alt='' />
                        <a href='/coke-and-coal-testing'>Ion Selective Meter</a>
                    </div>

                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/heating-mental.png' alt='' />
                        <a href='/water-testing'>Heating Mantle</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/gas-chromatograph2.png' alt='' />
                        <a href='/soil-testing'>Gas Chromatography</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/conductivity-meter-removebg-preview.png' alt='' />
                        <a href='/asbestos-testing'>Electrical Conductivity Meter</a>
                    </div>
                    <div className='laboratory-equipment-content-image'>
                        <img src='/images/laboratory/laboratoryEquipment/Fuel_Gas_Analyser-removebg-preview.png' alt='' />
                        <a href='/ores-and-minerals-testing'>Magnetic Stirrer</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Laboratory
