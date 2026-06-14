import GearBackground from '@/components/GearBackground';
import ScrollReveal from '@/components/ScrollReveal';

const timeline = [
  {
    date: 'May 2025 - Present',
    title: 'CAD & 3D Modeling Specialist',
    company: 'ICO',
    description: 'Designing and maintaining company-standardized title blocks, developing 3D models and assemblies in SolidWorks, and improving drafting processes.',
    side: 'left' as const,
  },
  {
    date: 'Jul 2025 - Dec 2025',
    title: 'Research Intern',
    company: 'AECNAR Center for Scientific Research',
    description: 'Gained hands-on experience across the full engineering cycle through projects including AS_Comsat satellite transporter and multistage electrolyzers.',
    side: 'right' as const,
  },
  {
    date: 'Aug 2024 - Oct 2024',
    title: 'Engineering Intern',
    company: 'Fenestra Windows',
    description: 'Practical experience in CNC systems, electrical components, and maintenance planning. Improved workflows through system standardization.',
    side: 'left' as const,
  },
  {
    date: 'May 2025',
    title: 'Arduino Training',
    company: 'Krayem Co',
    description: 'Completed comprehensive Arduino basics training covering sensor integration, motor control, and electronic prototyping.',
    side: 'right' as const,
  },
  {
    date: '2022 - Present',
    title: 'Certified Scout Leader',
    company: 'Kashaf Al-Shabab Al-Watani / Lebanese Scout Union',
    description: 'Team Leader & Active Member, developing leadership skills and organizing scout activities.',
    side: 'left' as const,
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects' },
  { value: '5+', label: 'Certifications' },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
        <GearBackground intensity="low" />
        <div className="relative z-10 container-custom text-center py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-[-0.03em]">
            About Me
          </h1>
          <p className="mt-4 text-lg text-[#888888]">
            Engineer, Designer, Innovator
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
            {/* Text */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-8">
                  My Journey
                </h2>
                <div className="space-y-4 text-[#555555] leading-relaxed">
                  <p>
                    I am a dedicated engineer with a passion for precision design and innovation. My experience spans CAD modeling, electronics, and mechanical systems, with hands-on work at leading research centers and manufacturing facilities.
                  </p>
                  <p>
                    Currently serving as a CAD & 3D Modeling Specialist at ICO, I develop accurate 3D models and assemblies using SolidWorks while maintaining technical documentation standards in AutoCAD. My work focuses on improving drafting processes and ensuring all deliverables meet project specifications.
                  </p>
                  <p>
                    My internship at AECNAR Center for Scientific Research strengthened my skills in problem-solving, prototyping, and experimental validation through projects including the AS_Comsat satellite transporter and multistage electrolyzer systems for sustainable energy applications.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="font-mono text-3xl font-medium text-[#0A0A0A]">{stat.value}</span>
                      <span className="text-sm text-[#888888]">{stat.label}</span>
                      {i < stats.length - 1 && (
                        <span className="hidden sm:block w-px h-8 bg-[#E0E0E0] ml-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal delay={150}>
              <div className="lg:-mt-16">
                <div className="border border-[#E0E0E0] overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#F5F5F5] section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0A0A0A] tracking-[-0.02em] mb-16 text-center">
              Experience & Education
            </h2>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative max-w-[800px] mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E0E0E0] md:-translate-x-px" />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`relative flex items-start mb-12 last:mb-0 ${
                  item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#0A0A0A] rounded-full -translate-x-1/2 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-32px)] ${
                    item.side === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <span className="font-mono text-xs text-[#888888]">{item.date}</span>
                    <h3 className="text-lg font-medium text-[#0A0A0A] mt-1">{item.title}</h3>
                    <span className="text-sm text-[#555555]">{item.company}</span>
                    <p className="text-sm text-[#888888] mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
