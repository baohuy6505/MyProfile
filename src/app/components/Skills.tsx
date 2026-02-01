import React from 'react';
import { Server, Database, Wrench,Layout } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: 'Backend',
      gradient: 'from-cyan-500 to-blue-500',
      skills: ['C#', 'ASP.NET Core', 'Node.js (Express)', 'PHP (Laravel)', 'RESTful APIs'],
    },
     {
      icon: Layout,
      title: 'Frontend',
      gradient: 'from-cyan-400 to-blue-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap'],
    },
    {
      icon: Database,
      title: 'Database & Auth',
      gradient: 'from-violet-500 to-purple-500',
      skills: ['SQL Server', 'MySQL', 'MongoDB', 'OAuth2', 'JWT'],
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      gradient: 'from-cyan-500 to-violet-500',
      skills: ['Docker', 'Git Flow', 'Webhooks', 'Postman', 'Swagger'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.gradient} bg-opacity-20 rounded-lg border border-white/20`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
