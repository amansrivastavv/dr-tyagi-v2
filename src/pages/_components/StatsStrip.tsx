import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Award, BookOpen, Stethoscope, Users } from "lucide-react";

const stats = [
  { icon: Stethoscope, value: 10, suffix: "+", label: "Years Experience" },
  { icon: BookOpen, value: 45, suffix: "+", label: "Research Publications" },
  { icon: Users, value: 1000, suffix: "+", label: "Successful Procedures" },
  { icon: Award, value: 3, suffix: "", label: "International Fellowships" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative py-12 overflow-hidden border-y border-border">
      {/* Light theme background */}
      <div className="absolute inset-0 bg-[#E0F7FF]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,231,255,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-border/50">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-6 py-2"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-3 shadow-lg shadow-primary/20">
                <stat.icon className="w-5 h-5 text-foreground" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

