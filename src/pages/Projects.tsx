import { useState } from 'react';
import GearBackground from '@/components/GearBackground';
import ProjectCard from '@/components/ProjectCard';
import ScrollReveal from '@/components/ScrollReveal';
import { projects, categories } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
        <GearBackground intensity="low" />
        <div className="relative z-10 container-custom text-center py-32">
          <h1 className="text-4xl sm:text-5xl font-light text-white tracking-[-0.03em]">
            Projects
          </h1>
          <p className="mt-4 text-base text-[#888888] max-w-[560px] mx-auto">
            A collection of engineering work spanning CAD, electronics, and mechanical design
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          {/* Filter Bar */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-transparent text-[#555555] border-[#E0E0E0] hover:border-[#0A0A0A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 100}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#888888]">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
