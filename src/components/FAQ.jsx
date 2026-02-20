import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "Is the inspection really free? Are there hidden fees?",
            a: "Yes, our comprehensive inspection is 100% free with absolutely no obligation. We come out, extensively document all damage with photos and drone footage if necessary, and provide you with a detailed report. You only pay if you decide to hire us for the restoration work."
        },
        {
            q: "Will filing a weather claim make my insurance rates go up?",
            a: "In Texas, insurance companies generally cannot raise your individual premium solely because you filed a claim for an 'Act of God' (like hail or wind). Rates in your zip code may increase due to the storm regardless of whether you file. It's usually best to file and get the repairs you need instead of paying for a new roof out-of-pocket while still paying higher neighborhood premiums."
        },
        {
            q: "Do you work with my specific insurance company?",
            a: "Yes. We work seamlessly with all major insurance carriers, including State Farm, Allstate, USAA, Farmers, Liberty Mutual, Progressive, and local Texas providers. We speak their language, use their preferred software (Xactimate), and provide the exact documentation they require to approve your claim."
        },
        {
            q: "How long does the entire claim and repair process take?",
            a: "We can typically schedule your free inspection within 24-48 hours. After that, timeline depends on your adjuster's schedule (usually 1-2 weeks for their inspection). Once the scope of work is approved by the carrier, our expert crews can often complete a full roof replacement in just 1-2 days."
        },
        {
            q: "My insurance company already gave me a check, but it seems really low. Can you help?",
            a: "Absolutely. This happens frequently. Adjusters often miss hidden damage or use outdated pricing. We can review your initial claim summary, document the missed damage, and file what is known as a 'supplement' to get the additional funds needed to do the job correctly. DO NOT cash the final depreciation check until you speak with us."
        }
    ];

    return (
        <section id="faq" className="section faq-section">
            <div className="container container-narrow">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-4">
                        <MessageCircleQuestion className="text-primary w-12 h-12 opacity-80" />
                    </div>
                    <h2 className="section-title">Common Questions</h2>
                    <p className="section-subtitle">
                        Everything you need to know about damage claims and our repair process.
                    </p>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="faq-q-text">{faq.q}</span>
                                <motion.div
                                    className="faq-icon"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="faq-answer">
                                            <p>{faq.a}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
