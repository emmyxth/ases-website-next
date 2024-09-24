import TopBar from "@/components/general/Topbar";
import LaunchpadHeader from "@/components/launchpad/LaunchpadHeader";
import LaunchpadAbout from "@/components/launchpad/LaunchpadAbout";
import LaunchpadDetails from "@/components/launchpad/LaunchpadDetails";
import LaunchpadProgram from "@/components/launchpad/LaunchpadProgram";
import LaunchpadFAQ from "@/components/launchpad/LaunchpadFAQ";
import Footer from "@/components/general/Footer";

export default function Launchpad() {
  return (
    <>
      <TopBar />
      <LaunchpadHeader />
      <LaunchpadAbout />
      <LaunchpadDetails />
      <LaunchpadProgram />
      <LaunchpadFAQ />
      <Footer />
    </>
  );
}
