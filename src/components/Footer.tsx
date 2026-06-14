import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#888888]">
      <div className="container-custom pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-mono text-sm font-medium tracking-[0.1em] text-white">
              PORTFOLIO
            </span>
            <p className="mt-4 text-sm leading-relaxed max-w-[260px]">
              Engineering excellence through precision and innovation. Specializing in CAD design, electronics, and mechanical systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@portfolio.com"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  contact@portfolio.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Location</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>Lebanon</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <p className="text-xs font-mono">Built with precision</p>
        </div>
      </div>
    </footer>
  );
}
