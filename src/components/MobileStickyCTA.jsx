import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const MobileStickyCTA = ({ onOpenModal }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the sticky CTA only after scrolling past the hero section (roughly 600px)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="mobile-sticky-cta"
                >
                    <button onClick={onOpenModal} className="btn btn-accent w-full justify-center">
                        <Calendar className="icon-sm mr-2" />
                        <span>Get Free Assessment</span>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileStickyCTA;
