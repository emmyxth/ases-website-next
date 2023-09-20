import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Stanford ASES",
  description: "Stanford's premiere entrepreneurship society",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${space_grotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
