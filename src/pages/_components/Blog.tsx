import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

import { articles } from "@/data/articles.ts";

export default function Blog() {
  const posts = articles.slice(0, 3);

  return (
    <section id="blog" className="section-space bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-sky-600 text-sm font-semibold tracking-widest uppercase">
              Knowledge Hub
            </span>
          
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mt-2">
              From the Doctor&apos;s Desk
            </h2>
          </div>
          <Link
            to="/articles"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold hover:gap-2.5 transition-all cursor-pointer"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link
              key={post.id}
              to={`/articles/${post.id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="block outline-none"
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-sky-900/8 transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
              >
                {/* Image */}
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-sky-600 bg-sky-500/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground text-base leading-snug mb-3 group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="flex items-center gap-1.5 text-sky-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
