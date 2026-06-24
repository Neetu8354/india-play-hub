import { Link } from "react-router-dom";
import { Gamepad2, Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>BaajiSports Blog – Cricket & Casino Gaming Tips, Strategies & News</title>
        <meta name="description" content="Read expert articles on cricket fantasy, casino strategies, Teen Patti tips, Roulette guide, and more. BaajiSports blog for Indian gaming enthusiasts." />
        <link rel="canonical" href="https://baajii.live/blog" />
        <meta property="og:title" content="BaajiSports Blog – Gaming Tips & Strategies" />
        <meta property="og:description" content="Expert articles on cricket fantasy, casino strategies, and gaming tips for Indian players." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baajii.live/blog" />
        <meta name="twitter:title" content="BaajiSports Blog – Gaming Tips & Strategies" />
        <meta name="twitter:description" content="Expert articles on cricket fantasy, casino strategies, and gaming tips for Indian players." />
        <meta name="twitter:url" content="https://baajii.live/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "BaajiSports Blog",
          "description": "Expert gaming tips, strategies, and news for Indian cricket and casino enthusiasts",
          "url": "https://baajii.live/blog",
          "publisher": {
            "@type": "Organization",
            "name": "BaajiSports",
            "url": "https://baajii.live"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": post.author },
            "url": `https://baajii.live/blog/${post.slug}`
          }))
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Breadcrumb */}
        <div className="pt-20 pb-4">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">Blog</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <header className="py-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
              📖 <span className="text-gradient-primary">BaajiSports Blog</span>
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Expert tips, strategies, and guides for cricket fantasy, casino games, and more. Stay ahead with the latest gaming insights.
            </p>
          </div>
        </header>

        {/* Featured Post */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <Link to={`/blog/${blogPosts[0].slug}`} className="card-game p-6 sm:p-8 block group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="text-5xl shrink-0">{blogPosts[0].image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="promo-badge text-[10px]">Featured</span>
                    <span className="text-xs text-muted-foreground">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blogPosts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0 hidden sm:block" />
              </div>
            </Link>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="card-game p-5 group">
                  <div className="text-3xl mb-3">{post.image}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-[10px] text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Blog;
