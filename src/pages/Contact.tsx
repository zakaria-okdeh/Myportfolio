import { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import GearBackground from '@/components/GearBackground';
import ScrollReveal from '@/components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[45vh] bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
        <GearBackground intensity="medium" />
        <div className="relative z-10 container-custom text-center py-32">
          <h1 className="text-4xl sm:text-5xl font-light text-white tracking-[-0.03em]">
            Get In Touch
          </h1>
          <p className="mt-4 text-base text-[#888888]">
            Let&apos;s discuss your next engineering project
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[#E0E0E0] px-0 py-4 text-base text-[#0A0A0A] placeholder:text-[#888888] focus:outline-none focus:border-[#0A0A0A] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[#E0E0E0] px-0 py-4 text-base text-[#0A0A0A] placeholder:text-[#888888] focus:outline-none focus:border-[#0A0A0A] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-[#E0E0E0] px-0 py-4 text-base text-[#0A0A0A] placeholder:text-[#888888] focus:outline-none focus:border-[#0A0A0A] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-0 border-b border-[#E0E0E0] px-0 py-4 text-base text-[#0A0A0A] placeholder:text-[#888888] focus:outline-none focus:border-[#0A0A0A] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    submitted
                      ? 'bg-[#444444] text-white'
                      : 'bg-[#0A0A0A] text-white hover:bg-[#333333]'
                  }`}
                >
                  {submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={150}>
              <div className="space-y-8 lg:pl-8">
                <div>
                  <h3 className="text-sm font-medium text-[#0A0A0A] uppercase tracking-wide mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail size={18} className="text-[#0A0A0A] mt-0.5" />
                      <div>
                        <span className="text-xs text-[#888888] uppercase tracking-wide block">Email</span>
                        <a
                          href="mailto:zakaria1.okdeh@gmail.com"
                          className="text-sm text-[#0A0A0A] hover:opacity-70 transition-opacity"
                        >
                          contact@portfolio.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin size={18} className="text-[#0A0A0A] mt-0.5" />
                      <div>
                        <span className="text-xs text-[#888888] uppercase tracking-wide block">Location</span>
                        <span className="text-sm text-[#0A0A0A]">Lebanon</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock size={18} className="text-[#0A0A0A] mt-0.5" />
                      <div>
                        <span className="text-xs text-[#888888] uppercase tracking-wide block">Availability</span>
                        <span className="text-sm text-[#0A0A0A]">Open to opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#E0E0E0]">
                  <p className="text-sm text-[#555555] leading-relaxed">
                    I am always interested in new engineering challenges and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
