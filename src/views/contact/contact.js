import React, { useRef, useEffect, useState } from "react";
import './contact.css';
import { Map, GoogleApiWrapper, } from 'google-maps-react'; //Marker


import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const formatAddress = (address) => {
    return address.replace(/Ecomen Laboratories Pvt. Ltd\./g, '<strong>Ecomen Laboratories Pvt. Ltd.</strong>');
};

const mapStyles = {
    width: '100%',
    height: '500px',
};

// Default center (you can adjust it to your needs)
const defaultCenter = {
    lat: 20.593683,
    lng: 78.962883,
};

const locations = [
    { lat: 13.0415014, lng: 77.5357647, address: `Ecomen Laboratories Pvt. Ltd. Jakkur Rd. above CSC Aadhar Centre, MCHS layout, Jakkur, Bangalore – 560064, Karnataka.` },
    { lat: 26.8945146, lng: 80.9430027, address: `Ecomen Laboratories Pvt. Ltd. B – 1/8, 2nd Floor, Sector-H, Aliganj, Lucknow – 226024, Uttar Pradesh, India.` },
    { lat: 14.4602484, lng: 78.8265604, address: `Ecomen Laboratories Pvt. Ltd. D.No. 1/2277, First Floor, Above Bandhan Bank, APHB Colony Rajiv Park Road, Kadapa – 516001, YSR Kadapa Distrist, Andhra Pradesh` },
    { lat: 17.4453611, lng: 78.3790556, address: `Ecomen Laboratories Pvt. Ltd. 1-95/5/125 & 126 Patrikanagar, Madhapur – 500081, Hyderabad` },
    { lat: 25.6168071, lng: 85.1195223, address: `Ecomen Laboratories Pvt. Ltd. Ground Floor, Saraswati Apartment, West Boring Canal Road, Patna – 800001, Bihar.` },
    { lat: 22.0398182, lng: 85.4234849, address: `Ecomen Laboratories Pvt. Ltd. Plot # 868, Baneikala Basti, near Block Chhaka, PO Baneikala, PS JODA, Keonjhar, Odisha – 758038.` },
];


const Contact = (props) => {

    const mapRef = useRef();
    const [address, setAddress] = useState("");

    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            // .sendForm('service_hpo3esy', 'template_inq2jkb', form.current, {
            //     publicKey: 'e70SHpBXhK2elvQum',
            // })
            .sendForm('service_key', 'template_key', form.current, {
                publicKey: 'public_key',
            })
            .then(
                (response) => {
                    // console.log(response)
                    alert('Your data submitted successfully!');
                    navigate('/contact');
                },
                (error) => {
                    alert('Please Fill Mandatory Fields', error.text);
                },
            );
        e.target.reset();
    };


    useEffect(() => {
        if (mapRef.current) {
            const google = props.google;
            const map = mapRef.current.map;

            locations.forEach((location) => {
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-red-location-mark-png-image_9229394.png',
                    scaledSize: new google.maps.Size(64, 64),
                    animation: google.maps.Animation.DROP,
                });

                marker.addListener('mouseover', () => {
                    setAddress(location.address);
                });

                marker.addListener('mouseout', () => {
                    setAddress("");
                });

                let scale = 1;
                let growing = true;

                setInterval(() => {
                    scale = growing ? scale + 0.1 : scale - 0.1;
                    growing = scale >= 1.2 ? false : (scale <= 1 ? true : growing);

                    marker.setIcon({
                        url: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-red-location-mark-png-image_9229394.png',
                        scaledSize: new google.maps.Size(64 * scale, 64 * scale)
                    });
                }, 500); // Adjust speed as needed
            });
        }
    }, [props.google]);


    return (
        <div>
            <section className='contact'>
                <div className='contact-heading'>
                    <h1>Contact Us</h1>
                </div>
                <div className='contact-info'>
                    <div className='contact-info-address'>
                        <h2>Head Office</h2>
                        <h3>Address</h3>
                        <p>
                            Ecomen laboratories Pvt. Ltd.<br />
                            Jakkur Rd. above CSC Aadhar <br />
                            Centre, MCHS layout, Jakkur, <br />
                            Bangalore – 560064,<br />
                            Karnataka.
                        </p>
                        <div className='contact-info-address-contact'>
                            <p>
                                <span>Phone: </span> +91-080-29533368
                            </p>
                            <p>
                                <span>Email: </span>
                                <a href='mailto:info@ecomen.in'>support@ecomen.in</a>
                                /
                                <a href='mailto:contactus@ecomen.in'> contactus@ecomen.in</a>
                            </p>
                        </div>
                    </div>
                    <div className='contact-info-map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84626.88996369312!2d77.52462200976663!3d13.045493740286563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19c21dd7ca91%3A0x45945dffff221e2c!2sEcomen%20Laboratories%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721813555337!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Ecomen Laboratories Pvt Ltd Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Our Branch Offices */}
            <section className='contact-offices'>
                <div className='contact-offices-heading'>
                    <h1>Our Branch Offices</h1>
                </div>

                <div className='contact-offices-branch'>
                    <div className='contact-offices-branch-1'>
                        <div>
                            <h4>HYDERABAD</h4>
                            <p>
                                Ecomen laboratories Pvt. Ltd.<br />
                                1-95/5/125 & 126 Patrikanagar,<br />
                                Madhapur – 500081,<br />
                                Hyderabad
                            </p>
                            <div>
                                <p>
                                    <span>Phone: </span> +91 90006 56782 / 90006 56781
                                </p>
                                <p>
                                    <span>Email: </span> anil.karnati@ecomen.in
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84626.88996369312!2d77.52462200976663!3d13.045493740286563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19c21dd7ca91%3A0x45945dffff221e2c!2sEcomen%20Laboratories%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721813555337!5m2!1sen!2sin"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Ecomen Laboratories Pvt Ltd Location"
                            ></iframe> */}
                        </div>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <div>
                            <h4>LUCKNOW</h4>
                            <p>
                                Ecomen Laboratories Pvt. Ltd. <br />
                                B – 1/8, 2nd Floor, Sector-H, <br />
                                Aliganj, Lucknow – 226024, <br />
                                Uttar Pradesh, India.
                            </p>
                            <div>
                                <p>
                                    <span>Phone: </span> +91-0522-4079201 / 2746282
                                </p>
                                <p>
                                    <span>Email: </span> support@ecomen.in
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14233.131702516654!2d80.94300269999994!3d26.894514599999983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d2a7d5f735%3A0x3f9c32ca59a5df2f!2sECOMEN%20MINING%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1726116924153!5m2!1sen!2sin"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Ecomen Laboratories Pvt Ltd Location"
                            >
                            </iframe> */}
                        </div>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <div>
                            <h4>KADAPA</h4>
                            <p>
                                Ecomen Laboratories Pvt. Ltd.<br />
                                D.No. 1/2277, First Floor, Above Bandhan Bank,<br />
                                APHB Colony Rajiv Park Road,<br />
                                Kadapa – 516001,<br />
                                YSR Kadapa Distrist, Andhra Pradesh
                            </p>
                            <div>
                                <p>
                                    <span>Phone: </span> +91 70756 94671
                                </p>
                                <p>
                                    <span>Email: </span> kadapa@ecomen.in
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15453.701379398339!2d78.8265604!3d14.4602484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37385a52e3883%3A0xcc38cc0838c2726b!2sEcomen%20Laborataries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726117057907!5m2!1sen!2sin"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Ecomen Laboratories Pvt Ltd Location"
                            >
                            </iframe> */}
                        </div>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <div>
                            <h4>JODA</h4>
                            <p>
                                Ecomen Laboratories Pvt. Ltd.<br />
                                Plot # 868, Baneikala Basti, near<br />
                                Block Chhaka, PO Baneikala, PS <br />
                                JODA, Keonjhar, Odisha – 758038.
                            </p>
                            <div>
                                <p>
                                    <span>Phone: </span> +91 62814 93367
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.686587711963!2d85.42698861493285!3d22.00233498547366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6ff9d9ed10847%3A0x474de4a1b26e2b12!2sEcomen%20Laboratories%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1694507699426!5m2!1sen!2sin"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Ecomen Laboratories Pvt Ltd Location"
                            >
                            </iframe> */}
                        </div>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <div>
                            <h4>PATNA</h4>
                            <p>
                                Ecomen Laboratories Pvt. Ltd. <br />
                                Ground Floor, Saraswati Apartment, <br />
                                West Boring Canal Road, <br />
                                Patna – 800001, Bihar.
                            </p>
                            <div>
                                <p>
                                    <span>Phone: </span> +91 70756 94671
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14390.568322518395!2d85.1195223!3d25.6168071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59113d937c39%3A0xbb2a0d5995f219fe!2sECOMEN%20LABORATORIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1726117176111!5m2!1sen!2sin"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Ecomen Laboratories Pvt Ltd Location"
                            >
                            </iframe> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-location'>
                <div className='contact-location-heading'>
                    <h1>Our Office Locations</h1>
                </div>
                <div className='map-container'>
                    <Map
                        google={props.google}
                        zoom={5}
                        style={mapStyles}
                        initialCenter={{
                            lat: defaultCenter.lat,
                            lng: defaultCenter.lng,
                        }}
                        ref={mapRef}
                    >
                        {/* {locations.map((location, index) => (
                            <Marker
                                key={index}
                                position={{ lat: location.lat, lng: location.lng }}
                                icon={{
                                    url: 'https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-red-location-mark-png-image_9229394.png',// Replace with your icon URLs
                                    scaledSize: new props.google.maps.Size(64, 64), // Adjust the size of the icon
                                    className: 'blink-zoom-icon'
                                }}
                            />
                        ))} */}
                    </Map>
                </div>
                {address && (
                    <div className='address-display'>
                        <p dangerouslySetInnerHTML={{ __html: formatAddress(address) }} />
                    </div>
                )}
            </section>
            <div className='contact-divideline'></div>

            {/* Send us a Message */}
            <section className='contact-message'>
                <div className='contact-message-heading'>
                    <h1>Send us a Message</h1>
                </div>

                <div className='contact-message-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type='text'
                            name='user_firstname'
                            placeholder='First Name'
                            id='firstname'
                            required
                        />
                        <input
                            type='text'
                            name='user_lastname'
                            placeholder='Last Name'
                            id='lastname'
                            required
                        />
                        <input
                            type='text'
                            name='user_mobile'
                            placeholder='10 digit mobile number'
                            id='mobile'
                            required
                        />
                        <input
                            type='email'
                            name='user_email'
                            placeholder='Email'
                            id='email'
                            required
                        />
                        <input
                            type='text'
                            name='company'
                            placeholder='Company Name'
                            id='company'
                            required
                        />
                        <input
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            id='subject'
                            required
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            id='message'
                            required
                        />
                        <button type='submit' value="Send">SEND MESSAGE</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHQdswRmIJvci7ZZkQhbjBcgJ2JJ5UdV8', // Replace with your Google Maps API key
})(Contact)
