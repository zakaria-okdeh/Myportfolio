import { Link } from 'react-router-dom';
import { Pencil, Box, Cpu, Code, Factory, Lightbulb, ArrowRight } from 'lucide-react';
import GearBackground from '@/components/GearBackground';
import ProjectCard from '@/components/ProjectCard';
import ScrollReveal from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

const skills = [
  { icon: Pencil, title: 'CAD Design', description: 'Expert in AutoCAD, SolidWorks, and FreeCAD for precise technical drawings and 3D modeling.' },
  { icon: Box, title: '3D Modeling', description: 'Creating detailed parametric models, assemblies, and manufacturing-ready documentation.' },
  { icon: Cpu, title: 'Electronics', description: 'Arduino-based systems, circuit design, and industrial electrical panel design.' },
  { icon: Code, title: 'Programming', description: 'C++, Python, HTML/CSS for automation, data processing, and web development.' },
  { icon: Factory, title: 'Manufacturing', description: 'CNC programming, process optimization, and production workflow improvement.' },
  { icon: Lightbulb, title: 'Problem Solving', description: 'Analytical approach to engineering challenges with innovative solutions.' },
];

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] bg-[#0A0A0A] flex items-center overflow-hidden">
        <GearBackground intensity="high" />
        <div className="relative z-10 container-custom py-32">
          <div className="max-w-[640px]">
            <span className="text-label text-[#888888] block mb-6">
              ENGINEERING PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.03em]">
              Precision Engineering Through CAD, Electronics & Innovation
            </h1>
            <p className="mt-6 text-base lg:text-lg text-[#888888] max-w-[480px] leading-relaxed">
              Specializing in mechanical design, 3D modeling, and electronic systems development
            </p>
            <Link
              to="/projects"
              className="inline-block mt-10 bg-white text-[#0A0A0A] px-8 py-3.5 text-sm font-medium hover:bg-[#F5F5F5] transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-10 bg-white/40 animate-[pulse-line_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <span className="text-label text-[#888888] block mb-4">FEATURED WORK</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-12">
              Selected Projects
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors"
              >
                View All Projects
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="bg-[#F5F5F5] section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <span className="text-label text-[#888888] block mb-4">EXPERTISE</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-12">
              Technical Proficiencies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <ScrollReveal key={skill.title} delay={i * 80}>
                  <div className="bg-white p-8 border border-[#E0E0E0] transition-all duration-300 hover:border-[#0A0A0A] h-full">
                    <Icon size={24} className="text-[#0A0A0A] mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium text-[#0A0A0A] mb-2">{skill.title}</h3>
                    <p className="text-sm text-[#555555] leading-relaxed">{skill.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
