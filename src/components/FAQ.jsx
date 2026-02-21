import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion, ArrowRight } from 'lucide-react';
import './FAQ.css';

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
    },
    {
        q: "What types of damage do you handle?",
        a: "We specialize in all major property damage types: roof damage (hail, wind, fallen trees), water damage (burst pipes, leaks, flooding), fire and smoke damage, storm and wind damage, and siding/gutter/window damage. If your home has sustained damage from any weather event or sudden incident, we can help."
    },
    {
        q: "What if my insurance claim was denied?",
        a: "A denial is not the final word. We specialize in reopening and overturning denied claims. We'll conduct a thorough re-inspection, prepare professional documentation, and file an appeal with your carrier. In many cases, we can get denied claims fully approved. Texas law also gives you the right to appraisal and legal action if your insurer acts in bad faith."
    },
    {
        q: "How much does it cost me out of pocket?",
        a: "In most cases, your only out-of-pocket cost is your insurance deductible. We bill your insurance company directly for the approved scope of work. There are no upfront costs for our inspection, documentation, or claims management services. We get paid when your insurance pays — not before."
    },
    {
        q: "Do I need to be home for the inspection?",
        a: "While it's helpful if you're present so we can discuss our findings in real-time, it's not required. We can conduct a thorough exterior inspection without you being present. If we need interior access (for water or fire damage), we'll coordinate a time that works for you."
    },
    {
        q: "How do I know if I have storm damage?",
        a: "Many homeowners don't realize they have damage. Signs include: missing or cracked shingles visible from the ground, dented gutters or downspouts, granules accumulating in gutters, water stains on ceilings or walls, dents on outdoor AC units or mailboxes, and neighbors getting roof replacements. If a major storm hit your area, it's worth getting a free inspection even if you don't see obvious damage."
    }
];

const FAQ = ({ onOpenModal }) => {
    const [openIndex, setOpenIndex] = useState(0);

    // Inject FAQPage JSON-LD schema
    useEffect(() => {
        const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a
                }
            }))
        };

        let script = document.getElementById('faq-schema');
        if (!script) {
            script = document.createElement('script');
            script.id = 'faq-schema';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(faqSchema);

        return () => {
            const existing = document.getElementById('faq-schema');
            if (existing) existing.remove();
        };
    }, []);

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
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                aria-expanded={openIndex === index}
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

                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.3 }}
                >
                    <button onClick={onOpenModal} className="btn btn-accent btn-lg text-lg">
                        <span>Claim Your Free Assessment</span>
                        <ArrowRight className="icon-sm ml-2" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
