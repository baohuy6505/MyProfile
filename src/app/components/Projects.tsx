import React from 'react';
import { ExternalLink, Users, Code2, Brain, GitBranch, ShoppingBag, MessageSquare, Calendar } from 'lucide-react'; 

export function Projects() {
  const projects = [
    {
      title: 'SmartConnect',
      tech: 'ASP.NET Core',
      icon: Users,
      gradient: 'from-cyan-400 to-blue-500',
      role: 'Full-stack System Architect',
      tasks: [
        'Built Razor View UI + Backend logic for core features',
        'Role-Based Access Control (RBAC)',
        'Applied AutoMapper for optimized DTO mapping',
      ],
      techStack: ['C#', 'ASP.NET Core', 'Razor Pages', 'AutoMapper', 'SQL Server', 'Git/GitHub'],
    },
   
    {
      title: 'Cho Tot Clone (C2C E-Commerce)',
      tech: 'Laravel (PHP)',
      icon: Code2,
      gradient: 'from-orange-400 to-rose-500',
      role: 'Source Code Manager & Backend Lead', 
      tasks: [
        'Maintained source code integrity, controlled Git workflows, and resolved complex merge conflicts for a 5-member team',
        'Developed full-scale Backend system for the C2C marketplace model',
        'Implemented secure authentication using Google OAuth2 integration',
        'Integrated automated payment processing via SePay/VietQR with Real-time Webhooks',
      ],
      techStack: ['PHP 8.x', 'Laravel', 'Google OAuth2', 'Git Flow', 'MySQL', 'Webhooks', 'RESTful API', 'Postman', 'Git/GitHub', 'Git Flow'],
    },
   {
      title: 'AI Chatbot System',
      tech: 'ASP.NET Core & Python', 
      icon: Brain,
      gradient: 'from-cyan-400 to-violet-500',
      role: 'Full-stack System Architect',
      tasks: [
        'Developed the core Backend and Interactive UI using ASP.NET Core for seamless user communication',
        'Integrated Google Gemini API to enhance chatbot intelligence and natural language processing',
        'Built a Python-based AI service for intent classification and action prediction using Logistic Regression',
        'Implemented Vector Search with FAISS to enable efficient knowledge retrieval from custom datasets',
      ],
      techStack: ['ASP.NET Core', 'Python', 'Gemini API', 'FAISS', 'NLP', 'Vector Search', 'Logistic Regression', 'PostgreSQL', 'RESTful API', 'Git/GitHub'],
    },
   {
    title: 'Shop-Shoes (E-Commerce Platform)',
    tech: 'Node.js & MongoDB',
    icon: ShoppingBag, 
    gradient: 'from-emerald-400 to-teal-500',
    role: 'Lead Backend & Git Manager',
    tasks: [
      'Main Architect for the Backend system using Express.js and RESTful API design',
      'Acted as the primary Source Control Manager, handling branch merges and complex conflict resolutions for the entire team',
      'Designed and optimized NoSQL schemas with MongoDB Atlas for high-availability data storage',
      'Implemented robust Authentication and Authorization middleware',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'Git/GitHub'],
    },
   {
      title: 'AI Customer Consultant',
      tech: 'Node.js & Gemini AI',
      icon: MessageSquare, 
      gradient: 'from-blue-500 to-indigo-600',
      role: 'Backend & AI Integration Developer',
      tasks: [
        'Built an intelligent consultation system using Node.js and Gemini API to provide automated customer support',
        'Engineered custom prompt templates to query product data from MongoDB for accurate personal recommendations',
        'Developed a context-aware conversation handler to maintain chat history and improve user experience',
        'Optimized API response times by implementing efficient caching mechanisms for frequent queries',
      ],
      techStack: ['Node.js', 'Express.js', 'Google Gemini API', 'MongoDB Atlas', 'Mongoose', 'RESTful API', 'Git/GitHub'],
    },
   {
      title: 'Scheduler (Calendar Engine)',
      tech: 'ASP.NET Core & JS',
      icon: Calendar,
      gradient: 'from-pink-500 to-rose-500',
      role: 'Core Logic Developer',
      tasks: [
        'Engineered a high-performance custom scheduling engine using Vanilla JavaScript for complex dynamic UI rendering',
        'Implemented advanced date-time algorithms to handle seamless event persistence and synchronization',
        'Optimized complex SQL queries and indexing to manage high-volume event data with minimal latency',
        'Designed a flexible database schema capable of handling recurring events and multi-view calendar perspectives',
      ],
      techStack: ['ASP.NET Core', 'JS', 'SQL Server', 'RESTful API', 'Git/GitHub'],
    }
  ];

 return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl"> {/* Tăng độ rộng container để chứa 2 cột thoải mái */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing expertise in Backend Architecture, AI Integration, and Source Code Management.
          </p>
        </div>

        {/* Layout Grid: 1 cột trên Mobile, 2 cột trên màn hình lớn */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col h-full glass-card hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 md:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header: Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 shadow-lg shadow-cyan-900/20 ring-1 ring-white/10`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.tech}
                    </span>
                  </div>
                </div>
              </div>

              {/* Role Badge */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-gray-200 tracking-wide uppercase">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Tasks List - Flex-grow để đẩy phần Stack xuống đáy */}
              <div className="flex-grow mb-8">
                <h4 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {project.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                      <span className="text-sm leading-relaxed text-gray-300/90">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Tech Stack & Action */}
              <div className="pt-6 border-t border-white/5 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-white/5 border border-white/5 rounded-md hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Hover Link */}
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}