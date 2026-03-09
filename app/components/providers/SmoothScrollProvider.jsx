"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const SmoothScrollProvider = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        lenisRef.current = new Lenis({
            duration: 1.2, // Scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            orientation: "vertical", // Scroll direction
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Animation frame loop
        function raf(time) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Expose Lenis instance globally for programmatic scrolling
        window.lenis = lenisRef.current;

        // Cleanup on unmount
        return () => {
            lenisRef.current?.destroy();
            lenisRef.current = null;
            window.lenis = null;
        };
    }, []);

    return <>{children}</>;
};
