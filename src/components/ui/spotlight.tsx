"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, SpringOptions } from "framer-motion";
import { cn } from "@/lib/utils";

type SpotlightProps = {
    className?: string;
    size?: number;
    springOptions?: SpringOptions;
};

export function Spotlight({
    className,
    size = 200,
    springOptions = { bounce: 0 },
}: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

    const mouseX = useSpring(0, springOptions);
    const mouseY = useSpring(0, springOptions);

    const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
    const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

    useEffect(() => {
        if (containerRef.current) {
            const parent = containerRef.current.parentElement;
            if (parent) {
                parent.style.position = "relative";
                parent.style.overflow = "hidden";
                setParentElement(parent);
            }
        }
    }, []);

    useEffect(() => {
        if (!parentElement) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top } = parentElement.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            mouseX.set(x);
            mouseY.set(y);
        };
        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            parentElement.removeEventListener("mousemove", handleMouseMove);
            parentElement.removeEventListener("mouseenter", handleMouseEnter);
            parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [parentElement, mouseX, mouseY]);

    return (
        <motion.div
            ref={containerRef}
            className={cn(
                "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)] blur-2xl transition-opacity duration-200",
                className
            )}
            style={{
                width: size,
                height: size,
                left: spotlightLeft,
                top: spotlightTop,
                opacity: isHovered ? 0.2 : 0,
            }}
        />
    );
}
