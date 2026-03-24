"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Zap,
  Users,
  Wifi,
  Car,
  Baby,
  MapPin,
  Phone,
  MessageCircle,
  Image as ImageIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const damenServices = [
    {
      icon: Scissors,
      title: "Damenhaarschnitt",
      description: "Professionelle Schnitte für jeden Stil",
    },
    {
      icon: Sparkles,
      title: "Styling",
      description: "Perfektes Styling für jeden Anlass",
    },
    {
      icon: Zap,
      title: "Färben & Strähnchen",
      description: "Moderne Farbtechniken",
    },
  ];

  const herrenServices = [
    {
      icon: Scissors,
      title: "Herrenhaarschnitt",
      description: "Klassisch oder modern – Ihr Wunsch",
    },
    {
      icon: Zap,
      title: "Bart-Styling",
      description: "Präzise Bartpflege und -formung",
    },
    {
      icon: Sparkles,
      title: "Komplettservice",
      description: "Haarschnitt und Bart in einem",
    },
  ];

  const reviews = [
    {
      name: "Anonymous",
      text: "Sehr guter Service und freundliche Atmosphäre. Komme gerne wieder!",
    },
    {
      name: "Val Pal",
      text: "Perfekter Haarschnitt, genau wie ich es wollte. Sehr professionell und sauber.",
    },
    {
      name: "Carsten Frauendorf",
      text: "Toller Salon mit moderner Einrichtung. Das Team ist super nett und kompetent.",
    },
    {
      name: "Manfred Hildenbrand",
      text: "Bin seit Jahren Stammkunde. Immer zufrieden mit dem Ergebnis und der Beratung.",
    },
    {
      name: "Yannick Birk",
      text: "Faire Preise und top Qualität. Kann ich nur weiterempfehlen!",
    },
  ];

  const features = [
    {
      icon: Baby,
      title: "Kinderfreundlich",
      description: "Spezielle Angebote für die Kleinen",
    },
    {
      icon: Car,
      title: "Kostenlose Parkplätze",
      description: "Bequemes Parken direkt vor Ort",
    },
    {
      icon: Wifi,
      title: "Gratis WLAN",
      description: "Kostenloses Internet während Ihres Besuchs",
    },
    {
      icon: Users,
      title: "Für Damen & Herren",
      description: "Professionelle Services für alle",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582483720544-4068701c073d"
            alt="Moderner Friseursalon Innenraum"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">
              Moderne Haarschnitte
              <br />
              in Willstätt
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ihr Friseursalon für professionelle Schnitte, entspannte
              Atmosphäre und erstklassigen Service
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6 shadow-lg"
            >
              <a href="#contact">Termin Buchen</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Unsere Dienstleistungen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionelle Friseurservices für Damen und Herren
            </p>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-center mb-8 text-primary">Damen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {damenServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center mb-8 text-primary">Herren</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {herrenServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Galerie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Einblicke in unsere Arbeit und aktuelle Styling-Trends
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <ImageIcon className="w-4 h-4" />
              Placeholder images - Real photos will be added soon
            </div>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-center mb-8 text-primary">Herrenfrisuren</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={`herren-${item}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-brown hover:shadow-brown-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900">
                    <ImageIcon className="w-12 h-12 text-zinc-400 dark:text-zinc-600 mb-4" />
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium text-lg">
                      Herrenfrisur {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center mb-8 text-primary">Damenfrisuren</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={`damen-${item}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-brown hover:shadow-brown-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900">
                    <ImageIcon className="w-12 h-12 text-zinc-400 dark:text-zinc-600 mb-4" />
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium text-lg">
                      Damenfrisur {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Preise</h2>
            <p className="text-lg text-muted-foreground text-center">
              Faire und transparente Preisgestaltung
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-brown-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Scissors className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">
                      Normaler Herrenhaarschnitt
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Professioneller Schnitt inkl. Waschen
                    </p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary">18 €</div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Weitere Preise auf Anfrage. Kontaktieren Sie uns für individuelle
                Angebote.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Über Uns</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Willkommen bei Männer & Frauen Friseur in Willstätt. Unser
              moderner Salon bietet professionelle Friseurdienstleistungen in
              entspannter Atmosphäre. Wir legen Wert auf Qualität, Sauberkeit
              und individuelle Beratung.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-brown text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Kundenbewertungen</h2>
            <p className="text-lg text-muted-foreground">
              Was unsere Kunden über uns sagen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Kontakt</h2>
            <p className="text-lg text-muted-foreground">
              Vereinbaren Sie Ihren Termin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-brown-lg"
            >
              <h3 className="text-xl font-semibold mb-6">Besuchen Sie uns</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      Obere Landstraße 8
                      <br />
                      Sand, Willstätt
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a
                      href="tel:+015213722372"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      +015213722372
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-brown-lg"
            >
              <h3 className="text-xl font-semibold mb-6">Termin buchen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2">Per Direktnachricht</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schreiben Sie uns eine Nachricht auf TikTok für Ihren
                      Wunschtermin
                    </p>
                    <Button
                      asChild
                      className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] w-full"
                    >
                      <a
                        href="https://www.tiktok.com/@Reib.23"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nachricht senden
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
