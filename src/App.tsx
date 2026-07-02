import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Terminal, 
  Trophy, 
  ArrowRight,
  MapPin,
  Sparkles
} from "lucide-react";

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  rotation: number;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  rotation: number;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "Sola",
    description: "A GIS-based solar site discovery platform that helps identify suitable locations for solar energy planning.",
    tags: ["TypeScript", "React", "GIS / mapping", "CSS"],
    github: "https://github.com/Githubdiaries/Sola",
    rotation: -1,
  },
  {
    title: "Pratilipi Clone",
    description: "A reading and publishing platform clone focused on story listing, content browsing, and clean UI replication.",
    tags: ["React", "TypeScript", "HTML", "CSS"],
    github: "https://github.com/Githubdiaries/Pratilipi_Clone",
    rotation: 1.5,
  },
  {
    title: "Indica",
    description: "A project built around Indian-language or Indic-focused interaction.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Githubdiaries/Indica",
    rotation: -0.5,
  },
  {
    title: "Hamp-Forca",
    description: "A forecasting project for gift hamper demand using market data and prediction workflows.",
    tags: ["Python", "Forecasting", "Machine Learning"],
    github: "https://github.com/Githubdiaries/hamp-forca",
    rotation: 1,
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "Intern",
    company: "SCTIMST",
    period: "Mar 2026 – Present",
    description: "Worked on TTE Development.",
    rotation: 1,
  },
  {
    role: "Open-Source Contributor",
    company: "GirlScript Summer of Code",
    period: "Sep 2025 – Oct 2025",
    description: "Contributed to open-source projects through GirlScript Summer of Code.",
    rotation: -1.2,
  }
];

const SKILLS = [
  { name: "Java", icon: <Code2 className="w-4 h-4" /> },
  { name: "Python", icon: <Terminal className="w-4 h-4" /> },
  { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
  { name: "React", icon: <Globe className="w-4 h-4" /> },
  { name: "HTML", icon: <Globe className="w-4 h-4" /> },
  { name: "CSS", icon: <Layers className="w-4 h-4" /> },
  { name: "OpenCV", icon: <Cpu className="w-4 h-4" /> },
  { name: "Electron", icon: <Terminal className="w-4 h-4" /> },
  { name: "Git", icon: <Code2 className="w-4 h-4" /> },
  { name: "Docker", icon: <Layers className="w-4 h-4" /> },
  { name: "Figma", icon: <Layers className="w-4 h-4" /> },
];

// --- Components ---

const SleekCard: React.FC<{ children: React.ReactNode, className?: string, onClick?: () => void }> = ({ children, className, onClick }) => (
  <motion.div
    whileHover={{ y: -4 }}
    onClick={onClick}
    className={`sleek-card ${onClick ? 'cursor-pointer hover:border-google-blue/50' : ''} ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-google-gray-50 text-google-gray-900 font-sans py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-20 md:space-y-32">
        
        {/* --- Header --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[48px] md:text-[64px] font-display font-bold tracking-[-0.04em] leading-[0.9] text-google-gray-900"
            >
              Aksa Susan Abraham
            </motion.h1>
            <p className="text-[16px] md:text-[18px] font-medium text-google-gray-700 max-w-md">
              A student and developer who loves building web apps and exploring AI.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-google-blue">
              <MapPin className="w-3.5 h-3.5" />
              <span>Kerala, India</span>
            </div>
            <div className="flex gap-2">
              <a href="https://github.com/Githubdiaries" target="_blank" className="p-2.5 bg-white border border-google-gray-200 rounded-xl hover:border-google-blue hover:text-google-blue transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aksa-susan-abraham/" target="_blank" className="p-2.5 bg-white border border-google-gray-200 rounded-xl hover:border-google-blue hover:text-google-blue transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:aksasusan1904@gmail.com" className="p-2.5 bg-white border border-google-gray-200 rounded-xl hover:border-google-blue hover:text-google-blue transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </header>

        {/* --- Intro --- */}
        <section className="max-w-3xl">
          <p className="text-[28px] md:text-[36px] font-display font-medium leading-[1.2] tracking-[-0.02em] text-google-gray-900">
            I enjoy writing clean code, learning new tools, and <span className="text-google-blue">building simple solutions</span> for everyday problems.
          </p>
        </section>

        {/* --- Skills --- */}
        <section className="space-y-6">
          <h2 className="label-caps">Core Stack</h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map(skill => (
              <span key={skill.name} className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-2xl text-[13px] font-bold border border-google-gray-200 shadow-sm text-google-gray-700 hover:border-google-blue/30 transition-colors">
                <span className="text-google-blue">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* --- Projects --- */}
        <section className="space-y-8">
          <div className="flex justify-between items-end">
            <h2 className="label-caps">Selected Work</h2>
            <a href="https://github.com/Githubdiaries" target="_blank" className="text-[11px] font-bold text-google-blue hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <SleekCard 
                key={project.title} 
                onClick={() => project.github && window.open(project.github, "_blank", "noopener,noreferrer")}
              >
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="figma-text-heading">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <span 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, "_blank", "noopener,noreferrer");
                          }} 
                          className="text-google-gray-700 hover:text-google-blue transition-colors cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                        </span>
                      )}
                      {project.live && (
                        <span 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.live, "_blank", "noopener,noreferrer");
                          }} 
                          className="text-google-gray-700 hover:text-google-blue transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="figma-text-body mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-google-gray-100 text-google-gray-700 rounded-lg uppercase tracking-tight">{tag}</span>
                    ))}
                  </div>
                </div>
              </SleekCard>
            ))}
          </div>
        </section>

        {/* --- Experience --- */}
        <section className="space-y-8">
          <h2 className="label-caps">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCES.map((exp, i) => (
              <SleekCard key={exp.company} className="border-l-4 border-l-google-blue">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-bold text-google-blue bg-google-blue/5 px-2 py-1 rounded-md uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <div>
                    <h3 className="figma-text-heading text-lg">{exp.role}</h3>
                    <p className="text-[14px] font-bold text-google-gray-700 mt-1">{exp.company}</p>
                  </div>
                  <p className="figma-text-body">{exp.description}</p>
                </div>
              </SleekCard>
            ))}
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="pt-12 pb-20 border-t border-google-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-google-gray-700 opacity-60">
          <span>© 2026 Aksa Susan Abraham</span>
          <div className="flex gap-10">
            <a href="#projects" className="hover:text-google-blue transition-colors">Work</a>
            <a href="https://drive.google.com/drive/folders/1KIWBIBXCSqggfrOsnDBt8aTxNBY3hZ4N" target="_blank" className="hover:text-google-blue transition-colors">Certificates</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
