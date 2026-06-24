import { Trophy, Users, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import cricketFantasy from "@/assets/cricket-fantasy.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const cricketGames = [
  {
    icon: Trophy,
    title: "IPL Fantasy League",
    desc: "Build your dream IPL team and compete for the top of the leaderboard!",
    tag: "Popular",
    blogLink: "/blog/ipl-fantasy-cricket-tips-2026",
  },
  {
    icon: Target,
    title: "Cricket Quiz Challenge",
    desc: "Test your cricket knowledge and earn rewards with every correct answer.",
    tag: "New",
    blogLink: "/blog/cricket-match-prediction-strategies",
  },
  {
    icon: Users,
    title: "Match Predictions",
    desc: "Predict match outcomes, player performances, and win exciting rewards.",
    tag: "Live",
    blogLink: "/blog/cricket-match-prediction-strategies",
  },
  {
    icon: Zap,
    title: "Super Over Challenge",
    desc: "Quick-fire cricket game — score the most in 6 balls to win big!",
    tag: "Hot",
    blogLink: "/blog/cricket-gaming-platforms-india-comparison",
  },
];

const CricketGames = () => {
  return (
    <section id="cricket" className="py-16" aria-label="Cricket games section">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-2">
          🏏 <span className="text-gradient-primary">Cricket Games</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Play exciting cricket fantasy games and compete with players across India. <Link to="/blog/ipl-fantasy-cricket-tips-2026" className="text-primary hover:underline">Read our IPL tips →</Link>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cricketGames.map((game) => (
              <a
                key={game.title}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="card-game p-5 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <game.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  <span className="promo-badge text-[10px]">{game.tag}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {game.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {game.desc}
                </p>
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={cricketFantasy}
              alt="IPL Fantasy Cricket League game interface on BaajiSports platform - build your dream cricket team"
              className="rounded-2xl border border-border max-w-sm w-full"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CricketGames;
