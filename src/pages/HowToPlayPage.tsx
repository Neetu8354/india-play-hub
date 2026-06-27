import { Helmet } from "react-helmet-async";
import { UserPlus, Coins, Gamepad2, Award, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    desc: "Sign up quickly via WhatsApp — it takes just seconds. No lengthy forms, just instant access!",
  },
  {
    icon: Coins,
    step: "02",
    title: "Get Welcome Bonus",
    desc: "Receive exciting welcome bonuses when you join BaajiSports. Start playing with bonus credits!",
  },
  {
    icon: Gamepad2,
    step: "03",
    title: "Choose Your Game",
    desc: "Pick from cricket, casino, cards, and 200+ exciting games. Find your favorite and start playing!",
  },
  {
    icon: Award,
    step: "04",
    title: "Play & Win",
    desc: "Compete with players across India and climb the leaderboard! Win rewards and cash prizes!",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "Your data is protected with encrypted technology. Play with confidence!",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    desc: "Withdraw your winnings instantly. No delays, no hassles!",
  },
];

const HowToPlayPage = () => {
  return (
    <>
      <Helmet>
        <title>How to Play | BaajiSports Gaming Guide | Get Started in 4 Steps</title>
        <meta name="description" content="Learn how to play on BaajiSports: Create account, get welcome bonus, choose games, and start winning. Simple 4-step guide to get started with 200+ games." />
        <link rel="canonical" href="https://baajii.live/how-to-play" />
        <meta property="og:title" content="How to Play | BaajiSports Gaming Guide | Get Started in 4 Steps" />
        <meta property="og:description" content="Learn how to play on BaajiSports: Create account, get welcome bonus, choose games, and start winning. Simple 4-step guide to get started with 200+ games." />
        <meta property="og:url" content="https://baajii.live/how-to-play" />
        <meta name="twitter:url" content="https://baajii.live/how-to-play" />
        <meta name="twitter:title" content="How to Play | BaajiSports Gaming Guide | Get Started in 4 Steps" />
        <meta name="twitter:description" content="Learn how to play on BaajiSports: Create account, get welcome bonus, choose games, and start winning. Simple 4-step guide to get started with 200+ games." />
        <meta name="keywords" content="how to play, gaming guide, get started, BaajiSports tutorial, game instructions" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
              🎮 <span className="text-gradient-primary">How to Get Started</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Join BaajiSports in 4 simple steps and start playing 200+ exciting games!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {steps.map((s, i) => (
                <div key={s.step} className="card-game p-6 text-center relative hover:border-primary transition-colors">
                  <span className="absolute top-3 right-4 font-heading text-4xl font-bold text-primary/10">
                    {s.step}
                  </span>
                  <s.icon className="w-10 h-10 text-primary mx-auto mb-4" aria-hidden="true" />
                  <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {s.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary text-xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="card-game p-8 mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                Why Choose BaajiSports?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Game Categories
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🏏 Cricket Games (IPL Fantasy, Predictions, Quiz)</li>
                  <li>🎰 Casino Games (Roulette, Slots, Blackjack)</li>
                  <li>🃏 Card Games (Poker, Teen Patti, Baccarat)</li>
                  <li>🎲 Dice & Luck Games</li>
                  <li>🎯 Traditional Indian Games</li>
                  <li>🏆 Tournament Games</li>
                </ul>
              </div>

              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Getting Help
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions? Our support team is available 24/7 via WhatsApp!
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Account setup assistance</li>
                  <li>✓ Game rules and strategies</li>
                  <li>✓ Bonus and promotion details</li>
                  <li>✓ Withdrawal and payment help</li>
                  <li>✓ Technical support</li>
                </ul>
              </div>
            </div>

            <div className="card-game p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Ready to Start Playing?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join BaajiSports today and unlock 200+ games with exciting bonuses!
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

            <div className="mt-12 card-game p-6 bg-primary/5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                Responsible Gaming
              </h3>
              <p className="text-sm text-muted-foreground">
                BaajiSports promotes responsible gaming. Players must be 18+ years old. Set limits on your spending and play for entertainment. If you need help, contact our support team.
              </p>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default HowToPlayPage;
