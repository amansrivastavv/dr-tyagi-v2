import Navbar from "./_components/Navbar.tsx";
import Footer from "./_components/Footer.tsx";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1674027215016-0a4abfdbf1cc?w=600&q=80",
    category: "Brain Tumors",
    title: "Brain Tumor Awareness: Early Signs You Shouldn't Ignore",
    excerpt: "Understanding early warning signs of brain tumors can be life-saving. Dr. Tyagi explains what symptoms should prompt an immediate neurological evaluation.",
    readTime: "5 min read",
    id: "brain-tumor-awareness"
  },
  {
    image: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?w=600&q=80",
    category: "Stroke Prevention",
    title: "FAST Protocol: Recognizing and Responding to Stroke",
    excerpt: "Every minute counts in a stroke. Learn about the FAST protocol—Face, Arms, Speech, Time—and how rapid response improves recovery outcomes dramatically.",
    readTime: "4 min read",
    id: "fast-protocol"
  },
  {
    image: "https://images.unsplash.com/photo-1726162613793-e42ea98993ef?w=600&q=80",
    category: "Innovation",
    title: "Zap-X Radiosurgery: The Future of Non-Invasive Brain Treatment",
    excerpt: "Explore how Zap-X gyroscopic radiosurgery is revolutionizing the treatment of brain tumors and AVMs with unprecedented precision and minimal side effects.",
    readTime: "7 min read",
    id: "zap-x-radiosurgery"
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
    category: "Surgical Techniques",
    title: "Awake Craniotomy: Maximizing Resection, Preserving Function",
    excerpt: "A deep dive into how awake brain surgery allows neurosurgeons to map cortical function in real-time, offering optimal outcomes for eloquent tumors.",
    readTime: "6 min read",
    id: "awake-craniotomy"
  },
  {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    category: "Spine Care",
    title: "Minimally Invasive Spine Surgery: A Paradigm Shift",
    excerpt: "How keyhole surgical approaches are replacing traditional open spine surgeries, leading to faster recoveries and less postoperative pain.",
    readTime: "5 min read",
    id: "minimally-invasive-spine"
  },
  {
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&q=80",
    category: "Neurology",
    title: "Understanding Trigeminal Neuralgia: Causes and Cures",
    excerpt: "Known as one of the most painful conditions, trigeminal neuralgia is highly treatable. We explore pharmacological and microvascular decompression options.",
    readTime: "4 min read",
    id: "trigeminal-neuralgia"
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-[#fcfcfb] font-sans selection:bg-sky-100 selection:text-sky-900 border-x-hidden text-slate-900">
      <Navbar />

      {/* Editorial Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-slate-500">
              — Editorial & Insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                <h1 className="text-editorial text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] text-slate-900 tracking-tight">
                  Clinical <br />
                  <span className="text-sky-700 italic font-light">Perspectives.</span>
                </h1>
              </motion.div>
            </div>
            <div className="lg:col-span-4 pb-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 leading-relaxed font-light"
              >
                A curated collection of neurosurgical insights, breakthroughs in care, and patient
                education from the desk of Dr. Gaurav Tyagi.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <Link to={`/articles/${article.id}`} className="block relative aspect-[4/3] overflow-hidden bg-slate-100 rounded-lg mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-900 bg-white/90 backdrop-blur-sm px-3 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </Link>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-[11px] uppercase tracking-widest text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span className="mx-2 opacity-50">—</span>
                    <span>Clinical Update</span>
                  </div>
                  <Link to={`/articles/${article.id}`}>
                    <h3 className="text-2xl font-serif leading-tight mb-4 group-hover:text-sky-700 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 leading-relaxed font-light line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                  <Link to={`/articles/${article.id}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-sky-700 group-hover:gap-4 transition-all">
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
