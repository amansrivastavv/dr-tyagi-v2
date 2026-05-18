import { useState } from "react";
import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import { motion, AnimatePresence } from "motion/react";
import doctorImg from "@/assets/about/dr_gaurav.jpeg";

const qualificationsList = [
  {
    year: "2015 – 2018",
    location: "Bengaluru, India",
    title: "MCh (Neurosurgery)",
    institution: "National Institute of Mental Health and Neuro Sciences (NIMHANS), India",
    description: "Highest subspecialty surgical residency and training in neurosurgery at India's premier neurological institute.",
  },
  {
    year: "2011 – 2014",
    location: "Jaipur, India",
    title: "MS (General Surgery)",
    institution: "SMS Medical College, India",
    description: "Comprehensive postgraduate general surgical residency and clinical training.",
  },
  {
    year: "2004 – 2009",
    location: "Miraj, India",
    title: "MBBS",
    institution: "Government Medical College, Miraj, India",
    description: "Fundamental undergraduate medical education and clinical rotations.",
  },
  {
    year: "2000 – 2004",
    location: "Haridwar, India",
    title: "Schooling",
    institution: "Delhi Public School, Ranipur Haridwar",
    description: "Primary and secondary schooling establishing a strong academic foundation.",
  },
];

const experienceList = [
  {
    year: "Oct 2025 – Present",
    location: "New Delhi, India",
    title: "Senior Consultant – Neurosurgery",
    institution: "Indraprastha Apollo Hospitals",
    description: "Leading advanced cranial, skull-base, and minimally invasive neurosurgical procedures.",
  },
  {
    year: "Sep 2023 – Oct 2025",
    location: "New Delhi, India",
    title: "Consultant – Neurosurgery",
    institution: "Indraprastha Apollo Hospitals",
    description: "Delivering high-precision neurovascular interventions and emergency trauma surgery.",
  },
  {
    year: "Mar 2020 – Aug 2023",
    location: "Bengaluru, India",
    title: "Assistant Professor – Neurosurgery",
    institution: "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
    description: "Academic training of MCh residents, specialized surgeries supervision, and clinical research.",
  },
  {
    year: "Oct 2019 – Mar 2020",
    location: "Gurugram, India",
    title: "Attending Consultant – Neurosurgery",
    institution: "Paras Healthcare Pvt. Ltd.",
    description: "Supervising high-volume critical neurological care and complex trauma therapies.",
  },
  {
    year: "Jul 2019 – Sep 2019",
    location: "Osaka, Japan",
    title: "Clinical Fellow – Skull Base Surgery",
    institution: "Osaka Metropolitan University",
    description: "Advanced fellowship specializing in complex microscopic skull-base approaches and techniques.",
  },
  {
    year: "Jun 2018 – May 2019",
    location: "Bengaluru, India",
    title: "Chief Resident – Neurosurgery",
    institution: "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
    description: "Coordinating operating suites, managing clinical resident schedules, and leading emergency cases.",
  },
  {
    year: "Jul 2015 – Jun 2018",
    location: "Bengaluru, India",
    title: "Neurosurgery Resident",
    institution: "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
    description: "Intense surgical residency rotations spanning pediatric, neurovascular, and spinal neurosurgery.",
  },
  {
    year: "Jun 2011 – Jun 2014",
    location: "Jaipur, India",
    title: "General Surgery Resident",
    institution: "SMS Medical College",
    description: "Core surgical residency managing emergency trauma care and primary surgeries.",
  },
  {
    year: "May 2009 – Feb 2010",
    location: "New Delhi, India",
    title: "Medical Intern",
    institution: "Sir Ganga Ram Hospital",
    description: "Supervised rotatory clinical internship across diverse medical and surgical departments.",
  },
];

const awardsList = [
  {
    category: "International Honor",
    title: "International Scholarship",
    institution: "North American Skull Base Society (2022)",
    description: "Prestigious global scholarship highlighting surgical research and skull base expertise.",
  },
  {
    category: "Best Research Paper",
    title: "Neurovascon 2021",
    institution: "Vascular Neurosurgery Excellence",
    description: "Recognized with First Prize for outstanding clinical research presentation in neurovascular surgery.",
  },
  {
    category: "Best Research Paper",
    title: "Skullbasecon 2018",
    institution: "Skull Base Surgery Excellence",
    description: "Awarded First Prize for innovative skull base microscopic research papers.",
  },
  {
    category: "Academic Distinction",
    title: "TYSA Young Scholar of the Year",
    institution: "Torrent Young Scholar Award – 2017",
    description: "Selected as the top national neurosurgical scholar of the year in a competitive academic jury evaluation.",
  },
  {
    category: "Leadership Role",
    title: "Executive Member – Neuroradiosurgery Committee",
    institution: "World Federation of Neurosurgical Societies (WFNS)",
    description: "Representing global academic leadership in neuro-radiosurgery committees.",
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
  const [activeTab, setActiveTab] = useState<"experience" | "qualifications" | "awards">("experience");
  return (
    <div className="min-h-screen bg-[#FCFDFF] text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        {/* Soft background luxury glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-50/30 blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image Side with Elegant Arch Framing */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="relative"
              >
                {/* Visual Glow behind image */}
                <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-cyan-100/50 blur-2xl pointer-events-none -z-10 animate-pulse" />
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-blue-50/50 blur-2xl pointer-events-none -z-10" />
                
                {/* Premium Arch Frame */}
                <div className="aspect-[3/4] bg-slate-50 relative overflow-hidden rounded-t-[12rem] rounded-b-[2rem] border border-slate-200/60 shadow-2xl shadow-slate-100">
                  <img
                    src={doctorImg}
                    alt="Dr. Gaurav Tyagi"
                    className="w-full h-full object-cover grayscale-[12%] contrast-[105%] hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            </div>

            {/* Architectural Text Side */}
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              >
                {/* Clean, editorial-style subtitle */}
                <p className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-cyan-600 mb-6">
                  Senior Consultant Neurosurgeon
                </p>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-slate-900 mb-8 tracking-tight">
                  Surgical <span className="italic font-light text-slate-400">precision</span>.<br />
                  Patient <span className="text-cyan-700 font-medium">first</span>.
                </h1>
                
                <div className="space-y-6 text-slate-600 leading-relaxed font-light mb-12 max-w-2xl">
                  <p className="text-lg md:text-xl font-light">
                    Dr. Gaurav Tyagi is a leading neurosurgeon known for his precise, patient-focused approach and strong academic foundation. Currently a Senior Consultant at <span className="font-medium text-slate-800">Indraprastha Apollo Hospitals</span>, he trained at <span className="font-medium text-slate-800">National Institute of Mental Health and Neuro Sciences (NIMHANS)</span>, where he also served as faculty.
                  </p>
                </div>

                {/* Enhanced Counter Grid */}
                <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-slate-200/60 pt-8 max-w-md">
                  <div className="group">
                    <p className="text-4xl md:text-5xl font-serif text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                      10<span className="text-cyan-500 font-sans text-2xl font-semibold">+</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Years Experience</p>
                  </div>
                  <div className="group">
                    <p className="text-4xl md:text-5xl font-serif text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                      45<span className="text-cyan-500 font-sans text-2xl font-semibold">+</span>
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Research Pubs</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Global Impact Highlights */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-50 border border-slate-200/50 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            {/* Soft decorative glow */}
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-cyan-100/30 blur-2xl pointer-events-none" />
            
            <div className="md:w-1/3 flex-shrink-0">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Clinical Legacy</span>
              <h2 className="text-2xl md:text-3xl font-serif text-slate-900 leading-tight">Global Expertise, Local Outcomes</h2>
            </div>
            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-10">
              <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                With international exposure from Japan and advanced radiosurgery training in Zurich, he specializes in brain tumors, stroke, and minimally invasive neurosurgery, including Zap-X radiosurgery. Backed by years of hands-on experience across leading institutions and 45+ publications, Dr. Tyagi is committed to safer surgeries, faster recovery, and better outcomes for every patient.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Surgical Philosophy</h2>
            </motion.div>
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

      {/* Credential Pathway (Timeline & Honors) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Professional Pathway</h2>
            <p className="text-slate-500 font-light max-w-xl text-[15px] leading-relaxed">
              A comprehensive chronicle of academic qualifications, leadership achievements, and clinical appointments.
            </p>
          </motion.div>

          {/* Interactive Pill Navigation Tabs */}
          <div className="inline-flex p-1 bg-slate-100/80 backdrop-blur-sm rounded-xl mb-16 overflow-x-auto max-w-full scrollbar-none border border-slate-200/40">
            {[
              { id: "experience", label: "Experience" },
              { id: "qualifications", label: "Qualifications" },
              { id: "awards", label: "Awards & Leadership" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs md:text-sm font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg relative transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-cyan-700 font-bold"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-slate-200/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="max-w-4xl min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  {experienceList.map((item, i) => (
                    <div
                      key={i}
                      className="relative pl-8 md:pl-0 border-l border-slate-200 md:border-l-0 pb-12 last:pb-0"
                    >
                      {/* Mobile indicator line */}
                      <div className="absolute left-[-1px] top-2 w-[3px] h-8 bg-cyan-500 md:hidden" />

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group">
                        {/* Timeline Desktop Structure */}
                        <div className="hidden md:block md:col-span-3 text-right pt-1.5 relative">
                          <p className="text-xs font-semibold font-mono text-cyan-600 tracking-wider">{item.year}</p>
                          <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">{item.location}</p>
                          {/* Desktop indicator line and node */}
                          <div className="absolute right-[-24px] top-3.5 bottom-[-48px] w-[1px] bg-slate-200 group-last:bg-transparent" />
                          <div className="absolute right-[-29px] top-2 w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-[#FCFDFF] group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-colors" />
                        </div>

                        {/* Mobile Date/Location */}
                        <div className="md:hidden mb-1">
                          <p className="text-sm font-mono text-cyan-600 mb-1 font-semibold">{item.year}</p>
                          <p className="text-[11px] uppercase tracking-widest text-slate-500">{item.location}</p>
                        </div>

                        <div className="md:col-span-9">
                          <h3 className="text-xl md:text-[22px] font-serif text-slate-900 mb-1.5 group-hover:text-cyan-800 transition-colors">{item.title}</h3>
                          <p className="text-xs uppercase tracking-[0.1em] text-cyan-700/80 font-semibold mb-3">{item.institution}</p>
                          <p className="text-slate-500 leading-relaxed font-light text-[15px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "qualifications" && (
                <motion.div
                  key="qualifications"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                >
                  {qualificationsList.map((item, i) => (
                    <div
                      key={i}
                      className="relative pl-8 md:pl-0 border-l border-slate-200 md:border-l-0 pb-12 last:pb-0"
                    >
                      {/* Mobile indicator line */}
                      <div className="absolute left-[-1px] top-2 w-[3px] h-8 bg-cyan-500 md:hidden" />

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 group">
                        {/* Timeline Desktop Structure */}
                        <div className="hidden md:block md:col-span-3 text-right pt-1.5 relative">
                          <p className="text-xs font-semibold font-mono text-cyan-600 tracking-wider">{item.year}</p>
                          <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">{item.location}</p>
                          {/* Desktop indicator line and node */}
                          <div className="absolute right-[-24px] top-3.5 bottom-[-48px] w-[1px] bg-slate-200 group-last:bg-transparent" />
                          <div className="absolute right-[-29px] top-2 w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-[#FCFDFF] group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-colors" />
                        </div>

                        {/* Mobile Date/Location */}
                        <div className="md:hidden mb-1">
                          <p className="text-sm font-mono text-cyan-600 mb-1 font-semibold">{item.year}</p>
                          <p className="text-[11px] uppercase tracking-widest text-slate-500">{item.location}</p>
                        </div>

                        <div className="md:col-span-9">
                          <h3 className="text-xl md:text-[22px] font-serif text-slate-900 mb-1.5 group-hover:text-cyan-800 transition-colors">{item.title}</h3>
                          <p className="text-xs uppercase tracking-[0.1em] text-cyan-700/80 font-semibold mb-3">{item.institution}</p>
                          <p className="text-slate-500 leading-relaxed font-light text-[15px]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "awards" && (
                <motion.div
                  key="awards"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {awardsList.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="relative bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:shadow-slate-100/50 hover:border-slate-300/80 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-slate-100 group-hover:bg-cyan-500 transition-colors duration-300" />
                      <div className="pl-2">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-600 uppercase block mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-serif text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-4">
                          {item.institution}
                        </p>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
