import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import brainImg from "@/assets/hero/brain_render.png";

export default function HeroElite() {
  return (
    <div className="dark">
      <section className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col justify-between pt-32">
        {/* Background Brain Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.05, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full lg:w-[80%] lg:h-full relative translate-y-20 lg:translate-y-0"
          >
            <img
              src={brainImg}
              alt="Anatomical Brain Render"
              className="w-full h-full object-contain object-right opacity-80 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/40 z-10" />

            {/* Anatomical Labels */}
            {/* <div className="hidden lg:block">
              <Label x="45%" y="30%" text="GLIOMAS" delay={2} />
              <Label x="28%" y="42%" text="RADIOSURGERY" delay={2.2} />
              <Label x="52%" y="68%" text="SKULL BASE" delay={2.4} />
              <Label x="72%" y="48%" text="STROKE" delay={2.6} />
            </div> */}
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex-grow flex items-center">
          <div className="max-w-7xl mx-auto w-full px-8 pt-12 md:pt-0">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="text-foreground text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-10 tracking-tight"
              >
                When It’s Your <br />
                Brain Expertise <br /> Matters Most.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="text-foreground/80 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md tracking-wide"
              >
                Advanced minimally invasive care for brain tumors, stroke, and complex neurovascular conditions—powered by global expertise and cutting-edge technologies like Zap-X radiosurgery for precise, non-invasive treatment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Button size="lg" className="rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-[0.3em] text-[10px] px-10 py-6 hover:bg-primary hover:border-primary hover:text-background uppercase transition-all shadow-2xl">
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Strip */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-8 pb-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-foreground/20 text-[10px] font-bold tracking-[0.4em] uppercase">CLINICAL PRECISION</div>
            <div className="h-px w-24 bg-foreground/5" />
            <div className="text-foreground/20 text-[10px] font-bold tracking-[0.4em] uppercase font-serif">STANDARD OF CARE</div>
          </div>

          {/* Decorative corner element */}
          <div className="h-24 w-px bg-gradient-to-t from-foreground/10 to-transparent hidden lg:block" />
        </div>
      </section>
    </div>
  );
}


function Label({ x, y, text, delay }: { x: string; y: string; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      style={{ top: y, left: x }}
      className="absolute flex flex-col items-center gap-2 group cursor-default"
    >
      <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(127,231,255,0.8)] transform scale-100 group-hover:scale-150 transition-transform" />
      <span className="text-[9px] text-foreground/20 tracking-[0.4em] uppercase transition-all group-hover:text-primary font-bold translate-y-2">
        {text}
      </span>
    </motion.div>
  );
}


