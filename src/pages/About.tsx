import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import { motion } from "motion/react";
import doctorImg from "@/assets/about/dr_gaurav.jpeg";

const milestones = [
  {
    year: "2010 - 2015",
    location: "Bengaluru, India",
    title: "Clinical Training",
    institution: "NIMHANS",
    description: "Completed comprehensive MBBS and MS training at the National Institute of Mental Health and Neurosciences, laying the foundation for advanced neurosurgical practice.",
  },
  {
    year: "2016",
    location: "Zurich, Switzerland",
    title: "Vascular Fellowship",
    institution: "University Hospital Zurich",
    description: "Specialized fellowship in Skull Base Surgery and microvascular techniques, working alongside global pioneers to refine surgical precision.",
  },
  {
    year: "2018",
    location: "Osaka, Japan",
    title: "International Training",
    institution: "Osaka University",
    description: "Advanced surgical training focusing on minimal-access approaches and precision neurosurgery for complex vascular anomalies.",
  },
  {
    year: "Present",
    location: "New Delhi, India",
    title: "Senior Consultant",
    institution: "Indraprastha Apollo Hospital",
    description: "Leading complex neurosurgical cases with a dedicated focus on neuro-oncology, cerebrovascular care, and patient-centric outcomes.",
  },
];

const philosophyPoints = [
  {
    number: "01",
    title: "Cognitive Precision",
    description: "Operating at the intersection of neurological complexity and patient empathy, ensuring every movement is focused on long-term quality of life.",
  },
  {
    number: "02",
    title: "Global Standards",
    description: "Integrating advanced surgical methodologies from international fellowships in Switzerland and Japan to provide world-class, evidence-based care.",
  },
  {
    number: "03",
    title: "Patient Centricity",
    description: "Focusing on safe, minimally invasive treatments and better recovery outcomes—ensuring every patient receives deeply compassionate care.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#FCFDFF] text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Image Side */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[3/4] bg-slate-100 relative overflow-hidden">
                  <img
                    src={doctorImg}
                    alt="Dr. Gaurav Tyagi"
                    className="w-full h-full object-cover grayscale-[20%] contrast-100"
                  />
                </div>
                {/* Minimal accent line indicating image framing */}
                <div className="absolute -left-4 top-12 w-[2px] h-24 bg-cyan-500" />
              </motion.div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pt-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-slate-900 mb-8 tracking-tight">
                  Surgical precision.<br />
                  <span className="text-slate-400">Patient first.</span>
                </h1>
                
                <div className="w-12 h-[2px] bg-cyan-500 mb-8" />
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-light mb-16">
                  Dr. Gaurav Tyagi is a leading neurosurgeon known for his meticulous, patient-focused approach. Currently a Senior Consultant at Indraprastha Apollo Hospitals, with foundational training at NIMHANS.
                </p>

                <div className="grid grid-cols-2 gap-12 border-t border-slate-200 pt-12 max-w-md">
                  <div>
                    <p className="text-4xl font-serif text-slate-900 mb-2">10<span className="text-cyan-500 text-3xl font-sans">+</span></p>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 font-medium">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif text-slate-900 mb-2">45<span className="text-cyan-500 text-3xl font-sans">+</span></p>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 font-medium">Research Pubs</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Surgical Philosophy</h2>
            </motion.div>
            <div className="hidden md:block flex-1 border-b border-slate-200 ml-12 mb-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {philosophyPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-cyan-600">{point.number}</span>
                  <div className="h-[1px] flex-1 bg-slate-200 group-hover:bg-cyan-200 transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-4">{point.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-light">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Pathway (Timeline) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Credential Pathway</h2>
          </motion.div>

          <div className="max-w-4xl">
            {milestones.map((ms, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 md:pl-0 border-l border-slate-200 md:border-l-0 pb-16 last:pb-0"
              >
                {/* Mobile indicator line */}
                <div className="absolute left-[-1px] top-2 w-[3px] h-8 bg-cyan-500 md:hidden" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group">
                  {/* Timeline Desktop Structure */}
                  <div className="hidden md:block md:col-span-3 text-right pt-1 relative">
                    <p className="text-sm font-mono text-slate-400">{ms.year}</p>
                    <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">{ms.location}</p>
                    {/* Desktop indicator line */}
                    <div className="absolute right-[-24px] top-1 bottom-[-80px] w-[1px] bg-slate-200 group-last:bg-transparent" />
                    <div className="absolute right-[-25px] top-2 w-[3px] h-8 bg-slate-200 group-hover:bg-cyan-500 transition-colors" />
                  </div>

                  {/* Mobile Date/Location */}
                  <div className="md:hidden mb-2">
                    <p className="text-sm font-mono text-cyan-600 mb-1">{ms.year}</p>
                    <p className="text-[11px] uppercase tracking-widest text-slate-500">{ms.location}</p>
                  </div>

                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-serif text-slate-900 mb-2">{ms.title}</h3>
                    <p className="text-[13px] uppercase tracking-[0.1em] text-slate-500 font-medium mb-4">{ms.institution}</p>
                    <p className="text-slate-600 leading-relaxed font-light max-w-2xl">{ms.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
