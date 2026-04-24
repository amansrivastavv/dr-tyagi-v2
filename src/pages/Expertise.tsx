import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import FinalCTA from "./_components/FinalCTA.tsx";
import { motion } from "motion/react";
import { ArrowRight, Microscope, Brain, Target, Layers } from "lucide-react";

// Asset imports
import brainTumorImg from "@/assets/expertise/brain_tumor.png";
import strokeImg from "@/assets/expertise/stroke.png";
import skullBaseImg from "@/assets/expertise/skull_base.png";
import radiosurgeryImg from "@/assets/expertise/radiosurgery.png";

const domains = [
    { id: "01", title: "Brain Tumors & Gliomas", anchor: "brain-tumors" },
    { id: "02", title: "Stroke & Aneurysm Management", anchor: "stroke" },
    { id: "03", title: "Advanced Skull Base Surgery", anchor: "skull-base" },
    { id: "04", title: "Stereotactic Radiosurgery", anchor: "radiosurgery" },
];

const methodology = [
    { step: "01", title: "Assessment", desc: "Comprehensive diagnostic and neurological evaluation." },
    { step: "02", title: "Mapping", desc: "High-fidelity 3D modeling and surgical precision planning." },
    { step: "03", title: "Consultation", desc: "Personalized treatment strategies and risk minimization." },
    { step: "04", title: "Restoration", desc: "Continuous monitoring and precision recovery pathways." },
];

export default function Expertise() {
    return (
        <div className="min-h-screen bg-background font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden text-foreground">
            <Navbar />

            {/* High-Fidelity Typographic Hero Reference */}
            <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 bg-[#fcfcfb]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Tagline Animation Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                    </motion.div>

                    {/* Massive Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="mb-20"
                    >
                        <h1 className="text-editorial text-[3.5rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] text-slate-900 tracking-tight">
                            Specialized in <br />
                            <span className="text-sky-700 italic font-light">What</span> <span className="text-sky-700">Matters.</span>
                        </h1>
                    </motion.div>

                    {/* Horizontal Divider Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="w-full h-[1px] bg-slate-200 mb-16 origin-left"
                    />

                    {/* Bottom Metadata Bar */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-2xl"
                            >
                                Dr. Gaurav Tyagi operates at the frontier of neurosurgical intervention,
                                where surgical precision meets biological insight. His practice focuses on
                                complex pathologies that demand an uncompromising standard of technical
                                excellence and a patient-first ethos.
                            </motion.p>
                        </div>
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-2 gap-y-10 gap-x-6 lg:flex lg:justify-end lg:gap-16"
                            >
                                {/* Years */}
                                <div className="text-center lg:text-left">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-600/60 mb-2">
                                        Years
                                    </p>
                                    <p className="text-5xl font-serif text-slate-900">15+</p>
                                </div>

                                {/* Cases */}
                                <div className="text-center lg:text-left">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-600/60 mb-2">
                                        Cases
                                    </p>
                                    <p className="text-5xl font-serif text-slate-900">4,200</p>
                                </div>

                                {/* Subspecialties (full width + centered) */}
                                <div className="col-span-2 text-center lg:text-left">
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-600/60 mb-2">
                                        Subspecialties
                                    </p>
                                    <p className="text-5xl font-serif text-slate-900">04</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESTORING ORIGINAL SECTIONS BELOW */}

            {/* Anchor Grid */}
            <section className="py-24 bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {domains.map((dom) => (
                            <a
                                key={dom.id}
                                href={`#${dom.anchor}`}
                                className="group p-8 bg-slate-50 border border-border rounded-2xl hover:shadow-xl transition-all duration-500"
                            >
                                <span className="text-sky-600 font-serif text-2xl mb-4 block group-hover:-translate-y-1 transition-transform">{dom.id}</span>
                                <h3 className="text-lg font-serif text-foreground leading-snug">{dom.title}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Sections */}
            <div className="space-y-0 text-foreground">

                {/* Section 01: Brain Tumors */}
                <section id="brain-tumors" className="py-24 lg:py-48 bg-white overflow-hidden scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 border border-sky-100 rounded-[2.5rem] -rotate-2" />
                                <img
                                    src={brainTumorImg}
                                    alt="Brain Tumor Mapping"
                                    className="relative w-full rounded-[2rem] shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-sky-600" />
                                    <p className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs">Pathology 01 —— Cranial Surgery</p>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Brain Tumors & <br /> Gliomas</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Utilizing advanced neuro-mapping and micro-neurosurgical techniques to navigate the
                                    most critical landscapes of the human brain. Our objective is maximal tumor resection
                                    while prioritizing functional preservation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 02: Stroke */}
                <section id="stroke" className="py-24 lg:py-48 bg-slate-950 text-white overflow-hidden scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-sky-400" />
                                    <p className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs">Vascular 02 —— Critical Care</p>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Stroke & <br /> Aneurysm</h2>
                                <p className="text-lg text-white/60 leading-relaxed mb-8">
                                    Rapid intervention in the difference between recovery and permanent deficit.
                                    Our vascular program integrates endovascular innovation with traditional
                                    microsurgical expertise for comprehensive care.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <img
                                    src={strokeImg}
                                    alt="Vascular Visualization"
                                    className="relative w-full rounded-[2rem] shadow-2xl transition-transform duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section 03: Skull Base */}
                <section id="skull-base" className="py-24 lg:py-48 bg-white overflow-hidden scroll-mt-24 border-b border-border">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={skullBaseImg}
                                    alt="Advanced Skull Base Models"
                                    className="relative w-full max-w-md mx-auto grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-sky-600" />
                                    <p className="text-sky-600 font-bold tracking-[0.2em] uppercase text-xs">Pioneering 03 —— Complex Access</p>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Advanced Skull <br /> Base Surgery</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Treating complex lesions at the base of the skull using minimally invasive endoscopic
                                    techniques and open microsurgical approaches.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 04: Radiosurgery */}
                <section id="radiosurgery" className="py-24 lg:py-48 bg-[#0a0c10] text-white overflow-hidden scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <p className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Innovation 04 —— Non-Invasive</p>
                                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Stereotactic <br /> Radiosurgery</h2>
                                <p className="text-lg text-white/50 leading-relaxed mb-12">
                                    The pinnacle of non-surgical brain treatments, delivering high-dose
                                    radiation with sub-millimeter accuracy.
                                </p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={radiosurgeryImg}
                                    alt="Radiosurgery Suite"
                                    className="relative w-full rounded-[2.5rem] shadow-2xl border border-white/5"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Methodology Section */}
            <section className="py-24 lg:py-48 bg-slate-50 border-y border-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-center mb-24">The Methodology of Care</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {methodology.map((m) => (
                            <div key={m.step} className="group">
                                <div className="flex items-center gap-4 mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sky-600 font-serif text-3xl">{m.step}</span>
                                    <div className="h-[1px] flex-grow bg-sky-200" />
                                </div>
                                <h3 className="text-xl font-serif mb-4">{m.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 lg:py-48 relative overflow-hidden bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <p className="text-xs uppercase tracking-[0.4em] font-bold text-sky-600 mb-8">Direct Access</p>
                    <h2 className="text-5xl md:text-7xl font-serif mb-12">Ready to consult?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-slate-950 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-sky-600 transition-all shadow-xl">Apply for Appointment</button>
                        <button className="px-12 py-6 border border-border rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all">Send Medical Query</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
