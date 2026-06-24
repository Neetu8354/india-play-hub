import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "BaajiSports kya hai?",
    a: "BaajiSports India ka trusted sports aur casino gaming platform hai jahan aap cricket, casino games, slots, cards aur 200+ games khel sakte hain.",
  },
  {
    q: "BaajiSports par kaise register karein?",
    a: "WhatsApp par humse contact karein aur hum aapko account setup karne mein madad karenge. Process bahut simple hai.",
  },
  {
    q: "Kya games mobile par kaam karte hain?",
    a: "Haan! Saare games mobile, tablet aur desktop — sabhi devices par smoothly kaam karte hain.",
  },
  {
    q: "Welcome bonus kaise milta hai?",
    a: "Sign up karne par exciting welcome bonus milta hai. Plus daily login rewards aur referral bonuses bhi available hain.",
  },
  {
    q: "Kya ye safe hai?",
    a: "100% safe hai. BaajiSports encrypted technology use karta hai aapke data aur transactions ko protect karne ke liye.",
  },
  {
    q: "Customer support kaise milega?",
    a: "Aap WhatsApp par hume 24/7 message kar sakte hain. Humari team turant reply karegi.",
  },
  {
    q: "BaajiSports mein kaunsi games available hain?",
    a: "BaajiSports par IPL Fantasy Cricket, Teen Patti, Roulette, Blackjack, Andar Bahar, Lucky Slots, Poker, Baccarat, Ludo aur 200+ games available hain.",
  },
  {
    q: "Kya BaajiSports India mein legal hai?",
    a: "BaajiSports ek entertainment gaming platform hai. Hum responsible gaming ko promote karte hain. Players ko 18+ hona zaroori hai.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16" aria-label="Frequently asked questions">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl font-bold text-center mb-2">
          ❓ <span className="text-gradient-primary">Frequently Asked Questions</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Have questions? Find answers here or <Link to="/blog" className="text-primary hover:underline">read our blog</Link> for detailed guides.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-game border border-border px-5"
            >
              <AccordionTrigger className="font-heading text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
