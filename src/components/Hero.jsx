import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
    const imageY = useTransform(scrollY, [0, 1000], [0, -150]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="hero">
            <motion.div className="hero-background" style={{ y: bgY }}>
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
                <div className="hero-glow"></div>
            </motion.div>

            <div className="container relative hero-container">
                <motion.div
                    className="hero-grid-layout"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-content text-left">
                        <motion.div variants={itemVariants} className="hero-badge">
                            <span className="badge-dot"></span>
                            Trusted in Central Texas
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="hero-title pt-6">
                            Don't Let Your Insurance Company <br className="hidden lg:block" />
                            <span className="text-gradient inline-block mt-2">Underpay Your Claim.</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="hero-subtitle">
                            We are Austin's trusted storm, water, and fire damage restoration experts. We document the damage, handle the adjuster meetings, and ensure your home is fully repaired without cutting corners.
                        </motion.p>

                        <motion.div variants={itemVariants} className="hero-ctas">
                            <button className="btn btn-primary hero-btn" onClick={onOpenModal}>
                                <span>Start Your Free Claim Assessment</span>
                                <ArrowRight className="btn-icon" />
                            </button>
                            <a href="tel:+15125551234" className="btn btn-secondary hero-btn mt-4 sm:mt-0">
                                <Phone className="btn-icon" />
                                <span>(512) 555-1234</span>
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="hero-trust-mini mt-8">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="text-primary icon-sm" />
                                <span>No out-of-pocket costs for assessment</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <ShieldCheck className="text-primary icon-sm" />
                                <span>100% Insurance Compliant Repairs</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-wrapper hidden md-flex"
                        variants={itemVariants}
                        style={{ y: imageY }}
                    >
                        <div className="hero-image-glow"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bdfc?w=800&q=80"
                            alt="Luxury Home"
                            className="hero-featured-image"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
