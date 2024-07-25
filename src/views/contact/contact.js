import React from 'react';
import './contact.css';

const Contact = () => {

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
                            <strong>Ecomen Laboratories Pvt. Ltd.</strong> <br />
                            B – 1/8, 2nd Floor, Sector-H, Aliganj,<br />
                            Lucknow – 226024, Uttar Pradesh, India.
                        </p>
                        <div className='contact-info-address-contact'>
                            <p>
                                <span>Phone: </span>+91-0522-4079201 / 2746282
                            </p>
                            <p>
                                <span>Email: </span>
                                <a href='mailto:info@ecomen.in'>info@ecomen.in </a>
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
                        <h4>Hyderabad</h4>
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
                    <div className='contact-offices-branch-1'>
                        <h4>Bangalore</h4>
                        <p>
                            Ecomen laboratories Pvt. Ltd.<br />
                            First floor, Sy No. 91/A, Ward No 7, MCHS Jakkur Layout,<br />
                            Jakkur, Bangalore-560064,<br />
                            Karnataka
                        </p>
                        <div>
                            <p>
                                <span>Phone: </span> +91-080-29533368 / +91 9448286155
                            </p>
                            <p>
                                <span>Email: </span> support@ecomen.in
                            </p>
                        </div>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <h4>Kadapa</h4>
                        <p>
                            Ecomen laboratories Pvt. Ltd.<br />
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
                    <div className='contact-offices-branch-1'>
                        <h4>Hospet</h4>
                        <p>
                            Ecomen Laboratories Pvt. Ltd.<br />
                            First Floor, SBI Building, Patel Nagar, Station Road,<br />
                            Hospet – 583201, <br />
                            Karnataka
                        </p>
                        <div>
                            <p>
                                <span>Phone: </span> +91 96320 08362
                            </p>
                            <p>
                                <span>Email: </span> hospet@ecomen.in
                            </p>
                        </div>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <h4>Patna</h4>
                        <p>
                            Ecomen laboratories Pvt. Ltd. <br />
                            Ground Floor, Saraswati Apartment, <br />
                            West Boring Canal Road, <br />
                            Patna – 800001, <br />
                            Bihar.
                        </p>
                    </div>
                    <div className='contact-offices-branch-1'>
                        <h4>Vizag</h4>
                        <p>
                            Ecomen laboratories Pvt. Ltd. <br />
                            9-37-8/1, NGGO Colony, Akkayyapalem, <br />
                            Visakhapatnam – 530016, <br />
                            Andhra Pradesh.
                        </p>
                    </div>
                </div>
            </section>
            <div className='contact-divideline'></div>
            
            {/* Send us a Message */}
            <section className='contact-message'>
                <div className='contact-message-heading'>
                    <h1>Send us a Message</h1>
                </div>

                <div className='contact-message-form'>
                    <form>
                        <input
                            type='text'
                            name='firstname'
                            placeholder='First Name'
                            id='firstname'
                            required
                        />
                        <input
                            type='text'
                            name='lastname'
                            placeholder='Last Name'
                            id='lastname'
                            required
                        />
                        <input
                            type='text'
                            name='mobile'
                            placeholder='10 digit mobile number'
                            id='mobile'
                            required
                        />
                        <input
                            type='email'
                            name='firstname'
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
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
