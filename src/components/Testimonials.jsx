import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'David R.',
        location: 'Round Rock, TX',
        rating: 5,
        text: "After the hailstorm hit our neighborhood, Austin Insure handled everything. They found $14,000 more in damage than our adjuster did and got it all approved. Our roof looks brand new.",
        claimAmount: '$22,750',
        damageType: 'Hail / Roof'
    },
    {
        name: 'Sarah M.',
        location: 'Cedar Park, TX',
        rating: 5,
        text: "I was devastated after the pipe burst flooded our first floor. Austin Insure was there within hours, managed the entire insurance claim, and restored our home beautifully. I cannot recommend them enough.",
        claimAmount: '$31,200',
        damageType: 'Water Damage'
    },
    {
        name: 'James & Linda P.',
        location: 'Austin, TX',
        rating: 5,
        text: "Our insurance company denied our storm damage claim. Austin Insure stepped in, re-documented everything, filed an appeal, and got the denial completely overturned. We received every dollar we were owed.",
        claimAmount: '$18,400',
        damageType: 'Storm / Wind'
    },
    {
        name: 'Maria G.',
        location: 'Georgetown, TX',
        rating: 5,
        text: "The adjuster's initial offer was $4,500. Austin Insure filed a supplement and fought to get us $16,800 — enough to actually do the repairs right. They truly advocate for homeowners.",
        claimAmount: '$16,800',
        damageType: 'Roof Damage'
    },
    {
        name: 'Robert T.',
        location: 'Pflugerville, TX',
        rating: 5,
        text: "Professional, responsive, and honest. They walked me through every step of the claims process. I never had to deal with the insurance company directly — they handled all of it.",
        claimAmount: '$27,500',
        damageType: 'Hail / Siding'
    },
    {
        name: 'Karen W.',
        location: 'Lakeway, TX',
        rating: 5,
        text: "After a kitchen fire, I was overwhelmed. Austin Insure coordinated the emergency board-up, insurance claim, and full restoration. From disaster to beautiful in 6 weeks. Incredible team.",
        claimAmount: '$67,500',
        damageType: 'Fire Damage'
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge inline-block mb-4">Real Results From Real Homeowners</span>
                    <h2 className="section-title">
                        Trusted by <span className="text-gradient">Hundreds of Families</span> Across Austin
                    </h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Here's what our clients say about working with Austin Insure.
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="testimonial-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-stars">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="star-icon" />
                                    ))}
                                </div>
                                <Quote className="quote-icon" />
                            </div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-footer">
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.name.charAt(0)}</div>
                                    <div>
                                        <p className="author-name">{t.name}</p>
                                        <p className="author-location">{t.location}</p>
                                    </div>
                                </div>
                                <div className="testimonial-claim">
                                    <span className="claim-amount">{t.claimAmount}</span>
                                    <span className="claim-type">{t.damageType}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="testimonials-stats"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Claims Managed</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">$4.2M+</span>
                        <span className="stat-label">Recovered for Clients</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">Claim Approval Rate</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">4.9★</span>
                        <span className="stat-label">Average Rating</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
