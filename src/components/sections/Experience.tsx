"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";

export function Experience() {
    const experiences = portfolioData.experience;

    return (
        <section id="experience" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-heading mb-16"
            >
                Experience
            </motion.h2>

            <div className="space-y-8">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card-bordered"
                    >
                        {/* Header: Role + Duration */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 w-fit">
                                    {item.duration}
                                </span>
                                {(item as any).location && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/25 w-fit">
                                        {(item as any).location}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Company Name */}
                        <h4 className="text-primary font-medium mb-4">{item.company}</h4>

                        {/* Bullet Points */}
                        <ul className="space-y-2 mb-6">
                            {item.description.map((point, i) => (
                                <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        {/* Tech Tags */}
                        {item.techStack && (
                            <div className="flex flex-wrap gap-2">
                                {item.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
