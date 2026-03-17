"use client";
import React from "react";
import { motion } from "framer-motion";

export const Cover = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`relative inline-block overflow-hidden px-2 py-1 ${className}`}>
            <motion.span
                className="absolute inset-x-0 bottom-0 h-1/3 bg-primary/20 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
                style={{ originX: 0 }}
            />
            <motion.span
                className="absolute inset-0 bg-primary/10 -z-10 rounded-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            />
            {children}
        </div>
    );
};

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 ${className}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,theme(colors.primary/0.1)_0,transparent_50%)]" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,theme(colors.primary/0.05)_0,transparent_50%)] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,theme(colors.primary/0.05)_0,transparent_50%)] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
    )
}
