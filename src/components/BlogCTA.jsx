import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import './BlogCTA.css';

const BlogCTA = () => {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = {
            "Name": e.target.elements.quickName.value,
            "Phone": e.target.elements.quickPhone.value,
            "Source": "Blog Inline CTA"
        };

        try {
            const response = await fetch('https://hooks.zapier.com/hooks/catch/26518372/uck5rhu/', {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Error submitting:", error);
        }
        setSubmitting(false);
    };

    if (submitted) {
        return (
            <div className="blog-cta-inline blog-cta-success">
                <CheckCircle2 className="blog-cta-success-icon" />
                <h3>We'll be in touch within 24 hours!</h3>
                <p>Our team will call you to schedule your free inspection.</p>
            </div>
        );
    }

    return (
        <div className="blog-cta-inline">
            <div className="blog-cta-content">
                <div className="blog-cta-badge">FREE ASSESSMENT</div>
                <h3 className="blog-cta-title">Think Your Home Has Damage?</h3>
                <p className="blog-cta-desc">
                    Get a free, no-obligation inspection from Austin's trusted insurance claim experts.
                    We'll document the damage and guide you through the entire claims process.
                </p>
                <div className="blog-cta-phone">
                    <Phone className="blog-cta-phone-icon" />
                    <a href="tel:+15123633576">512 - 363 - 3576</a>
                </div>
            </div>
            <div className="blog-cta-form-wrapper">
                <form className="blog-cta-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="quickName"
                        placeholder="Your Name"
                        required
                        className="blog-cta-input"
                    />
                    <input
                        type="tel"
                        name="quickPhone"
                        placeholder="Phone Number"
                        required
                        className="blog-cta-input"
                    />
                    <button type="submit" className="btn btn-accent blog-cta-btn" disabled={submitting}>
                        {submitting ? 'Sending...' : 'Get Free Assessment'}
                        {!submitting && <ArrowRight className="icon-sm ml-2" />}
                    </button>
                </form>
                <p className="blog-cta-disclaimer">No spam. We'll call you once to schedule your free inspection.</p>
            </div>
        </div>
    );
};

export default BlogCTA;
