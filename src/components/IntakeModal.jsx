import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, MapPin, HandCoins } from 'lucide-react';
import './IntakeModal.css';

const IntakeModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [status, setStatus] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        propertyAddress: '',
        propertyCity: 'Austin',
        propertyZip: '',
        propertyType: 'single',
        damageType: '',
        urgency: '',
        details: '',
        claimFiled: 'No',
        source: 'Website Intake Modal'
    });

    const totalSteps = 3;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const rawFormData = {
            "Name": formData.name || "Unknown",
            "Phone": formData.phone || "Unknown",
            "Email": formData.email || "Unknown",
            "Property Address": formData.propertyAddress || "Unknown",
            "Property City": formData.propertyCity || "Austin",
            "Property Zip": formData.propertyZip || "Unknown",
            "Property Type": formData.propertyType || "single",
            "Damage Type": formData.damageType || "Unknown",
            "Urgency": formData.urgency || "Unknown",
            "Details": formData.details || "Unknown",
            "Source": "Website Intake Modal"
        };

        try {
            const response = await fetch('https://hooks.zapier.com/hooks/catch/26518372/uck5rhu/', {
                method: 'POST',
                body: JSON.stringify(rawFormData),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setTimeout(() => {
                        setStep(1);
                        setStatus('idle');
                    }, 500);
                }, 3000);
            } else {
                console.error("Submission failed");
                setStatus('idle');
            }
        } catch (error) {
            console.error("Error submitting to Zapier:", error);
            setStatus('idle');
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 30 : -30,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 30 : -30,
            opacity: 0
        })
    };

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
                    className="modal-dialog split-modal"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={e => e.stopPropagation()}
                >
                    <button className="modal-close-floating" onClick={onClose}>
                        <X />
                    </button>

                    {/* LEFT COLUMN: TRUST & PROOF */}
                    <div className="modal-left">
                        <div className="modal-left-content">
                            <h2 className="modal-trust-title">You're in good hands.</h2>
                            <p className="modal-trust-subtitle">
                                Get your free, professional property assessment started in under 60 seconds.
                            </p>

                            <ul className="modal-trust-list">
                                <li>
                                    <ShieldCheck className="trust-icon text-accent" />
                                    <span>Licensed Texas Contractor</span>
                                </li>
                                <li>
                                    <HandCoins className="trust-icon text-accent" />
                                    <span>Zero Out-Of-Pocket Guarantee</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="trust-icon text-accent" />
                                    <span>We handle the insurance claim</span>
                                </li>
                                <li>
                                    <MapPin className="trust-icon text-accent" />
                                    <span>Locally owned & operated</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM LOGIC */}
                    <div className="modal-right">
                        <div className="modal-header">
                            <div>
                                <h2 className="modal-title">Free Assessment</h2>
                                <p className="modal-subtitle">Step {step} of {totalSteps}</p>
                            </div>
                        </div>

                        <div className="modal-stepper">
                            {[1, 2, 3].map(num => (
                                <div key={num} className={`step-indicator ${step >= num ? 'active' : ''} ${step > num ? 'completed' : ''}`}>
                                    {step > num ? <CheckCircle2 className="w-4 h-4 text-white" /> : num}
                                </div>
                            ))}
                        </div>

                        <div className="modal-body">
                            {status === 'success' ? (
                                <motion.div
                                    className="success-state text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <CheckCircle2 className="success-icon mb-4 mx-auto text-primary w-16 h-16" />
                                    <h3 className="success-title text-2xl mb-2">Request Received!</h3>
                                    <p className="success-desc">Our team will call you within 24 hours to schedule your free inspection.</p>
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
                                                {/* STEP 1: DAMAGE */}
                                                {step === 1 && (
                                                    <div className="step-fields">
                                                        <h3 className="step-title">1. The Problem</h3>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">Type of Damage *</label>
                                                            <div className="select-wrapper">
                                                                <select name="damageType" value={formData.damageType} onChange={handleInputChange} className="form-select" required>
                                                                    <option value="">Select one...</option>
                                                                    <option value="Roof">Roof & Hail</option>
                                                                    <option value="Water">Water & Leaks</option>
                                                                    <option value="Storm">Storm & Wind</option>
                                                                    <option value="Fire">Fire & Smoke</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">How urgent is this? *</label>
                                                            <div className="select-wrapper">
                                                                <select name="urgency" value={formData.urgency} onChange={handleInputChange} className="form-select" required>
                                                                    <option value="">Select urgency...</option>
                                                                    <option value="Emergency">Emergency — Active leak/Major damage</option>
                                                                    <option value="Soon">Soon — Need repairs this month</option>
                                                                    <option value="Planning">Planning — Exploring options</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">Brief Description *</label>
                                                            <textarea name="details" value={formData.details} onChange={handleInputChange} className="form-textarea" required rows="2" placeholder="What happened? What do you see?"></textarea>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* STEP 2: LOCATION */}
                                                {step === 2 && (
                                                    <div className="step-fields">
                                                        <h3 className="step-title">2. Property Details</h3>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">Street Address *</label>
                                                            <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleInputChange} className="form-input" required placeholder="123 Main St" />
                                                        </div>
                                                        <div className="grid-2 mb-4">
                                                            <div className="form-row">
                                                                <label className="form-label">City *</label>
                                                                <input type="text" name="propertyCity" value={formData.propertyCity} onChange={handleInputChange} className="form-input" required />
                                                            </div>
                                                            <div className="form-row">
                                                                <label className="form-label">ZIP Code *</label>
                                                                <input type="text" name="propertyZip" value={formData.propertyZip} onChange={handleInputChange} className="form-input" required placeholder="78701" />
                                                            </div>
                                                        </div>
                                                        <div className="grid-2 mb-4">
                                                            <div className="form-row">
                                                                <label className="form-label">Property Type *</label>
                                                                <div className="select-wrapper">
                                                                    <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} className="form-select" required>
                                                                        <option value="single">Single Family</option>
                                                                        <option value="townhouse">Townhouse / Condo</option>
                                                                        <option value="commercial">Commercial Building</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <label className="form-label">Claim Filed?</label>
                                                                <div className="select-wrapper">
                                                                    <select name="claimFiled" value={formData.claimFiled} onChange={handleInputChange} className="form-select">
                                                                        <option value="No">Not yet</option>
                                                                        <option value="Yes">Yes, recently</option>
                                                                        <option value="InProgress">Check in hand</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* STEP 3: CONTACT */}
                                                {step === 3 && (
                                                    <div className="step-fields">
                                                        <h3 className="step-title">3. Your Contact Info</h3>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">Full Name *</label>
                                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required placeholder="John Doe" />
                                                        </div>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">Email Address *</label>
                                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" required placeholder="john@example.com" />
                                                        </div>
                                                        <div className="form-row mb-4">
                                                            <label className="form-label">Phone Number *</label>
                                                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" required placeholder="(512) 555-1234" />
                                                        </div>
                                                        <p className="text-sm text-center" style={{ color: 'var(--color-text-tertiary)', marginTop: '1rem' }}>
                                                            By submitting, you agree to be contacted via text or call. No spam, ever.
                                                        </p>
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
                                            <ArrowLeft className="w-5 h-5 mr-2" /> Back
                                        </button>

                                        {step < totalSteps ? (
                                            <button type="submit" className="btn btn-primary">
                                                Next Step <ArrowRight className="w-5 h-5 ml-2" />
                                            </button>
                                        ) : (
                                            <button type="submit" className={`btn btn-accent ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                                                {status === 'submitting' ? <span className="loader"></span> : 'Request Assessment'}
                                            </button>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default IntakeModal;
