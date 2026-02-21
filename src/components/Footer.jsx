import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                {/* Brand Column */}
                <div className="footer-col footer-brand-col">
                    <Link to="/" className="footer-brand text-gradient">Austin Insure</Link>
                    <p className="footer-tagline">
                        Austin's trusted insurance claim and restoration experts. We handle the entire process — from inspection to rebuild — so you don't have to fight alone.
                    </p>
                    <div className="footer-trust-badges">
                        <span className="footer-badge"><Shield className="icon-xs" /> Licensed & Bonded</span>
                        <span className="footer-badge"><Shield className="icon-xs" /> $2M+ Insurance Policy</span>
                    </div>
                </div>

                {/* Services Column */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Services</h4>
                    <nav className="footer-col-links" aria-label="Services">
                        <Link to="/services">All Services</Link>
                        <Link to="/services">Roof Damage Claims</Link>
                        <Link to="/services">Water Damage Restoration</Link>
                        <Link to="/services">Storm & Hail Damage</Link>
                        <Link to="/services">Fire & Smoke Damage</Link>
                        <Link to="/services">Insurance Claim Management</Link>
                    </nav>
                </div>

                {/* Resources Column */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Company</h4>
                    <nav className="footer-col-links" aria-label="Company">
                        <Link to="/about">About Us</Link>
                        <Link to="/service-area">Service Area</Link>
                        <Link to="/blog">Blog & Guides</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/blog/complete-guide-filing-roof-insurance-claim-texas">Filing a Claim Guide</Link>
                        <Link to="/blog/denied-insurance-claim-rights-next-steps-texas">Denied Claim Help</Link>
                    </nav>
                </div>

                {/* Contact Column */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Contact</h4>
                    <div className="footer-contact-items">
                        <a href="tel:+15123633576" className="footer-contact-item">
                            <Phone className="icon-xs" />
                            <span>512 - 363 - 3576</span>
                        </a>
                        <span className="footer-contact-item">
                            <MapPin className="icon-xs" />
                            <span>Austin & Central Texas</span>
                        </span>
                    </div>
                    <div className="footer-areas">
                        <p className="footer-areas-label">Areas We Serve:</p>
                        <p className="footer-areas-list">
                            Austin · Round Rock · Cedar Park · Georgetown · Pflugerville · Lakeway · Leander · Dripping Springs · Kyle · Buda · San Marcos · Hutto · Manor · Bee Cave · Westlake Hills
                        </p>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p className="footer-copy">© {year} Austin Insure. All rights reserved.</p>
                <p className="footer-copy-sub">Licensed Texas General Contractor · Serving the Greater Austin Metro Area</p>
            </div>
        </footer>
    );
};

export default Footer;
