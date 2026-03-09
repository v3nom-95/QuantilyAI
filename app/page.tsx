'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Monitor, TrendingUp, Share2, Cpu, Zap, ArrowRight, Target, Sparkles, Rocket, BarChart, Instagram, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroScene from '@/components/HeroScene';
import { useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';

const services = [
  {
    title: "Website Development",
    desc: "Bespoke digital experiences built with cutting-edge frameworks, optimized for performance and conversion.",
    Icon: Monitor,
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies to scale your brand's presence across search, social, and paid channels.",
    Icon: TrendingUp,
  },
  {
    title: "Social Media Management",
    desc: "Strategic content creation and community management that builds loyalty and drives engagement.",
    Icon: Share2,
  },
  {
    title: "Automations",
    desc: "Streamline your workflows with intelligent systems that save time and eliminate manual bottlenecks.",
    Icon: Cpu,
  },
  {
    title: "AI Marketing",
    desc: "Leveraging machine learning models to personalize experiences and predict customer behavior at scale.",
    Icon: Zap,
  },
];

const features = [
  { title: "Strategy First", desc: "Every project begins with deep research into your market, audience, and competition.", Icon: Target },
  { title: "Design Excellence", desc: "We craft pixel-perfect interfaces that communicate your brand's premium quality.", Icon: Sparkles },
  { title: "Tech Forward", desc: "Built with the latest frameworks and AI tools for maximum performance.", Icon: Rocket },
  { title: "Results Driven", desc: "We measure success in conversions, engagement, and revenue growth.", Icon: BarChart },
];

const marqueeItems = [
  "Web Development", "Digital Marketing", "AI Solutions", "Social Media",
  "Brand Strategy", "UI/UX Design", "Automation", "Analytics",
  "Web Development", "Digital Marketing", "AI Solutions", "Social Media",
  "Brand Strategy", "UI/UX Design", "Automation", "Analytics",
];

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const createObserver = useCallback((targetSelector: string, stagger: number = 100) => {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(targetSelector);
          anime({
            targets: elements,
            translateY: [60, 0],
            translateX: targetSelector === '.about-feature' ? [40, 0] : [0, 0],
            opacity: [0, 1],
            delay: anime.stagger(stagger),
            easing: 'easeOutExpo',
            duration: 1000,
          });
        }
      });
    }, { threshold: 0.15 });
  }, []);

  useEffect(() => {
    const servicesObs = createObserver('.service-card', 120);
    const aboutObs = createObserver('.about-feature', 200);

    if (servicesRef.current) servicesObs.observe(servicesRef.current);
    if (aboutRef.current) aboutObs.observe(aboutRef.current);

    // Hero title animation
    anime({
      targets: '.hero-title',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1200,
      easing: 'easeOutExpo',
      delay: 400,
    });

    return () => {
      servicesObs.disconnect();
      aboutObs.disconnect();
    };
  }, [createObserver]);

  return (
    <main>
      <Navbar />
      <HeroScene />

      {/* ======= HERO ======= */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            AI-Powered Digital Agency
          </div>
          <h1 className="hero-title">
            Crafting Digital<br />
            <span className="gradient-text">Intelligence</span>
          </h1>
          <p className="hero-subtitle">
            Quantily AI transforms brands through bespoke digital experiences,
            intelligent automation, and data-driven marketing that delivers measurable results.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Project <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
        </div>
      </section>

      {/* ======= MARQUEE ======= */}
      <section className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span style={{ color: 'var(--accent)', margin: '0 16px' }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ======= SERVICES ======= */}
      <section id="services" className="section services-section" ref={servicesRef}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="section-header about-header-centered">
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
            <h2 className="section-title">
              Our Core <span style={{ color: 'var(--accent)' }}>Expertise</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Full-spectrum digital services designed to scale your brand
              from strategy through execution.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="glow-orb" />
                <div className="service-icon">
                  <service.Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= ABOUT / WHY US ======= */}
      <section id="about" className="section" ref={aboutRef}>
        <div className="about-container">
          <div className="section-header about-header-centered">
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Quantily AI</div>
            <h2 className="section-title">
              Strategy meets <span style={{ color: 'var(--accent)' }}>Technology</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              We don&apos;t just build — we architect digital ecosystems that grow with your business.
            </p>
          </div>
          
          <div className="bento-grid">
            {features.map((f, i) => (
              <div key={i} className="bento-item about-feature">
                <div className="bento-icon-wrapper">
                  {f.Icon && <f.Icon size={32} />}
                </div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section id="contact" className="cta-section">
        <div className="cta-box">
          <div className="glow-1" />
          <div className="glow-2" />
          <h2>Ready to evolve your<br />digital presence?</h2>
          <p>
            Join the forward-thinking brands that leverage Quantily AI&apos;s expertise to dominate their market.
          </p>
          <button className="btn-white" onClick={() => window.open('https://wa.me/917386872189', '_blank')}>
            Get in Touch
          </button>
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <Image src="/quantily-logo1.png" alt="Quantily AI" width={180} height={48} style={{ objectFit: 'contain' }} />
            </Link>
            <p>
              Innovative digital solutions for the bold and the brave. We integrate AI, automation, and design to build the future.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Web Development</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Social Media</a>
            <a href="#">Automation</a>
            <a href="#">AI Marketing</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Case Studies</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="X (Twitter)"><Twitter size={20} /></a>
            </div>
            <a href="mailto:hello@quantily.ai" className="footer-email">hello@quantily.ai</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Quantily AI. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
