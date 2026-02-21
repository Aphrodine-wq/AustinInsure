import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import useDocumentHead from '../hooks/useDocumentHead';
import './ContactPage.css';

const ContactPage = ({ onOpenModal }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    useDocumentHead({
        title: 'Contact Austin Insure | Free Insurance Claim Consultation in Austin, TX',
        description: 'Contact Austin Insure for a free property inspection and insurance claim consultation. Serving Austin, Round Rock, Cedar Park, Georgetown, and all of Central Texas. Call 512-363-3576.',
        url: 'https://www.austininsure.com/contact',
        image: '/images/hero-home.png',
    });

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1>Contact Us</h1>
                        <p>Have damage? Need a free inspection? We're here to help — no obligation, no pressure.</p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <a href="/">Home</a>
                    <span className="breadcrumb-sep">/</span>
                    <span className="breadcrumb-current">Contact</span>
                </div>
            </nav>

            {/* Contact Grid */}
            <section className="contact-grid-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info Cards */}
                        <div className="contact-info">
                            <motion.div
                                className="contact-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="contact-card-icon"><Phone size={22} /></div>
                                <h3>Call Us</h3>
                                <a href="tel:+15123633576" className="contact-link-large">512-363-3576</a>
                                <p>Available 24/7 for emergencies</p>
                            </motion.div>

                            <motion.div
                                className="contact-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="contact-card-icon"><Clock size={22} /></div>
                                <h3>Business Hours</h3>
                                <p className="contact-hours">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                                <p className="contact-hours-note">Emergency services available 24/7</p>
                            </motion.div>

                            <motion.div
                                className="contact-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="contact-card-icon"><MapPin size={22} /></div>
                                <h3>Service Area</h3>
                                <p>Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Leander, Kyle, Buda, Dripping Springs, San Marcos, Hutto, Manor, Bee Cave, and all of Central Texas.</p>
                            </motion.div>
                        </div>

                        {/* CTA Panel */}
                        <motion.div
                            className="contact-cta-panel glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <div className="contact-cta-icon">
                                <MessageSquare size={32} />
                            </div>
                            <h2>Start Your Free Claim Assessment</h2>
                            <p>
                                Tell us about your damage and we'll have a specialist review your situation. Free inspections, honest assessments, and zero obligation.
                            </p>
                            <button className="btn btn-accent btn-lg w-full" onClick={onOpenModal}>
                                Open Claim Assessment Form
                            </button>
                            <div className="contact-cta-divider">
                                <span>or call us directly</span>
                            </div>
                            <a href="tel:+15123633576" className="btn btn-primary btn-lg w-full">
                                <Phone size={18} /> Call 512-363-3576
                            </a>
                            <p className="contact-cta-note">
                                Most clients pay $0 out-of-pocket beyond their deductible.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
