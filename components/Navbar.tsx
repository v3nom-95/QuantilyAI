'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className={`navbar-inner ${mobileMenuOpen ? 'menu-open' : ''}`}>
                <Link href="/" className="nav-logo" onClick={closeMenu}>
                    <Image src="/quantily-logo1.png" alt="Quantily AI" width={210} height={56} style={{ objectFit: 'contain' }} />
                </Link>

                <div className="md:hidden mobile-menu-btn" onClick={toggleMenu}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    <li><a href="#contact" className="nav-cta" onClick={closeMenu}>Get Quote</a></li>
                </ul>
            </div>
            
            {/* Overlay for mobile menu */}
            <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        </nav>
    );
}
