import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PromoSlider from "@/components/PromoSlider";
import CricketGames from "@/components/CricketGames";
import CasinoGames from "@/components/CasinoGames";
import HowToPlay from "@/components/HowToPlay";
import InfoSection from "@/components/InfoSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BaajiSports – Best Online Sports &amp; Casino Gaming Platform in India</title>
        <meta name="description" content="Play 200+ cricket, casino, slots & card games on BaajiSports. India's #1 trusted gaming platform with IPL fantasy, Teen Patti, Roulette. Join now!" />
        <link rel="canonical" href="https://baajii.live/" />
        <meta property="og:url" content="https://baajii.live/" />
        <meta name="twitter:url" content="https://baajii.live/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <PromoSlider />
          <CricketGames />
          <CasinoGames />
          <HowToPlay />
          <InfoSection />
          <BlogPreview />
          <FAQSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
