import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, Share2 } from "lucide-react";
import { getPostBySlug, getRelatedPosts, blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, post.category);
  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Person", "name": post.author },
    "publisher": {
      "@type": "Organization",
      "name": "BaajiSports",
      "url": "https://baajii.live"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://baajii.live/blog/${post.slug}`
    },
    "keywords": post.tags.join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://baajii.live" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://baajii.live/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://baajii.live/blog/${post.slug}` }
    ]
  };

  // Simple markdown-to-html (headings, bold, italic, lists)
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith('### ')) return <h3 key={i} className="font-heading text-lg font-bold text-foreground mt-6 mb-2">{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith('## ')) return <h2 key={i} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith('- **')) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
        if (match) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1"><strong className="text-foreground">{match[1]}</strong>{match[2] ? `: ${match[2]}` : ''}</li>;
      }
      if (trimmed.startsWith('- ')) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1">{trimmed.slice(2)}</li>;
      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ') || trimmed.startsWith('5. ') || trimmed.startsWith('6. ')) {
        return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1 list-decimal">{trimmed.slice(3)}</li>;
      }
      if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) return <p key={i} className="text-sm text-muted-foreground/80 italic mb-2">{trimmed.slice(1, -1)}</p>;
      
      // Handle bold text within paragraphs
      const parts = trimmed.split(/\*\*(.+?)\*\*/g);
      if (parts.length > 1) {
        return (
          <p key={i} className="text-sm text-muted-foreground mb-2 leading-relaxed">
            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part)}
          </p>
        );
      }
      
      return <p key={i} className="text-sm text-muted-foreground mb-2 leading-relaxed">{trimmed}</p>;
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://baajii.live/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://baajii.live/blog/${post.slug}`} />
        <meta name="twitter:url" content={`https://baajii.live/blog/${post.slug}`} />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb */}
        <div className="pt-20 pb-4">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="pb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>By {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </header>

            {/* Content */}
            <div className="card-game p-5 sm:p-8 mb-8">
              {renderContent(post.content)}
            </div>

            {/* CTA */}
            <div className="card-game p-6 text-center mb-8 border-primary/30">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Ready to Play?</h3>
              <p className="text-sm text-muted-foreground mb-4">Join BaajiSports today and start your gaming journey!</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-sm inline-block">
                Join BaajiSports Now →
              </a>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-4 mb-12">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="card-game p-4 flex-1 group">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <ArrowLeft className="w-3 h-3" /> Previous
                  </div>
                  <p className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{prevPost.title}</p>
                </Link>
              ) : <div className="flex-1" />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="card-game p-4 flex-1 text-right group">
                  <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-1">
                    Next <ArrowRight className="w-3 h-3" />
                  </div>
                  <p className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{nextPost.title}</p>
                </Link>
              ) : <div className="flex-1" />}
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <section>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map(rp => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="card-game p-4 group">
                      <div className="text-2xl mb-2">{rp.image}</div>
                      <h4 className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">{rp.title}</h4>
                      <p className="text-[10px] text-muted-foreground">{rp.readTime}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default BlogPost;
