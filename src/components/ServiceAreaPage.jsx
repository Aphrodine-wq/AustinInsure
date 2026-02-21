import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import useDocumentHead from '../hooks/useDocumentHead';
import './ServiceAreaPage.css';

const serviceAreas = [
    {
        city: 'Austin',
        zip: '78701–78799',
        description: 'Our home base. We serve every neighborhood in Austin — from downtown to North Austin, East Austin, South Austin, and everything in between. If you have storm damage, a roof leak, or an insurance claim, we respond same-day.',
    },
    {
        city: 'Round Rock',
        zip: '78664, 78665, 78681',
        description: 'Round Rock is one of the fastest-growing cities in Texas and sits right in the path of Central Texas hail storms. We handle roof replacements, storm damage claims, and water restoration throughout Round Rock.',
    },
    {
        city: 'Cedar Park',
        zip: '78613',
        description: 'Cedar Park homeowners face frequent hail and wind events. Our team provides free roof inspections, full insurance claim management, and quality restoration work across Cedar Park.',
    },
    {
        city: 'Georgetown',
        zip: '78626, 78628, 78633',
        description: "Georgetown's historic homes and new developments alike are vulnerable to Texas storms. We specialize in both modern and older roof systems, ensuring proper documentation for insurance claims.",
    },
    {
        city: 'Pflugerville',
        zip: '78660',
        description: 'Pflugerville sits directly in the hail corridor of Central Texas. We respond quickly to storm damage across Pflugerville, providing free inspections and managing the entire claims process.',
    },
    {
        city: 'Lakeway',
        zip: '78734',
        description: "Lakeway's premium homes deserve premium restoration. We handle high-value property claims with the attention to detail and documentation quality that luxury homes require.",
    },
    {
        city: 'Leander',
        zip: '78641',
        description: 'Leander has seen explosive growth, and new roofs need protection too. We provide storm damage assessments, insurance claim filing, and complete roof repair and replacement in Leander.',
    },
    {
        city: 'Dripping Springs',
        zip: '78620',
        description: "Dripping Springs' Hill Country properties face unique storm exposure. We understand the region's specific roofing needs and work with your insurance carrier to cover the full cost of repairs.",
    },
    {
        city: 'Kyle',
        zip: '78640',
        description: "Kyle is growing fast and storm damage doesn't spare new construction. We provide complete insurance claim services and storm damage restoration for Kyle homeowners.",
    },
    {
        city: 'Buda',
        zip: '78610',
        description: 'Buda homeowners benefit from our rapid response to hail and wind damage. Free inspections, professional documentation, and full claims management — all at zero out-of-pocket cost.',
    },
    {
        city: 'San Marcos',
        zip: '78666',
        description: 'San Marcos sits at the southern edge of our Central Texas service area. We handle storm damage claims, roof replacements, and water damage restoration for San Marcos homeowners.',
    },
    {
        city: 'Hutto',
        zip: '78634',
        description: "Hutto's position in the Texas hail corridor means frequent storm damage events. Our team provides same-day inspections and handles your insurance claim from start to finish.",
    },
    {
        city: 'Manor',
        zip: '78653',
        description: 'Manor homeowners trust us for reliable storm damage repair and insurance claim management. We inspect, document, and restore — so you can focus on your family.',
    },
    {
        city: 'Bee Cave',
        zip: '78738',
        description: "Bee Cave's upscale homes need expert restoration. We specialize in high-value property claims, ensuring every detail is documented and every dollar is recovered from your insurance carrier.",
    },
    {
        city: 'Westlake Hills',
        zip: '78746',
        description: 'Westlake Hills properties are among the most valuable in the Austin metro. Our team provides white-glove inspection and restoration services with meticulous insurance documentation.',
    },
    {
        city: 'Liberty Hill',
        zip: '78642',
        description: 'Liberty Hill is on the northern frontier of Austin growth. We provide full storm damage assessment and insurance claim services to Liberty Hill homeowners.',
    },
    {
        city: 'Bastrop',
        zip: '78602',
        description: 'Bastrop homeowners face storm, wind, and even wildfire risks. We handle multiple types of insurance claims and restoration work across the Bastrop area.',
    },
    {
        city: 'Taylor',
        zip: '76574',
        description: "Taylor's growth means more homes exposed to Central Texas weather. We serve Taylor with the same fast response and professional claims management as our Austin clients.",
    },
];

const ServiceAreaPage = ({ onOpenModal }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    useDocumentHead({
        title: 'Service Area | Insurance Claims & Restoration in Austin, TX & Surrounding Areas',
        description: 'Austin Insure serves all of Central Texas — Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Leander, Kyle, Buda, San Marcos, and more. Free inspections across the metro.',
        url: 'https://www.austininsure.com/service-area',
        image: '/images/hero-home.png',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Insurance Claim & Restoration Services',
            provider: {
                '@type': 'InsuranceAgency',
                name: 'Austin Insure',
                url: 'https://www.austininsure.com'
            },
            areaServed: serviceAreas.map(a => ({
                '@type': 'City',
                name: a.city + ', TX'
            })),
            description: 'Professional insurance claim management, storm damage repair, roof replacement, and water damage restoration across Austin, TX and surrounding Central Texas communities.'
        }
    });

    return (
        <div className="service-area-page">
            {/* Hero */}
            <section className="sa-hero">
                <div className="container">
                    <motion.div
                        className="sa-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1>Areas We Serve</h1>
                        <p>Providing insurance claim management and property restoration across Austin and all of Central Texas.</p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="page-breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <a href="/">Home</a>
                    <span className="breadcrumb-sep">/</span>
                    <span className="breadcrumb-current">Service Area</span>
                </div>
            </nav>

            {/* Areas Grid */}
            <section className="sa-grid-section section">
                <div className="container">
                    <div className="sa-intro text-center">
                        <h2>We Cover All of Greater Austin</h2>
                        <p>From Georgetown in the north to San Marcos in the south, and from Dripping Springs in the west to Bastrop in the east — if you're in Central Texas, we've got you covered.</p>
                    </div>

                    <div className="sa-grid">
                        {serviceAreas.map((area, i) => (
                            <motion.div
                                key={i}
                                className="sa-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                            >
                                <div className="sa-card-header">
                                    <MapPin size={18} className="text-accent" />
                                    <h3>{area.city}, TX</h3>
                                </div>
                                <p className="sa-card-zip">ZIP: {area.zip}</p>
                                <p className="sa-card-desc">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="sa-cta">
                <div className="container text-center">
                    <h2>Don't See Your City?</h2>
                    <p>We likely serve your area too. Give us a call and we'll confirm coverage and schedule your free inspection.</p>
                    <div className="sa-cta-actions">
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

export default ServiceAreaPage;
