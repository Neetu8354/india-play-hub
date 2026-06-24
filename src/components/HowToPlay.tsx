import { UserPlus, Coins, Gamepad2, Award } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    desc: "Sign up quickly via WhatsApp — it takes just seconds.",
  },
  {
    icon: Coins,
    step: "02",
    title: "Get Welcome Bonus",
    desc: "Receive exciting welcome bonuses when you join BaajiSports.",
  },
  {
    icon: Gamepad2,
    step: "03",
    title: "Choose Your Game",
    desc: "Pick from cricket, casino, cards, and 200+ exciting games.",
  },
  {
    icon: Award,
    step: "04",
    title: "Play & Win",
    desc: "Compete with players across India and climb the leaderboard!",
  },
];

const HowToPlay = () => {
  return (
    <section id="howtoplay" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-2">
          🎮 <span className="text-gradient-primary">How to Get Started</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Join BaajiSports in 4 simple steps
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="card-game p-6 text-center relative">
              <span className="absolute top-3 right-4 font-heading text-4xl font-bold text-primary/10">
                {s.step}
              </span>
              <s.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 text-primary text-xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-base inline-block">
            Join BaajiSports Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
