import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'growth', label: 'Growth' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            NGUYENHUY
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Download CV Button */}
         {/* Download CV Button */}
{/* <a 
  href="/NguyenBaoHuy_Resume_Intern.pdf" // Đường dẫn tính từ thư mục public
  download="NguyenBaoHuy_CV.pdf" // Tên file khi tải về máy người dùng
  className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
>
  <Download className="w-4 h-4" />
  Download CV
</a> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <button className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
