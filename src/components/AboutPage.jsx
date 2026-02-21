import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, MapPin, Clock, Phone, CheckCircle2 } from 'lucide-react';
import useDocumentHead from '../hooks/useDocumentHead';
import './AboutPage.css';

const AboutPage = ({ onOpenModal }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    useDocumentHead({
        title: 'About Austin Insure | Austin\'s Trusted Insurance Claim Experts',
        description: 'Learn about Austin Insure — Central Texas\'s trusted team for insurance claims, storm damage repair, and property restoration. Licensed, insured, and locally owned.',
        url: 'https://www.austininsure.com/about',
        image: '/images/hero-home.png',
    });

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        className="about-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1>About Austin Insure</h1>
                        <p>We're a team of insurance claim specialists and restoration professionals dedicated to helping Central Texas homeowners get every dollar they're owed.</p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <a href="/">Home</a>
                    <span className="breadcrumb-sep">/</span>
                    <span className="breadcrumb-current">About</span>
                </div>
            </nav>

            {/* Story Section */}
            <section className="about-story section">
                <div className="container container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Our Story</h2>
                        <p>
                            Austin Insure was founded with a simple mission: give homeowners a fighting chance against insurance companies that are designed to minimize payouts. We saw too many families in Austin, Round Rock, Cedar Park, and Georgetown get shortchanged on legitimate claims — and we decided to do something about it.
                        </p>
                        <p>
                            Our team brings years of combined experience in construction, roofing, water restoration, and the insurance claims process. We understand exactly how adjusters evaluate damage, what documentation gets claims approved, and how to file supplements that recover the full cost of repairs.
                        </p>
                        <p>
                            We don't just fix your property — we manage your entire claim from the first phone call to the final inspection. And because we work directly with your insurance carrier, most of our clients pay <strong>zero out-of-pocket</strong> beyond their deductible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values section">
                <div className="container">
                    <h2 className="text-center">Why Homeowners Trust Us</h2>
                    <div className="values-grid">
                        {[
                            { icon: Users, title: 'Locally Owned', description: 'We live and work in Austin. Your neighbors are our neighbors. We\'re invested in this community.' },
                            { icon: Award, title: 'Licensed & Insured', description: 'Fully licensed, insured, and compliant with all Texas Department of Insurance regulations.' },
                            { icon: MapPin, title: 'All of Central Texas', description: 'We serve Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Leander, Kyle, Buda, and beyond.' },
                            { icon: Clock, title: '24/7 Emergency Response', description: 'Storm doesn\'t wait for business hours. Neither do we. Call anytime for emergency damage response.' },
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="value-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="value-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="about-commitment section">
                <div className="container container-narrow text-center">
                    <h2>Our Commitment to You</h2>
                    <div className="commitment-list">
                        {[
                            'Free property inspections — always',
                            'Honest assessment of your damage and coverage',
                            'Transparent process from start to finish',
                            'We fight for the full payout, not a quick close',
                            'No pressure, no obligation consultations'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="commitment-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <CheckCircle2 size={20} className="text-accent" />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="container text-center">
                    <h2>Ready to Work With Us?</h2>
                    <p>Whether you have active damage or just want a free roof inspection, we're here to help.</p>
                    <div className="about-cta-actions">
                        <button className="btn btn-accent" onClick={onOpenModal}>
                            Get My Free Inspection
                        </button>
                        <a href="tel:+15123633576" className="btn btn-secondary">
                            <Phone size={18} /> Call 512-363-3576
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
