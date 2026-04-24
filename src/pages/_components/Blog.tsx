import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { articles } from "@/data/articles.ts";

export default function Blog() {
  const posts = articles.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Latest Insights
            </span>
          
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2 leading-tight">
              Neurosurgical Advances <br />
              & Patient Resources
            </h2>
          </div>
          <Button variant="ghost" className="text-primary font-bold tracking-widest uppercase text-[10px] gap-2 hover:bg-primary/5 cursor-pointer" asChild>
            <Link to="/articles">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link
                to={`/articles/${post.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-border">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-4">
                  <span>{post.publishedDate}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-light line-clamp-2 mb-6">
                  {post.excerpt}
                </p>

                <span className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
