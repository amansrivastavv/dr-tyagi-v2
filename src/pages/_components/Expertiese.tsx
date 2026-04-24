import { motion } from "motion/react";
import { Brain, Activity, Layers, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const expertiseData = [
  {
    icon: Brain,
    category: "Minimally Invasive",
    title: "Brain Tumors",
    description: "Advanced resection techniques for all types of brain tumors—from meningiomas to glioblastomas—with maximum tumor removal and minimal impact on healthy tissue.",
  },
  {
    icon: Activity,
    category: "Neurovascular Care",
    title: "Stroke & Aneurysm",
    description: "Comprehensive treatment for cerebrovascular diseases including ischemic stroke, hemorrhagic stroke, and complex intracranial aneurysms using endovascular techniques.",
  },
  {
    icon: Layers,
    category: "Complex Resections",
    title: "Skull Base Surgery",
    description: "Highly specialized skull base approaches for tumors involving the skull base, cranial nerves, and surrounding critical structures with international fellowship training.",
  },
  {
    icon: Zap,
    category: "Zap-X Technology",
    title: "Stereotactic Radiosurgery",
    description: "Non-invasive, highly precise radiation delivery using the Zap-X gyroscopic radiosurgery system—ideal for brain tumors, AVMs, and functional disorders.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Key Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2 leading-tight">
              Specialized in What Matters
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg font-light leading-relaxed">
            Every condition requires a unique approach. Dr. Tyagi brings specialized training and cutting-edge tools to deliver the best outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                <item.icon className="w-6 h-6" />
              </div>

              <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                {item.category}
              </span>

              <h3 className="text-xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed font-light flex-grow">
                {item.description}
              </p>

            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/expertise"
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-full text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-white transition-all shadow-lg shadow-primary/20"
          >
            View Full Surgical Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
