import { Shield, Smartphone, Clock, Gift, IndianRupee, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Shield, title: "Safe & Secure", desc: "Your data and transactions are fully protected with encrypted technology." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Play on any device — phone, tablet, or desktop seamlessly." },
  { icon: Clock, title: "24/7 Available", desc: "Games are always online. Play anytime, anywhere you want." },
  { icon: Gift, title: "Exciting Bonuses", desc: "Welcome bonuses, daily rewards, and IPL season promotions." },
  { icon: IndianRupee, title: "Made for India", desc: "Designed for Indian gamers with INR support and Hindi language." },
  { icon: Headphones, title: "WhatsApp Support", desc: "Instant help via WhatsApp — always just a message away." },
];

const InfoSection = () => {
  return (
    <section className="py-16 section-gradient" aria-label="Why choose BaajiSports">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-10">
          ✨ <span className="text-gradient-primary">Why Choose BaajiSports?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {features.map((f) => (
            <div key={f.title} className="card-game p-5 flex gap-4 items-start">
              <div className="bg-primary/10 rounded-lg p-3 shrink-0">
                <f.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEO-rich content block */}
        <div className="card-game p-6 max-w-3xl mx-auto">
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">About BaajiSports — India's Premier Gaming Platform</h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            BaajiSports is India's trusted online sports and casino gaming platform offering 200+ exciting games including IPL Fantasy Cricket, 
            Teen Patti, Roulette, Blackjack, Andar Bahar, Lucky Slots, Poker, Baccarat, and many more. Whether you love cricket or casino games, 
            BaajiSports has something for every Indian gamer.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Our platform is designed specifically for Indian players with INR currency support, Hindi language option, and 24/7 WhatsApp customer support. 
            We offer exciting welcome bonuses, daily login rewards, referral bonuses, and seasonal promotions during IPL and other major cricket events.
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Join thousands of active players across India on BaajiSports. Read our{" "}
            <Link to="/blog" className="text-primary hover:underline">gaming blog</Link>{" "}
            for expert tips, strategies, and guides on cricket fantasy, casino games, and responsible gaming practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
