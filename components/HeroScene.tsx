'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroScene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouse);

        let animFrame: number;
        const animate = () => {
            if (logoRef.current) {
                const rotateX = mouse.current.y * -12;
                const rotateY = mouse.current.x * 12;
                logoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
            animFrame = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouse);
            cancelAnimationFrame(animFrame);
        };
    }, []);

    return (
        <div className="hero-bg-scene" ref={containerRef}>
            {/* Just the logo as background */}
            <div className="hero-logo-container" style={{ width: '100%', maxWidth: '500px', padding: '0 20px' }}>
                <Image
                    ref={logoRef}
                    src="/quantily-logo.png"
                    alt="Quantily AI Logo Background"
                    width={500}
                    height={200}
                    className="hero-logo-image"
                    style={{ opacity: 0.15, width: '100%', height: 'auto' }}
                    priority
                />
            </div>

            {/* Subtle gradient overlay */}
            <div className="hero-gradient-overlay" />
        </div>
    );
}
