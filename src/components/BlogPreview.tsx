import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPreview = () => {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-16" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-2">
          📖 <span className="text-gradient-primary">Latest from Blog</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Expert gaming tips, strategies, and guides
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featured.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="card-game p-5 group">
              <div className="text-3xl mb-3">{post.image}</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Clock className="w-3 h-3" />{post.readTime}</span>
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="btn-primary-glow text-sm inline-flex items-center gap-2">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
