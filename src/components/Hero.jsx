import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
    const imageY = useTransform(scrollY, [0, 1000], [0, -100]);
    const textY = useTransform(scrollY, [0, 1000], [0, 150]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="hero">
            <motion.div className="hero-background" style={{ y: bgY }}>
            </motion.div>

            <div className="hero-container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-content"
                    style={{ y: textY, opacity }}
                >
                    <motion.div variants={itemVariants} className="hero-badge cursor-default">
                        <span className="badge-dot"></span>
                        Premium Central Texas Restoration
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="hero-title">
                        Don't Let Your Insurer <br className="hidden md:block" />
                        <span className="text-gradient">Underpay Your Claim.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-subtitle">
                        Austin's premier damage restoration experts. We document the loss, handle the adjuster, and rebuild your home beautifully with zero hassle.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-ctas">
                        <button className="btn btn-primary hero-btn" onClick={onOpenModal}>
                            <span>File Claim Assessment</span>
                            <ArrowRight className="btn-icon" />
                        </button>
                        <a href="tel:+15125551234" className="btn btn-secondary hero-btn mt-4 sm:mt-0">
                            <Phone className="icon-sm" />
                            <span>(512) 555-1234</span>
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="hero-trust-mini mt-8">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-accent icon-sm" />
                            <span>Zero out-of-pocket costs for assessment</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <ShieldCheck className="text-accent icon-sm" />
                            <span>100% Insurance Compliant Repairs</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y: imageY }}
                >
                    <img
                        src="/images/hero-home.png"
                        alt="Luxury Home"
                        className="hero-featured-image"
                        onError={(e) => {
                            // Fallback gradient if missing image for premium look
                            e.target.style.display = 'none';
                            e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(30,41,59,0.5) 0%, rgba(15,23,42,0.8) 100%)';
                            e.target.parentElement.style.height = '400px';
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
