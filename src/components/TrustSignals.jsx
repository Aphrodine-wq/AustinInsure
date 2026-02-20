import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './TrustSignals.css';

const TrustSignals = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const signals = [
        "Licensed Texas General Contractor",
        "Fully Insured for Your Protection ($2M+ Policy)",
        "Local Experts Serving the Greater Austin Metro"
    ];

    return (
        <section className="trust">
            <div className="container trust-inner">
                <motion.div
                    className="badges"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {signals.map((signal, index) => (
                        <motion.div key={index} variants={itemVariants} className="badge glass-card">
                            <div className="badge-icon-wrapper">
                                <CheckCircle2 className="badge-icon" />
                            </div>
                            <span>{signal}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.p
                    className="trust-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    We are not just builders; we are claims experts. We handle the paperwork, the adjuster meetings, and the construction — so you don't have to fight for a fair settlement alone.
                </motion.p>
            </div>
        </section>
    );
};

export default TrustSignals;
