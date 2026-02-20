import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, CloudLightning, Flame } from 'lucide-react';
import './DamageTypes.css';

const DamageTypes = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

    const damageTypes = [
        {
            icon: <Shield className="damage-icon" />,
            title: "Roof & Hail Damage",
            desc: "Texas storms are notorious for destroying roofs. Even if you don't see missing shingles, massive hailstones can compromise your roof's integrity, leading to leaks down the line. We provide comprehensive inspections to catch what others miss.",
            color: "#2563eb"
        },
        {
            icon: <Droplets className="damage-icon" />,
            title: "Water Damage & Leaks",
            desc: "From burst pipes in winter freezes to sudden plumbing failures, water damage spreads quickly. We extract the water, mitigate mold risk, and completely restore the affected areas of your home to perfect condition.",
            color: "#0ea5e9"
        },
        {
            icon: <CloudLightning className="damage-icon" />,
            title: "Storm & Wind Damage",
            desc: "Severe winds can tear off siding, snap trees, and cause devastating structural damage. Our emergency response team quickly secures your property to prevent further loss before beginning the full restoration process.",
            color: "#8b5cf6"
        },
        {
            icon: <Flame className="damage-icon" />,
            title: "Fire & Smoke Damage",
            desc: "Fire damage doesn't stop when the flames are out. Acidic smoke and soot can permanently ruin belongings and structure if not properly treated. We handle the complex cleanup and rebuild your home from the ground up.",
            color: "#f59e0b"
        }
    ];

    return (
        <section id="services" className="section damage-types">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">We Handle the Damage Types Insurance Covers</h2>
                    <p className="section-subtitle">
                        Roof, water, storm, fire — we inspect, document, and repair so your claim and your property are both in good hands.
                    </p>
                </motion.div>

                <motion.div
                    className="damage-grid grid-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {damageTypes.map((type, index) => (
                        <motion.div
                            className="damage-card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            key={index}
                            style={{ '--stroke-color': type.color }}
                        >
                            <div className="damage-icon-wrapper" style={{ boxShadow: `0 0 20px ${type.color}40` }}>
                                {type.icon}
                            </div>
                            <h3 className="damage-title">{type.title}</h3>
                            <p className="damage-desc">{type.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default DamageTypes;
