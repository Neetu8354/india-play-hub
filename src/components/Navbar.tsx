import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Gamepad2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const navItems = [
  { label: "Home", href: "#home", isAnchor: true },
  { label: "Cricket Games", href: "#cricket", isAnchor: true },
  { label: "Casino Games", href: "#casino", isAnchor: true },
  { label: "Promotions", href: "#promos", isAnchor: true },
  { label: "Blog", href: "/blog", isAnchor: false },
  { label: "FAQ", href: "#faq", isAnchor: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="BaajiSports Home">
          <Gamepad2 className="w-8 h-8 text-primary" />
          <span className="font-heading text-2xl font-bold text-gradient-primary">
            BaajiSports
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.isAnchor ? (
              <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-sm">
            Join Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((item) =>
              item.isAnchor ? (
                <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
                  {item.label}
                </Link>
              )
            )}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-sm text-center mt-2">
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
