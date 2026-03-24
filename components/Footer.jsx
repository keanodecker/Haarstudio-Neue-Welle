import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span
              className="text-2xl font-bold text-primary mb-4 block"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Männerfriseur
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ihr moderner Friseursalon in Willstätt für Damen und Herren
            </p>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">
              Kontakt
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Obere Landstraße 8
                  <br />
                  Sand, Willstätt
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+015213722372"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +015213722372
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="font-semibold text-foreground mb-4 block">
              Öffnungszeiten
            </span>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>Dienstag–Freitag: 09:00–18:00</p>
                <p>Samstag: 09:00–12:00</p>
                <p className="mt-1 text-xs">Sonntag & Montag: Geschlossen</p>
              </div>
            </div>
            <a
              href="https://www.tiktok.com/@Reib.23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              Folgen Sie uns auf TikTok
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Männerfriseur. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
