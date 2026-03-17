"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { Eye } from "lucide-react";

export function Projects() {
    const projects = portfolioData.projects;

    return (
        <section id="projects" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-heading mb-16"
            >
                Projects
            </motion.h2>

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="card-bordered"
                    >
                        {/* Header: Title */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-2 mb-6">
                            {project.description.map((point, i) => (
                                <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        {/* Bottom Row: Tech Tags + Source Code Button */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-white/[0.04] text-foreground text-sm font-medium hover:bg-white/10 hover:border-primary/40 transition-all duration-300 w-fit flex-shrink-0"
                            >
                                <Eye className="w-4 h-4" />
                                Check Source Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
