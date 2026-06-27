import { Helmet } from "react-helmet-async";
import { Gift, TrendingUp, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";
import promoWelcome from "@/assets/promo-welcome.jpg";
import promoCricket from "@/assets/promo-cricket.jpg";
import promoDaily from "@/assets/promo-daily.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const promos = [
  {
    icon: Gift,
    title: "Welcome Bonus",
    desc: "Get an exciting welcome bonus when you join BaajiSports! New players receive instant credits to start playing.",
    image: promoWelcome,
    alt: "BaajiSports welcome bonus offer for new players - exciting rewards on signup",
  },
  {
    icon: TrendingUp,
    title: "Cricket Season Special",
    desc: "Double rewards on all cricket games this IPL season! Participate in tournaments and win big during cricket season.",
    image: promoCricket,
    alt: "IPL cricket season special offer on BaajiSports - double rewards on cricket games",
  },
  {
    icon: Calendar,
    title: "Daily Rewards",
    desc: "Login daily and claim exciting bonuses & power-ups! Build your streak and unlock exclusive rewards.",
    image: promoDaily,
    alt: "BaajiSports daily login rewards and bonuses for active players",
  },
  {
    icon: Users,
    title: "Referral Bonuses",
    desc: "Invite friends and earn rewards for every successful referral! Both you and your friend get bonus credits.",
    image: promoWelcome,
    alt: "BaajiSports referral program - earn bonuses by inviting friends",
  },
];

const PromotionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Promotions & Bonuses | Welcome Bonus, Daily Rewards | BaajiSports</title>
        <meta name="description" content="Explore BaajiSports promotions: Welcome Bonus, Cricket Season Special, Daily Rewards, Referral Bonuses. Earn exciting rewards and maximize your gaming experience." />
        <link rel="canonical" href="https://baajii.live/promotions" />
        <meta property="og:title" content="Promotions & Bonuses | Welcome Bonus, Daily Rewards | BaajiSports" />
        <meta property="og:description" content="Explore BaajiSports promotions: Welcome Bonus, Cricket Season Special, Daily Rewards, Referral Bonuses. Earn exciting rewards and maximize your gaming experience." />
        <meta property="og:url" content="https://baajii.live/promotions" />
        <meta name="twitter:url" content="https://baajii.live/promotions" />
        <meta name="twitter:title" content="Promotions & Bonuses | Welcome Bonus, Daily Rewards | BaajiSports" />
        <meta name="twitter:description" content="Explore BaajiSports promotions: Welcome Bonus, Cricket Season Special, Daily Rewards, Referral Bonuses. Earn exciting rewards and maximize your gaming experience." />
        <meta name="keywords" content="promotions, bonuses, welcome bonus, daily rewards, referral bonus, gaming rewards" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
              🎁 <span className="text-gradient-gold">Promotions & Bonuses</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Unlock amazing rewards and bonuses at BaajiSports. From welcome bonuses to daily rewards, maximize your gaming experience!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {promos.map((promo) => (
                <div key={promo.title} className="card-game overflow-hidden hover:border-primary transition-colors">
                  <img
                    src={promo.image}
                    alt={promo.alt}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                    width={800}
                    height={450}
                  />
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <promo.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <h2 className="font-heading text-xl font-bold text-foreground">
                          {promo.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {promo.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-game p-8 mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                How to Claim Your Bonuses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-lg font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Sign Up</h3>
                  <p className="text-xs text-muted-foreground">Create your BaajiSports account via WhatsApp</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-lg font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Get Bonus</h3>
                  <p className="text-xs text-muted-foreground">Receive welcome bonus instantly</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-lg font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Play Games</h3>
                  <p className="text-xs text-muted-foreground">Use bonus to play your favorite games</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-lg font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Withdraw</h3>
                  <p className="text-xs text-muted-foreground">Withdraw your winnings instantly</p>
                </div>
              </div>
            </div>

            <div className="card-game p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Ready to Claim Your Bonuses?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join BaajiSports today and start earning rewards!
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow text-base inline-block"
              >
                Join BaajiSports Now →
              </a>
            </div>

            <FAQSection />
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default PromotionsPage;
