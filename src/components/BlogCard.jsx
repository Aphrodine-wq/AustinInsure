import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './BlogCard.css';

const BlogCard = ({ post, index }) => {
    return (
        <motion.article
            className="blog-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-image-wrapper">
                    <img
                        src={post.heroImage}
                        alt={post.title}
                        className="blog-card-image"
                        loading="lazy"
                        decoding="async"
                    />
                    <span className="blog-card-category">{post.category}</span>
                </div>

                <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>

                    <div className="blog-card-meta">
                        <span className="blog-card-read-time">
                            <Clock size={14} />
                            {post.readTime}
                        </span>
                        <span className="blog-card-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <span className="blog-card-cta">
                        Read Article <ArrowRight size={16} />
                    </span>
                </div>
            </Link>
        </motion.article>
    );
};

export default BlogCard;
