"use client";
import React, { useRef, useEffect } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    twinkleSpeed: number;
    twinkleOffset: number;
    color: string;
}

const STAR_COLORS = [
    "130, 180, 255",   // soft blue
    "180, 140, 255",   // purple
    "255, 100, 150",   // pink
    "100, 200, 255",   // cyan
    "200, 200, 255",   // white-blue
];

export function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
            generateStars();
        }

        function generateStars() {
            if (!canvas) return;
            const area = canvas.width * canvas.height;
            const count = Math.floor(area / 4000); // density
            const stars: Star[] = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.3,
                    opacity: Math.random() * 0.6 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                    twinkleOffset: Math.random() * Math.PI * 2,
                    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
                });
            }
            starsRef.current = stars;
        }

        function draw(time: number) {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const star of starsRef.current) {
                const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
                const alpha = star.opacity * (0.5 + 0.5 * twinkle);
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
                ctx.fill();
            }

            animFrameRef.current = requestAnimationFrame(draw);
        }

        resize();
        animFrameRef.current = requestAnimationFrame(draw);

        // Re-generate on resize
        const resizeObserver = new ResizeObserver(() => {
            resize();
        });
        resizeObserver.observe(document.body);

        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            resizeObserver.disconnect();
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ width: "100%", height: "100%" }}
            aria-hidden="true"
        />
    );
}
