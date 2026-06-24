import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const Footer = () => {
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <footer className="bg-card border-t border-border py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-7 h-7 text-primary" />
              <span className="font-heading text-xl font-bold text-gradient-primary">BaajiSports</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              India's trusted sports & casino gaming platform. Play IPL fantasy cricket, Teen Patti, Roulette, Blackjack, Andar Bahar, slots,
              and 200+ games with exciting bonuses and promotions! Join via WhatsApp for instant access.
            </p>
            {/* Internal keyword-rich links for SEO */}
            <div className="flex flex-wrap gap-1.5">
              {["Cricket Games", "Casino Games", "Teen Patti", "Roulette", "Slots", "IPL Fantasy"].map(tag => (
                <span key={tag} className="text-[10px] bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              <a href="/#home" className="text-xs text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="/#cricket" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cricket Games</a>
              <a href="/#casino" className="text-xs text-muted-foreground hover:text-primary transition-colors">Casino Games</a>
              <a href="/#promos" className="text-xs text-muted-foreground hover:text-primary transition-colors">Promotions</a>
              <a href="/#howtoplay" className="text-xs text-muted-foreground hover:text-primary transition-colors">How to Play</a>
              <Link to="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <a href="/#faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Latest Articles</h4>
            <div className="flex flex-col gap-2">
              {latestPosts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="text-xs text-muted-foreground hover:text-primary transition-colors line-clamp-1">
                  {post.title}
                </Link>
              ))}
              <Link to="/blog" className="text-xs text-primary font-medium hover:underline mt-1">View All Articles →</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Support</h4>
            <div className="flex flex-col gap-2">
              <a href="/#faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="/#howtoplay" className="text-xs text-muted-foreground hover:text-primary transition-colors">How to Play</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">WhatsApp Support</a>
              <Link to="/blog/responsible-gaming-tips-bankroll-management" className="text-xs text-muted-foreground hover:text-primary transition-colors">Responsible Gaming</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 BaajiSports. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/50">
            For entertainment purposes only. Must be 18+. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
