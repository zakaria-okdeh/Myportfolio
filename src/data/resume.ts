import type { Experience, Certification, Skill } from '@/types';

export const experiences: Experience[] = [
  {
    title: "CAD & 3D Modeling Specialist",
    company: "ICO",
    date: "May 2025 - Present",
    bullets: [
      "AutoCAD: Design and maintain company-standardized title blocks and technical documentation to ensure project compliance.",
      "SolidWorks: Develop accurate 3D models and assemblies for engineering projects, from initial design to final production.",
      "Workflow Efficiency: Improve drafting processes by creating templates and design standards that reduce errors and project turnaround time.",
      "Team Support: Collaborate with engineers to troubleshoot designs and ensure all CAD deliverables meet project specifications."
    ]
  },
  {
    title: "Intern",
    company: "AECNAR Center for Scientific Research",
    date: "Jul 2025 - Dec 2025",
    bullets: [
      "Gained hands-on experience across the full engineering cycle, from concept to testing, through projects including AS_Comsat satellite transporter and multistage electrolyzers.",
      "Strengthened skills in problem-solving, prototyping, and experimental validation with applications in sustainable energy technologies."
    ]
  },
  {
    title: "Intern",
    company: "Fenestra Windows",
    date: "Aug 2024 - Oct 2024",
    bullets: [
      "Practical experience in CNC systems, electrical components, and maintenance planning.",
      "Improved workflows through training materials and system standardization."
    ]
  }
];

export const skills: Skill[] = [
  {
    name: "Software",
    items: ["AutoCAD", "FreeCAD", "Adobe Photoshop", "Adobe Premiere", "Microsoft Office (Word, PowerPoint, Excel, Access)"]
  },
  {
    name: "Programming",
    items: ["C++ (Basics)", "Python (Basics)", "HTML", "CSS"]
  },
  {
    name: "Electronics",
    items: ["Arduino", "Circuit Design", "PLC Basics"]
  },
  {
    name: "CAD/CAM",
    items: ["SolidWorks", "AutoCAD", "FreeCAD", "CNC Programming", "GD&T"]
  }
];

export const certifications: Certification[] = [
  {
    title: "ICDL Python Certification",
    issuer: "ICDL",
    date: "Mar 2025",
    description: "Professional certification in Python programming fundamentals."
  },
  {
    title: "Microsoft Access & Python Training - Haddak for a Better Future 2",
    issuer: "AICA",
    date: "2024",
    description: "Database management, Python programming fundamentals and data manipulation."
  },
  {
    title: "Energy Sustainability Training",
    issuer: "AUF",
    date: "2023",
    description: 'Participated in the training program "Energy Sustainability: Practical Strategies for an Ecological Future."'
  }
];

export const volunteering = [
  {
    title: "Recognition for Leadership in Event Organization",
    organization: "National Youth Union",
    date: "Jun 2024",
    description: "Awarded a Certificate of Appreciation for active participation in the organizing committee of the 'All of Lebanon to Tripoli' trip, which brought together over 3,000 participants from across Lebanon."
  },
  {
    title: "Certified Scout Leader",
    organization: "Kashaf Al-Shabab Al-Watani / Lebanese Scout Union",
    date: "2022 - Present",
    description: "Team Leader & Active Member, organizing scout activities and developing leadership skills."
  }
];

export const softSkills = [
  "Leadership & Teamwork: Scout leader in Kashaf Al-Shabab Al-Watani",
  "Problem-Solving: Strong analytical skills to identify issues and develop effective solutions",
  "Public Speaking: Selected to deliver the high school graduation speech, addressing an audience of over 1,000 attendees"
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Intermediate" },
  { name: "Arabic", level: "Native" }
];
