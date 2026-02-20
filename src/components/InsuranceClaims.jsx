import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileText, BadgeDollarSign, HeartHandshake } from 'lucide-react';
import './InsuranceClaims.css';

const InsuranceClaims = () => {
    return (
        <section id="insurance-claims" className="section bg-slate">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge inline-block mb-4">
                        Austin Texas Insurance Experts
                    </span>
                    <h2 className="section-title">
                        Need <span className="text-gradient">Help With Insurance?</span>
                    </h2>
                    <h3 className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto mt-4 leading-relaxed">
                        We make it easy to file an insurance claim and get your home fully restored without the headache.
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <motion.article
                        className="glass-card claim-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="claim-icon-wrapper">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">File an Insurance Claim</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Don't navigate the complex claims process alone. We assist you from day one to properly document damage and accurately file an insurance claim to maximize your approval odds.
                        </p>
                    </motion.article>

                    {/* Card 2 */}
                    <motion.article
                        className="glass-card claim-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="claim-icon-wrapper">
                            <ShieldAlert className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">Expert Adjuster Meetings</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            When the insurance adjuster visits, our Austin insurance specialists are there natively advocating for you. We point out hidden damages that often get overlooked.
                        </p>
                    </motion.article>

                    {/* Card 3 */}
                    <motion.article
                        className="glass-card claim-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="claim-icon-wrapper">
                            <BadgeDollarSign className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">Zero Out-Of-Pocket Guarantee</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            We negotiate directly with your Austin Texas insurance provider so that your only cost is your deductible. No surprise bills, no hidden fees.
                        </p>
                    </motion.article>

                    {/* Card 4 */}
                    <motion.article
                        className="glass-card claim-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="claim-icon-wrapper">
                            <HeartHandshake className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3">Total Restoration</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            From emergency tarping to the final coat of paint, we are the only team you need for complete help with insurance and property restoration.
                        </p>
                    </motion.article>
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                        As an independent contractor, we work for <strong>you</strong>, not the insurance company. Whether you need help with a roof leak, water damage, or hail strikes, Austin Insure provides the comprehensive help with insurance you deserve in Austin, Texas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default InsuranceClaims;
