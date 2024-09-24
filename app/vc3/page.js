import TopBar from "@/components/general/Topbar";
import VC3Header from "@/components/vc3/VC3Header";
import VC3About from "@/components/vc3/VC3About";
import VC3Investors from "@/components/vc3/VC3Investors";
import VC3Stories from "@/components/vc3/VC3Stories";
import VC3Apply from "@/components/vc3/VC3Apply";
import Footer from "@/components/general/Footer";

export default function VC3() {
  return (
    <>
      <TopBar />
      <VC3Header />
      <VC3About />
      <VC3Investors />
      <VC3Stories />
      <VC3Apply />
      <Footer />
    </>
  );
}
