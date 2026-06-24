import heroBanner from "@/assets/hero-cricket-banner.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="BaajiSports - India's best online cricket and casino gaming platform with IPL fantasy, Teen Patti, Roulette and 200+ games"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-xl">
          <span className="promo-badge inline-block mb-4">🏏 India's Trusted Platform</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Best Online{" "}
            <span className="text-gradient-primary">Sports & Casino</span>{" "}
            Gaming Platform in India
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
            Play IPL fantasy cricket, Teen Patti, Roulette, Blackjack, Andar Bahar, slots & 200+ games.
            Join BaajiSports today and experience the thrill with exciting bonuses and promotions!
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-center text-base">
              🏏 Join Now
            </a>
            <a href="#cricket" className="btn-gold text-center text-base">
              🎰 Explore Games
            </a>
          </div>
          <div className="flex items-center gap-6 mt-8" aria-label="Platform statistics">
            <div>
              <p className="font-heading text-2xl font-bold text-gradient-gold">50,000+</p>
              <p className="text-xs text-muted-foreground">Active Players</p>
            </div>
            <div className="w-px h-10 bg-border" aria-hidden="true" />
            <div>
              <p className="font-heading text-2xl font-bold text-gradient-gold">200+</p>
              <p className="text-xs text-muted-foreground">Games</p>
            </div>
            <div className="w-px h-10 bg-border" aria-hidden="true" />
            <div>
              <p className="font-heading text-2xl font-bold text-gradient-gold">24/7</p>
              <p className="text-xs text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
