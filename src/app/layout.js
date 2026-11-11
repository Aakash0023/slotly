import { Lilita_One, Manrope } from "next/font/google";
import "./globals.css";

const lilita = Lilita_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Slotly — Delivery, on your terms",
  description:
    "A smarter way to manage deliveries, choose preferred time windows, and track incoming packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lilita.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
