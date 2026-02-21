import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Flame, Wind, CloudLightning, FileCheck, Phone, ArrowRight } from 'lucide-react';
import useDocumentHead from '../hooks/useDocumentHead';
import './ServicesPage.css';

const services = [
    {
        icon: CloudLightning,
        title: 'Storm & Hail Damage Repair',
        description: 'Central Texas averages 3–5 major hail events per year. Our team responds within 24 hours to inspect, document, and restore storm damage across Austin, Round Rock, Cedar Park, Georgetown, and surrounding areas.',
        details: [
            'Roof replacement & shingle repair',
            'Siding & gutter restoration',
            'Window & screen replacement',
            'Full exterior damage documentation for insurance'
        ]
    },
    {
        icon: Shield,
        title: 'Roof Damage & Replacement',
        description: "Your roof is your home's first line of defense. We handle everything from minor repairs to full roof replacements, working directly with your insurance carrier to maximize your payout.",
        details: [
            'Free professional roof inspection',
            'Xactimate-based estimates (same software as insurers)',
            'Supplement filing for underpaid claims',
            'Premium materials with manufacturer warranty'
        ]
    },
    {
        icon: Droplets,
        title: 'Water Damage Restoration',
        description: "Burst pipes, flash floods, and slow leaks can devastate your Austin home. We provide 24/7 emergency water extraction, structural drying, and mold prevention — and handle the insurance paperwork.",
        details: [
            '24/7 emergency water extraction',
            'Industrial dehumidification & drying',
            'Mold prevention & antimicrobial treatment',
            'Full interior rebuild & restoration'
        ]
    },
    {
        icon: Flame,
        title: 'Fire & Smoke Damage',
        description: 'Fire damage is devastating, but recovery is possible. We manage the entire restoration process — from emergency board-up to complete rebuild — while navigating your insurance claim.',
        details: [
            'Emergency board-up & securing',
            'Smoke & soot removal',
            'Structural repair & rebuild',
            'Contents cleaning & restoration'
        ]
    },
    {
        icon: Wind,
        title: 'Wind Damage Repair',
        description: 'Texas wind storms can rip off shingles, topple fences, and send debris through windows. We assess and repair all wind damage and ensure your insurance claim covers the full cost.',
        details: [
            'Roof & siding wind damage repair',
            'Fence & outdoor structure restoration',
            'Tree debris removal & cleanup',
            'Insurance claim documentation & filing'
        ]
    },
    {
        icon: FileCheck,
        title: 'Insurance Claim Management',
        description: "Dealing with insurance companies is our specialty. We handle the entire claims process from start to finish — inspections, documentation, supplements, negotiations — so you get every dollar you're owed.",
        details: [
            'Free property inspection & damage assessment',
            'Professional claim documentation',
            'Supplement filing for underpaid claims',
            'Denied claim appeals & re-inspections'
        ]
    }
];

const ServicesPage = ({ onOpenModal }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    useDocumentHead({
        title: 'Insurance Claim & Restoration Services in Austin, TX | Austin Insure',
        description: 'Professional storm damage repair, roof replacement, water damage restoration, and insurance claim management across Austin, Round Rock, Cedar Park, and Central Texas.',
        url: 'https://www.austininsure.com/services',
        image: '/images/hero-home.png',
    });

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="services-hero">
                <div className="container">
                    <motion.div
                        className="services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1>Our Services</h1>
                        <p>From inspection to rebuild — we handle every step of your insurance claim and property restoration across Greater Austin.</p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <a href="/">Home</a>
                    <span className="breadcrumb-sep">/</span>
                    <span className="breadcrumb-current">Services</span>
                </div>
            </nav>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="service-card glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="service-card-icon">
                                        <Icon size={28} />
                                    </div>
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                    <ul className="service-details">
                                        {service.details.map((d, j) => (
                                            <li key={j}><ArrowRight size={14} /> {d}</li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-primary btn-sm" onClick={onOpenModal}>
                                        Get Free Inspection
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="services-cta">
                <div className="container text-center">
                    <h2>Not Sure What You Need?</h2>
                    <p>Tell us about your situation and we'll recommend the right service. Free consultations, always.</p>
                    <div className="services-cta-actions">
                        <button className="btn btn-accent" onClick={onOpenModal}>
                            Start My Free Claim Assessment
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

export default ServicesPage;
