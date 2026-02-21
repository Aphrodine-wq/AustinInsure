import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Tag, Phone, ArrowRight } from 'lucide-react';
import useDocumentHead from '../hooks/useDocumentHead';
import BlogCTA from './BlogCTA';
import blogPosts from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useDocumentHead(post ? {
        title: `${post.title} | Austin Insure Blog`,
        description: post.metaDescription,
        url: `https://www.austininsure.com/blog/${post.slug}`,
        image: post.heroImage,
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.metaDescription,
            image: post.heroImage,
            author: {
                '@type': 'Organization',
                name: 'Austin Insure',
                url: 'https://www.austininsure.com'
            },
            publisher: {
                '@type': 'Organization',
                name: 'Austin Insure',
                url: 'https://www.austininsure.com'
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.austininsure.com/blog/${post.slug}`
            }
        }
    } : {});

    // Inject BreadcrumbList schema
    useEffect(() => {
        if (!post) return;
        const breadcrumbSchema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.austininsure.com/'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: 'https://www.austininsure.com/blog'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: post.title,
                    item: `https://www.austininsure.com/blog/${post.slug}`
                }
            ]
        };

        let script = document.getElementById('breadcrumb-schema');
        if (!script) {
            script = document.createElement('script');
            script.id = 'breadcrumb-schema';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(breadcrumbSchema);

        return () => {
            const existing = document.getElementById('breadcrumb-schema');
            if (existing) existing.remove();
        };
    }, [post]);

    if (!post) {
        return (
            <div className="container text-center py-20">
                <h2 className="section-title">Article Not Found</h2>
                <p className="section-subtitle">The article you're looking for doesn't exist.</p>
                <Link to="/blog" className="btn btn-primary mt-4">Back to Blog</Link>
            </div>
        );
    }

    const relatedPosts = blogPosts
        .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
        .slice(0, 3);

    // Split content in half to inject inline CTA
    const contentParts = post.content.split('</h2>');
    const midPoint = Math.floor(contentParts.length / 2);
    const firstHalf = contentParts.slice(0, midPoint).join('</h2>') + (midPoint > 0 ? '</h2>' : '');
    const secondHalf = contentParts.slice(midPoint).join('</h2>');

    return (
        <article className="blog-post-page">
            {/* Hero */}
            <div
                className="blog-post-hero"
                style={{ backgroundImage: `url(${post.heroImage})` }}
            >
                <div className="blog-post-hero-overlay">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link to="/blog" className="blog-post-back">
                                <ArrowLeft className="icon-sm" />
                                Back to Blog
                            </Link>
                            <div className="blog-post-category-badge">{post.category}</div>
                            <h1 className="blog-post-title">{post.title}</h1>
                            <div className="blog-post-meta">
                                <span><User className="icon-sm" /> {post.author}</span>
                                <span><Calendar className="icon-sm" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                <span><Clock className="icon-sm" /> {post.readTime}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
                <div className="container">
                    <Link to="/">Home</Link>
                    <span className="breadcrumb-sep">/</span>
                    <Link to="/blog">Blog</Link>
                    <span className="breadcrumb-sep">/</span>
                    <span className="breadcrumb-current">{post.title}</span>
                </div>
            </nav>

            {/* Content */}
            <div className="container blog-post-layout">
                <motion.div
                    className="blog-post-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: firstHalf }} />

                    {/* Inline CTA */}
                    <BlogCTA />

                    <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: secondHalf }} />

                    {/* Tags */}
                    <div className="blog-post-tags">
                        {post.tags.map((tag, i) => (
                            <span key={i} className="blog-tag">
                                <Tag className="icon-xs" /> {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Sidebar */}
                <aside className="blog-post-sidebar">
                    <div className="sidebar-sticky">
                        <div className="sidebar-cta glass-card">
                            <h3>Free Claim Assessment</h3>
                            <p>Not sure if you have a case? We'll inspect your property for free and guide you through the entire claims process.</p>
                            <a href="tel:+15123633576" className="btn btn-accent w-full justify-center">
                                <Phone className="icon-sm mr-2" />
                                Call 512-363-3576
                            </a>
                            <p className="sidebar-cta-note">Available 24/7 for emergencies</p>
                        </div>

                        <div className="sidebar-section">
                            <h4 className="sidebar-heading">Topics</h4>
                            <div className="sidebar-tags">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="sidebar-tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {relatedPosts.length > 0 && (
                            <div className="sidebar-section">
                                <h4 className="sidebar-heading">Related Articles</h4>
                                <div className="sidebar-related">
                                    {relatedPosts.map(rp => (
                                        <Link key={rp.slug} to={`/blog/${rp.slug}`} className="related-post-link">
                                            <span className="related-post-title">{rp.title}</span>
                                            <ArrowRight className="icon-xs" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </article>
    );
};

export default BlogPost;
