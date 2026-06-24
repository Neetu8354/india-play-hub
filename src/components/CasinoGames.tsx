import { Link } from "react-router-dom";
import casinoRoulette from "@/assets/casino-roulette.jpg";
import casinoSlots from "@/assets/casino-slots.jpg";
import casinoCards from "@/assets/casino-cards.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const games = [
  {
    image: casinoRoulette,
    title: "Roulette",
    desc: "Spin the wheel and test your luck with exciting rewards!",
    tag: "🔥 Trending",
    alt: "Online Roulette game on BaajiSports - spin the wheel and win exciting rewards",
    blogLink: "/blog/roulette-guide-strategies-indian-players",
  },
  {
    image: casinoSlots,
    title: "Lucky Slots",
    desc: "Hit the jackpot on our exciting slot machines and win big!",
    tag: "⭐ Popular",
    alt: "Online Lucky Slots game on BaajiSports - hit the jackpot with exciting slot machines",
    blogLink: "/blog/online-slots-guide-types-strategies",
  },
  {
    image: casinoCards,
    title: "Blackjack",
    desc: "Classic card game. Beat the dealer to 21 and win rewards!",
    tag: "🃏 Classic",
    alt: "Online Blackjack card game on BaajiSports - beat the dealer and win big",
    blogLink: "/blog/how-to-play-blackjack-online-india",
  },
];

const moreGames = [
  { name: "Baccarat", icon: "🎴" },
  { name: "Poker", icon: "♠️" },
  { name: "Dice Roll", icon: "🎲" },
  { name: "Ludo King", icon: "🎯" },
  { name: "Teen Patti", icon: "🃏" },
  { name: "Andar Bahar", icon: "🎰" },
];

const CasinoGames = () => {
  return (
    <section id="casino" className="py-16 section-gradient" aria-label="Casino games section">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-2">
          🎰 <span className="text-gradient-gold">Casino Games</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Premium casino games with exciting bonuses. <Link to="/blog/best-online-casino-games-india-2026" className="text-primary hover:underline">Read our casino guide →</Link>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {games.map((game) => (
            <a
              key={game.title}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="card-game group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute top-3 left-3">
                  <span className="promo-badge">{game.tag}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {game.title}
                </h3>
                <p className="text-xs text-muted-foreground">{game.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <h3 className="font-heading text-xl font-bold text-center mb-6">
          More Games
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {moreGames.map((game) => (
            <a
              key={game.name}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="card-game p-4 text-center group"
            >
              <span className="text-3xl block mb-2" aria-hidden="true">{game.icon}</span>
              <span className="font-heading text-sm font-semibold text-foreground">
                {game.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoGames;
