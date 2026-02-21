import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Search } from 'lucide-react';
import blogPosts from '../data/blogPosts';
import BlogCard from './BlogCard';
import useDocumentHead from '../hooks/useDocumentHead';
import './BlogList.css';

const categories = ['All', ...new Set(blogPosts.map(p => p.category))];

const BlogList = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useDocumentHead({
        title: 'Insurance Claims Blog | Tips & Emergency Guides | Austin Insure',
        description: 'Expert insurance claims advice, emergency response guides, and homeowner tips from Austin Insure. Learn how to protect your home and maximize your insurance payout in Austin, TX.',
        url: 'https://www.austininsure.com/blog',
        image: '/images/hero-home.png',
    });

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = !searchQuery ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blog-list-page">
            {/* Hero Banner */}
            <section className="blog-hero">
                <div className="container">
                    <motion.div
                        className="blog-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="blog-hero-badge">
                            <BookOpen size={16} />
                            <span>Austin Insure Knowledge Base</span>
                        </div>
                        <h1 className="blog-hero-title">
                            Insurance Tips &<br />
                            <span className="text-gradient">Homeowner Guides</span>
                        </h1>
                        <p className="blog-hero-subtitle">
                            Expert advice to help you navigate insurance claims, handle emergencies, and protect your Central Texas home.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="blog-controls">
                <div className="container">
                    <div className="blog-controls-inner">
                        <div className="blog-categories">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`blog-category-pill ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="blog-search-wrapper">
                            <Search size={16} className="blog-search-icon" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="blog-search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search blog articles"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid-section">
                <div className="container">
                    {filteredPosts.length > 0 ? (
                        <div className="blog-grid">
                            {filteredPosts.map((post, i) => (
                                <BlogCard key={post.slug} post={post} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="blog-empty">
                            <p>No articles found matching your search. Try a different keyword.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="blog-cta-section">
                <div className="container">
                    <div className="blog-cta-card">
                        <h2>Need Help With a Claim Right Now?</h2>
                        <p>Don't wait — our team is standing by to inspect your damage, file your claim, and fight for the full payout you deserve.</p>
                        <div className="blog-cta-actions">
                            <a href="tel:+15123633576" className="btn btn-accent">
                                Call 512 - 363 - 3576
                            </a>
                            <Link to="/" className="btn btn-secondary">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogList;
