import ScrollReveal from '@/components/ScrollReveal';
import { experiences, skills, certifications, volunteering, softSkills, languages } from '@/data/resume';
import { Award, Users, Globe, Code2, Cpu, Pencil, Wrench } from 'lucide-react';

export default function Resume() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-white tracking-[-0.03em]">
            Resume
          </h1>
          <p className="mt-4 text-base text-[#888888]">
            My professional experience and qualifications
          </p>
        </div>
      </section>

      {/* Resume Content */}
      <section className="bg-white section-padding">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          {/* Work Experience */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8 pb-4 border-b border-[#E0E0E0]">
                Work Experience
              </h2>
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div key={i} className="border-l-[3px] border-[#0A0A0A] pl-6">
                    <h3 className="text-xl font-medium text-[#0A0A0A]">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm text-[#555555]">{exp.company}</span>
                      <span className="text-[#E0E0E0]">|</span>
                      <span className="font-mono text-xs text-[#888888]">{exp.date}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[#555555] leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[#0A0A0A] mt-1.5 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Technical Skills */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8 pb-4 border-b border-[#E0E0E0]">
                Technical Skills
              </h2>
              <div className="space-y-8">
                {skills.map((skillGroup) => {
                  const iconMap: Record<string, React.ReactNode> = {
                    'Software': <Pencil size={18} />,
                    'Programming': <Code2 size={18} />,
                    'Electronics': <Cpu size={18} />,
                    'CAD/CAM': <Wrench size={18} />,
                  };
                  return (
                    <div key={skillGroup.name}>
                      <h3 className="text-label text-[#0A0A0A] mb-3 flex items-center gap-2">
                        {iconMap[skillGroup.name]}
                        {skillGroup.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex px-4 py-1.5 border border-[#E0E0E0] text-sm font-mono text-[#555555] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Soft Skills */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8 pb-4 border-b border-[#E0E0E0]">
                Soft Skills
              </h2>
              <div className="space-y-4">
                {softSkills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#555555]">
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8 pb-4 border-b border-[#E0E0E0] flex items-center gap-3">
                <Award size={24} strokeWidth={1.5} />
                Certifications & Training
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-[#F5F5F5] p-6">
                    <h3 className="text-lg font-medium text-[#0A0A0A]">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm text-[#555555]">{cert.issuer}</span>
                      <span className="text-[#E0E0E0]">|</span>
                      <span className="font-mono text-xs text-[#888888]">{cert.date}</span>
                    </div>
                    {cert.description && (
                      <p className="text-sm text-[#888888] mt-2">{cert.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Volunteering */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8 pb-4 border-b border-[#E0E0E0] flex items-center gap-3">
                <Users size={24} strokeWidth={1.5} />
                Volunteering Experience
              </h2>
              <div className="space-y-4">
                {volunteering.map((vol, i) => (
                  <div key={i} className="bg-[#F5F5F5] p-6">
                    <h3 className="text-lg font-medium text-[#0A0A0A]">{vol.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-sm text-[#555555]">{vol.organization}</span>
                      <span className="text-[#E0E0E0]">|</span>
                      <span className="font-mono text-xs text-[#888888]">{vol.date}</span>
                    </div>
                    <p className="text-sm text-[#888888] mt-2 leading-relaxed">{vol.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal>
            <div>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8 pb-4 border-b border-[#E0E0E0] flex items-center gap-3">
                <Globe size={24} strokeWidth={1.5} />
                Languages
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="bg-[#F5F5F5] p-6 text-center">
                    <h3 className="text-lg font-medium text-[#0A0A0A]">{lang.name}</h3>
                    <p className="text-sm text-[#888888] mt-1">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
