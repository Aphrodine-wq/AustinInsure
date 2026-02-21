import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Services', href: '/services', isHash: false },
        { name: 'About', href: '/about', isHash: false },
        { name: 'Service Area', href: '/service-area', isHash: false },
        { name: 'Blog', href: '/blog', isHash: false },
        { name: 'Contact', href: '/contact', isHash: false }
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
                    <Link to="/" className="logo">
                        <span className="logo-text">Austin Insure</span>
                        <span className="logo-dot">.</span>
                    </Link>

                    <nav className="header-nav md-flex" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a key={link.name} href={link.href} className="nav-link">
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`nav-link ${location.pathname.startsWith(link.href) ? 'nav-link-active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </nav>

                    <div className="header-right">
                        <span className="header-trust lg-flex">
                            <ShieldCheck className="icon-sm text-accent" />
                            <span className="trust-text">Licensed & Bonded</span>
                        </span>
                        <a href="tel:+15123633576" className="btn btn-accent btn-sm header-cta sm-flex">
                            <Phone className="icon-sm mr-2" />
                            <span>512 - 363 - 3576</span>
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
                                link.isHash ? (
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
                                ) : (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className="mobile-nav-link"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                )
                            ))}
                            <motion.a
                                href="tel:+15123633576"
                                className="btn btn-accent w-full mt-4 justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Phone className="icon-sm mr-2" />
                                512 - 363 - 3576
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
