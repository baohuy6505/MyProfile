import React from "react";
import { ArrowRight, Mail } from "lucide-react"; // Thêm icon ở đây
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";
import imageFile from '../assets/NguyenBHuy.jpg';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/baohuy6505",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedinIn size={24} />,
      href: "https://www.linkedin.com/in/huy-b%E1%BA%A3o-773b03387/",
      label: "LinkedIn",
      color: "hover:text-cyan-400",
    },
    {
      icon: <FaFacebookF size={22} />, // Facebook icon thường trông hơi to nên chỉnh size nhỏ lại chút
      href: "https://www.facebook.com/nguyen.huy.948369?locale=vi_VN",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: <SiZalo size={22} />, // Facebook icon thường trông hơi to nên chỉnh size nhỏ lại chút
      href: "https://zalo.me/0961296685",
      label: "Zalo",
      color: "hover:text-blue-400",
    },
  ];
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-sm">
                 Developer
              </span>
            </div>

            {/* Name */}
            {/* <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nguyen Bao
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-violet-500 bg-clip-text text-transparent">
                 Huy
              </span>
            </h1> */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nguyen Bao
              <span className="px-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-violet-500 bg-clip-text text-transparent">
                Huy
              </span>
            </h1>
            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Building scalable APIs & Robust Systems 
            
              {/* <span className="text-cyan-400 font-semibold">Node.js</span> &{" "}
              <span className="text-violet-400 font-semibold">.NET Core</span>. */}
            </p>
            {/* <div className="flex items-center gap-6 pb-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-125 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <div className="h-[1px] w-12 bg-gray-800" />
            </div> */}

            <div className="flex items-center gap-6 pb-2">
              <div className="flex items-center gap-4 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2 rounded-xl transition-all duration-300 ${social.color} hover:bg-white/10`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    {/* Tooltip nghệ thuật */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-gray-800 to-transparent" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Image with Geometric Frame */}
          <div className="flex justify-center items-center">
            <div className="relative animate-float">
              {/* Glowing Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl opacity-30 animate-blob" />

              {/* Hexagon Frame with Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Hexagon Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] p-1 animate-spin-slow">
                  <div className="w-full h-full bg-slate-950 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden">
                    <img
                      src={imageFile}
                      alt="Nguyen Bao Huy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-violet-500/30 rounded-full blur-xl animate-pulse delay-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
