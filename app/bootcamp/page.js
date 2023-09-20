// import BootcampHeader from "./sections/BootcampHeader";
// import BootcampInfo from "./sections/BootcampInfo";
// import BootcampWhatYoullDo from "./sections/BootcampWhatYoullDo";
// import Footer from "../../components/Footer.js";
// import TopBar from "../../components/TopBar.js";
// import BootcampApply from "./sections/BootcampApply";
import LongButtonWArrowCustomized from "@/components/general/LongButtonWArrow";
import Footer from "@/components/general/Footer";
import Topbar from "@/components/general/Topbar";

export default function Bootcamp() {
  return (
    <>
      <Topbar />
      <h1>hello</h1>
      <LongButtonWArrowCustomized text="hello" />
      <Footer />
      {/* <TopBar />
      <BootcampHeader />
      <BootcampInfo />
      <BootcampWhatYoullDo />
      <BootcampApply />
      <Footer /> */}
    </>
  );
}
