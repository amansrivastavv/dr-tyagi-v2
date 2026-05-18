import { useState } from "react";
import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldAlert, Award, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Asset imports
import brainTumorImg from "@/assets/expertise/brain_tumor.png";
import strokeImg from "@/assets/expertise/stroke.png";

const brainTumorData = {
  title: "Brain Tumors in India: Advancing Care with Minimally Invasive Techniques",
  introParagraph1: "Brain tumors represent a significant neurological challenge in India. With an incidence of approximately 5-10 cases per 100,000 population, India sees an estimated 28,000–40,000 new brain tumor cases annually. These account for about 1-2% of all cancers, affecting people across all age groups, with a notable portion occurring in children.",
  introParagraph2: "Improved access to MRI and CT imaging has led to better detection and reporting, contributing to awareness of rising cases. Brain tumors can be benign or malignant (e.g., gliomas, meningiomas, pituitary adenomas), presenting with symptoms like persistent headaches, seizures, vomiting, vision changes, or neurological deficits. Early diagnosis and expert intervention are critical for optimal outcomes.",
  comparisonHeading: "Traditional vs. Minimally Invasive Approaches",
  comparisonParagraph: "Historically, brain tumor surgery involved large craniotomies with significant risks, longer hospital stays, and extended recovery. Today, minimally invasive neurosurgery — including endoscopic techniques, keyhole approaches, tubular retractors, and advanced radiosurgery — has transformed treatment. These methods minimize trauma to healthy brain tissue, reduce complications, and accelerate recovery.",
  benefitsHeading: "Key benefits include:",
  benefitsList: [
    "Smaller incisions and less disruption to surrounding tissue.",
    "Reduced pain and lower risk of infection.",
    "Shorter hospital stays (often 1-3 days vs. longer for open surgery).",
    "Faster return to normal activities (weeks rather than months).",
    "Better cosmetic outcomes and preserved neurological function."
  ],
  recoveryHeading: "How Minimally Invasive Surgery Helps Patients Recover Faster",
  recoveryParagraph: "Patients treated by Dr. Tyagi and the team at Indraprastha Apollo often experience:",
  recoveryList: [
    "Quicker mobilization — Many walk and resume light activities within days.",
    "Shorter rehabilitation — Reduced brain manipulation leads to fewer deficits and faster neurological recovery.",
    "Improved quality of life — Less pain, minimal scarring, and lower complication rates allow patients to return to work, family, and daily life sooner.",
    "Multimodal care — Integration with radiosurgery (e.g., ZAP-X) provides non-surgical options for residual or recurrent tumors, avoiding repeat open procedures.",
    "Patient-centered approach: Comprehensive evaluation, personalized treatment plans, and multidisciplinary support (neurosurgery, oncology, rehabilitation) ensure the best possible outcomes."
  ],
  ctaHeading: "Take the First Step Towards Recovery",
  ctaText: "If you or a loved one has been diagnosed with a brain tumor, timely consultation with an expert can make all the difference. Dr. Gaurav Tyagi and the neurosciences team at Indraprastha Apollo Hospitals offer world-class, minimally invasive options tailored to Indian patients.",
  ctaButton: "Book an Appointment Today",
  disclaimer: "Disclaimer: This content is for informational purposes. Consult a qualified neurosurgeon for personalized medical advice. Treatment outcomes vary by individual case."
};

const strokeData = {
  title: "Stroke & Aneurysm Treatment in India: Advanced Minimally Invasive Care",
  introParagraph1: "Stroke and brain aneurysms are among the leading causes of neurological disability and death in India. With a rapidly aging population, rising incidence of hypertension, diabetes, and lifestyle factors, these conditions pose a major healthcare challenge.",
  introParagraph2: "India records over 18 lakh new stroke cases every year — roughly one stroke every 20 seconds. The cumulative incidence ranges from 105–172 per 100,000 people annually, with prevalence increasing significantly over the past decades. Brain aneurysms affect a notable portion of the population, and rupture can lead to hemorrhagic stroke with high fatality rates (up to 40% in some reports).",
  introParagraph3: "Common symptoms include sudden weakness or numbness (especially on one side), severe headache, speech difficulties, vision problems, dizziness, or loss of balance. Time is Brain — rapid diagnosis and expert intervention can dramatically improve survival and recovery.",
  comparisonHeading: "Traditional vs. Minimally Invasive Approaches",
  comparisonParagraph: "Open surgery was once the primary option, often involving larger craniotomies and longer recovery periods. Today, minimally invasive and endovascular techniques have revolutionized treatment:",
  comparisonList: [
    "Endovascular coiling, flow diversion, and stenting for aneurysms.",
    "Mechanical thrombectomy for ischemic strokes (clot removal via catheter).",
    "Microsurgical clipping with advanced navigation for complex aneurysms.",
    "Minimally invasive evacuation of hemorrhagic strokes or associated hematomas."
  ],
  benefitsHeading: "Key Benefits:",
  benefitsList: [
    "Smaller or no external incisions (catheter-based access through the groin).",
    "Reduced risk of complications and infection.",
    "Shorter hospital stays (often 1–5 days).",
    "Faster neurological recovery and return to daily life.",
    "Better preservation of brain function."
  ],
  recoveryHeading: "How Minimally Invasive Treatment Helps Patients Recover Faster",
  recoveryParagraph: "Patients under Dr. Tyagi’s care at Indraprastha Apollo often benefit from:",
  recoveryList: [
    "Rapid intervention — Mechanical thrombectomy can restore blood flow within hours, minimizing brain damage.",
    "Quicker mobilization — Many patients regain mobility and independence sooner.",
    "Reduced hospital stay and rehabilitation time — Less trauma leads to faster healing.",
    "Improved outcomes — Lower complication rates and better functional recovery, allowing return to work and family life.",
    "Holistic management — Integration of endovascular, microsurgical, and radiosurgical options for optimal results."
  ],
  extraParagraph: "The multidisciplinary team at Apollo (neurosurgery, neurology, interventional neuroradiology, and rehabilitation) provides seamless, patient-centered care from emergency management to long-term recovery.",
  ctaHeading: "Act Fast — Every Minute Counts",
  ctaText: "If you or a loved one experiences stroke symptoms or has been diagnosed with a brain aneurysm, immediate expert evaluation is crucial. Dr. Gaurav Tyagi and the Neurosciences team at Indraprastha Apollo Hospitals offer world-class, minimally invasive solutions tailored to Indian patients.",
  ctaButton: "Book an Appointment Today",
  disclaimer: "Disclaimer: This content is for informational purposes only. Consult a qualified neurosurgeon or neurologist for personalized medical advice. Treatment outcomes vary based on individual cases, timing, and specific medical conditions."
};

export default function Expertise() {
  const [activeDomain, setActiveDomain] = useState<"brain-tumors" | "stroke-aneurysm">("brain-tumors");

  return (
    <div className="min-h-screen bg-[#FCFDFF] text-slate-800 font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Clinical Specialties</span>
              <h1 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.1]">
                Areas of Surgical <br />
                <span className="text-slate-400 italic font-light">Expertise</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pl-8">
              <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
                Operating at the intersection of neurological complexity and patient empathy, delivering world-class minimally invasive neurological treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Domain Switcher */}
      <section className="py-12 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200/50">
              {[
                { id: "brain-tumors", label: "Brain Tumors" },
                { id: "stroke-aneurysm", label: "Stroke & Aneurysms" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDomain(tab.id as any)}
                  className={`text-xs md:text-sm font-semibold tracking-wide uppercase px-6 md:px-8 py-3.5 rounded-xl relative transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeDomain === tab.id
                      ? "text-cyan-700 font-bold"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {activeDomain === tab.id && (
                    <motion.div
                      layoutId="activeExpertiseDomain"
                      className="absolute inset-0 bg-white rounded-xl shadow-md border border-slate-200/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Display */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeDomain === "brain-tumors" ? (
              <motion.div
                key="brain-tumors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-20 lg:space-y-28"
              >
                {/* 1. Title & Intro Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/60 shadow-xl shadow-slate-100">
                      <img
                        src={brainTumorImg}
                        alt="Brain Tumors"
                        className="w-full h-full object-cover grayscale-[10%]"
                      />
                    </div>
                    {/* Small visual floating card */}
                    <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-xl hidden md:flex items-center gap-4 max-w-xs">
                      <div className="p-3 bg-cyan-50 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-serif text-slate-900">5-10</p>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">cases per 100k</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Pathology Overview</span>
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 leading-snug mb-6">
                      {brainTumorData.title}
                    </h2>
                    <div className="space-y-6 text-slate-600 font-light leading-relaxed text-[15px] md:text-[16px]">
                      <p>{brainTumorData.introParagraph1}</p>
                      <p>{brainTumorData.introParagraph2}</p>
                    </div>
                  </div>
                </div>

                {/* 2. Traditional vs. Minimally Invasive */}
                <div className="border-t border-slate-200/60 pt-16 lg:pt-24">
                  <div className="max-w-3xl mb-12">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Surgical Evolution</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
                      {brainTumorData.comparisonHeading}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed text-[15px]">
                      {brainTumorData.comparisonParagraph}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Traditional craniotomies */}
                    <div className="bg-slate-50 border border-slate-200/40 rounded-3xl p-8 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                          <ShieldAlert className="w-5 h-5 text-slate-500" />
                        </div>
                        <h4 className="text-lg font-serif text-slate-900 mb-3">Traditional Surgery</h4>
                        <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                          Involves larger surgical craniotomies, creating a larger opening in the skull. This typically results in increased disruption to normal surrounding brain structures and tissues.
                        </p>
                      </div>
                      <div className="flex gap-2 items-center text-xs font-semibold text-slate-400 tracking-wider uppercase">
                        <span>Higher Risks · Longer Stays</span>
                      </div>
                    </div>

                    {/* Minimally Invasive */}
                    <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/60 flex flex-col justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50/40 rounded-full blur-2xl pointer-events-none" />
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">
                          <Award className="w-5 h-5 text-cyan-600" />
                        </div>
                        <h4 className="text-lg font-serif text-slate-900 mb-3">Minimally Invasive Care</h4>
                        <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                          Utilizes small keyhole openings, tubular retractors, surgical neuro-endoscopes, and precise stereotactic coordinates to reach tumor structures safely with sub-millimeter disruption.
                        </p>
                      </div>
                      <div className="flex gap-2 items-center text-xs font-bold text-cyan-600 tracking-wider uppercase">
                        <span>Endoscopic · Keyhole · Tubular</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Key Benefits List */}
                <div className="bg-slate-50/80 border border-slate-200/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-48 h-48 bg-cyan-50/20 rounded-full blur-3xl pointer-events-none" />
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-8 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-cyan-600" />
                    {brainTumorData.benefitsHeading}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {brainTumorData.benefitsList.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 font-light text-[15px] leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Recover Faster Section */}
                <div className="border-t border-slate-200/60 pt-16 lg:pt-24">
                  <div className="max-w-3xl mb-12">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Clinical Outcomes</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
                      {brainTumorData.recoveryHeading}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed text-[15px]">
                      {brainTumorData.recoveryParagraph}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brainTumorData.recoveryList.map((rec, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200/50 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="flex gap-4 items-center mb-4">
                          <span className="text-xs font-mono text-cyan-600 font-bold">0{idx + 1}</span>
                          <div className="h-[1px] flex-1 bg-slate-100" />
                        </div>
                        <p className="text-slate-600 font-light text-sm leading-relaxed">
                          {rec}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. CTA Area */}
                <div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 block mb-4">Action Pathway</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                      {brainTumorData.ctaHeading}
                    </h3>
                    <p className="text-slate-300 font-light text-base leading-relaxed mb-8">
                      {brainTumorData.ctaText}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block px-10 py-5 bg-white text-slate-950 font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-cyan-500 hover:text-white transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
                    >
                      {brainTumorData.ctaButton}
                    </Link>
                  </div>
                </div>

                {/* 6. Disclaimer */}
                <p className="text-center text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed border-t border-slate-100 pt-8 italic">
                  {brainTumorData.disclaimer}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="stroke-aneurysm"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-20 lg:space-y-28"
              >
                {/* 1. Title & Intro Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/60 shadow-xl shadow-slate-100">
                      <img
                        src={strokeImg}
                        alt="Stroke & Aneurysms"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Small visual floating card */}
                    <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-xl hidden md:flex items-center gap-4 max-w-xs">
                      <div className="p-3 bg-cyan-50 rounded-xl">
                        <TrendingUp className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-serif text-slate-900">18 L</p>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">new stroke cases / year</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Pathology Overview</span>
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 leading-snug mb-6">
                      {strokeData.title}
                    </h2>
                    <div className="space-y-6 text-slate-600 font-light leading-relaxed text-[15px] md:text-[16px]">
                      <p>{strokeData.introParagraph1}</p>
                      <p>{strokeData.introParagraph2}</p>
                      <p>{strokeData.introParagraph3}</p>
                    </div>
                  </div>
                </div>

                {/* 2. Traditional vs. Minimally Invasive */}
                <div className="border-t border-slate-200/60 pt-16 lg:pt-24">
                  <div className="max-w-3xl mb-12">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Surgical Evolution</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
                      {strokeData.comparisonHeading}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed text-[15px]">
                      {strokeData.comparisonParagraph}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {strokeData.comparisonList.map((method, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 relative overflow-hidden group flex items-start gap-5"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-slate-100 group-hover:bg-cyan-500 transition-colors duration-300" />
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block mb-1">METHOD 0{idx + 1}</span>
                          <p className="text-slate-800 font-medium text-[15px] leading-relaxed">
                            {method}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Key Benefits List */}
                <div className="bg-slate-50/80 border border-slate-200/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-48 h-48 bg-cyan-50/20 rounded-full blur-3xl pointer-events-none" />
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-8 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-cyan-600" />
                    {strokeData.benefitsHeading}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {strokeData.benefitsList.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 font-light text-[15px] leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Recover Faster Section */}
                <div className="border-t border-slate-200/60 pt-16 lg:pt-24">
                  <div className="max-w-3xl mb-12">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 block mb-3">Clinical Outcomes</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4">
                      {strokeData.recoveryHeading}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed text-[15px]">
                      {strokeData.recoveryParagraph}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {strokeData.recoveryList.map((rec, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200/50 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="flex gap-4 items-center mb-4">
                          <span className="text-xs font-mono text-cyan-600 font-bold">0{idx + 1}</span>
                          <div className="h-[1px] flex-1 bg-slate-100" />
                        </div>
                        <p className="text-slate-600 font-light text-sm leading-relaxed">
                          {rec}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-500 font-light leading-relaxed text-base border-l-2 border-cyan-500 pl-6 max-w-3xl">
                    {strokeData.extraParagraph}
                  </p>
                </div>

                {/* 5. CTA Area */}
                <div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <span className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400 block mb-4">Action Pathway</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                      {strokeData.ctaHeading}
                    </h3>
                    <p className="text-slate-300 font-light text-base leading-relaxed mb-8">
                      {strokeData.ctaText}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block px-10 py-5 bg-white text-slate-950 font-bold uppercase tracking-widest text-[11px] rounded-full hover:bg-cyan-500 hover:text-white transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
                    >
                      {strokeData.ctaButton}
                    </Link>
                  </div>
                </div>

                {/* 6. Disclaimer */}
                <p className="text-center text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed border-t border-slate-100 pt-8 italic">
                  {strokeData.disclaimer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
