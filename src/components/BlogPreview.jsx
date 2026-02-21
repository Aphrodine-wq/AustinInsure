import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import blogPosts from '../data/blogPosts';
import './BlogPreview.css';

const BlogPreview = () => {
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="section blog-preview-section">
            <div className="container">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge inline-block mb-4">
                        <BookOpen className="icon-sm mr-2" style={{ display: 'inline', verticalAlign: '-3px' }} />
                        Knowledge Center
                    </span>
                    <h2 className="section-title">
                        Expert <span className="text-gradient">Insurance Guides</span> for Austin Homeowners
                    </h2>
                    <p className="section-subtitle">
                        Learn how to protect your home, navigate insurance claims, and get every dollar you deserve.
                    </p>
                </motion.div>

                <div className="blog-preview-grid">
                    {latestPosts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="blog-preview-card">
                                <div className="blog-preview-image-wrapper">
                                    <img src={post.heroImage} alt={post.title} loading="lazy" />
                                    <span className="blog-preview-category">{post.category}</span>
                                </div>
                                <div className="blog-preview-body">
                                    <h3 className="blog-preview-title">{post.title}</h3>
                                    <p className="blog-preview-excerpt">{post.excerpt}</p>
                                    <div className="blog-preview-meta">
                                        <span><Clock className="icon-xs" /> {post.readTime}</span>
                                        <span className="blog-preview-read-link">
                                            Read Article <ArrowRight className="icon-xs" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/blog" className="btn btn-secondary btn-lg">
                        <span>View All Articles</span>
                        <ArrowRight className="icon-sm ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogPreview;
