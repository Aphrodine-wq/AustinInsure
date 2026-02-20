import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, HandCoins, Users } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    const reasons = [
        {
            icon: <ShieldCheck className="why-icon text-primary" />,
            title: "Licensed & insured",
            desc: "We are a fully licensed Texas General Contractor carrying comprehensive liability and workers' compensation insurance. Your property is fully protected while we work."
        },
        {
            icon: <HandCoins className="why-icon text-primary" />,
            title: "Insurance-savvy negotiators",
            desc: "Our team knows exactly how insurance carriers operate. We use the same estimating software they do (Xactimate) to ensure your claim is fully funded, leaving no money on the table."
        },
        {
            icon: <Users className="why-icon text-primary" />,
            title: "Zero out-of-pocket to start",
            desc: "Our initial comprehensive inspection and claim assessment is completely free. You only move forward if our restoration plan and the numbers make perfect sense for you."
        },
        {
            icon: <Map className="why-icon text-primary" />,
            title: "Local to Austin, TX",
            desc: "We aren't out-of-state storm chasers. We are based right here in the Austin area. We manage the project locally, answer our phones, and stand by our warranties long after the job is done."
        }
    ];

    return (
        <section id="why-us" className="section why-us">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Why Homeowners Work With Us</h2>
                    <p className="section-subtitle">
                        We don't just build roofs — we build trust and navigate complex insurance claims seamlessly.
                    </p>
                </motion.div>

                <motion.div
                    className="why-grid grid-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {reasons.map((reason, index) => (
                        <motion.div
                            className="why-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            key={index}
                        >
                            <div className="why-icon-wrapper">
                                {reason.icon}
                            </div>
                            <h3 className="why-title">{reason.title}</h3>
                            <p className="why-desc">{reason.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
