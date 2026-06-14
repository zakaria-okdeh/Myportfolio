import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-white border border-[#E0E0E0] overflow-hidden transition-all duration-300 hover:border-[#0A0A0A] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-label text-[#888888]">{project.category}</span>
        <h3 className="text-lg font-medium text-[#0A0A0A] mt-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[#555555] mt-2 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
