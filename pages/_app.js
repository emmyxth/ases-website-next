import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${space.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
