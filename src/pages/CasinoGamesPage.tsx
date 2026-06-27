import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import casinoRoulette from "@/assets/casino-roulette.jpg";
import casinoSlots from "@/assets/casino-slots.jpg";
import casinoCards from "@/assets/casino-cards.jpg";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const games = [
  {
    image: casinoRoulette,
    title: "Roulette",
    desc: "Spin the wheel and test your luck with exciting rewards! Classic casino game with multiple betting options.",
    tag: "🔥 Trending",
    alt: "Online Roulette game on BaajiSports - spin the wheel and win exciting rewards",
    blogLink: "/blog/roulette-guide-strategies-indian-players",
  },
  {
    image: casinoSlots,
    title: "Lucky Slots",
    desc: "Hit the jackpot on our exciting slot machines and win big! Multiple themes and bonus rounds.",
    tag: "⭐ Popular",
    alt: "Online Lucky Slots game on BaajiSports - hit the jackpot with exciting slot machines",
    blogLink: "/blog/online-slots-guide-types-strategies",
  },
  {
    image: casinoCards,
    title: "Blackjack",
    desc: "Classic card game. Beat the dealer to 21 and win rewards! Strategic gameplay with instant payouts.",
    tag: "🃏 Classic",
    alt: "Online Blackjack card game on BaajiSports - beat the dealer and win big",
    blogLink: "/blog/how-to-play-blackjack-online-india",
  },
];

const moreGames = [
  { name: "Baccarat", icon: "🎴", desc: "Card game of chance" },
  { name: "Poker", icon: "♠️", desc: "Strategic card game" },
  { name: "Dice Roll", icon: "🎲", desc: "Quick luck game" },
  { name: "Ludo King", icon: "🎯", desc: "Classic board game" },
  { name: "Teen Patti", icon: "🃏", desc: "Indian card game" },
  { name: "Andar Bahar", icon: "🎰", desc: "Traditional game" },
];

const CasinoGamesPage = () => {
  return (
    <>
      <Helmet>
        <title>Online Casino Games | Roulette, Slots, Blackjack & More | BaajiSports</title>
        <meta name="description" content="Play online casino games on BaajiSports: Roulette, Lucky Slots, Blackjack, Baccarat, Poker, Teen Patti, Andar Bahar. Premium games with exciting bonuses and instant payouts." />
        <link rel="canonical" href="https://baajii.live/casino-games" />
        <meta property="og:title" content="Online Casino Games | Roulette, Slots, Blackjack & More | BaajiSports" />
        <meta property="og:description" content="Play online casino games on BaajiSports: Roulette, Lucky Slots, Blackjack, Baccarat, Poker, Teen Patti, Andar Bahar. Premium games with exciting bonuses and instant payouts." />
        <meta property="og:url" content="https://baajii.live/casino-games" />
        <meta name="twitter:url" content="https://baajii.live/casino-games" />
        <meta name="twitter:title" content="Online Casino Games | Roulette, Slots, Blackjack & More | BaajiSports" />
        <meta name="twitter:description" content="Play online casino games on BaajiSports: Roulette, Lucky Slots, Blackjack, Baccarat, Poker, Teen Patti, Andar Bahar. Premium games with exciting bonuses and instant payouts." />
        <meta name="keywords" content="online casino games, roulette, slots, blackjack, poker, teen patti, andar bahar, casino games India" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
              🎰 <span className="text-gradient-gold">Casino Games</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Premium casino games with exciting bonuses. Play Roulette, Slots, Blackjack, and 200+ more games with instant payouts!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {games.map((game) => (
                <a
                  key={game.title}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-game group hover:border-primary transition-colors overflow-hidden"
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
                    <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {game.title}
                    </h2>
                    <p className="text-xs text-muted-foreground mb-3">{game.desc}</p>
                    <Link to={game.blogLink} className="text-primary text-xs hover:underline">
                      Read guide →
                    </Link>
                  </div>
                </a>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-center mb-6">
                More Casino Games
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {moreGames.map((game) => (
                  <a
                    key={game.name}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-game p-4 text-center group hover:border-primary transition-colors"
                  >
                    <span className="text-3xl block mb-2" aria-hidden="true">{game.icon}</span>
                    <span className="font-heading text-sm font-semibold text-foreground block mb-1">
                      {game.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{game.desc}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-game p-8 text-center mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Ready to Play Casino Games?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join BaajiSports today and enjoy premium casino games with exciting bonuses!
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
                  Why Casino Games on BaajiSports?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ 200+ premium casino games</li>
                  <li>✓ Fair and transparent gameplay</li>
                  <li>✓ Instant payouts and withdrawals</li>
                  <li>✓ Exciting welcome bonuses</li>
                  <li>✓ Daily rewards and promotions</li>
                  <li>✓ 24/7 customer support</li>
                </ul>
              </div>

              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Casino Game Categories
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>🎰 Slot Games</li>
                  <li>🎲 Dice & Luck Games</li>
                  <li>🃏 Card Games (Poker, Baccarat, Blackjack)</li>
                  <li>🎡 Roulette & Wheel Games</li>
                  <li>🎯 Traditional Indian Games</li>
                  <li>🏆 Tournament Games</li>
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

export default CasinoGamesPage;
