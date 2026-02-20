import React from 'react';
import { motion } from 'framer-motion';
import './ProblemSection.css';

const ProblemSection = () => {
    return (
        <section className="section problem-section">
            <div className="container problem-inner">
                <motion.div
                    className="problem-content"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="section-title text-left">Most Homeowners Leave Thousands on the Table</h2>
                    <div className="problem-text-glass">
                        <p className="problem-lead">
                            After storm damage, hail, or a sudden leak, many people rely entirely on their insurance adjuster to assess the damage. Unfortunately, adjusters work for the insurance company — not you. This often leads to lowball estimates, overlooked hidden damage, and claims that don't cover a full, proper restoration.
                        </p>
                        <p className="problem-lead">
                            The result? You end up paying out of pocket for repairs that should be fully covered, or you settle for cheap patch jobs that lead to worse problems down the road.
                        </p>
                        <div className="problem-divider"></div>
                        <p className="problem-close">
                            <span className="text-gradient-primary font-semibold">We level the playing field.</span> As licensed Texas contractors who understand the claims process inside and out, we document the damage, negotiate directly with your carrier, and make sure you receive every dollar you're owed so your home gets repaired right.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="problem-image-wrapper"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="problem-image-glow"></div>
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                        alt="Roof inspection and damage assessment"
                        className="problem-image"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;
