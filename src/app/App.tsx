import React, { useEffect, useState } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Growth } from '@/app/components/Growth';
import { Contact } from '@/app/components/Contact';
import '@/styles/portfolio.css';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated background pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] animate-pulse-slow"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Growth />
        <Contact />
      </div>
    </div>
  );
}
