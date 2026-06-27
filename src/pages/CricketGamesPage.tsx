import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Trophy, Users, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import cricketFantasy from "@/assets/cricket-fantasy.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const cricketGames = [
  {
    icon: Trophy,
    title: "IPL Fantasy League",
    desc: "Build your dream IPL team and compete for the top of the leaderboard! Select your captain, vice-captain, and 9 other players to maximize your points.",
    tag: "Popular",
    blogLink: "/blog/ipl-fantasy-cricket-tips-2026",
  },
  {
    icon: Target,
    title: "Cricket Quiz Challenge",
    desc: "Test your cricket knowledge and earn rewards with every correct answer. Answer trivia about cricket history, players, and match statistics.",
    tag: "New",
    blogLink: "/blog/cricket-match-prediction-strategies",
  },
  {
    icon: Users,
    title: "Match Predictions",
    desc: "Predict match outcomes, player performances, and win exciting rewards. Forecast runs, wickets, and match winners with expert analysis.",
    tag: "Live",
    blogLink: "/blog/cricket-match-prediction-strategies",
  },
  {
    icon: Zap,
    title: "Super Over Challenge",
    desc: "Quick-fire cricket game — score the most in 6 balls to win big! Fast-paced gameplay with instant results and daily tournaments.",
    tag: "Hot",
    blogLink: "/blog/cricket-gaming-platforms-india-comparison",
  },
];

const CricketGamesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cricket Games Online | IPL Fantasy, Quiz & Predictions | BaajiSports</title>
        <meta name="description" content="Play cricket games on BaajiSports: IPL Fantasy League, Cricket Quiz, Match Predictions, Super Over Challenge. Build teams, win rewards, compete with players across India." />
        <link rel="canonical" href="https://baajii.live/cricket-games" />
        <meta property="og:title" content="Cricket Games Online | IPL Fantasy, Quiz & Predictions | BaajiSports" />
        <meta property="og:description" content="Play cricket games on BaajiSports: IPL Fantasy League, Cricket Quiz, Match Predictions, Super Over Challenge. Build teams, win rewards, compete with players across India." />
        <meta property="og:url" content="https://baajii.live/cricket-games" />
        <meta name="twitter:url" content="https://baajii.live/cricket-games" />
        <meta name="twitter:title" content="Cricket Games Online | IPL Fantasy, Quiz & Predictions | BaajiSports" />
        <meta name="twitter:description" content="Play cricket games on BaajiSports: IPL Fantasy League, Cricket Quiz, Match Predictions, Super Over Challenge. Build teams, win rewards, compete with players across India." />
        <meta name="keywords" content="cricket games online, IPL fantasy league, cricket quiz, match predictions, online cricket games India" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
              🏏 <span className="text-gradient-primary">Cricket Games</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Play exciting cricket fantasy games and compete with players across India. Master IPL fantasy, predict match outcomes, and win big rewards!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cricketGames.map((game) => (
                  <a
                    key={game.title}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-game p-5 group hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <game.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                      <span className="promo-badge text-[10px]">{game.tag}</span>
                    </div>
                    <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {game.title}
                    </h2>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {game.desc}
                    </p>
                    <Link to={game.blogLink} className="text-primary text-xs hover:underline">
                      Read tips →
                    </Link>
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

            <div className="card-game p-8 text-center mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Ready to Play Cricket Games?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join BaajiSports today and start earning rewards with every game you play!
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Why Cricket Games on BaajiSports?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 200+ cricket games to choose from</li>
                  <li>✓ Real-time leaderboards and rankings</li>
                  <li>✓ Daily tournaments with cash rewards</li>
                  <li>✓ Expert tips and strategies in our blog</li>
                  <li>✓ Instant payouts and bonuses</li>
                  <li>✓ 24/7 WhatsApp support</li>
                </ul>
              </div>

              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Popular Cricket Games
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🏏 IPL Fantasy League</li>
                  <li>🎯 Cricket Quiz Challenge</li>
                  <li>📊 Match Predictions</li>
                  <li>⚡ Super Over Challenge</li>
                  <li>🏆 T20 Fantasy Leagues</li>
                  <li>🎲 Cricket Dice Games</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default CricketGamesPage;
