import React, { useState, useRef } from "react"; // Nhớ thêm useRef
import { BookOpen, Layers, MessageSquare, Globe } from "lucide-react";
import musicFile from '../assets/TriNga.mp3';
export function Growth() {
 const [isPlaying, setIsPlaying] = useState(false);
// Sửa dòng này:
const audioRef = useRef<HTMLAudioElement>(null);
  const toggleMusic = () => {
    // FIX LỖI: Kiểm tra xem audioRef.current có tồn tại không trước khi gọi hàm
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Thêm catch để tránh lỗi nếu trình duyệt chặn Autoplay
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  const learningAreas = [
    {
      icon: Layers,
      title: "Advanced Architecture",
      gradient: "from-cyan-500 to-blue-500",
      items: [
        "Clean Architecture",
        "Repository Pattern",
        "Microservices Design",
      ],
    },
    {
      icon: MessageSquare,
      title: "AI Integration",
      gradient: "from-violet-500 to-purple-500",
      items: [
        "RAG with Vector Databases",
        "LLM API Integration (Gemini)",
        "Vector Databases",
        "Building AI-driven Workflows",
      ],
    },
    {
      icon: Globe,
      title: "English Proficiency",
      gradient: "from-cyan-500 to-violet-500",
      items: [
        "Reading Technical Documentation",
        "Tech Articles & Blogs",
        "API Documentation",
      ],
    },
  ];

  return (
    <section id="growth" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Self-Study &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Development
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuously expanding my knowledge through self-directed learning
            and hands-on practice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <div
              key={area.title}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div
                  className={`p-4 bg-gradient-to-br ${area.gradient} bg-opacity-20 rounded-xl border border-white/20 mb-4`}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{area.title}</h3>
              </div>

              {/* Learning Items */}
              <div className="space-y-3">
                {area.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-gray-300 group-hover:text-white transition-colors"
                  >
                    <BookOpen className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>Learning Progress</span>
                  <span className="text-cyan-400 font-semibold">Ongoing</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${area.gradient} rounded-full animate-pulse-slow`}
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-8 text-center relative overflow-hidden group cursor-pointer transition-all duration-500">
          {/* LỚP PHỦ CLICK: Nhấn vào đây để bật nhạc */}
          <div
            onClick={toggleMusic}
            className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 transition-opacity duration-500 z-20
              ${isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
            `}
          />

          <div className="max-w-3xl mx-auto relative z-10">
            {/* Dấu ngoặc kép - Tự động sáng khi isPlaying thay đổi */}
            <div
              className={`text-6xl mb-4 transition-all duration-500 select-none inline-block
                ${isPlaying ? "text-cyan-400 scale-125 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-100" : "text-cyan-400 opacity-50 group-hover:opacity-100"}
            `}
            >
              "
            </div>

            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-gray-200 font-medium tracking-wide italic leading-relaxed">
                Ngộ sư bất quyết, khả vấn xuân phong
                <br />
                Xuân phong bất ngữ, tức tùy bản tâm
              </p>

              {/* Sóng nhạc nhấp nhô hiện ra khi nhạc đang phát */}
              <div
                className={`flex justify-center gap-1.5 h-4 mt-6 transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
              >
                <div className="w-1 bg-cyan-400 animate-[bounce_0.8s_infinite]" />
                <div className="w-1 bg-cyan-400 animate-[bounce_1.2s_infinite]" />
                <div className="w-1 bg-cyan-400 animate-[bounce_1s_infinite]" />
              </div>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-8 opacity-50" />
          </div>

          <audio
            ref={audioRef}
            src={musicFile}
            preload="auto"
            loop
          />
        </div>
      </div>
    </section>
  );
}
