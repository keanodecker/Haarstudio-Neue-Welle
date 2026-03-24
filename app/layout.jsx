import "./globals.css";

export const metadata = {
  title: "Haarstudio Neue Welle - Moderner Friseursalon für Damen & Herren",
  description:
    "Ihr moderner Friseursalon in Willstätt. Professionelle Haarschnitte für Damen und Herren, kinderfreundlich, kostenlose Parkplätze und WLAN. Jetzt Termin buchen!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
