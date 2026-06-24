import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import promoWelcome from "@/assets/promo-welcome.jpg";
import promoCricket from "@/assets/promo-cricket.jpg";
import promoDaily from "@/assets/promo-daily.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const promos = [
  {
    image: promoWelcome,
    title: "Welcome Bonus",
    desc: "Get an exciting welcome bonus when you join BaajiSports!",
    alt: "BaajiSports welcome bonus offer for new players - exciting rewards on signup",
  },
  {
    image: promoCricket,
    title: "Cricket Season Special",
    desc: "Double rewards on all cricket games this IPL season!",
    alt: "IPL cricket season special offer on BaajiSports - double rewards on cricket games",
  },
  {
    image: promoDaily,
    title: "Daily Rewards",
    desc: "Login daily and claim exciting bonuses & power-ups!",
    alt: "BaajiSports daily login rewards and bonuses for active players",
  },
];

const PromoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promos" className="py-12 section-gradient" aria-label="Promotions and rewards">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">
          🎁 <span className="text-gradient-gold">Promotions & Rewards</span>
        </h2>

        <div className="relative max-w-4xl mx-auto" role="region" aria-roledescription="carousel" aria-label="Promotional offers">
          <div className="overflow-hidden rounded-2xl">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[2/1]">
                <img
                  src={promos[current].image}
                  alt={promos[current].alt}
                  className="w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                  width={1024}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {promos[current].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {promos[current].desc}
                  </p>
                </div>
              </div>
            </a>
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev - 1 + promos.length) % promos.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur rounded-full p-2 border border-border hover:border-primary transition-colors"
            aria-label="Previous promotion"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % promos.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur rounded-full p-2 border border-border hover:border-primary transition-colors"
            aria-label="Next promotion"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-4" role="tablist">
            {promos.map((p, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-muted"}`}
                aria-label={`Go to slide ${i + 1}: ${p.title}`}
                role="tab"
                aria-selected={i === current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
