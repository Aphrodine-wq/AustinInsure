import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './ServiceArea.css';

const ServiceArea = () => {
    const areas = [
        "Austin", "Round Rock", "Cedar Park", "Pflugerville",
        "Georgetown", "Leander", "Kyle", "Buda",
        "Lakeway", "Dripping Springs", "Manor", "Hutto", "Surrounding areas"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section className="section service-area">
            <div className="container container-narrow text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-4">
                        <div className="location-icon-wrapper">
                            <MapPin className="location-icon text-accent" />
                        </div>
                    </div>
                    <h2 className="section-title">Serving Greater Austin</h2>
                    <p className="section-subtitle">
                        We work throughout Central Texas. If you're in or near any of these areas, we can help right away.
                    </p>
                </motion.div>

                <motion.div
                    className="area-tags"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {areas.map((area, index) => (
                        <motion.span
                            key={index}
                            className="area-tag glass-card"
                            variants={tagVariants}
                            whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)", color: "white" }}
                        >
                            {area}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceArea;
