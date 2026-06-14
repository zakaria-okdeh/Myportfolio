import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono text-sm font-medium tracking-[0.1em] text-[#0A0A0A] hover:opacity-70 transition-opacity"
          >
            PORTFOLIO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-normal transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#0A0A0A]'
                    : 'text-[#888888] hover:text-[#0A0A0A]'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#0A0A0A]" />
                )}
              </Link>
            ))}
          </div>

          {/* Profile Image */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/about">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-[#E0E0E0] object-cover hover:border-[#0A0A0A] transition-colors"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#0A0A0A]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-light transition-colors ${
                location.pathname === link.path
                  ? 'text-[#0A0A0A]'
                  : 'text-[#888888]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/about" className="mt-4">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-[#E0E0E0] object-cover"
            />
          </Link>
        </div>
      )}
    </>
  );
}
