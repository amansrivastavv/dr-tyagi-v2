import { Brain, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Dr. Gaurav Tyagi", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Patient Stories", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Book Appointment", href: "#contact" },
];

const treatments = [
  "Brain Tumor Surgery",
  "Stroke Treatment",
  "Skull Base Surgery",
  "Zap-X Radiosurgery",
  "Cerebral Aneurysm",
  "Minimally Invasive Surgery",
];

const socials = [
  { icon: ExternalLink, href: "#", label: "Facebook" },
  { icon: ExternalLink, href: "#", label: "Twitter" },
  { icon: ExternalLink, href: "#", label: "YouTube" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050A0F] text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Brain className="w-5 h-5 text-background" />
              </div>
              <div>
                <p className="font-bold text-white tracking-tight">Dr. Gaurav Tyagi</p>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest">Senior Neurosurgeon</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
              Advanced neurosurgical care combining precision, innovation, and a deeply
              patient-first approach at Apollo Hospital, New Delhi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/40 text-sm hover:text-primary transition-colors cursor-pointer font-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">
              Specialties
            </h4>
            <ul className="space-y-4">
              {treatments.map((t) => (
                <li key={t}>
                  <span className="text-white/40 text-sm font-light">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">
              Contact Detail
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  Indraprastha Apollo Hospital,<br />
                  Sarita Vihar, Mathura Road,<br />
                  New Delhi – 110076
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white/40 text-sm hover:text-primary transition-colors cursor-pointer font-light">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:dr.tyagi@apollo.com" className="text-white/40 text-sm hover:text-primary transition-colors cursor-pointer font-light">
                  dr.tyagi@apollo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} Dr. Gaurav Tyagi. Precision Neurosurgeon.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] font-bold tracking-widest uppercase hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
