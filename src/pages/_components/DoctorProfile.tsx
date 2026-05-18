import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import doctorImg from "@/assets/about/dr_gaurav.jpeg";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

const DOCTOR_IMG =
  doctorImg;

const credentials = [
  "MCh (Neurosurgery) – NIMHANS, Bengaluru",
  "MS (General Surgery) – SMS Medical College, India",
  "MBBS – Government Medical College, Miraj",
  "Fellowship in Skull Base Surgery – Zurich, Switzerland",
  "Senior Consultant – Indraprastha Apollo Hospital, New Delhi",
  "45+ peer-reviewed research publications",
];

const badges = [
  { label: "NIMHANS", sub: "Trained" },
  { label: "Apollo", sub: "Hospital" },
  { label: "Zurich &\nJapan", sub: "Fellowship" },
];

export default function DoctorProfile() {
  return (
    <section className="py-24 bg-[#FCFDFF] overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: Beautifully Framed Clean Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Soft backdrop ambient glow */}
            <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-cyan-100/30 blur-2xl pointer-events-none -z-10" />
            
            {/* Clean Arch Frame (matching the About Page styling) */}
            <div className="aspect-[3/4] bg-slate-50 relative overflow-hidden rounded-t-[10rem] rounded-b-[2rem] border border-slate-200/60 shadow-2xl shadow-slate-100">
              <img
                src={DOCTOR_IMG}
                alt="Dr. Gaurav Tyagi"
                className="w-full h-full object-cover grayscale-[12%] contrast-[105%] hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right: Architectural Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7"
          >
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-cyan-600 block mb-4">
              Clinician Profile
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight leading-none mb-3">
              Dr. Gaurav Tyagi
            </h2>
            
            <p className="text-xs md:text-sm font-semibold tracking-wider text-slate-400 font-mono uppercase mb-8">
              Senior Consultant Neurosurgeon &middot; Indraprastha Apollo Hospitals
            </p>

            <div className="space-y-6 text-slate-600 leading-relaxed font-light text-base md:text-lg mb-10 max-w-2xl">
              <p>
                Dr. Gaurav Tyagi is a highly skilled neurosurgeon known for combining precise, technically flawless surgical execution with a deeply patient-first philosophy. Trained at <span className="font-semibold text-slate-800">NIMHANS</span> and internationally in <span className="font-semibold text-slate-800">Japan and Zurich</span>, he specializes in brain tumors, stroke, and advanced radiosurgery.
              </p>
              <p>
                With strong academic credentials and extensive global exposure, he focuses on safer, minimally invasive treatments that optimize functional outcomes—ensuring every patient receives world-class clinical care with compassion.
              </p>
            </div>

            {/* Elegant, Structured Credentials List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200/60 pt-8 mb-10">
              {credentials.map((c, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-700 font-medium font-mono uppercase tracking-wide">{c}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                to="/about"
                className="inline-block text-center px-8 py-4 bg-slate-950 text-white font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-cyan-600 transition-all shadow-xl shadow-slate-200 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                Read Full Biography
              </Link>
              
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold font-mono tracking-widest text-cyan-600 uppercase">
                  Accepting Clinical Consultations
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
