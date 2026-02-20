import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'FAQ', href: '#faq' }
    ];

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <motion.header
                className={`site-header ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="header-inner">
                    <a href="#" className="logo">
                        <span className="logo-text">Austin Insure</span>
                        <span className="logo-dot">.</span>
                    </a>

                    <nav className="header-nav md-flex">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="header-right">
                        <span className="header-trust lg-flex">
                            <ShieldCheck className="icon-sm text-accent" />
                            <span className="trust-text">Licensed & Bonded</span>
                        </span>
                        <a href="tel:+15125551234" className="btn btn-accent btn-sm header-cta sm-flex">
                            <Phone className="icon-sm mr-2" />
                            <span>(512) 555-1234</span>
                        </a>
                        <button className="mobile-menu-btn md-hidden" onClick={toggleMenu} aria-label="Toggle menu">
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="mobile-menu-inner">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="mobile-nav-link"
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="tel:+15125551234"
                                className="btn btn-accent w-full mt-4 justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Phone className="icon-sm mr-2" />
                                (512) 555-1234
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
