import { Space_Grotesk, Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
const space_grotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
