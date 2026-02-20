import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import './LeadForm.css';

const LeadForm = ({ onOpenModal }) => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="form" className="section form-section">
            <div className="container form-inner">
                <motion.div
                    className="form-header text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get Your Free Claim Assessment</h2>
                    <p className="section-subtitle">
                        Tell us about your damage and we'll get back to you within 24 hours. No obligation.
                    </p>
                    <button type="button" className="btn btn-secondary mt-4" onClick={onOpenModal}>
                        Or fill out our detailed intake form
                    </button>
                </motion.div>

                <motion.div
                    className="lead-form-container glass-card mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {status === 'success' ? (
                        <motion.div
                            className="success-state text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <CheckCircle2 className="success-icon mb-4 mx-auto text-primary" />
                            <h3 className="success-title">Message Sent Successfully!</h3>
                            <p className="success-desc">We've received your information and our team will be in touch within 24 hours to schedule your free assessment.</p>
                        </motion.div>
                    ) : (
                        <form className="lead-form" onSubmit={handleSubmit}>
                            <div className="grid-2 mb-4">
                                <div className="form-row">
                                    <label htmlFor="name" className="form-label">Full Name *</label>
                                    <input type="text" id="name" required placeholder="John Smith" className="form-input" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="phone" className="form-label">Phone *</label>
                                    <input type="tel" id="phone" required placeholder="(512) 555-1234" className="form-input" />
                                </div>
                            </div>

                            <div className="grid-2 mb-4">
                                <div className="form-row">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input type="email" id="email" required placeholder="john@example.com" className="form-input" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="address" className="form-label">Property Address *</label>
                                    <input type="text" id="address" required placeholder="123 Main St, Austin, TX" className="form-input" />
                                </div>
                            </div>

                            <div className="grid-2 mb-4">
                                <div className="form-row">
                                    <label htmlFor="damage_type" className="form-label">Type of Damage *</label>
                                    <div className="select-wrapper">
                                        <select id="damage_type" required className="form-select">
                                            <option value="">Select one...</option>
                                            <option value="Roof">Roof / Hail</option>
                                            <option value="Water">Water / Leaks</option>
                                            <option value="Storm">Storm / Wind</option>
                                            <option value="Fire">Fire / Smoke</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="insurance_carrier" className="form-label">Insurance Carrier</label>
                                    <input type="text" id="insurance_carrier" placeholder="e.g. State Farm, Allstate" className="form-input" />
                                </div>
                            </div>

                            <div className="form-row mb-6">
                                <label htmlFor="description" className="form-label">Brief Description of Damage</label>
                                <textarea id="description" rows="4" placeholder="When did it happen? What do you see? Any claim already filed?" className="form-textarea"></textarea>
                            </div>

                            <div className="form-actions text-center">
                                <button type="submit" className={`btn btn-primary btn-submit ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                                    {status === 'submitting' ? (
                                        <span className="loader"></span>
                                    ) : (
                                        <>
                                            <span>Submit Request</span>
                                            <Send className="btn-icon w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default LeadForm;
