"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data";
import { Sparkles } from "lucide-react";

export function Hero() {
    const { name, roles, resumeLink } = portfolioData.about;
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayText.length < role.length) {
                timeout = setTimeout(() => {
                    setDisplayText(role.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
            <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
                >
                    {name}
                </motion.h1>

                {/* Gradient underline */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="w-80 h-[2px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-50 mb-6"
                    style={{ transformOrigin: "center" }}
                />

                {/* Typewriter subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl sm:text-2xl text-muted-foreground font-light mb-12 h-10"
                >
                    <span>{displayText}</span>
                    <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse" />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <a
                        href="#about"
                        className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <Sparkles className="h-4 w-4 relative z-10" />
                        <span className="relative z-10">Explore My Universe</span>
                    </a>
                    <a
                        href={resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10">Check My Resume</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
