import React from 'react';
import { GraduationCap, Award, Heart, Phone, MapPin, Mail } from 'lucide-react'; 

export function About() {
 return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl"> {/* Tăng max-w lên chút để chứa đủ 3 cột */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="glass-card p-8 md:p-12 space-y-8">
          
          {/* Contact Info: Chuyển thành 3 cột */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-white/5">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <Phone className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</p>
                <p className="text-gray-200 font-medium">0961296685</p> 
              </div>
            </div>

            {/* Email (Mới thêm vào) */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                <p className="text-gray-200 font-medium">nguyenbaohuydeveloper@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-violet-500/10 rounded-lg border border-violet-500/20">
                <MapPin className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-gray-200 font-medium">Thanh Khe, Da Nang</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex items-start gap-5 pt-2">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-xl border border-cyan-500/30 flex-shrink-0 shadow-lg shadow-cyan-900/20">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Student at{' '}
                <span className="text-cyan-400 font-semibold">
                  University of Science and Education
                </span>
                {' '}- The University of Da Nang
              </p>
            </div>
          </div>

          {/* Passion */}
          <div className="flex items-start gap-5">
            <div className="p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-500/30 flex-shrink-0 shadow-lg shadow-pink-900/20">
              <Heart className="w-7 h-7 text-pink-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">Passion & Focus</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionate about{' '}
                <span className="text-cyan-400 font-semibold">Backend Architecture</span>,{' '}
                <span className="text-violet-400 font-semibold">Clean Code</span>, and{' '}
                <span className="text-pink-400 font-semibold">System Design</span>. 
                Dedicated to building robust, scalable systems that solve real-world problems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}