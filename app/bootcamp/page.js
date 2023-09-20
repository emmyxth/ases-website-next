import BootcampHeader from "@/components/bootcamp/BootcampHeader";
import BootcampInfo from "@/components/bootcamp/BootcampInfo";
import BootcampWhatYoullDo from "@/components/bootcamp/BootcampWhatYoullDo";
import BootcampApply from "@/components/bootcamp/BootcampApply";
import Footer from "@/components/general/Footer";
import TopBar from "@/components/general/Topbar";

export default function Bootcamp() {
  return (
    <>
      <TopBar />
      <BootcampHeader />
      <BootcampInfo />
      <BootcampWhatYoullDo />
      <BootcampApply />
      <Footer />
    </>
  );
}
