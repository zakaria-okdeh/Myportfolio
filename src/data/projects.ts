import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: "as-comsat",
    title: "AS_Comsat Satellite Transporter",
    category: "Mechanical",
    description: "Designed and developed a satellite transporter mechanism for the AS_Comsat project at AECNAR Research Center, handling precision positioning and vibration isolation.",
    image: "/images/project-satellite.jpg",
    tools: ["SolidWorks", "AutoCAD", "FEA Analysis"],
    duration: "Jul 2025 - Dec 2025",
    role: "Research Intern",
    details: {
      overview: "The AS_Comsat satellite transporter project involved designing a precision mechanism for transporting satellite components during assembly and testing phases. The project required careful consideration of weight distribution, vibration dampening, and positional accuracy to ensure delicate components remained intact throughout the handling process.",
      achievements: [
        "Developed comprehensive 3D models and assemblies using SolidWorks with full parametric design",
        "Created detailed technical drawings with GD&T specifications for manufacturing",
        "Performed stress analysis and weight optimization to meet payload requirements",
        "Collaborated with interdisciplinary research team on system integration"
      ],
      technologies: ["SolidWorks", "AutoCAD", "ANSYS", "GD&T", "FEA"],
      gallery: ["/images/project-satellite.jpg"]
    }
  },
  {
    id: "electrolyzer",
    title: "Multistage Electrolyzer System",
    category: "Research",
    description: "Developed a multistage electrolyzer for sustainable hydrogen production through water electrolysis with optimized energy efficiency.",
    image: "/images/project-electrolyzer.jpg",
    tools: ["AutoCAD", "CATIA", "Process Simulation"],
    duration: "Jul 2025 - Dec 2025",
    role: "Research Intern",
    details: {
      overview: "This research project focused on designing and prototyping a multistage electrolyzer system for efficient hydrogen production. The work involved fluid dynamics analysis, material selection for corrosive environments, and process optimization to achieve maximum hydrogen yield with minimal energy input.",
      achievements: [
        "Designed electrolysis cell architecture with optimized flow patterns for gas separation",
        "Selected corrosion-resistant materials for extended operational life in acidic environments",
        "Developed process control parameters for efficient and stable operation",
        "Contributed to sustainable energy technology research with published findings"
      ],
      technologies: ["AutoCAD", "CATIA", "MATLAB", "Fluid Dynamics", "Process Design"],
      gallery: ["/images/project-electrolyzer.jpg"]
    }
  },
  {
    id: "cnc-workflow",
    title: "CNC Systems & Manufacturing",
    category: "CAD Design",
    description: "Improved manufacturing workflows through CNC programming, system optimization, and standardization at Fenestra Windows.",
    image: "/images/project-cnc.jpg",
    tools: ["AutoCAD", "CNC Programming", "SolidWorks"],
    duration: "Aug 2024 - Oct 2024",
    role: "Engineering Intern",
    details: {
      overview: "At Fenestra Windows, I worked on optimizing CNC machining processes for window and door frame manufacturing. The internship involved hands-on experience with CNC systems, electrical components, maintenance planning, and workflow improvement initiatives.",
      achievements: [
        "Gained practical experience in CNC system operation, setup, and G-code programming",
        "Learned electrical component troubleshooting and preventive maintenance procedures",
        "Improved workflows through comprehensive training materials development",
        "Contributed to system standardization documentation reducing setup time by 20%"
      ],
      technologies: ["AutoCAD", "CNC G-Code", "SolidWorks", "PLC Basics"],
      gallery: ["/images/project-cnc.jpg"]
    }
  },
  {
    id: "arduino-systems",
    title: "Arduino Control Systems",
    category: "Electronics",
    description: "Built and programmed Arduino-based control systems for automation applications including sensor integration and motor control.",
    image: "/images/project-arduino.jpg",
    tools: ["Arduino", "C++", "Electronics"],
    duration: "May 2025",
    role: "Student",
    details: {
      overview: "Completed comprehensive Arduino training covering sensor integration, motor control, and basic IoT applications. Built multiple prototype systems demonstrating practical automation solutions for everyday engineering challenges.",
      achievements: [
        "Mastered Arduino programming fundamentals in C++ with custom library development",
        "Built sensor-based automation prototypes including temperature and motion control systems",
        "Integrated DC motors, servo motors, relay modules, and LCD displays",
        "Developed systematic troubleshooting skills for electronic circuits"
      ],
      technologies: ["Arduino UNO", "C++", "Sensors", "Motors", "Relays", "IoT"],
      gallery: ["/images/project-arduino.jpg"]
    }
  },
  {
    id: "gear-assembly",
    title: "Gear Transmission Assembly",
    category: "CAD Design",
    description: "Designed a complete multi-stage gear transmission system with optimized ratios for mechanical power transfer applications.",
    image: "/images/project-gears.jpg",
    tools: ["SolidWorks", "AutoCAD", "FEA"],
    duration: "2024",
    role: "CAD Specialist",
    details: {
      overview: "Complete design of a multi-stage gear transmission system including spur gears, bearings, shafts, and housing assembly. The project covered the full design cycle from initial concept and calculations to detailed manufacturing drawings with full bill of materials.",
      achievements: [
        "Designed accurate gear profiles with proper involute curves and pressure angles",
        "Calculated optimal gear ratios for specified power transmission requirements",
        "Created detailed assembly drawings with complete BOM and assembly instructions",
        "Performed interference detection and motion analysis validation"
      ],
      technologies: ["SolidWorks", "AutoCAD", "Gear Design", "FEA", "Motion Analysis"],
      gallery: ["/images/project-gears.jpg"]
    }
  },
  {
    id: "electrical-panel",
    title: "Industrial Electrical Panel",
    category: "Electronics",
    description: "Designed industrial electrical control panels with complete schematics, component selection, and safety compliance documentation.",
    image: "/images/project-electrical.jpg",
    tools: ["AutoCAD", "EPLAN", "Electrical Design"],
    duration: "2024-2025",
    role: "Designer",
    details: {
      overview: "Electrical panel design project involving schematic creation, component selection, wiring documentation, and safety compliance for industrial control systems. Focused on IEC standards adherence and long-term maintainability.",
      achievements: [
        "Created comprehensive electrical schematics and panel layout drawings",
        "Selected components based on detailed load calculations and safety margins",
        "Documented complete wiring diagrams and cable schedules",
        "Ensured full compliance with IEC electrical safety standards"
      ],
      technologies: ["AutoCAD Electrical", "EPLAN", "IEC Standards", "PLC", "VFD"],
      gallery: ["/images/project-electrical.jpg"]
    }
  }
];

export const categories = ["All", "CAD Design", "Electronics", "Mechanical", "Research"];
