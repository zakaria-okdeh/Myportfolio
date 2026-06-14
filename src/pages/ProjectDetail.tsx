import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Briefcase, Wrench } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-[#0A0A0A] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>

        <div className="relative z-10 container-custom py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
          <span className="text-label text-[#888888] block mb-3">{project.category}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-[-0.02em] max-w-[700px]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 mt-4 text-sm text-[#888888]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {project.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} />
              {project.role}
            </span>
            <span className="flex items-center gap-1.5">
              <Wrench size={14} />
              {project.tools.join(', ')}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 lg:gap-16">
            {/* Main Content */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-medium text-[#0A0A0A] mb-4">Overview</h2>
                <p className="text-[#555555] leading-relaxed">{project.details.overview}</p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-12">
                  <h2 className="text-2xl font-medium text-[#0A0A0A] mb-4">Key Achievements</h2>
                  <ul className="space-y-3">
                    {project.details.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#555555]">
                        <span className="w-1.5 h-1.5 bg-[#0A0A0A] mt-2 shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-12">
                  <h2 className="text-2xl font-medium text-[#0A0A0A] mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.details.gallery.map((img, i) => (
                      <div key={i} className="overflow-hidden group">
                        <img
                          src={img}
                          alt={`${project.title} - ${i + 1}`}
                          className="w-full aspect-video object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ScrollReveal delay={200}>
                <div className="bg-[#F5F5F5] p-8">
                  <h3 className="text-sm font-medium text-[#0A0A0A] mb-6 uppercase tracking-wide">
                    Project Info
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs text-[#888888] uppercase tracking-wide">Duration</span>
                      <p className="text-sm text-[#0A0A0A] mt-1 font-mono">{project.duration}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#888888] uppercase tracking-wide">Role</span>
                      <p className="text-sm text-[#0A0A0A] mt-1">{project.role}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#888888] uppercase tracking-wide">Category</span>
                      <p className="text-sm text-[#0A0A0A] mt-1">{project.category}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#888888] uppercase tracking-wide">Tools</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex px-3 py-1 border border-[#E0E0E0] text-xs font-mono text-[#555555]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-[#888888] uppercase tracking-wide">Technologies</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.details.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex px-3 py-1 bg-[#0A0A0A] text-white text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 mt-8 text-sm text-[#0A0A0A] hover:opacity-70 transition-opacity"
                  >
                    <ArrowLeft size={14} />
                    Back to Projects
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
