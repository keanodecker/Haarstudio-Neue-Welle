"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Unsere Dienstleistungen" },
    { href: "#about", label: "Über Uns" },
    { href: "#pricing", label: "Preise" },
    { href: "#gallery", label: "Galerie" },
    { href: "#contact", label: "Kontakt" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-brown"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2"
          >
            <span
              className="text-2xl font-bold text-primary drop-shadow-md"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Haarstudio Neue Welle
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white hover:text-primary transition-colors duration-200 drop-shadow-md"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.tiktok.com/@Reib.23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200 drop-shadow-md"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-lg"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Termin Buchen
              </a>
            </Button>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="w-6 h-6 drop-shadow-md" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-zinc-950 border-zinc-800"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-white hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://www.tiktok.com/@Reib.23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-medium text-white hover:text-primary transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  TikTok
                </a>
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] w-full mt-4"
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                  >
                    Termin Buchen
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
