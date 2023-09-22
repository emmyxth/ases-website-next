import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/general/Footer";
import Hero from "@/components/home/Hero";
import Since1988 from "@/components/home/Since1988.js";
import Testimonials from "@/components/home/Testimonials.js";
import Timeline from "@/components/home/Timeline.js";
import FAQs from "@/components/home/FAQSection.jsx";
// import SponsorsBanner from "@/components/homeSponsorsBanner.js";
import TopBar from "@/components/general/Topbar";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stanford ASES</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box>
        <TopBar />
        <Hero />
        <Since1988 />
        <Testimonials />
        <Timeline />
        <FAQs />
        {/* <SponsorsBanner /> */}
        <Footer />
      </Box>
    </>
  );
}
