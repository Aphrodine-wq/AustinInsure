import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import './IntakeModal.css';

const IntakeModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const [status, setStatus] = useState('idle');

    const totalSteps = 4;

    const nextStep = () => {
        if (step < totalSteps) {
            setDirection(1);
            setStep(s => s + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setDirection(-1);
            setStep(s => s - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                onClose();
                // Reset after close
                setTimeout(() => {
                    setStep(1);
                    setStatus('idle');
                }, 500);
            }, 3000);
        }, 1500);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    // Ensure modal only renders when open
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-dialog glass-card"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="modal-header">
                        <div>
                            <h2 className="modal-title">Free Claim Assessment</h2>
                            <p className="modal-subtitle">Step {step} of {totalSteps}</p>
                        </div>
                        <button className="modal-close" onClick={onClose}>
                            <X />
                        </button>
                    </div>

                    <div className="modal-progress">
                        <div
                            className="modal-progress-bar"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        ></div>
                    </div>

                    <div className="modal-body">
                        {status === 'success' ? (
                            <motion.div
                                className="success-state text-center py-12"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <CheckCircle2 className="success-icon mb-4 mx-auto text-primary w-16 h-16" />
                                <h3 className="success-title text-2xl mb-2">Assessment Requested!</h3>
                                <p className="success-desc">Our team will contact you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                                <div className="modal-content-area">
                                    <AnimatePresence custom={direction} mode="wait">
                                        <motion.div
                                            key={step}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                            className="modal-step-container"
                                        >
                                            {step === 1 && (
                                                <div className="step-fields">
                                                    <h3 className="step-title">Contact Information</h3>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Full Name *</label>
                                                        <input type="text" className="form-input" required placeholder="John Smith" />
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Phone *</label>
                                                        <input type="tel" className="form-input" required placeholder="(512) 555-1234" />
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Email *</label>
                                                        <input type="email" className="form-input" required placeholder="john@example.com" />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 2 && (
                                                <div className="step-fields">
                                                    <h3 className="step-title">Property Details</h3>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Street Address *</label>
                                                        <input type="text" className="form-input" required placeholder="123 Main St" />
                                                    </div>
                                                    <div className="grid-2 mb-4">
                                                        <div className="form-row">
                                                            <label className="form-label">City *</label>
                                                            <input type="text" className="form-input" required placeholder="Austin" />
                                                        </div>
                                                        <div className="form-row">
                                                            <label className="form-label">ZIP Code *</label>
                                                            <input type="text" className="form-input" required placeholder="78701" />
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Property Type</label>
                                                        <div className="select-wrapper">
                                                            <select className="form-select">
                                                                <option value="single">Single Family Home</option>
                                                                <option value="townhouse">Townhouse</option>
                                                                <option value="condo">Condo</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div className="step-fields">
                                                    <h3 className="step-title">Damage & Insurance</h3>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Type of Damage *</label>
                                                        <div className="select-wrapper">
                                                            <select className="form-select" required>
                                                                <option value="">Select one...</option>
                                                                <option value="Roof">Roof & Hail</option>
                                                                <option value="Water">Water & Leaks</option>
                                                                <option value="Storm">Storm & Wind</option>
                                                                <option value="Fire">Fire & Smoke</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Insurance Carrier</label>
                                                        <input type="text" className="form-input" placeholder="e.g. State Farm" />
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Claim Already Filed?</label>
                                                        <div className="select-wrapper">
                                                            <select className="form-select">
                                                                <option value="No">No</option>
                                                                <option value="Yes">Yes</option>
                                                                <option value="InProgress">In Progress</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {step === 4 && (
                                                <div className="step-fields">
                                                    <h3 className="step-title">Additional Details</h3>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">Description of damage *</label>
                                                        <textarea className="form-textarea" required rows="4" placeholder="What happened? What do you see?"></textarea>
                                                    </div>
                                                    <div className="form-row mb-4">
                                                        <label className="form-label">How urgent is this?</label>
                                                        <div className="select-wrapper">
                                                            <select className="form-select">
                                                                <option value="Soon">Soon — need repair next few weeks</option>
                                                                <option value="Emergency">Emergency — active leak</option>
                                                                <option value="Planning">Planning — gathering info</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="modal-actions">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={prevStep}
                                        style={{ visibility: step > 1 ? 'visible' : 'hidden' }}
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                    </button>

                                    {step < totalSteps ? (
                                        <button type="submit" className="btn btn-primary">
                                            Next <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    ) : (
                                        <button type="submit" className={`btn btn-primary ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                                            {status === 'submitting' ? <span className="loader"></span> : 'Submit Request'}
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default IntakeModal;
