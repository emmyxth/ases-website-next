import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Stanford ASES",
  description: "Stanford's premiere entrepreneurship society",
};

export default function RootLayout({ children }) {
  return (
    // <html
    //   lang="en"
    //   className={`${inter.variable.className} ${space_grotesk.variable.className}`}
    // >
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html
      lang="en"
      className={`${inter.variable.className} ${space_grotesk.variable.className}`}
    >
      <body className={`${inter.className} ${space_grotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
