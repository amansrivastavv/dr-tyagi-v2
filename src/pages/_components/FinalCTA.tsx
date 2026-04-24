import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#050A0F] p-12 lg:p-20 shadow-2xl">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                Consultation & Care
              </span>
              <h2 className="text-4xl lg:text-6xl font-serif text-white mb-8 leading-[1.1]">
                Precision Neurosurgery <br />
                Starts with a Conversation
              </h2>
              <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-2xl">
                Take the first step towards world-class neurosurgical care. Schedule a comprehensive consultation with Dr. Gaurav Tyagi at Apollo Hospital.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button size="lg" className="rounded-full px-10 h-14 bg-primary text-background hover:bg-white hover:text-[#050A0F] shadow-xl shadow-primary/20 cursor-pointer text-sm font-bold uppercase tracking-widest w-full sm:w-auto transition-all">
                  Book Appointment
                </Button>
                <a href="tel:+911234567890" className="flex items-center gap-4 text-white hover:text-primary transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">+91 12345 67890</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
