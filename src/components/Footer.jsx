import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-inner text-center">
                <p className="footer-brand text-gradient">Austin Insure</p>
                <p className="footer-tagline">
                    Licensed & bonded. Roof, storm, water, and fire damage claims and repair across Central Texas.
                </p>
                <p className="footer-contact">
                    <a href="tel:+15125551234">(512) 555-1234</a> · Austin & greater Central Texas
                </p>
                <p className="footer-copy">© {year} Austin Insure. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
