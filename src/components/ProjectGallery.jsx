import React from 'react';
import { motion } from 'framer-motion';
import { Camera, CheckCircle2 } from 'lucide-react';
import './ProjectGallery.css';

const ProjectGallery = () => {
    const projects = [
        {
            id: 1,
            title: "Architectural Roof Replacement",
            desc: "Full tear-off and installation of premium dark gray architectural shingles. Completed in 2 days.",
            img: "/images/austin_roofing_exterior.png",
            alt: "Beautiful Austin Texas home with a brand new dark gray architectural shingle roof"
        },
        {
            id: 2,
            title: "Comprehensive Damage Inspection",
            desc: "Our licensed contractors perform meticulous, documented inspections to ensure every dollar of damage is accounted for.",
            img: "/images/contractor_inspection.png",
            alt: "Professional Austin roofing contractor in safety gear inspecting weather damaged shingles"
        },
        {
            id: 3,
            title: "Severe Storm & Hail Restoration",
            desc: "We documented severe pitting and granular loss from an Austin hail storm, securing full funding for a complete replacement.",
            img: "/images/storm_hail_damage.png",
            alt: "Close up of severe hail damage on asphalt shingles showing pitting and cracking"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="gallery" className="section gallery-section section-muted">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-4">
                        <Camera className="text-primary w-12 h-12 opacity-80" />
                    </div>
                    <h2 className="section-title">Proof of Excellence</h2>
                    <p className="section-subtitle">
                        From meticulous inspections to flawless installations, see how we restore Austin homes to state-of-the-art condition.
                    </p>
                </motion.div>

                <motion.div
                    className="gallery-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="gallery-card glass-card"
                            variants={itemVariants}
                        >
                            <div className="gallery-image-wrapper">
                                <img
                                    src={project.img}
                                    alt={project.alt}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                                <div className="gallery-overlay">
                                    <CheckCircle2 className="gallery-icon" />
                                </div>
                            </div>
                            <div className="gallery-content">
                                <h3 className="gallery-title">{project.title}</h3>
                                <p className="gallery-desc">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectGallery;
