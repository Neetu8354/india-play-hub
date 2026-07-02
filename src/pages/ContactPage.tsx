import { Helmet } from "react-helmet-async";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | BaajiSports Support - 24/7 WhatsApp Help</title>
        <meta name="description" content="Contact BaajiSports for support via WhatsApp, email, or phone. Get instant help with account, payments, games, and technical issues. 24/7 customer support available." />
        <link rel="canonical" href="https://baajii.live/contact" />
        <meta property="og:title" content="Contact Us | BaajiSports Support - 24/7 WhatsApp Help" />
        <meta property="og:description" content="Contact BaajiSports for support via WhatsApp, email, or phone. Get instant help with account, payments, games, and technical issues. 24/7 customer support available." />
        <meta property="og:url" content="https://baajii.live/contact" />
        <meta name="twitter:url" content="https://baajii.live/contact" />
        <meta name="twitter:title" content="Contact Us | BaajiSports Support - 24/7 WhatsApp Help" />
        <meta name="twitter:description" content="Contact BaajiSports for support via WhatsApp, email, or phone. Get instant help with account, payments, games, and technical issues. 24/7 customer support available." />
        <meta name="keywords" content="contact baajisports, customer support, whatsapp support, email support, help center" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
              📞 <span className="text-gradient-primary">Contact Us</span>
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Need help? Our support team is available 24/7 via WhatsApp. Get instant assistance for any questions or issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="card-game p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                  WhatsApp Support
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant help via WhatsApp — always just a message away. Our team responds within minutes.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow text-sm inline-block"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="card-game p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                  Email Support
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us an email for detailed inquiries. We typically respond within 24 hours.
                </p>
                <a
                  href="mailto:support@baajii.live"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  support@baajii.live
                </a>
              </div>

              <div className="card-game p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                  Phone Support
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us for urgent matters. Available during business hours.
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Support Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp Support</p>
                      <p className="text-sm text-muted-foreground">24/7 - Available anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-foreground">Email Support</p>
                      <p className="text-sm text-muted-foreground">24/7 - Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-foreground">Phone Support</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat, 10 AM - 8 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-game p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  How We Can Help
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Account registration and verification</li>
                  <li>✓ Deposit and withdrawal assistance</li>
                  <li>✓ Game rules and gameplay help</li>
                  <li>✓ Bonus and promotion inquiries</li>
                  <li>✓ Technical issues and troubleshooting</li>
                  <li>✓ Responsible gaming support</li>
                  <li>✓ General questions and feedback</li>
                </ul>
              </div>
            </div>

            <div className="card-game p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Need Quick Help?
              </h2>
              <p className="text-muted-foreground mb-6">
                For fastest response, contact us via WhatsApp. Our team is ready to help you 24/7!
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow text-base inline-block"
              >
                Contact via WhatsApp →
              </a>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ContactPage;
