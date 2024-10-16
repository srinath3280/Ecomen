import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) { // Adjust this value to the desired scroll position
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // For mobile view
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Navbar Section */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <ul>
                    <li>
                        <a href="/" className={location.pathname === '/' ? 'active' : ''}>HOME</a>
                    </li>
                    <li>
                        <a href="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>ABOUT US</a>
                    </li>
                    <li>
                        <a href="/our-services" className={location.pathname === '/our-services' ? 'active' : ''}>SERVICES</a>
                    </li>
                    <li>
                        <a href="/laboratory" className={location.pathname === '/laboratory' ? 'active' : ''}>LABORATORY</a>
                    </li>
                    <li>
                        <a href="/training-services" className={location.pathname === '/training-services' ? 'active' : ''}>TRAINING SERVICES</a>
                    </li>
                    <li>
                        <a href="/service-sectors" className={location.pathname === '/service-sectors' ? 'active' : ''}>NABET SECTORS</a>
                    </li>
                    <li>
                        <a href="/accreditation-awards" className={location.pathname === '/accreditation-awards' ? 'active' : ''}>ACCREDITATION & AWARDS</a>
                    </li>
                    <li>
                        <a href="/press-coverage-events" className={location.pathname === '/press-coverage-events' ? 'active' : ''}>PRESS COVERAGE & EVENTS</a>
                    </li>
                    <li>
                        <a href="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT US</a>
                    </li>
                </ul>
            </nav>

            {/* For Mobile View */}
            <nav className={`navbar1 ${scrolled ? 'scrolled1' : ''}`}>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <i class="bi bi-list"></i>
                </div>
                <ul className={isMobileMenuOpen ? 'open' : ''}>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/about-us">ABOUT US</a>
                    </li>
                    <li>
                        <a href="/our-services">SERVICES</a>
                    </li>
                    <li>
                        <a href="/laboratory">LABORATORY</a>
                    </li>
                    <li>
                        <a href="/training-services">TRAINING SERVICES</a>
                    </li>
                    <li>
                        <a href="/service-sectors">NABET SECTORS</a>
                    </li>
                    <li>
                        <a href="/accreditation-awards">ACCREDITATION & AWARDS</a>
                    </li>
                    <li>
                        <a href="/press-coverage-events">PRESS COVERAGE & EVENTS</a>
                    </li>
                    <li>
                        <a href="/contact">CONTACT US</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
