"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitContact } from "@/app/actions";
import { Send } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const result = await submitContact(formData);

        setIsSubmitting(false);

        if (result.error) {
            setError(result.error);
        } else if (result.success) {
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
            (e.target as HTMLFormElement).reset();
        }
    }

    return (
        <section id="contact" className="py-24 px-4 max-w-2xl mx-auto relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-heading mb-16"
            >
                Contact Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-bordered"
            >
                {isSuccess ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                            <Send className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Hi Praveen..."
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                            />
                        </div>

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </motion.div>
        </section>
    );
}
