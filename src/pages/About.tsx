import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import FinalCTA from "./_components/FinalCTA.tsx";
import { motion } from "motion/react";
import { GraduationCap, Globe2, Award, BookOpen, Stethoscope, ArrowRight, Microscope, Brain, Target, ShieldCheck } from "lucide-react";
import doctorImg from "@/assets/about/dr_gaurav.jpeg";
import { Link } from "react-router-dom";

const milestones = [
  {
    location: "Bengaluru",
    title: "Clinical Training",
    institution: "NIMHANS",
    description: "Completed comprehensive MBBS and MS training at the National Institute of Mental Health and Neurosciences.",
  },
  {
    location: "Switzerland",
    title: "Vascular Fellowship",
    institution: "University Hospital Zurich",
    description: "Specialized fellowship in Skull Base Surgery and microvascular techniques under global pioneers.",
  },
  {
    location: "Japan",
    title: "International Training",
    institution: "Osaka",
    description: "Advanced surgical training focusing on minimal-access approaches and precision neurosurgery.",
  },
  {
    location: "New Delhi",
    title: "Senior Consultant",
    institution: "Indraprastha Apollo Hospital",
    description: "Leading complex neurosurgical cases with a focus on neuro-oncology and cerebrovascular care.",
  },
];

const philosophyPoints = [
  {
    title: "Cognitive Precision",
    description: "Operating at the intersection of neurological complexity and patient empathy, ensuring every movement is focused on long-term quality of life.",
  },
  {
    title: "Global Standards",
    description: "Integrating advanced surgical methodologies from international fellowships in Switzerland and Japan to provide world-class care.",
  },
  {
    title: "Patient Centricity",
    description: "Focusing on safe, minimally invasive treatments and better recovery outcomes—ensuring every patient receives compassionate care.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      <Navbar />

      {/* Background Texture Overlay */}
      <div className="fixed inset-0 clinical-texture pointer-events-none z-10 opacity-[0.01]" />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Text Side */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h1 className="text-editorial text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] mb-12">
                  Precision Surgery. <br />
                  Compassionate Care.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                  Dr. Gaurav Tyagi is a Senior Consultant Neurosurgeon at Indraprastha Apollo Hospital, New Delhi, specializing in advanced brain tumor surgery, stroke care, and radiosurgery.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-16 border-t border-border pt-12"
              >
                <div>
                  <p className="text-5xl font-serif text-foreground">15+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div className="h-12 w-[1px] bg-border" />
                <div>
                  <p className="text-5xl font-serif text-foreground">45+</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Research Publications</p>
                </div>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl relative bg-slate-900">
                    <img
                      src={doctorImg}
                      alt="Dr. Gaurav Tyagi"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>

                  {/* Floating Position Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-8 -right-8 lg:-right-12 w-64 md:w-80 overflow-hidden rounded-2xl shadow-2xl border border-white/5 z-20"
                  >
                    <div className="bg-[#0f172a] px-4 py-3 border-b border-white/10">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-sky-400">Current Position</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-slate-900 font-serif text-lg leading-tight mb-2">Indraprastha Apollo Hospital</p>
                      <p className="text-slate-500 text-[11px] uppercase tracking-widest font-semibold">Senior Neurosurgeon</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Credential Pathway */}
      <section className="py-18 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-32">
            <p className="text-[10px] uppercase tracking-[0.4em] text-sky-600 font-bold mb-6">Academic & Clinical Journey</p>
            <h2 className="text-6xl md:text-7xl font-serif text-foreground">Credential Pathway</h2>
          </div>

          <div className="space-y-0">
            {milestones.map((ms, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group relative border-b border-slate-200 py-16 hover:bg-white transition-all duration-500 px-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
                  <div className="lg:col-span-2">
                    <p className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">{ms.location}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-4xl font-serif text-foreground group-hover:text-sky-600 transition-colors">{ms.title}</h3>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-muted-foreground leading-relaxed italic group-hover:text-foreground/80 transition-colors">
                      <span className="font-bold text-foreground/80 group-hover:text-sky-600/80 mr-2">{ms.institution}.</span>
                      {ms.description}
                    </p>
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-sky-600 transition-all group-hover:translate-x-1" />
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
