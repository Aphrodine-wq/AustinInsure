import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Shield, CheckCircle2 } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = ({ onOpenModal }) => {
    return (
        <section className="final-cta">
            <div className="container final-cta-inner">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="final-cta-badge">
                        <Shield size={14} />
                        <span>Zero Out-of-Pocket to Start</span>
                    </div>
                    <h2>Ready to Get Your Claim Handled the Right Way?</h2>
                    <p>
                        Don't leave money on the table. Our team inspects your property, documents
                        every detail, and fights for the full payout you deserve — across Austin
                        and all of Central Texas.
                    </p>
                    <div className="final-cta-actions">
                        <button className="btn btn-accent" onClick={onOpenModal}>
                            Get My Free Inspection
                        </button>
                        <a href="tel:+15123633576" className="btn-outline-light">
                            <Phone size={18} />
                            Call 512-363-3576
                        </a>
                    </div>
                    <div className="final-cta-trust">
                        <span><CheckCircle2 size={14} /> Licensed & Insured</span>
                        <span><CheckCircle2 size={14} /> 24/7 Emergency Response</span>
                        <span><CheckCircle2 size={14} /> Free Inspections</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
