"use client";
import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { Mail, Linkedin, Github } from "lucide-react";

export function About() {
    const { aboutParagraph, email } = portfolioData.about;
    const { socials } = portfolioData;

    return (
        <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-heading mb-16"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-bordered flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                                <span className="text-6xl font-bold text-gradient">PK</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    {aboutParagraph.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 last:mb-6">
                            {paragraph}
                        </p>
                    ))}

                    {/* Social Buttons */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            Email Me
                        </a>
                        <a
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/15 text-foreground font-medium text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <a
                            href={socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.06] border border-white/15 text-foreground font-medium text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
