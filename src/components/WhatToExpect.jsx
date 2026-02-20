import React from 'react';
import { motion } from 'framer-motion';
import { Send, Search, Handshake, Hammer } from 'lucide-react';
import './WhatToExpect.css';

const WhatToExpect = ({ onOpenModal }) => {
    const steps = [
        {
            icon: <Send />,
            title: "1. Submit your info",
            desc: "Tell us about your damage and your insurance carrier. Our online form is secure and takes less than 2 minutes. We'll reach out within 24 hours to schedule."
        },
        {
            icon: <Search />,
            title: "2. Free inspection & assessment",
            desc: "We come to your property, thoroughly assess all damage, and create a comprehensive report with photos and notes so your claim is solid from day one."
        },
        {
            icon: <Handshake />,
            title: "3. We negotiate with your adjuster",
            desc: "We meet your insurance adjuster on-site, provide our documentation, and fiercely advocate for a fair settlement so nothing is left out of your claim."
        },
        {
            icon: <Hammer />,
            title: "4. Premium restoration",
            desc: "Once approved, our expert local crews complete the repairs to the highest standard, using premium materials that meet or exceed your original build."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="section expect">
            <div className="container expect-inner">
                <div className="expect-content">
                    <motion.h2
                        className="section-title text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        What to Expect — Start to Finish
                    </motion.h2>
                    <motion.p
                        className="expect-intro"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        From first contact to final repair, we keep the process clear and low-stress.
                    </motion.p>

                    <motion.div
                        className="expect-timeline"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="timeline-line"></div>
                        {steps.map((step, index) => (
                            <motion.div key={index} variants={stepVariants} className="timeline-step">
                                <div className="timeline-icon">
                                    {step.icon}
                                </div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">{step.title}</h3>
                                    <p className="timeline-desc">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="expect-cta mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button className="btn btn-primary" onClick={onOpenModal}>
                            Get Your Free Assessment
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="expect-gallery"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="gallery-main">
                        <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" alt="House exterior with roof" />
                    </div>
                    <div className="gallery-side">
                        <img src="https://images.unsplash.com/photo-1632778144955-d4e90bb2d2c9?w=600&q=80" alt="Roof and construction" />
                        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="Home repair and restoration" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatToExpect;
