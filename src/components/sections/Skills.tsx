"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";

export function Skills() {
    const { techStack } = portfolioData;

    // Flatten all skills into a single array
    const allSkills = Object.values(techStack).flat();

    return (
        <section id="skills" className="py-24 px-4 max-w-5xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-heading mb-16"
            >
                Skills
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-3"
            >
                {allSkills.map((skill, idx) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.03 }}
                        viewport={{ once: true }}
                        className="chip cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}
